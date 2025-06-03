import Sprite from "../custom/sprite.js";

/** secara general, semua item punya koord sama gambar, sama height width (event beda lagi) */
class GeneralObject {
    isPivot = false ;
    hitBox = null ;
    constructor(EntityObj) {
        this.hasShadow = EntityObj?.hasShadow || false ;
        this.height = EntityObj?.height || 0 ;
        this.width = EntityObj?.width || 0 ;
        this.x = EntityObj?.x || 0 ; 
        this.y = EntityObj?.y || 0 ; 
        this.isPivot = EntityObj?.isMainChar || false ;
        this.sprite = new Sprite(EntityObj?.body) ;
        this.hitBox = { 
            topLeft: [this.x, this.y],
            topRight: [this.x + this.width, this.y],
            bottomLeft: [this.x, this.y + this.height],
            bottomRight: [this.x + this.width, this.y + this.height] 
        }
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

    updatePosition(x, y) {
        this.x = x
        this.y = y
        this.updateHitBox()
    }

    updateHitBox() {
        this.hitBox = { 
            topLeft: [this.x, this.y],
            topRight: [this.x + this.width, this.y],
            bottomLeft: [this.x, this.y + this.height],
            bottomRight: [this.x + this.width, this.y + this.height] 
        }
    }

    getWidth() { return this.width }
    getHeight() { return this.height }

    area() {}
}

export default GeneralObject