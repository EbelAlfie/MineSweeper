import Entity from "../abstracted/entity.js";
import { dragon, mainChar } from "./chardata.js";

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    defaultReserved: [ 
        [-150, -39], 
        [375, -39], 
        [-150, 201], 
        [375, 201]
    ]
    , //refactor to objects
    objects: {
        main: new Entity(dragon), 
        char2: new Entity(mainChar),
    }
};