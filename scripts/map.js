import Entity from "./abstracted/entity.js";
import GeneralObject from "./general/generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.defaultReserved ||  {} ;
        this.entities = mapData.objects
    }

    /** check for event in current tile */
    checkTile(player) {
        const [coord, value] = player.positions[player.getDirection()] ;
        switch (player.getDirection()) {

        }
    }

    executeEvent() {
        
    }

    //Area handling
    registerArea(x, y) {
        this.reservedArea[x,y] = true ;
    }
 }

export default Map 