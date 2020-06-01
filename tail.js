const tail = function (arr) {
  return !arr ? [] : arr.slice(1, arr.length);
};

module.exports = tail;
