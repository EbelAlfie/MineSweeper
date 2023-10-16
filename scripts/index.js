import CustomCanvas from "./customcanvas.js"
import * as GameObj from "./gameobj.js"

let church ;
main() ;

function main() {
    church = new CustomCanvas({
        space: document.querySelector(".floor"),
        gameObj: GameObj.churchObj
    });
    church.createChurch() ;
    
    setupKeyActions() ;
}

function setupKeyActions() { //debounce? 
    document.onkeydown = (event) => {
        church.onKeyDown(event.key);
    }

    document.onkeyup = (event) => {
        church.onKeyUp(event.key) ;
    }
}