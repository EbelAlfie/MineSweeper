import Entity from "./entity.js"

class Church {
    constructor(church) {
        this.canvas = church.space.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
        this.map = church.map;
    }

    create() {
        this.createChurch() ;
        this.populateChurch() ;
    }

    createChurch() {
        let room = new Image();
        room.onload = () => {
            // this.context.drawImage(room, 
            //     0, 0,
            //     30, 30, 
            //     100, 100,
            //     100, 100
            // ); 
        }
        room.src = this.map ;
    }

    populateChurch() {
        let mainChar = new Entity({
            x: 0,
            y: 0,
            body: "../resource/assets/charachips/mc.png"
        });
        setTimeout(() => {
            mainChar.sprite.render(this.context); 
        }, 200);
    }
}

export default Church