import MoveAble from "./moveable.js";

/** Bisa beranimasi (animateable) */
class Entity extends MoveAble {
    constructor(obj, speed) {
        super(obj, speed) ;
        this.movements = { //refactor to get key
            "north": () => { this.sprite.setCurrentAnimation("walkNorth") },
            "south": () => { this.sprite.setCurrentAnimation("walkSouth") },
            "west": () => { this.sprite.setCurrentAnimation("walkWest") },
            "east": () => { this.sprite.setCurrentAnimation("walkEast") }
        }
        this.stopMovements = {
            "north": () => { this.sprite.setCurrentAnimation("idleNorth") },
            "south": () => { this.sprite.setCurrentAnimation("idleSouth") },
            "west": () => { this.sprite.setCurrentAnimation("idleWest") },
            "east": () => { this.sprite.setCurrentAnimation("idleEast") }
        }
    }

    drawWithAnim(context) {
        if (!this.sprite.isAnimateable()) return ;
        this.updateAnimationFrame() ;
        context.drawImage(
            this.sprite,
            this.sprite.getFrame(this.sprite.currentAnimationFrame, 0), //x
            this.sprite.getFrame(this.sprite.currentAnimationFrame, 1), //y top left
            this.getWidth(), this.getHeight(), //crop rect width height 
            this.x, this.y, //dest x, y (char pos)
            this.getWidth(), this.getHeight() //request space dest
        ) ; 
    }

    updateAnimationFrame() {
        this.currentTime = (this.currentTime + 1) % this.FRAME_SPEED ;
        if (this.currentTime > 0) return ;
        this.sprite.setCurrentFrame(
            (this.sprite.currentAnimationFrame + 1) % this.sprite.frameCount
        ) ;            
    }
}

export default Entity