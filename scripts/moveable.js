import GeneralObject from "./generalobject.js";

/** Bisa bergerak */
class MoveAble extends GeneralObject { 
    SPEED = 8 ;
    currentTime = this.SPEED ;
    positions = {
        "north": ["y", this.SPEED],
        "south": ["y", -this.SPEED],
        "west": ["x", this.SPEED],
        "east": ["x", -this.SPEED]
    } ;

    constructor(gameObj) {
        super(gameObj)
    }

    /** update the input direction for movements */
    updateFacing(value) {
        this.direction = value ;
    }

    // move() {
    //     const [coord, value] = this.positions[this.direction] ;
    //     this[coord] += value ;
    // }
}

export default MoveAble