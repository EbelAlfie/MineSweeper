import Entity from "./entities/entity.js"
import * as EntityObj from "./important/chardata.js"
import * as MapObj from "./important/mapdata.js"
import Stack from "./custom/stack.js";
import Map from "./map.js"
import { centerizeX, centerizeY } from "./utils.js";
 
class CustomCanvas {
    keyStack = new Stack() ;
    movements = {
        "ArrowUp": "North",
        "ArrowDown": "South",
        "ArrowLeft": "West",
        "ArrowRight": "East"
    } ;

    constructor(docObj) {
        this.canvas = docObj.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.map = new Map(MapObj.churchObj) ; 
    }

    createChurch() {
        this.map.sprite.onload = () => { 
            this.map.setHeight(this.map.sprite.height) ;
            this.map.setWidth(this.map.sprite.width) ;
            this.#startTime() ;
        }
        this.#populateChurch() ;
    }

    #populateChurch() {
        this.pivot = new Entity(EntityObj.mainChar); //pivot sementara
        this.dragon = new Entity(EntityObj.dragon) ;
    }

    #startTime = () => {
        this.#handlePivotMovement() ;

        this.#refreshCanvas() ;
        this.context.drawImage(this.map.sprite, 
            this.map.x - this.pivot.x, this.map.y - this.pivot.y //relatif terhadap MC
        );
        this.map.executeEvent() ;
        this.#render(this.dragon) ;
        this.#render(this.pivot) ;
        
        requestAnimationFrame(() => this.#startTime()) ;
    }

    #handlePivotMovement() { 
        if (this.keyStack.isEmpty() || !this.pivot.canMove()) { 
            this.stopPivot() ;
            return 
        }
        this.pivot.setDirection(this.keyStack.first) ;
        this.movePivot() ;
    }

    stopPivot() { this.pivot.chooseAnimation("idle") }

    movePivot() {
        this.pivot.chooseAnimation("walk") ;
        this.pivot.move() ;
    }

    #render(person) {
        person.animateCharacter() ;
        const frame = person.sprite.getFrame() ;
        this.context.drawImage(
            person.sprite,
            frame[0], //x
            frame[1], //y top left
            person.getWidth(), person.getHeight(), //crop rect width height 
            centerizeX(person.x, person.width, this.canvas.width) - this.pivot.x, 
            centerizeY(person.y, person.height, this.canvas.height)- this.pivot.y, //x, y (char pos)
            person.getWidth(), person.getHeight() //request space dest canvas
        ) ; 
    }

    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ; 
    }

    onKeyDown(key) {
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }
    }

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