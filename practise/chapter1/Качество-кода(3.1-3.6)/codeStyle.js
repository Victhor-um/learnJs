//Какие недостатки вы видите в стиле написания кода этого примера?
function pow(x, n) {
  //  нехватает пробела между аргументами
  // скобку лучше писать на одной строке с объявлением функции
  let result = 1; //пробел до и после знака =
  for (let i = 0; i < n; i++) {
    result *= x;
  } // for (let i = 0; i < n; i++) result *=x;
  return result;
}

let x = prompt('x?', ''),
  n = prompt('n?', ''); // x = promt("x?", ''), n = promt("n?", '')
if (n <= 0) {
  //if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} // {
else {
  alert(pow(x, n));
}
