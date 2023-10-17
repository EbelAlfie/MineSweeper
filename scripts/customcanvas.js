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
        this.church = new Map(MapObj.churchObj) ; 
    }

    createChurch() {
        this.pivot = this.church.entities["main"] ;
        this.church.sprite.onload = () => { 
            this.church.setHeight(this.church.sprite.height) ;
            this.church.setWidth(this.church.sprite.width) ;
            this.#startTime() ;
        }
    }

    #startTime = () => {
        this.#handlePivotMovement() ;
        this.#refreshCanvas() ;
        this.context.drawImage(this.church.sprite, 
            this.computeX(), this.computeY() //relatif terhadap MC
        );
        Object.values(this.church.entities).forEach((entity) => {
            this.#render(entity) ;
        }) ;
        requestAnimationFrame(() => this.#startTime()) ;
    }

    #handlePivotMovement() { 
        if (this.keyStack.isEmpty()) { 
            this.pivot.stopPivot() ;
            return 
        }
        this.pivot.movePivot(this.keyStack.first) ;
    }

    #render(person) {
        person.animateCharacter() ;
        const frame = person.sprite.getFrame() ;
        this.context.drawImage(
            person.sprite,
            frame[0], //x
            frame[1], //y top left
            person.getWidth(), person.getHeight(), //crop rect width height 
            centerizeX(person.x, person.getWidth(), this.canvas.width) - this.pivot.x, 
            centerizeY(person.y, person.getHeight(), this.canvas.height)- this.pivot.y, //x, y (char pos)
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

    computeX() { return this.church.x - this.pivot.x }
    computeY() { return this.church.y - this.pivot.y }

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