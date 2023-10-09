import Sprite from "./sprite.js"

class Entity {
    loaded = false ;
    constructor(obj) {
        this.x = obj.x ; 
        this.y = obj.y ; 
        this.sprite = new Sprite({
            gameObj: this,
            body: obj.body
        }) ;
        this.sprite.onload = () => {
            this.loaded = true ;
        } ;
        this.sprite.create() ;
    }

    draw(context) {
        context.drawImage(
            this.sprite,
            26, 32, 
            26, 32,
            0, 0, 
            26, 32
        ) ; 
    }
    
}

export default Entity