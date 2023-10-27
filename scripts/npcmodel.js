import Entity from "./abstracted/entity.js";
import { commoner } from "./important/chardata.js";
import { toPixel } from "./utils.js";


const NPCENUM = {
    0: "NOT_BOMB",
    1: "IS_BOMB",
    2: "CABBAGE",
    3: "IRON_ORE",
    4: "CONTROLLER", 
}

class MineSweeper {
    probability = [] ;
    firstLine = [0, 2, 3, 0, 3, 0, 0, 0, 2, 2, 2, 2, 0, 3, 3] ;
    otherLines = [0, 2, 1, 1, 1, 4, 4, 4, 4, 3, 0, 1, 0, 2, 2, 2, 2, 0, 1, 5] ;
    constructor() {}

    riggingBomb(mainChar) {
        let arrayOfent = []
        arrayOfent.push(mainChar) ;
        for (let x = 0; x < 24; x++) {
            for (let y = 0; y < 3; y++) {
                if (x == 0) this.probability = this.firstLine ;
                else this.probability = this.otherLines ;
                let key = Math.floor(Math.random() * 4) ;
                let npc = new Entity(commoner) ;
                npc.status = NPCENUM[key] ;
                npc.x = toPixel(x) ;
                npc.y = toPixel(y) ;
                arrayOfent.push(npc)
            }
        }
        console.log(arrayOfent) ;
        return arrayOfent ;
    }
}

export default MineSweeper ; 