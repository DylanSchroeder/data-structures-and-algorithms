'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if(this.root === null)
      this.root = newNode;

    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null)
        node.left = newNode;

      else this.insertNode(node.left, newNode);
    }
    else {
      if(node.right === null)
        node.right = newNode;

      else this.insertNode(node.right, newNode);
    }
  }

  find(value){
    if(!this.root){
      return 'Empty Tree!';
    }
    let current = this.root;

    while(current) {
      if(value === current.value) {
        return true;
      } 
      else {
        if(value > current.value) {
          if(current.right) {
            current=current.right;
          } 
          else return false;
        }

        if(value < current.value) {
          if(current.left) {
            current = current.left;
          } 
          else return false;
        }
      }
    } 
    return false;
  }

} 

module.exports = Tree;