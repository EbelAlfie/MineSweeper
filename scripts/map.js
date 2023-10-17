import Entity from "./abstracted/entity.js";
import GeneralObject from "./general/generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.defaultReserved ||  [] ;
        this.entities = mapData.objects ;
    }

    /** check for event in current tile */
    assertMovement(entity = this.entities["main"], direction = "South") {
        switch (direction) {
            case "North" : return this.reservedArea[entity.x, entity.y - entity.speed] ;
            case "South" : return this.reservedArea[entity.x, entity.y + entity.speed] ;
            case "East" : return this.reservedArea[entity.x + entity.speed, entity.y] ;
            case "West" : return this.reservedArea[entity.x - entity.speed, entity.y] ;
        }
    }

    executeEvent() {
        
    }

    //Area handling
    registerArea(x = null, y = null) {
        if (this.reservedArea[x, y] || x === null || y === null) return ;
        this.reservedArea[x, y] = true ;
        console.log(this.reservedArea) ;
    }
    unregisterArea(x, y) {
        this.reservedArea[x, y] = false ; //idealnya dihapus
    }
 }

export default Map 