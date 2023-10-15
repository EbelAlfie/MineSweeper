import GeneralObject from "./generalobject.js";

/** Bisa bergerak (move), punya speed*/
class MoveAble extends GeneralObject { 
    constructor(gameObj, movingSpeed) {
        super(gameObj);
        this.movingSpeed = movingSpeed || 8 ;
        
        this.direction = gameObj.initialDirection || "south" ;
        this.positions = {
            "north": ["y", -this.movingSpeed],
            "south": ["y", this.movingSpeed],
            "west": ["x", -this.movingSpeed],
            "east": ["x", this.movingSpeed]
        } ;
    }

    move() {
        const [coord, value] = this.positions[this.direction] ;
        this[coord] += value ;
    }

    //setter
    /** update the input direction for movements */
    setDirection(direction = "south") {
        if (direction === this.direction) return ;
        this.direction = direction ;
    }

    setSpeed(newMovingSpeed = 0) {
        if (newMovingSpeed < 0) return ;
        this.movingSpeed = newMovingSpeed ;
        this.positions = {
            "north": ["y", this.movingSpeed],
            "south": ["y", -this.movingSpeed],
            "west": ["x", this.movingSpeed],
            "east": ["x", -this.movingSpeed]
        } ;
    }

    //getter
    getDirection() { return this.direction || "south" } 
}

export default MoveAble