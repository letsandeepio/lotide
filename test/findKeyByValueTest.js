const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  //global test projects

  const bestTVShowsByGenre = {
    sciFi: 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama: 'The Wire'
  };

  it('#test1 for findKeyByValue', () => {
    let actual = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    let expected = 'drama';
    assert.strictEqual(actual, expected);
  });

  it('#test2 for findKeyByValue', () => {
    let actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    let expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
