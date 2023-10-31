import Entity from "./abstracted/entity.js";
import { commoner } from "./important/chardata.js";
import { toPixel } from "./utils.js";

const NPCENUM = {
    0: "NOT_BOMB",
    1: "gameOver",
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

    riggingBomb(mainChar) {
        let currentX ;
        let currentY = 4 ;

        let arrayOfent = []
        arrayOfent.push(mainChar) ;
        for (let y = 0; y < 3; y++) {
            currentX = 3 ;
            for (let x = 0; x < 12; x++) {
                if (y == 0) this.probability = this.firstLine ;
                else this.probability = this.otherLines ;

                
            }
            currentY += 3 ;
        }
        return arrayOfent ;
    }

    // let npc = this.createNpc() ;
    // if (x % 3 == 0) currentX += 2 
    // this.setNpcPosition(npc, currentX, currentY) ;
    // currentX++ 

    // arrayOfent.push(npc) ;

    createNpc() {
        let key = Math.floor(Math.random() * 4) ;
        let npc = new Entity(commoner) ;
        npc.status = NPCENUM[key] ;
        return npc ;
    }

    setNpcPosition(npc, currentX, currentY) {
        npc.x = toPixel(currentX) ;
        npc.y = toPixel(currentY) ;
    }
}

export default MineSweeper ; 