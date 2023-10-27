import GeneralObject from "./base/generalobject.js";
import MineSweeper from "./npcmodel.js";

class Map extends GeneralObject {

    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.tileInfo || {} ;
        this.entities = new MineSweeper().riggingBomb(mapData.objects.main) ;
        this.events = new Event({
            mapObjects: mapData.objects, 
            mapEvents: mapData.events
        }) ;
    }

    /** check for event in current tile */
    lookFront(x, y, direction, speed) {
        let entityX = x ;
        let entityY = y ;
        switch (direction) {
            case "North" : entityY -= speed ;
            case "South" : entityY += speed ;
            case "East" : entityX += speed ;
            case "West" : entityX -= speed ;
        }
        if (entityX < 0 || entityY < 0 || entityY > this.getHeight() || entityX > this.getWidth()) return true ;
        return this.reservedArea[`${entityX},${entityY}`] 
    }

    event = [() => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("North") },
    () => { this.entities["char1"].moveChar("North") },
    () => { this.entities["char1"].moveChar("North") },
    () => { this.entities["char1"].moveChar("North") },
    () => { this.entities["char1"].moveChar("West") },
    () => { this.entities["char1"].moveChar("West") },
    () => { this.entities["char1"].moveChar("West") },
    () => { this.entities["char1"].moveChar("West") }, ] ;
    index = 0 ;
    executeEvent() {
        this.event[this.index]() ;
        console.log(this.index);
        this.index = (this.index + 1) % 12 ; 
    }

    //Area handling
    registerArea(x = null, y = null, entity = true) {
        if (x === null || y === null) return ;
        this.reservedArea[`${x},${y}`] = entity ;
    }
    unregisterArea(x, y) {
        delete this.reservedArea[`${x},${y}`] ; //idealnya dihapus
    }
 }

export default Map 