import Entity from "./entities/entity.js"
import * as GameObj from "./gameobj.js"
import GeneralObject from "./generalobject.js";
import Stack from "./custom/stack.js";
import { centerizeX, centerizeY } from "./utils.js";
 
class CustomCanvas extends GeneralObject {
    keyStack = new Stack() ;
    movements = {
        "ArrowUp": "North",
        "ArrowDown": "South",
        "ArrowLeft": "West",
        "ArrowRight": "East"
    } ;

    constructor(mapObj) {
        super(mapObj.gameObj, 5) ;
        this.canvas = mapObj.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.walls = mapObj.gameObj.walls ;
    }

    createChurch() {
        this.sprite.onload = () => { 
            this.setHeight(this.sprite.height) ;
            this.setWidth(this.sprite.width) ;
            this.#startTime() ;
        }
        this.#populateChurch() ;
    }

    #populateChurch() {
        this.pivot = new Entity(GameObj.mainChar, 3); //pivot sementara
        this.npc = new Entity(GameObj.akagami, 3) ;
    }

    #startTime = () => {
        this.#handlePivotMovement() ;
        this.#refreshCanvas() ;
        this.context.drawImage(this.sprite, 
            this.x - this.pivot.x, this.y - this.pivot.y //relatif terhadap MC
        );
        this.#renderAnimation(this.pivot) ;
        this.#renderAnimation(this.npc) ;
        requestAnimationFrame(() => this.#startTime()) ;
    }

    #handlePivotMovement() { 
        if (this.keyStack.isEmpty()) { 
            this.stopPivot() ;
            return 
        }
        this.pivot.setDirection(this.keyStack.first) ;
        this.movePivot() ;
    }

    stopPivot() { this.pivot.chooseAnimation(`idle${this.pivot.getDirection()}`) }

    movePivot() {
        this.pivot.chooseAnimation(`walk${this.pivot.getDirection()}`) ;
        this.pivot.move() ;
    }

    #renderAnimation(person) {
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