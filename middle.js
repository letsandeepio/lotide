const middle = function (arr) {
  if (arr.length <= 2) return [];

  const middleGround = arr.length / 2;

  return arr.length % 2 !== 0
    ? arr.splice(Math.floor(middleGround), 1)
    : arr.splice(Math.ceil(middleGround) - 1, 2);
};

module.exports = middle;
