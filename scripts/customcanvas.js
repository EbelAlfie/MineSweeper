import * as MapObj from "./data/mapdata.js"
import Stack from "./custom/stack.js";
import Map from "./map.js"
import { absoluteX, absoluteY } from "./utils.js";
import LayerManager from "./ObjectLayerManager.js" ;
import MineSweeper from "./MineSweeper.js";
 
//Should manager main char movement and maps
class CustomCanvas {
    keyStack = new Stack() ;
    movements = {
        "ArrowUp": "North",
        "ArrowDown": "South",
        "ArrowLeft": "West",
        "ArrowRight": "East",
    } ;

    constructor(docObj) {
        this.canvas = docObj.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.church = new Map(MapObj.churchObj) ; 
        
        this.pivot = this.church.entities[MapObj.MAIN_CHARACTER] ;
        this.lm = new LayerManager(this.context) ;

        const mineSweeper = new MineSweeper()
        mineSweeper.riggingBomb(this.church)
        
        this.church.sprite.onload = () => { 
            this.church.setHeight(this.church.sprite.height) ;
            this.church.setWidth(this.church.sprite.width) ;
            this.#startTime() ;
        }
    }

    #startTime = () => {
        this.#refreshCanvas() ;
        this.context.drawImage(this.church.sprite, 
            this.computeX(), this.computeY()
        ) ;
        //Bottom Layer

        this.lm.manageObjectOrder(this.church.entities)
            .forEach(entity => {
                if (entity === this.pivot)
                    this.assertMove(entity) ;
                else 
                    this.church.registerArea(entity.x, entity.y, entity) ;
                this.#render(entity) ;
            }) ;

        //Top Layer 
        requestAnimationFrame(() => this.#startTime()) ;
    }

    assertMove(entity) {
        if (this.keyStack.isEmpty()) { 
            entity.stopChar() ;
            return 
        }
        entity.setDirection(this.keyStack.first) ;
        if (this.church.lookFront(entity.x, entity.y, this.keyStack.first, entity.speed))
            return 
        entity.moveChar(this.keyStack.first) ;
    }

    #render(object) {
        if (!object.sprite.isInitialized) return
        const frame = object.sprite.getFrame() ;
        
        this.drawPointPivot(object.hitBox)

        this.drawPointObj(object.hitBox, object)

        this.context.drawImage(
            object.sprite,
            frame[0], //x
            frame[1], //y top left
            object.getWidth(), object.getHeight(), //crop rect width height 
            absoluteX(object.x, this.canvas.width, this.pivot.x),
            absoluteY(object.y, this.canvas.height, this.pivot.y), //x, y (char pos)
            object.getWidth(), object.getHeight() //request space dest canvas
        ) ; 
    }

    onZpressed() {
        let entity = this.church.checkForEvent(this.pivot) ;
        console.log(entity)
        entity.executeEvent() 
    }

    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ; 
    }

    onKeyDown(key) {
        if (key == "z") this.onZpressed() 
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }
    }

    computeX() { return this.canvas.width/2 - this.pivot.x }
    computeY() { return this.canvas.height/2 - this.pivot.y }

    #refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }

    //Helper
    drawPointPivot(coordinates) {
        this.context.fillStyle = "blue"
        
        this.context.fillRect(
            absoluteX(coordinates.topLeft[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.topLeft[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.topRight[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.topRight[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.bottomLeft[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.bottomLeft[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.bottomRight[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.bottomRight[1], this.canvas.height, this.pivot.y),
            2, 1) ;
    }
    drawPointObj(coordinates, object) {
        this.context.fillStyle = "red"
        
        this.context.fillRect(
            absoluteX(coordinates.topLeft[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.topLeft[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.topRight[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.topRight[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.bottomLeft[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.bottomLeft[1], this.canvas.height, this.pivot.y),
            2, 1) ;
        this.context.fillRect(
            absoluteX(coordinates.bottomRight[0], this.canvas.width, this.pivot.x),
            absoluteY(coordinates.bottomRight[1], this.canvas.height, this.pivot.y),
            2, 1) ;
    }
}

export default CustomCanvas

/** Give the power to move diagonally */
    // moveDiagonal() {
    //     if (this.keyStack.isEmpty())  { return } ;
    //     this.keyStack.stack.forEach((value) => {
    //         this.mainChar.movements[value]() ;
    //         this.setDirection(this.keyStack.first) ;
    //         this.move() ; 
    //     }) ;
    // }