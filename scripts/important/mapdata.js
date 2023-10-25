import Entity from "../abstracted/entity.js";
import { asGrid } from "../utils.js";
import { commoner, dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/mapex.png"
    },
    tileInfo: {
        [asGrid(3,5)]: true,
        [asGrid(4,5)]: true,
        [asGrid(5,5)]: true,
        [asGrid(6,5)]: true,
        [asGrid(3,6)]: true,
        [asGrid(7,6)]: true,
    }, //refactor to objects
    objects: {
        main: new Entity(mainChar), 
        char1: new Entity(commoner),
        char2: new Entity(commoner)
    }
};