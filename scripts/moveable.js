import GeneralObject from "./generalobject.js";

/** Bisa bergerak (move), punya speed*/
class MoveAble extends GeneralObject { 
    #direction = "South" ;
    #movingSpeed = 8 ;
    constructor(gameObj, movingSpeed) {
        super(gameObj);
        this.#movingSpeed = movingSpeed || 8 ;
        
        this.#direction = gameObj.initialDirection || "South" ;
        this.positions = {
            "North": ["y", -this.#movingSpeed],
            "South": ["y", this.#movingSpeed],
            "West": ["x", -this.#movingSpeed],
            "East": ["x", this.#movingSpeed]
        } ;
    }

    /** Implement this to move */
    move() {
        const [coord, value] = this.positions[this.getDirection()] ;
        this[coord] += value ;
    }

    /** update the input direction for movements */
    setDirection(direction = "South") {
        if (direction === this.#direction) return ;
        this.#direction = direction ;
    }

    getDirection() { return this.#direction || "South" } 

    _setSpeed(newMovingSpeed = 0) {
        if (newMovingSpeed < 0) return ;
        this.#movingSpeed = newMovingSpeed ;
        this.positions = {
            "North": ["y", this.#movingSpeed],
            "South": ["y", -this.#movingSpeed],
            "West": ["x", this.#movingSpeed],
            "East": ["x", -this.#movingSpeed]
        } ;
    }
}

export default MoveAble