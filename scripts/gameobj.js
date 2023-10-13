export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    objects: {}
};
/** hardcoded, depends on the char sheets */
const mainCharAnim =  {
    idleSouth: {
        frames: 1, 
        anim: [[25,0]]
    },
    walkSouth: {
        frames: 3, 
        anim: [[25,0], [0, 0], [50, 0]]
    }, 

    idleWest: {
        frames: 1, 
        anim: [[25,32]]
    },
    walkWest: {
        frames: 3,
        anim: [[25, 32], [0, 32], [50, 32]]
    },

    idleEast: {
        frames: 1, 
        anim: [[25,64]]
    },
    walkEast: {
        frames: 3,
        anim: [[25, 64], [0, 64], [50, 64]]
    },

    idleNorth: {
        frames: 1, 
        anim: [[25,96]]
    },
    walkNorth: {
        frames: 3,
        anim: [[25, 96], [0, 96], [50, 96]]
    }
}
export const mainChar = {
    x: 140,
    y: 65,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};

const akagamiAnim = {
    idleSouth: {
        frames: 1, 
        anim: [[18,0]]
    },
    walkSouth: {
        frames: 3, 
        anim: [[19,0], [0, 0], [38, 0]]
    }, 

    idleSouthWest: {
        frames: 1, 
        anim: [[25,0]]
    },
    walkSouthWest: {
        frames: 3, 
        anim: [[25,0], [0, 0], [50, 0]]
    }, 

    idleWest: {
        frames: 1, 
        anim: [[18,32]]
    },
    walkWest: {
        frames: 3,
        anim: [[19, 32], [0, 32], [38, 32]]
    },

    idleEast: {
        frames: 1, 
        anim: [[19,60]]
    },
    walkEast: {
        frames: 3,
        anim: [[19, 60], [0, 60], [38, 60]]
    },

    idleNorth: {
        frames: 1, 
        anim: [[25,96]]
    },
    walkNorth: {
        frames: 3,
        anim: [[18, 96], [0, 96], [36, 96]]
    }
}
export const akagami = {
    x: 140,
    y: 65,
    body: {
        src: "../resource/assets/charachips/akagami.png",
        anims: akagamiAnim
    } 
};