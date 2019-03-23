class Node {
	constructor(data, priority) {
    this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right= null;
	}

	appendChild(node) {
    if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right= node;
			this.right.parent = this;
	  }

		return this;
	}

	removeChild(node) {
		if (this.left === node) {
      this.left = null;
      node.parent = null;
    } else if (this.right === node) {
      this.right = null;
			node.parent = null;
    }	else {
			throw new Error('passed node is not a child of this node');
		}

    return this;
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}

		return this;
	}

	swapWithparent() {
	
	}

}

module.exports = Node;
