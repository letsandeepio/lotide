const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  const FgRed = '\x1b[31m';
  const FgGreen = '\x1b[32m';
  if (!eqArrays(arr1, arr2)) {
    console.log(FgRed, `🛑 Assertion Failed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(FgGreen, `✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};

module.exports = assertArraysEqual;
