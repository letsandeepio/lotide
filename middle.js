const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};

const middle = function (arr) {
  if (arr.length <= 2) return [];
  const middleGround = arr.length / 2;
  console.log(middleGround);
  return arr.length % 2 !== 0
    ? arr.splice(Math.floor(middleGround), 1)
    : arr.splice(Math.ceil(middleGround) - 1, 2);
};

console.log(middle([3, 6, 7]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
