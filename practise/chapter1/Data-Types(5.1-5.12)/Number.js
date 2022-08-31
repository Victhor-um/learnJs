//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

function sum() {
  let a = +prompt('Введите число', 0);
  let b = +prompt('Введите число', 0);
  alert(a + b);
}

// sum();
/**
 * 
 *  Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
 */
function readNumber() {
  let num;

  do {
    num = prompt('Введите число', 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
