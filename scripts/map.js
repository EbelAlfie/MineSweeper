import GeneralObject from "./base/generalobject.js";
import { absoluteX, absoluteY } from "./utils.js";

class Map extends GeneralObject {

    constructor(
        mapData,
        canvas
    ) {
        super(mapData) ;
        this.canvas = canvas
        this.reservedArea = mapData.tileInfo || {} ;
        this.entities = mapData.objects;
        this.events = new Event({
            mapObjects: mapData.objects, 
            mapEvents: mapData.events
        }) ;
    }

    /** check for event in current tile */
    lookFront(mainChar, direction) {
        const { x, y, width, height, speed } = mainChar

        let entityX = x 
        let entityY = y 

        let hitBox = {
            edgeOne: null,
            edgeTwo: null
        }
        switch (direction) {
            case "North" : {
                entityY -= speed
                const topLeft = [entityX, entityY + height/2]
                const topRight = [entityX + width, entityY + height/2]
                
                hitBox = {
                    edgeOne: `${topLeft[0]},${topLeft[1]}`,
                    edgeTwo: `${topRight[0]},${topRight[1]}`
                }
                break 
            }
            case "South" : {
                entityY += speed 
                const bottomLeft = [entityX, entityY + height]
                const bottomRight = [entityX + width, entityY + height] 
                hitBox = {
                    edgeOne: `${bottomLeft[0]},${bottomLeft[1]}`,
                    edgeTwo: `${bottomRight[0]},${bottomRight[1]}`
                }
                break 
            }
            case "East" : {
                entityX += speed 
                const topRight = [entityX + width, entityY + height/2]
                const bottomRight = [entityX + width, entityY + height] 
                hitBox = {
                    edgeOne: `${topRight[0]},${topRight[1]}`,
                    edgeTwo: `${bottomRight[0]},${bottomRight[1]}`
                }
                break
            }
            case "West" : {
                entityX -= speed 
                const topLeft = [entityX, entityY + height/2]
                const bottomLeft = [entityX, entityY + height]
                hitBox = {
                    edgeOne: `${topLeft[0]},${topLeft[1]}`,
                    edgeTwo: `${bottomLeft[0]},${bottomLeft[1]}`
                }
                break
            }
        }
        console.log(this.reservedArea[`${entityX},${entityY}`])
        console.log(`edge one ${hitBox.edgeOne}`)
        console.log(`my coord ${entityX} ${entityY}`)

        if (entityX < 0 || entityY < 0 || entityY > this.getHeight() || entityX > this.getWidth()) return true ;
        return this.reservedArea[hitBox.edgeOne] ?? this.reservedArea[hitBox.edgeTwo] 
    }

    checkForEvent(mainChar) {
        const entity = this.lookFront(mainChar, mainChar.direction)
        return entity ;
    }

    unregisterAreaBlock() {
        this.reservedArea = {}
    }

    registerArea(entity) {
        const x = entity.x
        const y = entity.y
        if (!x || !y) return ;
        const hitBox = entity.hitBox
        const charWidth = entity.getWidth()
        const charHeight = entity.getHeight()
        // const charTopX = absoluteX(hitBox.topLeft[0], this.canvas.width, pivot.x)
        // const charTopXEnd = absoluteY(hitBox.topRight[0], this.canvas.height, pivot.x)
        // const charBotY = absoluteX(hitBox.bottomLeft[1], this.canvas.width, pivot.y)
        // const charTopYEnd = absoluteY(hitBox.topLeft[1], this.canvas.height, pivot.y)
        for(let i = hitBox.topLeft[0]; i < hitBox.topRight[0]; i++) { //X
            for(let j = hitBox.topLeft[1] + charHeight/2; j < hitBox.bottomLeft[1]; j++) {
                this.reservedArea[`${i},${j}`] = entity
            }
        }
    }
    unregisterArea(entity) {
        const hitBox = entity.hitBox
        const charWidth = entity.getWidth()
        const charHeight = entity.getHeight()
        const charTopX = absoluteX(hitBox.topLeft[0], this.canvas.width, pivot.x)
        const charTopXEnd = absoluteY(hitBox.topRight[0], this.canvas.height, pivot.x)
        const charBotY = absoluteX(hitBox.bottomLeft[1], this.canvas.width, pivot.y)
        const charTopYEnd = absoluteY(hitBox.topLeft[1], this.canvas.height, pivot.y)
        for(let i = charTopX; i < charTopXEnd; i++) { //X
            for(let j = charBotY; j < charTopYEnd; j--) {
                delete this.reservedArea[`${i},${j}`]
            }
        }
    }
 }

export default Map 