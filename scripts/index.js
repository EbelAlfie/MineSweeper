import CustomCanvas from "./customcanvas.js"
import * as GameObj from "./gameobj.js"

let world ;
main() ;

function main() {
    world = new CustomCanvas({
        space: document.querySelector(".floor"),
        mapData: GameObj.churchObj
    });
    world.createChurch() ;
    
    setupKeyActions() ;
}

function setupKeyActions() { //debounce? 
    document.onkeydown = (event) => {
        world.onKeyDown(event.key);
    }

    document.onkeyup = (event) => {
        world.onKeyUp(event.key) ;
    }
}