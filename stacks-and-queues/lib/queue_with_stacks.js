'use strict';

const PushPopStack = require('../lib/push-pop');

class Queue{
  constructor(){
    this.value = new PushPopStack();
  }
  enqueue(val) {
    if(!val) {
      throw new Error('No calling enqueue without value');
    }
    this.value.push(val);
  }
  dequeue(){
    if(!this.value.head) {
      throw new Error('No calling dq with empty list');
    }
    let newValue;
    let stack2 = new PushPopStack();
    let current = this.value.head;

    while(current !== null){
      if(current.next !== null){
        stack2.push(this.value.pop());
      }
      else{
        newValue = this.value.pop();
      }
      current = current.next;
    }
    current = stack2.head;
    while(current !== null){
      this.value.push(stack2.pop());
      current = current.next;
    }
    return newValue;
  }
}

module.exports = Queue;
