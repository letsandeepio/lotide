//using high-order functions
const flatten = function (arr) {
  return arr.reduce((a, b) => (Array.isArray(b) ? a.concat(b) : [...a, b]), []);
};

module.exports = flatten;
