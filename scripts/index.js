import Church from "./church.js"

main() ;

function main() {
    let church = new Church({
        space: document.querySelector(".floor"),
        map: "../resource/assets/mapchips/map.png"
    });
    church.create() ;
    setupKeyActions() ;
}


function setupKeyActions() {
}