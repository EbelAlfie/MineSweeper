import Entity from "../base/entity.js";
import GeneralObject from "../base/generalobject.js";
import { toPixel } from "../utils.js";
import { commoner, dragon, mainChar } from "./chardata.js";

export const MAIN_CHARACTER = "main"

const podium = {
    x: toPixel(11),
    y: toPixel(14),
    height: 40,
    width: 53,
    body: {
        src: "resource/assets/mapchips/podium.png",
    } 
};

export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "resource/assets/mapchips/mapbottom.png"
    },
    tileInfo: {
        
    }, //refactor to objects
    objects: {
        main: new Entity(mainChar), 
        podium: new GeneralObject(podium)
    }
};