'use strict';

function binarySearch(array, searchKey) {
  let max = array.length -1;
  let min = 0;

  var index;
  var element;
  var count = 0;
  while (min <= max) {
    // Guard against infinite loop!
    if (count++ > 100) throw new Error('Infinite loop!');

    index = Math.floor((min + max) / 2);
    element = array[index];

    // It's fine to "cheat" to visualize how the algorithm is working
    // console.log(array.slice(min, max+1));
    
    if(element < searchKey) {
      min = index + 1;
    }
    else if(element > searchKey) {
      max = index - 1;
    }
    else {
      return index;
    }
  }

  return -1;
}




module.exports = binarySearch;