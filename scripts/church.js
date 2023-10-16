import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
import GeneralObject from "./generalobject.js";
import Stack from "./stack.js";
import { centerizeX, centerizeY } from "./utils.js";
 
class Map extends GeneralObject {
    keyStack = new Stack() ;
    movements = {
        "ArrowUp": "north",
        "ArrowDown": "south",
        "ArrowLeft": "west",
        "ArrowRight": "east"
    } ;

    initialStartX = 0 ;
    initialStartY = 0 ;
    initialEndX = 0 ;
    initialEndY = 0 ;

    constructor(mapObj) {
        super(mapObj.gameObj, 5) ;
        this.canvas = mapObj.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.initialStartX = mapObj.x || 0 ;
        this.initialStartY = mapObj.y || 0 ;
    }

    createChurch() {
        this.sprite.onload = () => { 
            this.setHeight(this.sprite.height) ;
            this.setWidth(this.sprite.width) ;
            this.initialEndX = this.getWidth() ;
            this.initialEndY = this.getHeight() ;
            this.#startTime() ;
        }
        this.#populateChurch() ;
    }

    #populateChurch() {
        this.pivot = new Entity(GameObj.mainChar, 3); //pivot sementara
    }

    #startTime = () => {
        this.#handleMovement() ;
        this.#refreshCanvas() ;
        console.log(`${this.pivot.x} and ${this.pivot.y}`);
        console.log(`${this.x} and ${this.y}`) ;
        this.context.drawImage(this.sprite, 
            this.x - this.pivot.x, this.y - this.pivot.y //relatif terhadap MC
        );
        this.#renderAnimation(this.pivot) ;
        requestAnimationFrame(() => this.#startTime()) ;
    }

    #renderAnimation(npc) {
        npc.animate() ;
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

    #handleMovement() { 
        if (!this.assertMovement()) return ;
        if (this.keyStack.isEmpty()) { 
            this.pivot.stopMovements[this.pivot.getDirection()]() ;
            return 
        }
        this.pivot.setDirection(this.keyStack.first) ;
        this.pivot.movements[this.pivot.getDirection()]() ; //sama dengan setAnimation
        this.pivot.move()
    }

    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ; //console.log(`keyUp ${this.keyStack.stack}`) ;
    }

    onKeyDown(key) {
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }//console.log(`KeyDown ${this.keyStack.stack}`) ;
    }

    assertMovement() {
        return 
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