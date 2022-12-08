let promise = Promise.all([
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(1);
    }, 3000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(2);
    }, 2000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(3);
    }, 1000)
  ),
]).then(console.log(33333));

let setled = Promise.allSettled([
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('setled5');
    }, 5000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(66666);
      console.log('setled6000');
    }, 6000)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('3600');
    }, 3600)
  ),
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('4800');
    }, 4800)
  ),
]);
setTimeout(() => {
  console.log('promiseALL: ', promise);
  console.log('setled: ', setled);
}, 8000);

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ошибка!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1
