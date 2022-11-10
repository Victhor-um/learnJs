/**
 * В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
 */

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

// alert(rabbit.jumps); // ? (1) true

delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2) null

delete animal.jumps;

// alert(rabbit.jumps); // ? (3) undefined

/**
   * Задача состоит из двух частей.
У нас есть объекты:

1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

   */

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}
const log = console.log;
let shogun = new Samurai('Vic');
console.log(shogun.__proto__.__proto__ === Object.prototype);
console.dir(shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__.__proto__ === null);

log('1: ', {}.prototype === {}.__proto__); //

function ITkam() {}
console.log('2: ', ITkam.prototype === ITkam.__proto__); //

function ITcub() {}
console.log('3  ', ITcub.__proto__ === ITkam.__proto__); //
console.log('4 ', ITcub.prototype === ITkam.prototype); //

let Component = (props) => {
  return `<div> I dont't know Prototype</div>`;
};
console.log('5', Component.prototype === Object.prototype); //

let age = 18;

log('6 ', age.prototype === Number.prototype); //
log('7 ', age.__proto__ === Number.prototype); //

class Hacker {}
log('8 ', Hacker.__proto__ === Function.prototype); //
//log('9 ', ITcub.__proto__ === ); // ? ITcub.__proto__ ===

//log('10 ', age.__proto__ === ); // ? age.__proto__ ===
