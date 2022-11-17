// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []) {
        this.container = container;
    }

    removeFromStack() {
        return this.container.pop();
    }

    addToStack(el) {
        this.container.push(el);
    }
}

module.exports = Stack;
