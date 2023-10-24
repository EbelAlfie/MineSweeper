import CustomCanvas from "./customcanvas.js"

let world ;
main() ;

function main() {
    initSplash()
}

function initSplash() {
    document.querySelector(".splash-screen")
    .querySelector(".btn-start").onclick = () => {
        handleTransition() ;
        initGame() ;
    }
}

function initGame() {
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

function handleTransition() {
    document.body.style.backgroundImage = "url('../resource/assets/backgroundgame.jpg')";
    document.querySelector(".splash-screen").style.display = "none" ;
    document.querySelector(".floor").style.display = "block" ;
}