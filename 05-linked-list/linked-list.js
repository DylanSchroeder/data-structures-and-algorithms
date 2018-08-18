'use strict';

let linkedList = new LinkedList();


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

// LinkedList.prototype.push = function(val) {
//   var node = {
//     value: val,
//     next: null,

//   };
//   if(!this.head) {
//     this.head = node;
//   }
//   else {
//     let current = this.head;

//     while(current.next) {
//       current = current.next;
//     }
//     current.next = node;
//   }
// };

module.exports = LinkedList;