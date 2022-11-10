/**
 * Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:
 */

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log('Hello!');
}

f.defer(1000); // выведет "Hello!" через 1 секунду

/**
 * Добавьте всем функциям в прототип метод defer2(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:
 */
Function.prototype.defer2 = function (ms) {
  let that = this;
  return function (...args) {
    setTimeout(() => that.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log('A+B', a + b);
}
f.defer2(1000)(1, 2); // выведет 3 через 1 секунду.
