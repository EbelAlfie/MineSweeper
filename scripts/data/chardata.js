import { toPixel } from "../utils.js";

//TODO convert to JSON
/** hardcoded, depends on the char sheets */
const mainCharAnim =  {
    South: {
        frames: [[25,0]]
    },
    walkSouth: {
        frames: [[0,0], [25, 0], [50, 0]]
    }, 

    West: {
        frames: [[25,32]]
    },
    walkWest: {
        frames: [[0, 32], [25, 32], [50, 32]]
    },

    East: {
        frames: [[25,64]]
    },
    walkEast: {
        frames: [[0, 64], [25, 64], [50, 64]]
    },

    North: {
        frames: [[25,96]]
    },
    walkNorth: {
        frames: [[0, 96], [25, 96], [50, 96]]
    }
}

/**
 * x and y represent logically coordinate
 * height and width represent logical value
 * 
 * the imagery value is actually the coordinate at the frames. Which is above
 */
export const mainChar = {
    isMainChar: true,
    x: toPixel(12),
    y: toPixel(3),
    height: 32,
    width: 20,
    speed: 2,
    body: {
        src: "resource/assets/charachips/mc.png",
        anims: mainCharAnim
    } 
};

const akagamiAnim = {
    South: {
        frames: [[19,0]]
    },
    walkSouth: {
        frames: [[19,0], [0, 0], [38, 0]]
    }, 

    SouthWest: {
        frames: [[25,0]]
    },
    walkSouthWest: {
        frames: [[19,0], [0, 0], [50, 0]]
    }, 

    West: {
        frames: [[18,32]]
    },
    West: {
        frames: [[19, 32], [0, 32], [38, 32]]
    },

    East: {
        frames: [[19,60]]
    },
    walkEast: {
        frames: [[19, 60], [0, 60], [38, 60]]
    },

    North: {
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
    speed: 4, 
    body: {
        src: "resource/assets/charachips/akagami.png",
        anims: akagamiAnim
    } 
};

const dragonAnim = {
    South: {
        frames: [[0,0], [80, 0], [160, 0]]
    },
    walkSouth: {
        frames: [[0,0], [80, 0], [160, 0]]
    }, 

    West: {
        frames: [[0, 64], [80, 64], [160, 64]]
    },
    walkWest: {
        frames: [[0, 64], [80, 64], [160, 64]]
    },

    East: {
        frames: [[0, 128], [80, 128], [160, 128]]
    },
    walkEast: {
        frames: [[0, 128], [80, 128], [160, 128]]
    },

    North: {
        frames: [[0, 192], [80, 192], [160, 192]]
    },
    walkNorth: {
        frames: [[0, 192], [80, 192], [160, 192]]
    }
}
export const dragon = {
    x: toPixel(10),
    y: toPixel(9),
    height: 64,
    width: 80,
    speed: 4, 
    body: {
        src: "resource/assets/charachips/dragon.png",
        anims: dragonAnim
    } 
};

const commonAnim = {
    South: {
        frames: [[25,0]]
    },
    walkSouth: {
        frames: [[0,0], [25, 0], [50, 0]]
    }, 

    West: {
        frames: [[25,32]]
    },
    walkWest: {
        frames: [[0, 32], [25, 32], [50, 32]]
    },

    East: {
        frames: [[25,64]]
    },
    walkEast: {
        frames: [[0, 64], [25, 64], [50, 64]]
    },

    North: {
        frames: [[25,96]]
    },
    walkNorth: {
        frames: [[0, 96], [25, 96], [50, 96]]
    }
}
export const commoner = {
    x: toPixel(3),
    y: toPixel(6),
    height: 32,
    width: 25,
    speed: 4,
    body: {
        src: "resource/assets/charachips/jemaat1.png",
        anims: commonAnim
    } 
};