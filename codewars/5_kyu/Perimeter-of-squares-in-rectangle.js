// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

//проходит обычные тесты, но не успевает пройти на больших числах, нужна оптимизация
function fibonachi(n) {
  if (n < 2) return n;

  //console.log('number: ', n);
  return fibonachi(n - 1) + fibonachi(n - 2);
}

function fibonachiSum(n) {
  if (n < 2) return n;
  let result = 0;
  while (n > 0) {
    result += fibonachi(n);
    n -= 1;
  }
  return result;
}
// 0 1 1 2 3 5 8 13

function perimeter(n) {
  return 4 * fibonachiSum(n + 1);
}
debugger;
console.log('fibonachi : ', fibonachi(5));
console.log('Sum of fib: ', fibonachiSum(5));
console.log(perimeter(0)); //  4
console.log(perimeter(1)); // 12)
console.log(perimeter(2)); // 24)
console.log(perimeter(3)); // 44)
console.log(perimeter(4)); // 80)
console.log(perimeter(5)); // 80)
console.log(perimeter(7)); // 216)
console.log(perimeter(20)); // 114624)
console.log(perimeter(30)); // 14098308)
