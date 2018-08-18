'use strict';

const linkedList = require('../linked-list');

describe('insert node', ()=> {
  it('adds a new node to the head of the list', ()=>{
    let newList = new linkedList();
    newList.insertNode(5);

    expect(newList.head).not.toBe(null);
    expect(newList.head.value).toBe(5);
  });
  
});