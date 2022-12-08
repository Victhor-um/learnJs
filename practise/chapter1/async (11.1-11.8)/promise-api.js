// Promise.all(promises) - ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из  указанных промисов вернет ошибку, то результатом работы будет эта ошибка, результаты остальных промисов будут игнорироваться
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
// Promise.allSettled(promises) - ждет, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, где у каждого объекта два свойства: status : 'fulfilled'/'rejected' успешно выполнен или ошибка. value - результат, если успешно или reason - ошибка, если нет
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
// Promise.race(promises) - ожидает первый выполненый промис, который становится его результатом, остальные игнорируются
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ошибка!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// Promise.any(promises) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any

//Результатом будет 1:
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(new Error('ГЛАВНАЯ ОШИБКА ТВОЕЙ ЖИЗНИ'));
    }, 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
    }, 2000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 3000)
  ),
]).then(alert);

//Пример где все промисы отклоняются:
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject('Vot eto pzdc');
    }, 1500)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject('Vot eto AGAIN  pzdc');
    }, 4500)
  ),
]).catch((error) => {
  console.log(error.constructor.name);
  console.log(error.errors[0]);
  console.log(error.errors[1]);
});
