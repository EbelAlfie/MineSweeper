import Entity from "../abstracted/entity.js";
import { toPixel } from "../utils.js";
import { dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    defaultReserved: {
        "48,80": true,
        "64,80": true,
        "80,80": true,
        "96,80": true,
    }, //refactor to objects
    objects: {
        main: new Entity(mainChar), 
        char1: new Entity(dragon),
    }
};