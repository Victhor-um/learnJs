function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (number) => (count = number);
  counter.decrease = () => count--;
  return counter;
  // ... ваш код ...
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert(counter()); // 10 (вместо 11)

//Напишите функцию sum, которая бы работала следующим образом:
function sum(a) {
  let result = a;
  function f(b) {
    result += b;
    return f;
  }
  f.toString = function () {
    return result;
  };
  return f;
}
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6;
sum(6)(-1)(-2)(-3) == 0;
sum(0)(1)(2)(3)(4)(5) == 15;
