// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.

const week = {
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
  7: 'sunday',
};
console.log(week);
for (day in week) {
  console.log(week[day]);
}
console.log(Object.keys(week));
console.log(Object.values(week));
console.log(Object.keys(week).length);
