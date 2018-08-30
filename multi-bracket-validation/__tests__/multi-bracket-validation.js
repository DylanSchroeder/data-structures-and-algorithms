'use strict';

const multiBracketValidation = require('../lib/multi-bracket-validation');

describe('Multi Bracket Validation', ()=> {
  it('checks whether or not the brackets in a string are balanced', ()=>{
    // ({[]}) should work
    expect(multiBracketValidation('({[]})')).toBe(true);
    // )() should not work
    expect(multiBracketValidation(')()')).toBe(false);
    // as long as brackets are balanced, text shouldn't matter
    expect(multiBracketValidation('[this](is){ok}')).toBe(true);
    expect(multiBracketValidation('){}]')).toBe(false);
  });

  it('is not happy if no input is given', ()=> {
    expect(multiBracketValidation()).toBe('No input given');
  });

  it('is not happy if the input is something other than a string', ()=> {
    expect(multiBracketValidation(27)).toBe('Input must be a string');
  });
});