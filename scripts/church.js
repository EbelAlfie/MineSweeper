import Entity from "./entity.js"
import * as GameObj from "./gameobj.js"
 
class Church {
    isInitialized = false ;
    constructor(church) {
        this.canvas = church.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.map = church.map;
    }

    create() {
        this.#createChurch() ;
        this.#populateChurch() ;
        this.isInitialized = true ;
    }

    #createChurch() {
        let room = new Image();
        room.onload = () => {
            this.context.drawImage(room, 
                0, 0, 300, 200
            ); 
        }
        room.src = this.map ;
    }

    #populateChurch() {
        this.mainChar = new Entity(GameObj.mainChar);
        setTimeout(() => {
            this.mainChar.draw(this.context)
        }, 200) ;
    }

    /** Character movement influenced by arrow key goes here */
    handleKeyPress(key) { 
        if (!this.isInitialized) return ;
        console.log(key) ;
        switch(key) {
            case "ArrowUp":
                this.mainChar.moveNorth() ;
                break;
            case "ArrowDown":
                this.mainChar.moveSouth() ;
                break;
            case "ArrowLeft":
                this.mainChar.moveWest() ;
                break;
            case "ArrowRight":
                this.mainChar.moveEast() ;
                break;
            default: break;
        }
        this.mainChar.draw(this.context) ;
    }
}

export default Church