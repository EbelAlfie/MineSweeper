import GeneralObject from "./generalobject";

/** Bisa beranimasi (animateable) */
class Animateable extends GeneralObject {
    #currentAnimationSecond = 0 ;

    constructor(obj, speed) {
        super(obj, speed) ;
        this.ANIMATION_SPEED = 15 ;
    }

    animateEntity() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }

    setFrameSpeed(newAnimationSpeed = 0) {
        if (newAnimationSpeed < 0 || newAnimationSpeed > 100) return ;
        this.ANIMATION_SPEED = newAnimationSpeed ;
    }

    /** Character movement manipulation */
    moveCharacterAnim() {
        this.#chooseAnimation(`walk${this.getDirection()}`) ;
        this.move() ;
    }

    stopCharacterAnim() {
        this.#chooseAnimation(`idle${this.pivot.getDirection()}`) ;
    }

    #chooseAnimation(animationKey) {
        this.sprite.setCurrentAnimation(animationKey) ;
    }
}

export default Animateable