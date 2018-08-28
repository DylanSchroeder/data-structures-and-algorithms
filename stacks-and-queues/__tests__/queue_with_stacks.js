'use strict';

const Queue = require('../lib/queue_with_stacks');

describe('Queue', ()=> {

  describe('enqueue', ()=> {
    it('rejects with error when there is no value provided', ()=>{
      let emptyQueue = new Queue();
      expect(() => emptyQueue.enqueue()).toThrowError('No calling enqueue without value');
    });

    it('can add values to a queue', () => {
      let nq = new Queue();

      nq.enqueue(7);
      nq.enqueue(11);

      expect(nq.value.head).not.toBe(null);
      expect(nq.value.head.value).toBe(11);
    });
  });

  describe('dequeue', ()=> {
    it('rejects with error if tried to use on empty queue',()=> {
      let noQueue = new Queue();
      expect(() => noQueue.dequeue()).toThrowError('No calling dq with empty list');
    });

    it('returns with the first value in queue', () => {
      let dq = new Queue();
      dq.enqueue(7);
      dq.enqueue(11);
      dq.enqueue(55);

      let newValue = dq.dequeue();
      expect(newValue).toBe(7);
    });
  });

});