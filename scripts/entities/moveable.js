import GeneralObject from "../generalobject.js";

/** Bisa bergerak (move), punya speed*/
class MoveAble extends GeneralObject { 
    #direction = "South" ;
    #movingSpeed = 8 ;
    #isAbleToMove = true; 
    constructor(entityObj) {
        super(entityObj);
        this.#movingSpeed = entityObj.speed || 8 ;
        
        this.#direction = entityObj.initialDirection || "South" ;
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

    getDirection() { return this.#direction } 

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

    get speed() { return this.#movingSpeed }

    setMovementStatus(value = true) {
        this.#isAbleToMove = value ;
    }

    canMove() { return this.#isAbleToMove }
}

export default MoveAble