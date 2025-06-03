import GeneralObject from "./generalobject.js";

/** Bisa bergerak (move), punya speed*/
class MoveAble extends GeneralObject { 
    #direction = "South" ;
    #movingSpeed = 8 ;
    #isAbleToMove = true; 
    constructor(EntityObj) {
        super(EntityObj);
        this.#movingSpeed = EntityObj.speed || 8 ;
        
        this.#direction = EntityObj.initialDirection || "South" ;
        this.positions = {
            "North": ["y", -this.#movingSpeed],
            "South": ["y", this.#movingSpeed],
            "West": ["x", -this.#movingSpeed],
            "East": ["x", this.#movingSpeed]
        } ;
    }

    /** Call this to move */
    move() {
        const [coord, speed] = this.positions[this.currentDirection] ;
        this[coord] += speed
        this.updateHitBox()
    }

    /** update the input direction for movements */
    setDirection(direction = "South") {
        if (direction === this.#direction) return ;
        this.#direction = direction ;
    }

    setSpeed(newMovingSpeed = 0) {
        if (newMovingSpeed < 0) return ;
        this.#movingSpeed = newMovingSpeed ;
        this.positions = {
            "North": ["y", this.#movingSpeed],
            "South": ["y", -this.#movingSpeed],
            "West": ["x", this.#movingSpeed],
            "East": ["x", -this.#movingSpeed]
        } ;
    }

    get currentDirection() { return this.#direction } 

    get speed() { return this.#movingSpeed }

    setMovementStatus(value = true) {
        this.#isAbleToMove = value ;
    }

    canMove() { return this.#isAbleToMove }
}

export default MoveAble