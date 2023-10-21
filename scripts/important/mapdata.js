import Entity from "../abstracted/entity.js";
import { asGridCoords, toPixel } from "../utils.js";
import { commoner, dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/mapex.png"
    },
    defaultReserved: {
        [asGridCoords(3,5)]: true,
        [asGridCoords(4,5)]: true,
        [asGridCoords(5,5)]: true,
        [asGridCoords(6,5)]: true,
        [asGridCoords(3,6)]: true,
        [asGridCoords(7,6)]: true,
    }, //refactor to objects
    objects: {
        main: new Entity(mainChar), 
        char1: new Entity(dragon),
        char2: new Entity(commoner)
    }
};