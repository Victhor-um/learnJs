/**
 * Функция принимает массив или объект и считать кол-во строк в массиве/значениях объекта с учетом вложенности
 */

function getStringCount(object) {
  let result = 0;
  for (key in object) {
    if (typeof object[key] === 'string') {
      result += 1;
    } else {
      result += getStringCount(object[key]);
    }
  }
  return result;
}

data = ['1', ['2', '3', '444', 555], '5'];
console.log(getStringCount(data)); // 5;

console.log(
  getStringCount({
    first: '1',
    second: '2',
    third: 3,
    fourth: ['4', 2, 3, 4, 5],
    fifth: null,
    six: false,
  })
); // 3
