const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  root = null;
  last = null;
  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.root) this.last.next = node;
    else this.root = node;
    this.last = node;
  }

  dequeue() {
    if (this.root) {
      let val = this.root.value;
      this.root = this.root.next;
      return val;
    }
  }
}

module.exports = {
  Queue,
};
