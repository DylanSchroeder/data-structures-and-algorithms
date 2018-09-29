'use strict';

const insertionSort = require ('../lib/insertion-sort');

describe('insertionSort', () => {
  it('sorts an array of numbers from smallest to largest with insertion', () => {
    let array = [3, 6, 1, 9, 7];
    expect(insertionSort(array)).toEqual([1, 3, 6, 7, 9]);
  });

  it('will just return the array if the array is empty', () => {
    let array = [];
    expect(insertionSort(array)).toEqual([]);
  });
});