let currentUser = null;
let defaultUser = 'John';

let name = currentUser || defaultUser || 'unnamed'; // Boolean(args) return first TRUE or last

result = value1 && value2 && value3; // return first false or last

let age = prompt('Введите ваш возраст', '');

if (age >= 14 && age <= 90) {
}

if (age < 14 && age > 90) {
}

if (-1 || 0) alert('first'); // yes
if (-1 && 0) alert('second'); // no
if (null || (-1 && 1)) alert('third'); //  yes

let adminName = prompt('Введите логин', '');

if (adminName == 'Админ') {
  let password = prompt('Введите пароль');
  if (password == 'Я главный') {
    alert('Здравствуйте');
  } else if (password == null || password == '') {
    alert('Отменено');
  } else {
    alert('Неверный Пароль');
  }
} else if (adminName == null || adminName == '') {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
