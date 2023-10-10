import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
 
class Church {
    room = new Image() ;
    height = null ;
    width = null ;
    constructor(church) {
        this.canvas = church.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.map = church.map.img ;
        this.height = church.map.height ;
        this.width = church.map.width ;
        this.currentX = -180 ;
        this.currentY = -10 ;
    }

    createChurch() {//console.log(`${this.canvas.width} ${this.canvas.height}`); 
        this.#populateChurch() ;
        this.#startTime() ;
    }

    #populateChurch() {
        this.room.src = this.map ;
        this.mainChar = new Entity(GameObj.mainChar);
        this.mainChar.createSprite() ;
    }

    #startTime() {
        const time = () => {
            this.context.clearRect(0, 0, 400, 400) ;
            this.context.drawImage(this.room, 
                this.currentX, this.currentY
            );
            this.mainChar.draw(this.context) ;

            requestAnimationFrame(() => time()) ;
        }
        time() ;
    }
    
    /** Character movement influenced by arrow key goes here */
    handleKeyPress(key) { 
        switch(key) { //move mapnya?
            case "ArrowUp":
                if (!this.validateNorthPosition(this.mainChar.y)) return ;
                this.mainChar.moveNorth() ;
                this.currentY += this.mainChar.step ;
                break;
            case "ArrowDown":
                if (!this.validateSouthPosition(this.mainChar.y)) return ;
                this.mainChar.moveSouth() ;
                this.currentY -= this.mainChar.step;
                break;
            case "ArrowLeft":
                if (!this.validateWestPosition(this.mainChar.x)) return ;
                this.mainChar.moveWest() ;
                this.currentX += this.mainChar.step;
                break;
            case "ArrowRight":
                if (!this.validateEastPosition(this.mainChar.x)) return ;
                this.mainChar.moveEast() ;
                this.currentX -= this.mainChar.step ;
                break;
            default: break;
        }        
    }

    /** validate char and map relative to top */
    validateNorthPosition(y) { return this.checkNorthPosition(y); }
    /** validate char and map relative to bottom */
    validateSouthPosition(y) { return this.checkSouthPosition(y); }
    /** validate char and map relative to left */
    validateWestPosition(x) { return this.checkWestPosition(x); }
    /** validate char and map relative to right */
    validateEastPosition(x) { return this.checkEastPosition(x); }
    
    /** true if y small than canvas height */
    checkNorthPosition(y) { return y > 40; }
    /** true if y larger than canvas height */
    checkSouthPosition(y) { return y <= this.height; }
    /** true if x smaller than canvas start */
    checkWestPosition(x) { return x > 0; }
    /** true if x larger than canvas start */
    checkEastPosition(x) { return x <= this.width; }
}

export default Church