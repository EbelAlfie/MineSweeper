import * as MapObj from "./important/mapdata.js"
import Stack from "./custom/stack.js";
import Map from "./map.js"
import { centerizeX, centerizeY } from "./utils.js";
import Entity from "./abstracted/entity.js";
 
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
    }

    createChurch() {
        this.pivot = this.church.entities[0] ;
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
        Object.values(this.church.entities).forEach(entity => {
            if (entity === this.pivot) this.assertMove(entity) ;
            else {
                this.#render(entity) ;
                this.church.registerArea(entity.x, entity.y, entity) ;
            }
        }) ;
        this.#render(this.pivot) ;
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

    #render(person) {
        if (!person.sprite.isInitialized) return
        const frame = person.sprite.getFrame() ;
        this.context.drawImage(
            person.sprite,
            frame[0], //x
            frame[1], //y top left
            person.getWidth(), person.getHeight(), //crop rect width height 
            centerizeX(person.x, this.canvas.width) - this.pivot.x - 4, 
            centerizeY(person.y, this.canvas.height) - this.pivot.y - 16, //x, y (char pos)
            person.getWidth(), person.getHeight() //request space dest canvas
        ) ; 
    }

    onZpressed() {
        let event = this.church.checkForEvent(this.pivot) ;
        this[event]() ;
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

    gameOver() {
        document.querySelector(".game-over").style.display = block; 
        document.querySelector(".floor").style.display = none ;
    }

    computeX() { return this.canvas.width/2 - this.pivot.x }
    computeY() { return this.canvas.height/2 - this.pivot.y }

    #refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }
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