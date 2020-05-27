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
  const FgRed = `\x1b[31m`;
  const FgGreen = `\x1b[32m`;
  if (!eqArrays(arr1, arr2)) {
    console.log(FgRed, `🛑 Assertion Failed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(FgGreen, `✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  }
};

const letterPositions = function (sentence) {
  const results = {};

  sentence.split('').forEach((char, index) => {
    !results[char] ? (results[char] = [index]) : results[char].push(index);
  });

  return results;
};

assertArraysEqual(letterPositions('zebra is in the zoo').z, [0, 16]);
assertArraysEqual(letterPositions('zebra is in the zoo').e, [1, 14]);
assertArraysEqual(letterPositions('zebra is in the zoo').t, [12]);
