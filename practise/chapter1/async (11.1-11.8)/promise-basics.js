//Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => {
    resolve(2);
  }, 1000);
});
debugger;
promise.then(console.log('3'));
const client = {
  name: 'Mr. Smith',
  age: 21,
};

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
