// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
const log = console.log;

function persistence(num) {
  let result = 0;

  let numArr = ('' + num).split('');

  let newNum = 0;
  while (String(num).length > 1) {
    result++;

    newNum = 1;
    for (let digit of numArr) {
      newNum *= +digit;
    }
    log('numArr: ', numArr);
    log('new num:', newNum);
    num = newNum;
    numArr = ('' + num).split('');
  }
  return result;
}

log('RESULT NA: ', persistence(39)); // 3  (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
log('RESULT NA: ', persistence(999)); // 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
log('RESULT NA: ', persistence(4)); // 0
