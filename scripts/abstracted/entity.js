import MoveAble from "../general/moveable.js";

/** Handle actions related to character */
class Entity extends MoveAble {
    #currentAnimationSecond = 0 ;
    isMainChar = false ; 

    constructor(EntityObj) {
        super(EntityObj) ;
        this.isMainChar = EntityObj.isMainChar || false ;
        this.ANIMATION_SPEED = 15 ;
    }

    //Character movement
    stopChar() { this.chooseAnimation() }

    moveChar(direction = null) {
        this.setDirection(direction) ;
        this.chooseAnimation("walk") ;
        this.#animateCharacter() ;
        this.move() ;
    }

    #animateCharacter() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }
    
    chooseAnimation(actionKey = "") {
        this.sprite.setCurrentAnimation(actionKey + this.currentDirection) ;
    }

    lookAt(direction) {
        switch (direction) {
            case "North" : return [this.x, this.y - this.speed] ; 
            case "South" : return [this.x, this.y + this.speed] ;
            case "East" : return [this.x + this.speed, this.y] ;
            case "West" : return [this.x - this.speed, thiss.y] ;
        }
    }
}

export default Entity