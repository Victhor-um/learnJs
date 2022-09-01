/**
 * Функция получает 1)массив 2)"even" or "odd"
 * Возвращает новый массив состоящий только из четных или нечетных
 */

function getNumbersByParity(array, parity) {
  let newArr = array.slice();

  if (parity === 'odd') {
    return array.filter((item) => {
      return item % 2;
    });
  }

  return array.filter((item) => {
    return !(item % 2);
  });
}
const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [2,4,6]
console.log(getNumbersByParity(data, 'odd')); // [1,3,5]
