const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#tail', () => {
  it('#test1', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`test#2`, () => {
    assert.deepEqual(eqArrays([1, 2, [3, 5]], [1, 2, [3, 4]]), false);
  });
});
