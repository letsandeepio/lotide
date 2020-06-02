const deepeEqObjects = require('../deepEqObjects');
const assert = require('chai').assert;

describe('#deepEqObjects', () => {
  it('test#1', () => {
    let actual = deepeEqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    let expected = true;
    assert.strictEqual(actual, expected);
  });

  it('test#2', () => {
    let actual = deepeEqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }
    );
    let expected = false;
    assert.strictEqual(actual, expected);
  });
});
