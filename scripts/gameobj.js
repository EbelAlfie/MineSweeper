export const churchObj = {
    img: "../resource/assets/mapchips/map.png",
    width: 842,
    height: 425
};

const mainCharAnim =  {
    default: {
        frames: 1, 
        anim: [[0,0]]
    },
    walkSouth: {
        frames: 3, 
        anim: [[0,0], [25, 0], [50, 0]]
    }, 
    walkWest: {
        frames: 3,
        anim: [[0, 32], [25, 32], [50, 32]]
    },
    walkEast: {
        frames: 3,
        anim: [[0, 64], [25, 64], [50, 64]]
    },
    walkNorth: {
        frames: 3,
        anim: [[0, 96], [25, 96], [50, 96]]
    }
}
export const mainChar = {
    x: 96,
    y: 96,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};
