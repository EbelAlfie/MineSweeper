export const centerizeX = (x = 0, canvasWidth) => {
    if (canvasWidth === null || canvasWidth === undefined) return x ;
    return x + (canvasWidth/2) ;
}

export const centerizeY = (y = 0, canvasHeight) => {
    if (canvasHeight === null || canvasHeight === undefined) return y ;
    return y + (canvasHeight/2) ;
}

export const computeOriginal= () => {

}

export const shiftsWall= () => {
        
}

export const toPixel= (rawNumber) => { return rawNumber * 16 }

export const asGrid = (x, y) => {
    return `${x*16},${y*16}`
}

export const range = (startX, startY, endX, endY, object) => {
    for (let x = toPixel(startX); x < toPixel(endX); x++) {
        for (let y = toPixel(startY); y < toPixel(endY); y++) {
            object[`${x},${y}`] = true 
        }
    } 
}