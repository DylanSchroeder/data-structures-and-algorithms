'use strict';

const binarySearch = require('../array_binary_search');


describe('binarySearch', ()=> {
  it('returns the index of an array element equal to the search key if there is an odd number of elements', () => {
    expect(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20], 20)).toEqual(19);
    expect(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20], 19)).toEqual(-1);
  });

  it('returns the index of an array element equal to the search key if there is an odd number of elements', () => {
    expect(binarySearch([4,8,15,16,23], 8)).toEqual(1);
  });

  it('returns the index of an array element equal to the search key if there is an even number of elements', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });

  it('can check if the element exists', () => {
    expect(binarySearch([1,2,3,4,5], 7)).toEqual(-1);
  });

  it('returns -1 for empty array', () => {
    expect(binarySearch([], 'whatever')).toBe(-1);
  });

  it('returns correct index searching for the element in a simple array', () => {
    expect(binarySearch(['hi'], 'hi')).toBe(0);

    expect(binarySearch(['bye','hi'], 'hi')).toBe(1);
    expect(binarySearch(['hi','zebra'], 'hi')).toBe(0);

    expect(binarySearch(['bye','hi','zebra'], 'bye')).toBe(0);
    expect(binarySearch(['bye','hi','zebra'], 'hi')).toBe(1);
    expect(binarySearch(['bye','hi','zebra'], 'zebra')).toBe(2);
  });

  it('returns -1 searching for the wrong element in a singleton array', () => {
    expect(binarySearch(['hi'], 'bye')).toBe(-1);
  });
});