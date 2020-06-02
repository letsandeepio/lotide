const countLetters = function (string) {
  const count = {};
  for (const char of string) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

module.exports = countLetters;
