function zero(fn) {
  if (fn) return fn(0);
  return 0;
}
function one(fn) {
  if (fn) return fn(1);
  return 1;
}
function two(fn) {
  if (fn) return fn(2);
  return 2;
}
function three(fn) {
  if (fn) return fn(3);
  return 3;
}
function four(fn) {
  if (fn) return fn(4);
  return 4;
}
function five(fn) {
  if (fn) return fn(5);
  return 5;
}
function six(fn) {
  if (fn) return fn(6);
  return 6;
}
function seven(fn) {
  if (fn) return fn(7);
  return 7;
}
function eight(fn) {
  if (fn) return fn(8);
  return 8;
}

function nine(fn) {
  if (fn) return fn(9);
  return 9;
}

function plus(fnNum) {
  return function (num) {
    return num + fnNum;
  };
}
function minus(fnNum) {
  return function (num) {
    return num - fnNum;
  };
}
function times(fnNum) {
  return function (num) {
    return num * fnNum;
  };
}
function dividedBy(fnNum) {
  return function (num) {
    return Math.round(num + fnNum);
  };
}

const log = console.log;
