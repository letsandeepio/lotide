const letterPositions = function (sentence) {
  const results = {};

  sentence.split('').forEach((char, index) => {
    !results[char] ? (results[char] = [index]) : results[char].push(index);
  });

  return results;
};

module.exports = letterPositions;
