import Entity from "./entities/entity.js";
import GeneralObject from "./generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.walls;
        this.entities = mapData.objects ;
    }

    /** check for event in current tile */
    checkTile(player) {
        const [coord, value] = player.positions[player.getDirection()] ;
        switch (player.getDirection()) {

        }
    }

    executeEvent() {
        
    }
 }

export default Map 