import MoveAble from "./moveable.js";

/** Bisa beranimasi (animateable) */
class Entity extends MoveAble {
    #currentAnimationSecond = 0 ;

    constructor(obj, speed) {
        super(obj, speed) ;
        this.ANIMATION_SPEED = 15 ;

        this.movements = { //refactor to get key
            "north": () => { this.sprite.setCurrentAnimation("walkNorth") },
            "south": () => { this.sprite.setCurrentAnimation("walkSouth") },
            "west": () => { this.sprite.setCurrentAnimation("walkWest") },
            "east": () => { this.sprite.setCurrentAnimation("walkEast") }
        }
        this.stopMovements = {
            "north": () => { this.sprite.setCurrentAnimation("idleNorth") },
            "south": () => { this.sprite.setCurrentAnimation("idleSouth") },
            "west": () => { this.sprite.setCurrentAnimation("idleWest") },
            "east": () => { this.sprite.setCurrentAnimation("idleEast") }
        }
    }

    animate() {
        this.#currentAnimationSecond = (this.#currentAnimationSecond + 1) % this.ANIMATION_SPEED ;
        if (this.#currentAnimationSecond > 0) return ;
        this.sprite.animateSprite() ;
    }

    setFrameSpeed(newAnimationSpeed = 0) {
        if (newAnimationSpeed < 0 || newAnimationSpeed > 100) return ;
        this.ANIMATION_SPEED = newAnimationSpeed ;
    }
}

export default Entity