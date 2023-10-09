class Sprite extends Image {
    constructor(params) {
        super() ;
        //this.char = params.gameObj ;
        // this.anims = params.anims ;
        // this.frames = params.frames ;
        this.imgSrc = params.body ;
    }

    create() {
        this.src = this.imgSrc ; 
    }
}

export default Sprite