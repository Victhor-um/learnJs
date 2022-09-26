/**
 * Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.
 */
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let salary of Object.values(obj)) sum += salary;
  return sum;
}
console.log(sumSalaries(salaries));

//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user));
