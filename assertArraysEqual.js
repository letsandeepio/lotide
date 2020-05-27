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
