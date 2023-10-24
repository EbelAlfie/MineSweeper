import CustomCanvas from "./customcanvas.js"

let world ;
main() ;

function main() {
    initSplash()
    world = new CustomCanvas({
        space: document.querySelector(".floor")
    });
    world.createChurch() ;
    
    setupKeyActions() ;
}

function initSplash() {
    document.querySelector("splash-screen")
}

function setupKeyActions() { //debounce? 
    document.onkeydown = (event) => {
        world.onKeyDown(event.key);
    }

    document.onkeyup = (event) => {
        world.onKeyUp(event.key) ;
    }
}