import { enterAnimation, exitAnimation } from "./animation.js";
import CustomCanvas from "./customcanvas.js"

let world ;
let splashContainer = document.querySelector(".splash-screen") ;
let gameContainer = document.querySelector(".floor") ;

main() ;

function main() {
    initGame() ;
    //initSplash()
}

function initSplash() {
    splashContainer.querySelector(".btn-start").onclick = () => {
        splashExitTransition() ;
    }
}

function initDebug() {
    splashContainer.style.display = "none" ;
    document.body.style.backgroundImage = "url('../resource/assets/backgroundgame.jpg')";
    gameContainer.style.display = "block";
    initGame() ;
}

function initGame() {
    world = new CustomCanvas({
        space: gameContainer
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

function splashExitTransition() {
    splashContainer.animate(
        exitAnimation,
        {
            duration: 1000,
            iterations: 1
        }
    ).onfinish = () => {
        document.body.style.backgroundImage = "url('../resource/assets/backgroundgame.jpg')";
        splashContainer.style.display =  "none" ;
        gameCanvasEnterTransition() ;
    }
}

function gameCanvasEnterTransition() {
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