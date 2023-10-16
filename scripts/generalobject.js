import Sprite from "./custom/sprite.js";

/** secara general, semua item punya koord sama gambar, sama height width (event beda lagi) */
class GeneralObject {
    constructor(EntityObj) {
        this.hasShadow = EntityObj.hasShadow || false ;
        this.height = EntityObj.height || 0 ;
        this.width = EntityObj.width || 0 ;
        this.x = EntityObj.x || 0 ; 
        this.y = EntityObj.y || 0 ; 
        this.sprite = new Sprite(EntityObj.body) ;
    }

    getObjectCoord() {
        return [this.x, this.y]
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