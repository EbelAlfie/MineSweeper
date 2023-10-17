import MoveAble from "./moveable.js";

/** Bisa beranimasi */
class Entity extends MoveAble {
    #currentAnimationSecond = 0 ;

    constructor(EntityObj) {
        super(EntityObj) ;
        this.isMainCharacter = EntityObj.isMainChar || false ;
        this.ANIMATION_SPEED = 15 ;
    }

    animateCharacter() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }
    
    /** Character movement manipulation */
    chooseAnimation(animationKey = "") {
        this.sprite.setCurrentAnimation(animationKey + this.getDirection()) ;
    }
    
    stopPivot() { this.chooseAnimation("idle") }

    movePivot(direction = "South") {
        this.setDirection(direction) ;
        this.chooseAnimation("walk") ;
        this.move() ;
    }
}

export default Entity