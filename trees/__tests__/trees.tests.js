'use strict';

const Tree = require('../lib/trees');

describe ('Tree', ()=> {
  describe('insert', ()=> {
    it('adds a new node as the root of the tree if no nodes already exist', ()=> {
      let test = new Tree();
      test.insert(5);
      expect(test.root.value).toBe(5);
    });
    it('inserts a new node to the right of the root if the value is greater and to the left if it is less', ()=> {
      let test = new Tree();
      test.insert(5);
      test.insert(6);
      test.insert(4);

      expect(test.root.right.value).toBe(6);
      expect(test.root.left.value).toBe(4);
    });
  });
  describe('find', ()=> {
    it('can tell if a node exists in the tree or not', ()=> {
      let test = new Tree();
      test.insert(5);
      test.insert(6);
      test.insert(4);

      expect(test.find(5)).toBe(true);
      expect(test.find(567)).toBe(false);
    });
  });
});
