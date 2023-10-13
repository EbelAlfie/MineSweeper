class Sprite extends Image {
    currentFrame = 0 ;
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
        this.setCurrentAnim("walkSouth") ; 
    }

    //Animateable exclusive

    /** Set current animation to string key property */
    setCurrentAnim(anim) {
        if (!this.isAnimateable()) return ;
        this.#currentAnimationKey = anim ; 
    }

    setCurrentFrame(frame) {
        if (!this.isAnimateable()) return ; 
        this.currentFrame = frame ;
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
        return this.animation.frames.length ;
    }

    isAnimateable() { return this.#isGif }
}

export default Sprite