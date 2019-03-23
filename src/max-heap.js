const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		const node = new Node(data, priority);
    this.heapSize += 1;
		this.insertNode(node);
    this.shiftNodeUp(node);
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
    return this.heapSize;
	}

	isEmpty() {
    return this.heapSize === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
    if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
