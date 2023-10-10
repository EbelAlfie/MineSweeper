import Sprite from "./sprite.js"

class Entity {
    constructor(obj) {
        this.x = obj.x ; 
        this.y = obj.y ; 
        this.sprite = new Sprite({
            gameObj: this,
            body: obj.body
        }) ;
        this.sprite.create() ;
    }

    draw(context) {
        if (this.sprite.currentAnim == null) return ;
        const x = this.x ;
        const y = this.y ;
        const animation = this.sprite.currentAnim ;
        context.drawImage(
            this.sprite,
            animation.anim[this.sprite.currentFrame][0], animation.anim[this.sprite.currentFrame][1], //x, y top left
            25, 32, //crop rect width height
            x, y, //dest x, y (char pos)
            25, 32 //request space dest
        ) ; 
        this.sprite.currentFrame = (this.sprite.currentFrame + 1) % animation.frames ;
    }

    /** Move object Up */
    moveNorth() {
        this.y -= 1 ;
        this.sprite.setCurrentAnim("walkNorth") ;
    }
    /** Move object Down */
    moveSouth() {
        this.y += 1 ;
        this.sprite.setCurrentAnim("walkSouth") ;
    }
    /** Move object Left */
    moveWest() {
        this.x -= 1 ;
        this.sprite.setCurrentAnim("walkWest") ;
    }
    /** Move object Right */
    moveEast() {
        this.x += 1 ; 
        this.sprite.setCurrentAnim("walkEast") ;
    }
}

export default Entity