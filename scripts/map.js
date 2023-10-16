import GeneralObject from "./generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.walls; 
    }

    /** check for event in current tile */
    checkTile(player) {
        const [coord, value] = player.positions[player.getDirection()] ;
    }
}

export default Map 