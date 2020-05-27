const assertEqual = function (actual, expected) {
  const FgRed = '\x1b[31m';
  const FgGreen = '\x1b[32m';
  if (actual !== expected) {
    console.log(
      FgRed,
      `🛑 Assertion Failed: [${actual}] === [${expected}]`,
      '\x1b[0m'
    );
  } else {
    console.log(
      FgGreen,
      `✅ Assertion Passed: [${actual}] === [${expected}]`,
      '\x1b[0m'
    );
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false); // => false

//arrays

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
