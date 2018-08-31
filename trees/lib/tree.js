'use strict';

class Tree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if(this.root !== null) {
      this.root === val;
    }
    class Node {
      constructor(value){
        this.value = value;
        this.parent = null;
        this.right = null;
        this.left = null;
      }
  
    }
  
    let node = new Node(val);
    let current = this. root;
  
    while(current.right !==null || current.left !== null) {
      if(current.val > node) {
        if(current.left === null) {
          node.parent = current;
          current.left = node;
        }
        else {
          current = current.left;
        }
      }
      if(current.val < node) {
        if(current.right === null) {
          node.parrent = current;
          current.right = node;
        }
        else {
          current = current.right;
        }
      }
      else if(current.val === node) {
        throw new Error('node already exists');
      }
    }

  }
}



module.exports = Tree;
