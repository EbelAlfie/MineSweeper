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

    moveChar(direction = "South") {
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
}

export default Entity