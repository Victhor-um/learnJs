//Что выведет код ниже?
// Консоль логи выполнятся последовательно ибо КОД внутри промиса выполняеся синхронно
console.log('before promise');
let promise = new Promise(function (resolve, reject) {
  console.log('inside promise');
  resolve(1);

  setTimeout(() => {
    resolve(2);
  }, 1000);
});
debugger;
promise.then(console.log('3'));
console.log('after promise');

//Функция delay(ms) должна возвращать промис, который перейдёт в состояние "выполнен" через ms миллисекунд, так что бы мы могли добавить к нему .then
function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(1000)
  .then(() => console.log('delay 1 sec'))
  .then(() => console.log('delay 1 sec'))
  .then(() => console.log('delay 1 sec'));
delay(2000).then(() => console.log('delay 2 sec'));
delay(3000).then(() => console.log('delay 3 sec'));

console.log('start');
