import Entity from "../abstracted/entity.js";
import { dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    defaultReserved: {
        "-150, -39" : true, 
        "375, -39" : true, 
        "-150, 201" : true, 
        "375, 201" : true
    }
    , //refactor to objects
    objects: {
        main: new Entity(mainChar), 
        char2: new Entity(dragon),
    }
};