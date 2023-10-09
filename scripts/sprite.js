class Sprite {
    isLoaded = false ;
    constructor(config) {
        this.char = config ;
        this.create();
    }

    create() {
        this.sprite = new Image() ;
        this.sprite.onload = () => {
            this.isLoaded = true ;
        }
        this.sprite.src = this.char.body ;
    }

    render(context) {
        const x = this.char.gameObj.x || 0 ;
        const y = this.char.gameObj.y || 0 ;

        context.drawImage(
            this.sprite,
            0,
            0
        )
    }

}

export default Sprite