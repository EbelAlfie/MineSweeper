//TODO convert to JSON
export const churchObj = {
    x: 0,
    y: 0,
    body: {
        src: "../resource/assets/mapchips/map.png"
    },
    walls: {
        topLeft: [-150, -39],
        topRight: [375, -39],
        bottomLeft: [-150, 201],
        bottomRight: [375, 201]
    }, //refactor to objects
    objects: {}
};
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
    x: 0,
    y: 0,
    height: 32,
    width: 25,
    body: {
        src: "../resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};

const akagamiAnim = {
    idleSouth: {
        frames: [[18,0]]
    },
    walkSouth: {
        frames: [[19,0], [0, 0], [38, 0]]
    }, 

    idleSouthWest: {
        frames: [[25,0]]
    },
    walkSouthWest: {
        frames: [[25,0], [0, 0], [50, 0]]
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
    x: 140,
    y: 300,
    body: {
        src: "../resource/assets/charachips/akagami.png",
        anims: akagamiAnim
    } 
};