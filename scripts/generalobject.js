import Sprite from "./sprite.js";

/** dia cuman punya koordinat, karena bisa di draw di map */
class GeneralObject {
    //facing = "south" ;
    constructor(gameObj) {
        this.x = gameObj.x || 0 ; 
        this.y = gameObj.y || 0 ; 
        this.sprite = new Sprite({
            body: gameObj.body
        }) ;
        this.sprite.create() ;
        // this.movements = {
        //     "ArrowUp": () => { this.sprite.setCurrentAnim("walkNorth") },
        //     "ArrowDown": () => { this.sprite.setCurrentAnim("walkSouth") ; },
        //     "ArrowLeft": () => { this.sprite.setCurrentAnim("walkWest") ; },
        //     "ArrowRight": () => { this.sprite.setCurrentAnim("walkEast") ; }
        // }
        // this.stopMovements = {
        //     "ArrowUp": () => { this.sprite.setCurrentAnim("idleNorth") },
        //     "ArrowDown": () => { this.sprite.setCurrentAnim("idleSouth") ; },
        //     "ArrowLeft": () => { this.sprite.setCurrentAnim("idleWest") ; },
        //     "ArrowRight": () => { this.sprite.setCurrentAnim("idleEast") ; }
        // }
    }
}

export default GeneralObject