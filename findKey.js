const findKey = function (obj, callback) {
  for (const elem in obj) {
    if (callback(obj[elem])) return elem;
  }
};

module.exports = findKey;
