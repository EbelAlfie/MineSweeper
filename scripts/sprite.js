class Sprite extends Image {
    currentAnimationFrame = 0 ;
    #currentAnimationKey = null ; 
    #isGif = false ;

    constructor(params) {
        super() ;
        this.anims = params.body.anims || null ; //kalau undefined,
        this.#isGif = this.anims != null ;
        this.src = params.body.src ;
        this.create() ;
    }

    /** Must be called before drawing */
    create() { 
        this.setCurrentAnimation("idleSouth") ; 
    }

    //Animateable exclusive

    /** Set current animation to string key property */
    setCurrentAnimation(animation = "idleSouth") {
        if (!this.isAnimateable()) return ;
        this.#currentAnimationKey = animation ; 
    }

    setCurrentFrame(frame = 0) {
        if (!this.isAnimateable()) return ; 
        this.currentAnimationFrame = frame ;
    }

    /** Get current frame of current animation */
    getFrame(framex, framey) { 
        if (!this.isAnimateable()) return null ;
        const frame = this.animation.frames[framex][framey] ;
        return frame;
    }
    
    /** Get a specific animation based on currentanim */
    get animation() { 
        if (!this.isAnimateable()) return null ;
        return this.anims[this.#currentAnimationKey]
    }

    get frameCount() {
        if (!this.isAnimateable()) return null ;
        const currentAnimation = this.animation ;
        return currentAnimation.frames.length || 0 ;
    }

    setAnimateable(enableAnimation = false) {
        this.#isGif = enableAnimation ;
    } 

    isAnimateable() { return this.#isGif }
}

export default Sprite