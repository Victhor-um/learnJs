function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
function* generateSequence2() {
  yield 1;
  yield 2;
  return 3;
}

function* generateSequence3() {
  yield 1;
  yield 2;
  return 3;
}
// Можно по разному, но первый вариант выглядит понятней\удобней ИМХО

let sequence = [0, ...generateSequence()];

console.log('sequence: ', sequence);

/**
 * Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

Пример использования:
 */

function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
