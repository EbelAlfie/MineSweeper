export const churchObj = {
    img: "../resource/assets/mapchips/map.png",
    width: 842,
    height: 347,
    objects: {}
};
/** hardcoded, depends on the char sheets */
const mainCharAnim =  {
    default: {
        frames: 1, 
        anim: [[25,0]]
    },
    walkSouth: {
        frames: 3, 
        anim: [[25,0], [0, 0], [50, 0]]
    }, 
    walkWest: {
        frames: 3,
        anim: [[25, 32], [0, 32], [50, 32]]
    },
    walkEast: {
        frames: 3,
        anim: [[25, 64], [0, 64], [50, 64]]
    },
    walkNorth: {
        frames: 3,
        anim: [[25, 96], [0, 96], [50, 96]]
    }
}
export const mainChar = {
    x: 150,
    y: 75,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};
