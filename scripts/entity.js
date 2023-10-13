import MoveAble from "./moveable.js";

class Entity extends MoveAble {
    constructor(obj, speed) {
        super(obj, speed) ;
        this.movements = { //refactor to get key
            "north": () => { this.sprite.setCurrentAnim("walkNorth") },
            "south": () => { this.sprite.setCurrentAnim("walkSouth") },
            "west": () => { this.sprite.setCurrentAnim("walkWest") },
            "east": () => { this.sprite.setCurrentAnim("walkEast") }
        }
        this.stopMovements = {
            "north": () => { this.sprite.setCurrentAnim("idleNorth") },
            "south": () => { this.sprite.setCurrentAnim("idleSouth") },
            "west": () => { this.sprite.setCurrentAnim("idleWest") },
            "east": () => { this.sprite.setCurrentAnim("idleEast") }
        }
    }

    drawWithAnim(context) {
        if (this.sprite.animation == null) return ;
        const x = this.x ;
        const y = this.y ;
        this.observeFrameLimit() ;
        context.drawImage(
            this.sprite,
            this.sprite.animation.anim[this.sprite.currentFrame][0], //x
            this.sprite.animation.anim[this.sprite.currentFrame][1], //y top left
            25, 32, //crop rect width height
            x, y, //dest x, y (char pos)
            25, 32 //request space dest
        ) ; 
    }

    observeFrameLimit() {
        this.currentTime = (this.currentTime + 1) % this.FRAME_SPEED ;
        if (this.currentTime > 0) return ;
        this.sprite.currentFrame = 
            (this.sprite.currentFrame + 1) % this.sprite.animation.frames ;
    }
}

export default Entity