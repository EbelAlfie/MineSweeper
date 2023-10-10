import Church from "./church.js"
import * as GameObj from "./gameobj.js"

let church ;
main() ;

function main() {
    church = new Church({
        space: document.querySelector(".floor"),
        map: GameObj.churchObj
    });
    church.createChurch() ;
    setupKeyActions() ;
}

function setupKeyActions() { //debounce? 
    document.onkeydown = (event) => {
        church.handleKeyPress(event.key);
    }
}