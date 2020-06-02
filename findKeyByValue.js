const findKeyByValue = (searchObject, searchQuery) => {
  for (const key in searchObject) {
    if (searchObject[key] === searchQuery) return key;
  }
};

module.exports = findKeyByValue;
