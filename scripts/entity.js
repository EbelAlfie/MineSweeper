import MoveAble from "./moveable.js";

/** Bisa beranimasi (animateable) */
class Entity extends MoveAble {
    #currentAnimationSecond = 0 ;

    constructor(obj, speed) {
        super(obj, speed) ;
        this.ANIMATION_SPEED = 15 ;
    }

    animateCharacter() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }

    setFrameSpeed(newAnimationSpeed = 0) {
        if (newAnimationSpeed < 0 || newAnimationSpeed > 100) return ;
        this.ANIMATION_SPEED = newAnimationSpeed ;
    }

    /** Character movement manipulation */
    chooseAnimation(animationKey) {
        this.sprite.setCurrentAnimation(animationKey) ;
    }
}

export default Entity