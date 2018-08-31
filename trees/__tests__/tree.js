'use strict';

const Tree = require('../lib/tree');

describe ('Tree', ()=> {
  describe('insert', ()=> {
    it('adds a new node as the root of the tree if no nodes already exist', ()=> {
      let test = new Tree();

      test.insert(5);
      test.insert(10);
      expect(test.root).toBe(5);
      expect(test.left.val).toBe(null);
      expect(test.right.val).toBe(null);
    });
  });
});
