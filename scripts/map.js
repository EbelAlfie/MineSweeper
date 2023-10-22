import GeneralObject from "./general/generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.defaultReserved || {} ;
        this.entities = mapData.objects ;
        this.events = new Event({
            mapObjects: mapData.objects, 
            mapEvents: mapData.events
        }) ;
        console.log(this.reservedArea)
    }

    /** check for event in current tile */
    canMoveTo(x, y, direction, speed) {
        let entityX = x ;
        let entityY = y ;
        switch (direction) {
            case "North" : entityY -= 4 ;
                break;
            case "South" : entityY += 4 ;
                break;
            case "East" : entityX += 4 ;
                break;
            case "West" : entityX -= 4 ;
        }
        return this.reservedArea[`${entityX},${entityY}`];
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
    registerArea(x = null, y = null) {
        if (x === null || y === null) return ;
        this.reservedArea[`${x},${y}`] = false ;
    }
    unregisterArea(x, y) {
        delete this.reservedArea[`${x},${y}`] ; //idealnya dihapus
    }
 }

export default Map 