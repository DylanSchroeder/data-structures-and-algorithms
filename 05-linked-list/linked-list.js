'use strict';

let linkedList = new LinkedList();


function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val) {
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

//TODO includes

// LinkedList.prototype.includes

LinkedList.prototype.insertNode = function(value) {
  var node = {
    value: value,
    next: this.head,
  }; 
  this.head = node;

};

module.exports = LinkedList;