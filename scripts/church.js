import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
import GeneralObject from "./generalobject.js";
import Stack from "./stack.js";
 
class Church extends GeneralObject {
    keyStack = new Stack() ;
    movements = {
        "ArrowUp": "north",
        "ArrowDown": "south",
        "ArrowLeft": "west",
        "ArrowRight": "east"
    } ;

    constructor(church) {
        super(church.gameObj, 5) ;
        this.canvas = church.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
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
        this.mainChar = new Entity(GameObj.mainChar, 3);
    }

    #startTime = () => {
        this.#handleMovement() ;
        this.#refreshCanvas() ; 
        this.context.drawImage(this.sprite, 
            this.x - this.mainChar.x, this.y - this.mainChar.y //relatif terhadap MC
        );
        this.#renderAnimation(this.mainChar) ;
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
            npc.x + this.canvas.width/2 - this.mainChar.x, npc.y + this.canvas.height/2 - this.mainChar.y, //x, y (char pos)
            npc.getWidth(), npc.getHeight() //request space dest canvas
        ) ; 
    }

    #handleMovement() { 
        if (this.keyStack.isEmpty()) { 
            this.mainChar.stopMovements[this.mainChar.getDirection()]() ;
            return 
        }
        this.mainChar.setDirection(this.keyStack.first) ;
        this.mainChar.movements[this.mainChar.getDirection()]() ; //sama dengan setAnimation
        this.mainChar.move()
    }

    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ; //console.log(`keyUp ${this.keyStack.stack}`) ;
    }

    onKeyDown(key) {
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }//console.log(`KeyDown ${this.keyStack.stack}`) ;
    }

    #refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }
}

export default Church








/** Give the power to move diagonally */
    // moveDiagonal() {
    //     if (this.keyStack.isEmpty())  { return } ;
    //     this.keyStack.stack.forEach((value) => {
    //         this.mainChar.movements[value]() ;
    //         this.setDirection(this.keyStack.first) ;
    //         this.move() ; 
    //     }) ;
    // }