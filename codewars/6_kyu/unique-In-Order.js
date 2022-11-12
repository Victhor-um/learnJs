// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder = function (iterable) {
  return Array.isArray(iterable)
    ? iterable.filter((elem, index, arr) => elem !== arr[index + 1])
    : iterable.split('').filter((elem, index, arr) => elem !== arr[index + 1]);
};
