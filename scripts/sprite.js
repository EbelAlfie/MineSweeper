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
        this.setCurrentAnim("default") ; 
    }

    resetAnim() {
        this.create() ;
    }

    setCurrentAnim(anim) {
        this.currentAnim = this.anims[anim] ; 
    }
}

export default Sprite