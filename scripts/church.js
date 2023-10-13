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
        this.#populateChurch() ;
        //this.#startTime() ;
    }

    #populateChurch() {
        this.sprite.onload = () => { this.#startTime() }
        this.height = this.sprite.height ;
        this.width = this.sprite.width ;
        this.mainChar = new Entity(GameObj.mainChar, 8);
    }

    #startTime = () => {
        this.handlePosition() ;
        this.refreshCanvas() ; 
        
        //const mc = this.mainChar ;  

        this.context.drawImage(this.sprite, 
            this.x, this.y //relatif terhadap MC
        );
        this.mainChar.drawWithAnim(this.context) ;

        requestAnimationFrame(() => this.#startTime()) ;
    }
    
    /** Character movement influenced by arrow key goes here */
    handlePosition() { 
        if (this.keyStack.isEmpty()) { 
            //this.mainChar.stopMovements[this.keyStack.first]() ;
            return ;
        }
        this.mainChar.movements[this.keyStack.first]() ;
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

    /** Move map */
    // move() {
    //     if (this.keyStack.isEmpty()) { 
    //         //this.mainChar.stopMovements[this.keyStack.first]() ;
    //         return ;
    //     }
    //     const [coord, val] = this.positions[this.keyStack.first] ;
    //     this[coord] += val ;
    //     //this.mainChar.setMovement(this.keyStack.first)
    //     this.mainChar.movements[this.keyStack.first]() ;
    // }

    /** Give the power to move diagonally */
    moveDiagonal() {
        if (this.keyStack.isEmpty())  { return } ;
        this.keyStack.stack.forEach((value) => {
            const [coord, val] = this.positions[value] ;
            this[coord] += val ;
            this.mainChar.movements[value]() ;
        }) ;
    }
    refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }
}

export default Church


//diagonal
// this.keyStack.stack.forEach((value, index) => {
            
// }) ;    