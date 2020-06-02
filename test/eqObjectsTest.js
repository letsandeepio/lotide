const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  //global tests variables

  const ab = { a: '1', b: '2' };
  const cd = { c: '1', d: ['2', 3] };
  it('test#1', () => {
    const ba = { b: '2', a: '1' };
    let actual = eqObjects(ab, ba);
    let expected = true;
    assert.strictEqual(actual, expected);
  });

  it('test#2', () => {
    const abc = { a: '1', b: '2', c: '3' };
    let actual = eqObjects(ab, abc);
    let expected = false;
    assert.strictEqual(actual, expected);
  });

  it('test#3', () => {
    const dc = { d: ['2', 3], c: '1' };
    let actual = eqObjects(cd, dc);
    let expected = true;
    assert.strictEqual(actual, expected);
  });

  it('test#4', () => {
    const cd2 = { c: '1', d: ['2', 3, 4] };
    let actual = eqObjects(cd, cd2);
    let expected = false;
    assert.strictEqual(actual, expected);
  });
});

// => false
