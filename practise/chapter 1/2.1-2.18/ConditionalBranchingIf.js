let jsName = prompt('Какое «официальное» название JavaScript?', '');

if (jsName == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете?"ECMAScript"');
}

let value = prompt('Введите число', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

let result;
result = a + b < 4 ? 'Мало' : 'Много';

let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';
