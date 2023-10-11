class Sprite extends Image {
    currentFrame = 0 ;
    currentAnim = null ;

    constructor(params) {
        super() ;
        this.char = params.gameObj ; //char props
        this.anims = params.body.anims ; //all anims
        this.src = params.body.src ;
    }

    /** Must be called before drawing */
    create() { 
        this.setCurrentAnim("idleSouth") ; 
    }

    resetAnim() {
        this.create() ;
    }

    setCurrentAnim(anim) {
        this.currentAnim = anim ; 
    }
    
    get animation() {
        return this.anims[this.currentAnim] ;
    }
    get frame() {
        return this.currentFrame || 0 ;
    }
}

export default Sprite