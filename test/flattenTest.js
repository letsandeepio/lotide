const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('#test1', () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it('#test2', () => {
    assert.deepEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
  });
});
