'use strict';


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}



class PushPopStack{
  constructor(){
    this.head = null;
    this.nodeCount = 0;
  }

  pop(){
    let alert = 'There are no nodes to be popped in list!';
    let pointer = this.head;
    if(pointer === null){
      return alert;
    }
    this.head = this.head.next;
    this.nodeCount--;
    return pointer.value;
  }
  push(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.nodeCount++;
  }
}

module.exports = PushPopStack;