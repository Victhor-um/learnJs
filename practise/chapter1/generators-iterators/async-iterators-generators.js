// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// for (let value of generateSequence(1, 5)) {
//   console.log(value);
// }

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    // ура, можно использовать await!
    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();

let range = {
  from: 1,
  to: 5,

  //for await..of вызывает этот метод один раз в самом начале
  [Symbol.asyncIterator]() {
    //...возвращает объект-итератор:
    // далее for await..of работает только с этим объектом,
    // запрашивая у него следующие значения вызовом next()

    return {
      current: this.from,
      last: this.to,

      //next() вызывается на каждой итерации цикла for await..of
      async next() {
        // должен возвращать значение как объект {done:.., value :...}
        // (автоматически оборачивается в промис с помощью async)

        // можно использовать await внутри для асинхронности:
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve;
          }, 777)
        );

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
async () => {
  for await (let value of range) {
    console.log(value);
  }
};
