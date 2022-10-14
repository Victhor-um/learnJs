// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  let sum = 0;
  for (let i = number - 1; i > 0; i--) {
    if (!(i % 5) || !(i % 3)) sum += i;
  }
  return sum;
}
