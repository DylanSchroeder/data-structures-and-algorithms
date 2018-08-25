'use strict';

const PushPopStack = require('../lib/push-pop');

describe('stack push-pop', ()=> {
  it('can can add a new node with a value to the top of the stack',()=>{
    let pushStack = new PushPopStack();

    pushStack.push(5);
    expect(pushStack.nodeCount).toBe(1);

    pushStack.push(10);
    expect(pushStack.nodeCount).toBe(2);

    pushStack.push(15);
    expect(pushStack.nodeCount).toBe(3);

    pushStack.push(20);
    expect(pushStack.head.value).toBe(20);
    expect(pushStack.nodeCount).toBe(4);
    console.log(pushStack);

  });

  it('will tell the user that the list is empty if they try to pop the top on empty list', ()=>{
    let noStack = new PushPopStack();

    expect(noStack.pop()).toEqual('There are no nodes to be popped in list!');
  });

  it('can remove the node from the top of the stack', ()=>{
    let popStack = new PushPopStack();

    popStack.push(5);
    popStack.push(10);
    popStack.push(15);
    expect(popStack.pop()).toBe(15);
  });
  
});