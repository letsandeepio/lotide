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

const findKey = function (obj, callback) {
  for (const elem in obj) {
    if (callback(obj[elem])) return elem;
  }
};

assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    (x) => x.stars === 2
  ),
  'noma'
);

assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    (x) => x.stars === 1
  ),
  'Blue Hill'
);
