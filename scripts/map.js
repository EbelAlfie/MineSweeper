import GeneralObject from "./base/generalobject.js";

class Map extends GeneralObject {

    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.tileInfo || {} ;
        this.entities = mapData.objects;
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

    checkForEvent(mainChar) {
        let entity = this.lookFront(mainChar.x, mainChar.y, mainChar.direction, mainChar.speed)
        return entity ;
    }

    //Area handling
    registerArea(x = null, y = null, isOccupied = true) {
        if (x === null || y === null) return ;
        this.reservedArea[`${x},${y}`] = isOccupied ;
    }
    unregisterArea(x, y) {
        delete this.reservedArea[`${x},${y}`] ; //idealnya dihapus
    }
 }

export default Map 