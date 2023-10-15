import Sprite from "./sprite.js";

/** secara general, semua item punya koord sama gambar, sama height width (event beda lagi) */
class GeneralObject {
    constructor(gameObj) {
        this.hasShadow = gameObj.hasShadow || false ;
        this.height = gameObj.height || 0 ;
        this.width = gameObj.width || 0 ;
        this.x = gameObj.x || 0 ; 
        this.y = gameObj.y || 0 ; 
        this.sprite = new Sprite(gameObj.body) ;
        // this.shadow = new Sprite() ;
    }

    setWidth(newWidth = 0) { 
        if (newWidth < 0) return ;
        this.width = newWidth ;
    }
    setHeight(newHeight = 0) { 
        if (newHeight < 0) return ;
        this.height = newHeight ;
    }

    getWidth() { return this.width }
    getHeight() { return this.height }
}

export default GeneralObject