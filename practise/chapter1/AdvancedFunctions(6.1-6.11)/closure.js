/**
 * Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
 */
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2()); // 1

/**
   * Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?
   */

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let _counter = new Counter();

// alert(_counter.up()); // 1
// alert(_counter.up()); // 2
// alert(_counter.down()); // 1

//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(2)); //3
console.log(sum(5)(-1)); //4

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, end) {
  return function (x) {
    return x >= start && x <= end;
  };
}
function inArray(array) {
  return function (x) {
    return array.includes(x);
  };
}
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
