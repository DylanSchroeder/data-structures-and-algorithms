'use strict';

const linkedList = require('../linked-list');

describe('linked-list', ()=> {

  describe('insert node', ()=> {
    it('adds a new node to the head of the list', ()=>{
      let newList = new linkedList();
      newList.insertNode(5);

      expect(newList.head).not.toBe(null);
      expect(newList.head.value).toBe(5);
    });
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

    describe('append', ()=> {
      it('can add a new node to the end of the list', ()=> {
        let appendList = new linkedList();
        appendList.append(50);
        appendList.insertNode(20);

        expect(appendList.includes(50)).toBe(true);
        expect(appendList).toEqual({ head: { value: 20, next: { value: 50, next: null } } } );
      });
    });

    describe('insertBefore', ()=> {
      it('can insert a new node before the first value node', ()=> {
        let ib = new linkedList();
        ib.insertNode(10);
        ib.insertNode(20);
        ib.insertNode(30);
        ib.insertBefore(20, 15);

        expect(ib).toEqual({ head: { value: 30, next: { value: 15, next: { value: 20, next: { value: 10, next: null } } } } });
      });
    });

    // describe('insertAfter', ()=> {
    //   it('can insert a new node after the first value node', ()=> {
    //     let ia = new linkedList();
    //     ia.insertNode(10);
    //     ia.insertNode(20);
    //     ia.insertNode(30);
    //     ia.insertAfter(20, 15);
    //     console.log(ia);

    //     expect(ia).toEqual({ head: { value: 30, next: { value: 20, next: { value: 15, next: { value: 10, next: null } } } } });
    //   });
    // });

  });
  
});