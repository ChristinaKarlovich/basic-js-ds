const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  start = null;

  root() {
    return this.start;
  }

  add(data, elem = this.start) {
    if (elem) {
      if (elem.data > data) {
        elem.left
          ? this.add(data, elem.left)
          : (elem.left = { data, left: null, right: null, parent: elem });
      } else
        elem.right
          ? this.add(data, elem.right)
          : (elem.right = { data, left: null, right: null, parent: elem });
    } else {
      this.start = { data, left: null, right: null };
    }
  }

  has(data, elem = this.start) {
    if (elem) {
      if (elem.data === data) return true;
      else
        return elem.data > data
          ? this.has(data, elem.left)
          : this.has(data, elem.right);
    } else return false;
  }

  find(data, elem = this.start) {
    if (elem) {
      if (elem.data === data) return elem;
      else
        return elem.data > data
          ? this.find(data, elem.left)
          : this.find(data, elem.right);
    } else return null;
  }

  remove(data, current = this.start, parent = null) {
    let node = this.find(data);
    if (!node.left && !node.right) {
      node.parent.left === node
        ? (node.parent.left = null)
        : (node.parent.right = null);
      node.parent = null;
    }
    if (node.left && !node.right) {
      if (node.parent) {
        node.parent.left === node
          ? (node.parent.left = node.left)
          : (node.parent.right = node.left);
        node.left.parent = node.parent;
        node.parent = null;
      }
    }
    if (!node.left && node.right) {
      if (node.parent) {
        node.parent.left === node
          ? (node.parent.left = node.right)
          : (node.parent.right = node.right);
        node.right.parent = node.parent;
        node.parent = null;
      }
    }
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
