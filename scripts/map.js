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
    }

    /** check for event in current tile */
    canMoveTo(x, y, direction, speed) {
        const entityX = x ;
        const entityY = y ;
        switch (direction) {
            case "North" : entityY - speed ;
            case "South" : entityY + speed ;
            case "East" : entityX + speed ;
            case "West" : entityX - speed ;
        }
        console.log(this.reservedArea[`${48},${80}`]);
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