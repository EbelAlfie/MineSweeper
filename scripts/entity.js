import Sprite from "./sprite.js"

class Entity {
    step = 8 ;
    speed = 16 ;
    currentTime = this.speed ;
    constructor(obj) {
        this.x = obj.x ; 
        this.y = obj.y ; 
        this.sprite = new Sprite({
            gameObj: this,
            body: obj.body
        }) ;
        this.sprite.create() ;
        // this.movements = {
        //     "ArrrowUp": ,
        //     "ArrowDown": ,
        //     "ArrowLeft": ,
        //     "ArrowRiwght": 
        // }
    }

    manageFrameLimit() {
        if (this.currentTime > 0) { this.currentTime-- ; return ;}
        this.currentTime = this.speed ; //reset
        this.sprite.currentFrame = 
            (this.sprite.currentFrame + 1) % this.sprite.currentAnim.frames ;
    }

    draw(context) {
        if (this.sprite.currentAnim == null) return ;
        const x = this.x ;
        const y = this.y ;
        const animation = this.sprite.currentAnim ;

        this.manageFrameLimit() ;
        
        context.drawImage(
            this.sprite,
            animation.anim[this.sprite.currentFrame][0], animation.anim[this.sprite.currentFrame][1], //x, y top left
            25, 32, //crop rect width height
            x, y, //dest x, y (char pos)
            25, 32 //request space dest
        ) ; 
    }

    /** Move object Up */
    moveNorth() {
        //this.y -= this.step ;
        this.sprite.setCurrentAnim("walkNorth") ;
    }
    /** Move object Down */
    moveSouth() {
        //this.y += this.step ;
        this.sprite.setCurrentAnim("walkSouth") ;
    }
    /** Move object Left */
    moveWest() {
        //this.x -= this.step ;
        this.sprite.setCurrentAnim("walkWest") ;
    }
    /** Move object Right */
    moveEast() {
        //this.x += this.step ; 
        this.sprite.setCurrentAnim("walkEast") ;
    }
}

export default Entity