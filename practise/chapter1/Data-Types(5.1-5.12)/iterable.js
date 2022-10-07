const obj = {
  testNum: 30,
  start: 10,
  end: 40,
  [Symbol.iterator]() {
    return {
      next() {},
    };
  },
};

console.log();
