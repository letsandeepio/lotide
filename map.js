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
  const FgRed = '\x1b[31m';
  const FgGreen = '\x1b[32m';
  if (!eqArrays(arr1, arr2)) {
    console.log(FgRed, `🛑 Assertion Failed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(FgGreen, `✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};

const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, (word) => word[0]);

assertArraysEqual(
  map(words, (word) => word[0]),
  ['g', 'c', 't', 'm', 't']
);
assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
);
assertArraysEqual(
  map(words, (word) => word[0]),
  [1]
);
