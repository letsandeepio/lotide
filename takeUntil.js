const takeUntil = function (array, callback) {
  // ...
  const outputArray = [];
  for (const elem of array) {
    if (callback(elem)) return outputArray;
    outputArray.push(elem);
  }

  return outputArray;
};

module.exports = takeUntil;
