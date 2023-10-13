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
        if (!this.sprite.isAnimateable()) return ;
        this.observeFrameLimit() ;
        context.drawImage(
            this.sprite,
            this.sprite.getFrame(this.sprite.currentFrame, 0), //x
            this.sprite.getFrame(this.sprite.currentFrame, 1), //y top left
            this.getWidth(), this.getHeight(), //crop rect width height 
            this.x, this.y, //dest x, y (char pos)
            this.getWidth(), this.getHeight() //request space dest
        ) ; 
    }

    observeFrameLimit() {
        this.currentTime = (this.currentTime + 1) % this.FRAME_SPEED ;
        if (this.currentTime > 0) return ;
        this.sprite.setCurrentFrame(
            (this.sprite.currentFrame + 1) % this.sprite.frameCount
        ) ;            
    }
}

export default Entity