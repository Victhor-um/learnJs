//Обработчики промисов .then/.catch/.finally всегда асинхронны.

let promise = Promise.resolve();

promise.then(() => console.log(2));

console.log(1);

// будет 1 потом 2

let reject = Promise.reject(new Error('Eba tyt oshibka'));

setTimeout(() => {
  reject.catch((err) => console.log('tipo poimal'));
}, 1500);

window.addEventListener('unhandledrejection', (event) =>
  console.log(event.reason)
);
//unhandledrejection срабатывает ибо очередь микрозадач завершена, промис в состоянии режектед, и генерит событие
//catch срабатывает уже после unhandledrejection
