import Church from "./church.js"
let church ;
main() ;

function main() {
    church = new Church({
        space: document.querySelector(".floor"),
        map: "../resource/assets/mapchips/map.png"
    });
    church.create() ;
    setupKeyActions() ;
}


function setupKeyActions() {
    document.onkeydown = (event) => {
        church.handleKeyPress(event.key) ;     
    }
}