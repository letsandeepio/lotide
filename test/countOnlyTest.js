const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it(`for 1st parameter['Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'"], and second parameter ['Salima], ['Fang'] return { Fang: true, Salima: true }`, () => {
    assert.deepEqual(
      countOnly(
        [
          'Karl',
          'Salima',
          'Agouhanna',
          'Fang',
          'Kavith',
          'Jason',
          'Salima',
          'Fang',
          'Joe'
        ],
        { Fang: true, Salima: true }
      ),
      {
        Fang: 2,
        Salima: 2
      }
    );
  });
});
