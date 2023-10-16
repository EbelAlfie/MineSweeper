//TODO convert to JSON
/** hardcoded, depends on the char sheets */
const mainCharAnim =  {
    idleSouth: {
        frames: [[25,0]]
    },
    walkSouth: {
        frames: [[0,0], [25, 0], [50, 0]]
    }, 

    idleWest: {
        frames: [[25,32]]
    },
    walkWest: {
        frames: [[0, 32], [25, 32], [50, 32]]
    },

    idleEast: {
        frames: [[25,64]]
    },
    walkEast: {
        frames: [[0, 64], [25, 64], [50, 64]]
    },

    idleNorth: {
        frames: [[25,96]]
    },
    walkNorth: {
        frames: [[0, 96], [25, 96], [50, 96]]
    }
}
export const mainChar = {
    isMainChar: true,
    x: 0,
    y: 0,
    height: 32,
    width: 25,
    speed: 3,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};

const akagamiAnim = {
    idleSouth: {
        frames: [[19,0]]
    },
    walkSouth: {
        frames: [[19,0], [0, 0], [38, 0]]
    }, 

    idleSouthWest: {
        frames: [[25,0]]
    },
    walkSouthWest: {
        frames: [[19,0], [0, 0], [50, 0]]
    }, 

    idleWest: {
        frames: [[18,32]]
    },
    walkWest: {
        frames: [[19, 32], [0, 32], [38, 32]]
    },

    idleEast: {
        frames: [[19,60]]
    },
    walkEast: {
        frames: [[19, 60], [0, 60], [38, 60]]
    },

    idleNorth: {
        frames: [[25,96]]
    },
    walkNorth: {
        frames: [[18, 96], [0, 96], [36, 96]]
    }
}
export const akagami = {
    x: 30,
    y: 30,
    height: 32,
    width: 19,
    speed: 3, 
    body: {
        src: "../resource/assets/charachips/akagami.png",
        anims: akagamiAnim
    } 
};

const dragonAnim = {
    idleSouth: {
        frames: [[80,0]]
    },
    walkSouth: {
        frames: [[0,0], [80, 0], [160, 0]]
    }, 

    idleWest: {
        frames: [[80,64]]
    },
    walkWest: {
        frames: [[0, 64], [80, 64], [160, 64]]
    },

    idleEast: {
        frames: [[80,128]]
    },
    walkEast: {
        frames: [[0, 128], [80, 128], [160, 128]]
    },

    idleNorth: {
        frames: [[80,192]]
    },
    walkNorth: {
        frames: [[0, 192], [80, 192], [160, 192]]
    }
}
export const dragon = {
    x: 0,
    y: 0,
    height: 64,
    width: 80,
    speed: 3, 
    body: {
        src: "../resource/assets/charachips/dragon.png",
        anims: dragonAnim
    } 
};