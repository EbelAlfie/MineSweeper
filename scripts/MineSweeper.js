import Entity from "./base/entity.js";
import { commoner } from "./data/chardata.js";
import { toPixel } from "./utils.js";

const NPCENUM = {
    0: "NOT_BOMB",
    1: "GAME_OVER",
    2: "CABBAGE",
    3: "IRON_ORE",
    4: "CONTROLLER", 
}

class MineSweeper {
    memoryMap = [] ;
    probability = [] ;
    firstLine = [0, 2, 3, 0, 3, 0, 0, 0, 2, 2, 2, 2, 0, 3, 3] ;
    otherLines = [0, 2, 1, 1, 1, 4, 4, 4, 4, 3, 0, 1, 0, 2, 2, 2, 2, 0, 1, 5] ;
    constructor() {}

    riggingBomb(map) {
        let mapObjects = map.entities

        let currentX ;
        let currentY = 4 ;
        
        for (let chairRow = 0; chairRow < 3; chairRow++) {
            currentX = 3 ;
            for (let chairAt = 0; chairAt < 12; chairAt++) {
                if (chairRow == 0) this.probability = this.firstLine ;
                else this.probability = this.otherLines ;

                let npc = this._createNpc() ;

                if (chairAt != 0 && chairAt % 3 == 0) currentX += 2 
                if (chairAt != 0 && chairAt % 6 == 0) currentX++ ;
                this.setNpcPosition(npc, currentX, currentY) ;
                currentX++ 
                mapObjects[`${chairAt},${chairRow}`] = npc ;   
            }
            currentY += 3 ;
        }
        return mapObjects ;
    }

    _createNpc() {
        let key = Math.floor(Math.random() * 4) ;
        let npc = new Entity(commoner) ;
        npc.status = NPCENUM[key] ;
        switch(npc.status) {
            case NPCENUM[1]: 
                npc.registerEvent(this.gameOver.bind(this))
                break 
            default:     
        }
        return npc ;
    }

    setNpcPosition(npc, currentX, currentY) {
        npc.updatePosition(toPixel(currentX), toPixel(currentY))
    }

    gameOver() {
        document.querySelector(".game-over").style.display = "flex"; 
        document.querySelector(".floor").style.display = "none" ;
    }
}

export default MineSweeper ; 