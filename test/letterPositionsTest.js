const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('#test1', () => {
    assert.deepEqual(letterPositions('zebra is in the zoo').z, [0, 16]);
  });

  it('test2', () => {
    assert.deepEqual(letterPositions('zebra is in the zoo').e, [1, 14]);
  });

  it('test3', () => {
    assert.deepEqual(letterPositions('zebra is in the zoo').t, [12]);
  });
});
