//строка.substr(откуда отрезать, [сколько символов отрезать])

let str = 'abcde';
let sub = str.substr(0, 3); // 'abc'
let sub1 = str.substr(2); // 'cde'
let sub2 = str.substr(-3); // 'cde'
let sub3 = str.substr(-3, 2); // 'cd'

//строка.substring(откуда начать отрезать, [докуда отрезать])
// -1..-infinity => 0
// Если какой-то из параметров больше, чем длина строки - он считается равным длине строки
let sub4 = str.substring(1, 3); // bc
let sub5 = str.substring(3, 1); // bc
let sub6 = str.substring(1); //bcde

/**
 * строка.slice(откуда отрезать, [докуда отрезать])
 * Самый популярный\удобный метод, можно использовать отрицательные числа
 * Если второй параметр меньше первого - возвратится пустая строка.
 */

let sub7 = str.slice(1, 3); //  'bc
let sub8 = str.slice(1); // 'bcde'
let sub9 = str.slice(1, -2); // 'bc'
