/**
 * Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:
 */
let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
/**
   * Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
   */

function topSalary(salaries) {
  if (salaries === null) return null;
  let bogach;
  let max = 0;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      bogach = name;
    }
  }
  return bogach;
}
console.log(topSalary(salaries));
