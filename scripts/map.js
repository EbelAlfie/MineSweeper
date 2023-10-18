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
        switch (direction) {
            case "North" : return this.reservedArea[`${x}, ${y - speed}`] ;
            case "South" : return this.reservedArea[`${x}, ${y + speed}`] ;
            case "East" : return this.reservedArea[`${x + speed}, ${y}`] ;
            case "West" : return this.reservedArea[`${x - speed}, ${y}`] ;
            default: return true ;
        }
    }

    event = [() => { this.entities["char1"].moveChar("South") },
    () => { this.entities["char1"].moveChar("North") },
    () => { this.entities["char1"].moveChar("West") } ] ;
    index = 0 ;
    executeEvent() {
        setTimeout(() => {
            this.event[this.index]()
            this.index = (this.index + 1) % 3 ; 
            console.log(this.index) ;
        }, 5000) ;
    }

    //Area handling
    registerArea(x = null, y = null) {
        if (this.reservedArea[`${x}, ${y}`] || x === null || y === null) return ;
        this.reservedArea[`${x}, ${y}`] = false ;
    }
    unregisterArea(x, y) {
        delete this.reservedArea[`${x}, ${y}`] ; //idealnya dihapus
    }
 }

export default Map 