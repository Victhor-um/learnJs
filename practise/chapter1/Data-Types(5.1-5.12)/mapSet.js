/*
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/
function unique(arr) {
  let uniqSet = new Set(arr);
  return Array.from(uniqSet);
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
console.log(unique(values)); // Hare,Krishna,:-O

//**Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм. */

function aclean(arr) {
  let anaMap = new Map();
  for (let element of arr) {
    anaMap.set(element.toLowerCase().split('').sort().join(''), element);
  }
  return Array.from(anaMap.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
/**
 * Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:
 */
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');
