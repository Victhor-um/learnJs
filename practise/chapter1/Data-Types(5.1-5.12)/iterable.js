const obj = {
  testNum: 30,
  start: 10,
  end: 40,
  [Symbol.iterator]() {
    return {
      min: this.start,
      max: this.end,
      target: this.testNum,
      next() {
        let randomNum = Math.floor(
          Math.random() * (this.max - this.min + 1) + this.min
        );
        console.log('randomNUM: ', randomNum);
        if (randomNum === this.target) {
          return { done: true };
        } else {
          return { done: false, value: randomNum };
        }
      },
    };
  },
};
for (let i of obj) {
  console.log('Iteration: ', i);
}
