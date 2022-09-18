let arr = [];
arr[8555555] = 1;

const t0 = performance.now();
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  //
  arr[i] = i;
}
const t1 = performance.now();
console.log('for: ', t1 - t0, 'milliseconds');

let t2 = performance.now();
for (let i in arr) {
  sum += i;
}
let t3 = performance.now();
console.log('for in: ', t3 - t2, 'milliseconds');

t2 = performance.now();
for (let i of arr) {
  arr[i] = i + 1;
}
t3 = performance.now();
console.log('for of: ', t3 - t2, 'milliseconds');

t2 = performance.now();
arr.forEach((elem) => {
  sum -= elem;
});
t3 = performance.now();
console.log('forEach: ', t3 - t2, 'milliseconds');
