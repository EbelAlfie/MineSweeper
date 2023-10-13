import Sprite from "./sprite.js";

/** secara general, semua item punya koord sama gambar, sama height width (event beda lagi) */
class GeneralObject {
    constructor(gameObj) {
        this.hasShadow = gameObj || false ;
        this.x = gameObj.x || 0 ; 
        this.y = gameObj.y || 0 ; 
        this.height = gameObj.height || 0 ;
        this.width = gameObj.width || 0 ;
        this.sprite = new Sprite({
            body: gameObj.body
        }) ;
    }

    getWidth() { return this.width }
    getHeight() { return this.height }
}

export default GeneralObject