import MoveAble from "../general/moveable.js";

/** Bisa beranimasi */
class Entity extends MoveAble {
    #currentAnimationSecond = 0 ;
    isMainChar = false ; //hapus?

    constructor(EntityObj) {
        super(EntityObj) ;
        this.isMainChar = EntityObj.isMainChar || false ;
        this.ANIMATION_SPEED = 15 ;
    }

    //Character movement
    stopChar() { this.chooseAnimation() }

    moveChar(direction = null) {
        if (direction === null) { 
            this.stopChar();
            return 
        }
        this.setDirection(direction) ;
        this.chooseAnimation("walk") ;
        this.move() ;
    }

    animateCharacter() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }
    
    chooseAnimation(animationKey = "") {
        this.sprite.setCurrentAnimation(animationKey + this.currentDirection) ;
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