/**
 * Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
 */
function printNumbers(from, to) {
  let current = from;
  let timerID = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerID);
    }
    current++;
  }, 1000);
}

printNumbers(1, 3);

function printNumbersTimeOut(from, to) {
  let current = from;

  let timerID = setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
printNumbersTimeOut(5, 10);
