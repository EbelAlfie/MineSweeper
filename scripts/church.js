import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
import MoveAble from "./moveable.js";
import Stack from "./stack.js";
 
class Church extends MoveAble {
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
            this.#startTime() 
        }
        this.#populateChurch() ;
    }

    #populateChurch() {
        this.mainChar = new Entity(GameObj.mainChar, 8);
    }

    #startTime = () => {
        this.handlePosition() ;
        this.refreshCanvas() ; 
        this.context.drawImage(this.sprite, 
            this.x, this.y //relatif terhadap MC
        );
        this.mainChar.drawWithAnim(this.context) ;
        requestAnimationFrame(() => this.#startTime()) ;
    }

    handlePosition() { 
        if (this.keyStack.isEmpty()) { 
            this.mainChar.stopMovements[this.mainChar.getDirection()]() ;
            return 
        }
        this.mainChar.movements[this.keyStack.first]() ; //sama dengan setAnimation
        this.setDirection(this.keyStack.first) ;
        this.move() 
    }

    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ; //console.log(`keyUp ${this.keyStack.stack}`) ;
    }

    onKeyDown(key) {
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }//console.log(`KeyDown ${this.keyStack.stack}`) ;
    }

    refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }
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