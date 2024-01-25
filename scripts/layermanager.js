
class LayerManager {
    constructor(canvasContext) {
        this.context = canvasContext
    }

    manageObjectOrder(entities) {
        return Object.values(entities).sort((a, b) => {
            return a.y - b.y 
        });
    }
}

export default LayerManager ;