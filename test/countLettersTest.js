const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns {a:1, b:1, c:1} for "abc" ', () => {
    assert.deepEqual(countLetters('abc'), { a: 1, b: 1, c: 1 });
  });

  it('returns {s:1, a:1, n:1, d:1, e:2, p:1 } for "sandeep" ', () => {
    assert.deepEqual(countLetters('sandeep'), {
      s: 1,
      a: 1,
      n: 1,
      d: 1,
      e: 2,
      p: 1
    });
  });
});
