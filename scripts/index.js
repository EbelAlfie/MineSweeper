import Map from "./church.js"
import * as GameObj from "./gameobj.js"

let map ;
main() ;

function main() {
    map = new Map({
        space: document.querySelector(".floor"),
        gameObj: GameObj.churchObj
    });
    map.createChurch() ;
    
    setupKeyActions() ;
}

function setupKeyActions() { //debounce? 
    document.onkeydown = (event) => {
        map.onKeyDown(event.key);
    }

    document.onkeyup = (event) => {
        map.onKeyUp(event.key) ;
    }
}