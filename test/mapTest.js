const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  const words = ['ground', 'control', 'to', 'major', 'tom'];

  it('#test1', () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ['g', 'c', 't', 'm', 't']
    );
  });

  it('#test2', () => {
    assert.deepEqual(
      map(words, (word) => word.length),
      [6, 7, 2, 5, 3]
    );
  });
});
