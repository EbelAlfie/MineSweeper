import GeneralObject from "./generalobject.js";
import MoveAble from "./moveable.js";

class Entity extends MoveAble {
    constructor(obj) {
        super(obj) ;
        this.movements = {
            "north": () => { this.sprite.setCurrentAnim("walkNorth") },
            "south": () => { this.sprite.setCurrentAnim("walkSouth") ; },
            "west": () => { this.sprite.setCurrentAnim("walkWest") ; },
            "east": () => { this.sprite.setCurrentAnim("walkEast") ; }
        }
        this.stopMovements = {
            "ArrowUp": () => { this.sprite.setCurrentAnim("idleNorth") },
            "ArrowDown": () => { this.sprite.setCurrentAnim("idleSouth") ; },
            "ArrowLeft": () => { this.sprite.setCurrentAnim("idleWest") ; },
            "ArrowRight": () => { this.sprite.setCurrentAnim("idleEast") ; }
        }
    }

    draw(context) {
        if (this.sprite.animation == null) return ;
        const x = this.x ;
        const y = this.y ;
        this.manageFrameLimit() ;
        context.drawImage(
            this.sprite,
            this.sprite.animation.anim[this.sprite.currentFrame][0], //x
            this.sprite.animation.anim[this.sprite.currentFrame][1], //y top left
            25, 32, //crop rect width height
            x, y, //dest x, y (char pos)
            25, 32 //request space dest
        ) ; 
    }

    manageFrameLimit() {
        if (this.currentTime > 0) { this.currentTime-- ; return ;}
        this.currentTime = this.SPEED ; //reset
        this.sprite.currentFrame = 
            (this.sprite.currentFrame + 1) % this.sprite.animation.frames ;
    }
}

export default Entity