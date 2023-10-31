import Entity from "../abstracted/entity.js";
import { asGrid } from "../utils.js";
import { commoner, dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/Mapmv.png"
    },
    tileInfo: {
        
    }, //refactor to objects
    objects: {
        main: new Entity(mainChar), 
    }
};