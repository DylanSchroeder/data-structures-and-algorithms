'use strict';


function LinkedList(){
  this.head = null;
}

LinkedList.prototype.includes = function(value) {
  let current = this.head;
  while(current.next !== null && current.value !== value) {
    current = current.next;
  }
  if(current.value === value) {
    return true;
  }
  else if(current.next === null) {
    return false;
  }
};

LinkedList.prototype.insertNode = function(value) {
  var node = {
    value: value,
    next: this.head,
  }; 
  this.head = node;

};

LinkedList.prototype.append = function(val) {
  var node = {
    value: val,
    next: null,

  };
  if(!this.head) {
    this.head = node;
  }
  else {
    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.insertBefore = function(val, newVal) {
  var node = {
    value: newVal,
    next: null,
  };
  
  let current = this.head;
  
  while(current.next !== null && current.next.value !== val) {
    current = current.next;
  }
  let newNode = current.next;
  node.next = newNode;
  current.next = node;
};

LinkedList.prototype.insertAfter = function(val, newVal) {
  var newNode = {
    value: newVal,
    next: null,
  };
  let current = this.head;
  if (current == null) {
    throw new Error('value not found');
  }
  while(current.next !== null && current.value !== val) {
    current = current.next;
  }
  let foundNode = current.next;
  if (!foundNode) {
    throw new Error('value not found');
  }
  newNode.next = foundNode;
  current.next = newNode;
};

LinkedList.prototype.kFromEnd = function(k) {
  let currentNode = this.head;
  let count = 1;

  while(currentNode.next){
    currentNode = currentNode.next;
    count ++;
  }
  currentNode = this.head;

  for(let i = 1; i < (count - k); i ++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

module.exports = LinkedList;