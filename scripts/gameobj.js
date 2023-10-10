export const churchObj = {
    img: "../resource/assets/map.png"
};

const mainCharAnim =  {
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
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};
