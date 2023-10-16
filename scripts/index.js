import CustomCanvas from "./customcanvas.js"
import * as GameObj from "./important/chardata.js"

let world ;
main() ;

function main() {
    world = new CustomCanvas({
        space: document.querySelector(".floor")
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