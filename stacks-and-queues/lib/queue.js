'use strict';

//use doubly linked list instead of singly linked like in stack
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
  }

  enqueue(value){
    var node = new Node(value);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } 
    else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.nodeCount++;
  }

  dequeue(){
    let pointer = this.head;

    this.head = this.head.next;
    this.head.prev = null;
    this.nodeCount--;
    
    return pointer.value;
  }
}

module.exports = Queue;