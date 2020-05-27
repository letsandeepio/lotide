const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] === [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const countLetters = function (string) {
  const count = {};
  for (const char of string) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

console.log(`countLetters('sandeep'):'`, countLetters('sandeep'));

assertEqual(countLetters('sandeep').e, 2);
assertEqual(countLetters('sandeep').a, 1);
assertEqual(countLetters('sandeep').z, 1);
