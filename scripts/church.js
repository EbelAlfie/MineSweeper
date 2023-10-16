import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
import GeneralObject from "./generalobject.js";
import Stack from "./stack.js";
import { centerizeX, centerizeY } from "./utils.js";
 
class Map extends GeneralObject {
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
    }

    #startTime = () => {
        this.#handlePivotMovement() ;
        this.#refreshCanvas() ;
        console.log(`${this.pivot.x} and ${this.pivot.y}`);
        console.log(`${this.x} and ${this.y}`) ;
        this.context.drawImage(this.sprite, 
            this.x - this.pivot.x, this.y - this.pivot.y //relatif terhadap MC
        );
        this.#renderAnimation(this.pivot) ;
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

    stopPivot() {
        this.pivot.chooseAnimation(`idle${this.pivot.getDirection()}`) ;
    }

    movePivot() {
        this.pivot.chooseAnimation(`walk${this.pivot.getDirection()}`) ;
        this.pivot.move() ;
    }

    #renderAnimation(npc) {
        npc.animateCharacter() ;
        const frame = npc.sprite.getFrame() ;
        this.context.drawImage(
            npc.sprite,
            frame[0], //x
            frame[1], //y top left
            npc.getWidth(), npc.getHeight(), //crop rect width height 
            centerizeX(npc.x, this.canvas.width) - this.pivot.x, 
            centerizeY(npc.y, this.canvas.height)- this.pivot.y, //x, y (char pos)
            npc.getWidth(), npc.getHeight() //request space dest canvas
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

export default Map








/** Give the power to move diagonally */
    // moveDiagonal() {
    //     if (this.keyStack.isEmpty())  { return } ;
    //     this.keyStack.stack.forEach((value) => {
    //         this.mainChar.movements[value]() ;
    //         this.setDirection(this.keyStack.first) ;
    //         this.move() ; 
    //     }) ;
    // }