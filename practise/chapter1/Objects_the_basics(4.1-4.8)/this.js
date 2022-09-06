const log = console.log;

const obj = {
  test: 123,
  methd() {
    return this.test;
  },
};

const method = () => obj.methd();
//log(method());

function Test() {
  this.one = 1;
  this.logOne = () => {
    return this.one;
  };
}

const instance = Test();
const method1 = instance.logOne;

log(method1());
