const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('#test1', () => {
    let actual = without(['hello', 'world', 'earth'], 'earth');
    let expected = ['hello', 'world'];
    assert.deepEqual(actual, expected);
  });

  it('#test2', () => {
    let actual = without(['hello', 'world', 'earth'], 'world');
    let expected = ['hello', 'earth'];
    assert.deepEqual(actual, expected);
  });
});
