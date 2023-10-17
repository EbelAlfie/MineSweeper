class Sprite extends Image {
    #currentAnimationFrame = 0 ;
    #currentAnimationKey = "South" ; 
    #isGif = false ;

    constructor(body) {
        super() ;
        this.src = body.src || "";
        this.anims = body.anims || null ; //kalau undefined,
        this.#isGif = this.anims != null ;
    }

    //Animateable exclusive
    /** Set current animation to string key property */
    setCurrentAnimation(animation = "South") {
        if (this.#currentAnimationKey === animation || !this.isAnimateable()) return ;
        this.#currentAnimationKey = animation ; 
        this.#currentAnimationFrame = 0 ; //reset current frame
    }

    /** change to next frame */
    animateSprite() {
        if (!this.isAnimateable()) return ; 
        this.#currentAnimationFrame = (this.#currentAnimationFrame + 1) % this.frameCount ;
    }

    /** Get current animation 
     * @returns array of array containing frames for current animation
    */
    get animation() { 
        if (!this.isAnimateable()) return null ;
        return this.anims[this.#currentAnimationKey]
    }

    /** Get current frame of current animation 
     * @param frameIndex of animation. default to currentAnimationFrame
    */
    getFrame() {
        if (!this.isAnimateable()) return null ;
        return this.animation.frames[this.#currentAnimationFrame] ;
    }

    get frameCount() {
        if (!this.isAnimateable()) return 0 ;
        return this.animation["frames"].length || 0 ;
    }

    isAnimateable() { return this.#isGif }
}

export default Sprite