//using high-order functions
const flatten = function (arr) {
  return arr.reduce((a, b) => (Array.isArray(b) ? a.concat(b) : [...a, b]), []);
};

//using for loop
const flattenv2 = function (arr) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      console.log('i am here', outputArr, arr[i]);
      outputArr = outputArr.concat(arr[i]);
    } else {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};

console.log(flatten([1, 2, [3, 5]]));
console.log(flattenv2([1, 2, [3, 5]]));
