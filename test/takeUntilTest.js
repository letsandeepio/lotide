const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('#test1', () => {
    const sampleData = [
      "I've",
      'been',
      'to',
      'Hollywood',
      ',',
      "I've",
      'been',
      'to',
      'Redwood'
    ];
    let actual = takeUntil(sampleData, (x) => x === ',');
    let expected = ["I've", 'been', 'to', 'Hollywood'];
    assert.deepEqual(actual, expected);
  });

  it('#test2', () => {
    const sampleData = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    let actual = takeUntil(sampleData, (x) => x < 0);
    let expected = [1, 2, 5, 7, 2];
    assert.deepEqual(actual, expected);
  });
});
