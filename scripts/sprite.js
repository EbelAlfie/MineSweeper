class Sprite extends Image {
    currentFrame = 0 ;
    #currentAnim = null ;
    isGif = false ;

    constructor(params) {
        super() ;
        this.anims = params.body.anims || null ; //all anims
        if (this.anims != null) {
            console.log(this.anims) ;
            this.isGif = true ;
        }
        this.src = params.body.src ;
    }

    /** Must be called before drawing */
    create() { 
        this.setCurrentAnim("walkSouth") ; 
    }

    setCurrentAnim(anim) {
        if (!this.isGif) return ;
        this.#currentAnim = anim ; 
    }
    
    get animation() {
        return this.anims[this.#currentAnim] || null ;
    }
}

export default Sprite