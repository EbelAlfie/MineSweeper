import GeneralObject from "./generalobject.js";

/** Bisa bergerak (move), punya */
class MoveAble extends GeneralObject { 
    currentTime = 0 ;
    constructor(gameObj, speed) {
        super(gameObj);
        this.speed = speed || 8 ;
        this.FRAME_SPEED = 20 ;
        
        this.direction = gameObj.initialDirection || "south" ;
        this.positions = {
            "north": ["y", this.speed],
            "south": ["y", -this.speed],
            "west": ["x", this.speed],
            "east": ["x", -this.speed]
        } ;
    }

    /** update the input direction for movements */
    setDirection(direction) {
        if (direction === undefined || direction === this.direction) return ;
        this.direction = direction ;
    }

    setSpeed(newSpeed) {
        if (newSpeed < 0) return ;
        this.speed = newSpeed ;
        this.positions = {
            "north": ["y", this.speed],
            "south": ["y", -this.speed],
            "west": ["x", this.speed],
            "east": ["x", -this.speed]
        } ;
    }

    setFrameSpeed(newFrameSpeed) {
        if (newFrameSpeed < 0 || newFrameSpeed > 100) return ;
        this.FRAME_SPEED = newFrameSpeed ;
    }

    move() {
        const [coord, value] = this.positions[this.direction] ;
        this[coord] += value ;
    }

    getDirection() { return this.direction || "south" } 
}

export default MoveAble