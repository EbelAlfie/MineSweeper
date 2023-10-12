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
        super(church.gameObj) ;
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
        this.mainChar = new Entity(GameObj.mainChar);
    }

    #startTime = () => {
        this.handlePosition() ;
        this.refreshCanvas() ;        
        this.context.drawImage(this.sprite, 
            this.x, this.y
        );
        this.mainChar.drawWithAnim(this.context) ;

        requestAnimationFrame(() => this.#startTime()) ;
    }
    
    /** Character movement influenced by arrow key goes here */
    handlePosition() { this.move() }
    
    onKeyUp(key) { 
        const i = this.keyStack.getIndex(this.movements[key]) ;
        this.keyStack.pop(i) ;
        console.log(`keyUp ${this.keyStack.stack}`) ;
    }

    onKeyDown(key) {
        const dir = this.movements[key] ;
        if (dir && !this.keyStack.contains(dir)) { this.keyStack.pushToTop(dir) }
        console.log(`KeyDown ${this.keyStack.stack}`) ;
    }

    /** Move map */
    move() {
        if (this.keyStack.isEmpty()) return ;
        this.keyStack.stack.forEach((value) => {
            const [coord, val] = this.positions[value] ;
            this[coord] += val ;
            this.mainChar.movements[value]() ;
        }) ;
    }

    refreshCanvas() { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height) }
}

export default Church















//switch(key) { //move mapnya? optimize
        //     case "ArrowUp":
        //         if (!this.validateNorthPosition(this.mainChar.y)) return ;
        //         this.mainChar.moveNorth() ;
        //         this.currentY += this.mainChar.step ;
        //         break;
        //     case "ArrowDown":
        //         if (!this.validateSouthPosition(this.mainChar.y)) return ;
        //         this.mainChar.moveSouth() ;
        //         this.currentY -= this.mainChar.step;
        //         break;
        //     case "ArrowLeft":
        //         if (!this.validateWestPosition(this.mainChar.x)) return ;
        //         this.mainChar.moveWest() ;
        //         this.currentX += this.mainChar.step;
        //         break;
        //     case "ArrowRight":
        //         if (!this.validateEastPosition(this.mainChar.x)) return ;
        //         this.mainChar.moveEast() ;
        //         this.currentX -= this.mainChar.step ;
        //         break ;
        //     default: break;
        // }        