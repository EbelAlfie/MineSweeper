import Sprite from "./sprite.js"

class Entity {
    SPEED = 8 ;
    SPEED = 16 ;
    currentTime = this.SPEED ;
    constructor(obj) {
        this.x = obj.x ; 
        this.y = obj.y ; 
        this.sprite = new Sprite({
            gameObj: this,
            body: obj.body
        }) ;
        this.sprite.create() ;
        this.movements = {
            "ArrowUp": () => { this.sprite.setCurrentAnim("walkNorth") },
            "ArrowDown": () => { this.sprite.setCurrentAnim("walkSouth") ; },
            "ArrowLeft": () => { this.sprite.setCurrentAnim("walkWest") ; },
            "ArrowRight": () => { this.sprite.setCurrentAnim("walkEast") ; }
        }
        this.stopMovements = {
            "ArrowUp": () => { this.sprite.setCurrentAnim("idleNorth") },
            "ArrowDown": () => { this.sprite.setCurrentAnim("idleSouth") ; },
            "ArrowLeft": () => { this.sprite.setCurrentAnim("idleWest") ; },
            "ArrowRight": () => { this.sprite.setCurrentAnim("idleEast") ; }
        }
    }

    manageFrameLimit() {
        if (this.currentTime > 0) { this.currentTime-- ; return ;}
        this.currentTime = this.SPEED ; //reset
        this.sprite.currentFrame = 
            (this.sprite.currentFrame + 1) % this.sprite.animation.frames ;
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

    /** Move object Up */
    moveNorth() {
        //this.y -= this.step ;   
    }
    /** Move object Down */
    moveSouth() {
        //this.y += this.step ;
    }
    /** Move object Left */
    moveWest() {
        //this.x -= this.step ;
    }
    /** Move object Right */
    moveEast() {
        //this.x += this.step ; 
    }
}

export default Entity