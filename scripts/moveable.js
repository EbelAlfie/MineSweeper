import GeneralObject from "./generalobject.js";

/** Bisa bergerak */
class MoveAble extends GeneralObject { 
    constructor(gameObj, speed) {
        super(gameObj);
        this.speed = speed ;
        this.FRAME_SPEED = 20 ;
        this.currentTime = 0 ;
        this.direction = "south" ;
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

    updateSpeed(newSpeed) {
        this.speed = newSpeed ;
        this.positions = {
            "north": ["y", this.speed],
            "south": ["y", -this.speed],
            "west": ["x", this.speed],
            "east": ["x", -this.speed]
        } ;
    }

    move() {
        const [coord, value] = this.positions[this.direction] ;
        this[coord] += value ;
    }
}

export default MoveAble