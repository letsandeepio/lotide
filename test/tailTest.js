const assert = require('chai').assert;
const tail = require('../tail');

const words = ['Yo Yo', 'Lighthouse', 'Labs'];

describe('#tail', () => {
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it(`returns ["Lighthouse", "Labs"] for ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
