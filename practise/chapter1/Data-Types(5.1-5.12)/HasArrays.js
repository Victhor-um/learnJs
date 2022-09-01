/**
 * Функция принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.
 */

function hasArrays(array) {
  for (element of array) {
    if (Array.isArray(element)) return true;
  }

  return false;
}

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); // true;

const data2 = [];
console.log(hasArrays(data2)); // false
