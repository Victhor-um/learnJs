function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
/* Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || */

function checkAgeSecond(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAgeThird(age) {
  return age > 18 || confirm('Родители разрешили?');
}

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}
