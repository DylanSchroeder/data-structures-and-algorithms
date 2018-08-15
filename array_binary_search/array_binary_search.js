'use strict';

function binarySearch(array, searchKey) {
  let max = array.length -1;
  let min = 0;

  var index;
  var element;
  var count = 0;
  while (min <= max && count++ < 100) {
    index = Math.floor((min + max) / 2);
    element = array[index];
    

    
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