import GeneralObject from "./base/generalobject.js";
import { absoluteX, absoluteY } from "./utils.js";

class Map extends GeneralObject {

    constructor(
        mapData,
        canvas
    ) {
        super(mapData) ;
        this.canvas = canvas
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
        console.log(this.reservedArea)
        if (entityX < 0 || entityY < 0 || entityY > this.getHeight() || entityX > this.getWidth()) return true ;
        return this.reservedArea[`${entityX},${entityY}`] 
    }

    checkForEvent(mainChar) {
        let entity = this.lookFront(mainChar.x, mainChar.y, mainChar.direction, mainChar.speed)
        return entity ;
    }

    //Area handling
    registerAreaBlock(entityObject, pivot) {
        const charWidth = entityObject.getWidth()
        const charHeight = entityObject.getHeight()

        const charTopX = absoluteX(entityObject.x, this.canvas.width, pivot.x)
        const charTopY = absoluteY(entityObject.y, this.canvas.height, pivot.y)
        
    }
    unregisterAreaBlock() {
        this.reservedArea = {}
    }

    registerArea(x = null, y = null, isOccupied = true) {
        if (!x || !y) return ;
        this.reservedArea[`${x},${y}`] = isOccupied ;
    }
    unregisterArea(x, y) {
        delete this.reservedArea[`${x},${y}`] ; //idealnya dihapus
    }
 }

export default Map 