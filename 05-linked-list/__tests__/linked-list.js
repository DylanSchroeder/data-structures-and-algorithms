'use strict';

const linkedList = require('../linked-list');

describe('insert node', ()=> {
  it('adds a new node to the head of the list', ()=>{
    let newList = new linkedList();
    newList.insertNode(5);

    expect(newList.head).not.toBe(null);
    expect(newList.head.value).toBe(5);
  });

  describe('includes', ()=> {
    it('can check if a value exists as a node value somewhere in the list', ()=>{
      let listTest = new linkedList();
      listTest.insertNode(10);
      listTest.insertNode(20);
      
      expect(listTest.includes(10)).toBe(true);
      expect(listTest.includes(15)).toBe(false);
    });

    describe('LinkedList', ()=>{
      it('can check if there are any nodes in the list and return null if there are none', ()=>{
        let noList = new linkedList();
        expect(noList.head).toBe(null);
      });
    });
  });
  
});