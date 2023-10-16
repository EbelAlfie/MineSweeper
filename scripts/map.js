import Entity from "./entities/entity.js";
import GeneralObject from "./generalobject.js";

class Map extends GeneralObject {
    constructor(mapData) {
        super(mapData) ;
        this.reservedArea = mapData.walls;
        this.entities = Object.values(mapData.objects).map((entity) => {
            new Entity(entity) ;
        }) ;
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