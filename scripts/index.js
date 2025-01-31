import { enterAnimation, exitAnimation } from "./animation/screenanimation.js";
import CustomCanvas from "./customcanvas.js"

let world ;
let splashContainer = document.querySelector(".splash-screen") ;
let gameContainer = document.querySelector(".floor") ;

main() ;

function main() {
    initSplash()
}

function initSplash() {
    splashContainer.querySelector(".btn-start").onclick = () => {
        splashExitTransition() ;
    }
}

function initGame() {
    world = new CustomCanvas({
        space: gameContainer
    });
    
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

function splashExitTransition() {
    splashContainer.animate(
        exitAnimation,
        {
            duration: 1000,
            iterations: 1
        }
    ).onfinish = () => {
        splashContainer.style.display =  "none" ;
        gameCanvasEnterTransition() ;
    }
}

function gameCanvasEnterTransition() {
    document.body.style.backgroundImage = 'url("resource/assets/backgroundgame.jpg")';
    gameContainer.style.display = "block" ;
    gameContainer.animate(
        enterAnimation,
        {
            duration: 2000,
            iterations: 1
        }
    )
    initGame() ;
}