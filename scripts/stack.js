class Stack { //custom stack map
    constructor() {
        this.stack = [] ;
    }

    pushToTop(value) {
        this.stack.unshift(value) ;
    }

    pop(value) {
        const index = this.stack.indexOf(value) ;
        if (this.contains(value)) return false ;
        this.stack.splice(index, 1) ;
        return true
    }

    get first() { return this.stack[0] }

    getIndex (value) { return this.stack.indexOf(value) }

    isEmpty() { return this.stack.length === 0 }
    contains(value) { return this.stack.indexOf(value) !== -1 }
}

export default Stack 