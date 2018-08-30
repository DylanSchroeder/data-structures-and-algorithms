'use strict';

function multiBracketValidation(input){
  if(!input){
    return ('No input given');
  }
  
  if(typeof input !== 'string') {
    return ('Input must be a string');
  }

  let leftParaCount = 0;
  let rightParaCount = 0;

  let leftCurlyBracketCount = 0;
  let rightCurlyBracketCount = 0;

  let leftSqBracketCount = 0;
  let rightSqBracketCount = 0;
  
  for(let i=0; i<input.length; i++) {
    if(input[i] === '('){
      leftParaCount++;
    }
    if(input[i] === ')'){
      rightParaCount++;
    }

    if(input[i] === '{'){
      leftCurlyBracketCount++;
    }
    if(input[i] === '}'){
      rightCurlyBracketCount++;
    }

    if(input[i] === '['){
      leftSqBracketCount++;
    }
    if(input[i] === ']'){
      rightSqBracketCount++;
    }

    if(rightParaCount > leftParaCount || rightCurlyBracketCount > leftCurlyBracketCount || rightSqBracketCount > leftSqBracketCount){
      return false;
    }
  }
  if(rightParaCount === leftParaCount && rightCurlyBracketCount === leftCurlyBracketCount && rightSqBracketCount === leftSqBracketCount){
    return true;
  } else return false;

}

module.exports = multiBracketValidation;