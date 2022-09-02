/**
 * Функция находит сумму последоватльености целых чисел между begin & end
 */

function sequenceSum(begin, end) {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(++begin, end);
}
// 1 +2 +3 +4 +5 = 15
// fn(1,5) = 1 + fn(2,5)
console.log(sequenceSum(1, 5)); // 15

console.log(sequenceSum(4, 10)); // 49

console.log(sequenceSum(-3, 2)); // -3

console.log(sequenceSum(7, 2)); // Nan

console.log(sequenceSum(0, 0)); // 0

console.log(sequenceSum(6, 6)); // 6

console.log(sequenceSum(5, 6)); // 11
