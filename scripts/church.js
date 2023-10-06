class Church {
    constructor(floor) {
        this.canvas = floor.querySelector(".screen");
        this.context = this.canvas.getContext("2d") ;
    }

    init() {
        let room = new Image();
        room.onload = () => {
            this.context.drawImage(room, 0, 0); 
        }
        room.src = "../resource/assets/map.png" ;
    }
}

export default Church