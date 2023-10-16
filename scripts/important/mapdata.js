import { dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    walls: [
        [-150, -39], 
        [375, -39], 
        [-150, 201], 
        [375, 201]]
    , //refactor to objects
    objects: {
        main: mainChar,
        char2: dragon
    }
};