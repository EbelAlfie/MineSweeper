class LayerManager {
    constructor(canvasContext) {
        this.context = canvasContext
    }

    manageObjectOrder(entities) {
        console.log(
            Object.values(entities).sort((a, b) => {
                a.x < b.x 
            })
        ) ;
    }
}

export default LayerManager ;