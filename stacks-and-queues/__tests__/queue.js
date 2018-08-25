'use strict';

const Queue = require('../lib/queue');

describe('enqueue', ()=>{
  it('can add a value to the end of the list', ()=>{
    let addQueue = new Queue();

    addQueue.enqueue(900);
    addQueue.enqueue(800);
    addQueue.enqueue(700);

    //900 should be in front of line(queue) because it entered first
    expect(addQueue.head.value).toBe(900);
    //700 should be at end of line because it got there last
    expect(addQueue.tail.value).toBe(700);
  });

  describe('dequeue', ()=> {
    let exitQueue = new Queue;

    exitQueue.enqueue(900);
    exitQueue.enqueue(800);
    exitQueue.enqueue(700);

    expect(exitQueue.nodeCount).toBe(3);
    //900 was at front of line so it would be the first to exit
    expect(exitQueue.dequeue()).toBe(900);
    //800 moves to front when 900 leaves
    expect(exitQueue.head.value).toBe(800);
    expect(exitQueue.dequeue()).toBe(800);

    expect(exitQueue.nodeCount).toBe(1);

  });

});