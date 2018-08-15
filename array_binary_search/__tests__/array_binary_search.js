'use strict';

const binarySearch = require('../array_binary_search');


describe('binarySearch', ()=> {
  it('returns the index of an array element equal to the search key if there is an odd number of elements', () => {
    expect(binarySearch([4,8,15,16,23], 8)).toEqual(1);
  });

  it('returns the index of an array element equal to the search key if there is an even number of elements', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });

  it('can check if the element exists', () => {
    expect(binarySearch([1,2,3,4,5], 7)).toEqual(-1);
  });
});