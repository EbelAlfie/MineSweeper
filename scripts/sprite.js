class Sprite extends Image {
    currentFrame = 0 ;
    currentAnim = null ;
    constructor(params) {
        super() ;
        this.char = params.gameObj ; //char props
        this.anims = params.body.anims ; //all anims
        this.img = params.body.src ;
    }

    /** Must be called before drawing */
    create() {
        this.src = this.img ; 
    }

    setCurrentAnim(anim) {
        this.currentAnim = this.anims[anim] ; 
    }
}

export default Sprite