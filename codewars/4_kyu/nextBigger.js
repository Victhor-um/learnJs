// https://www.codewars.com/kata/55983863da40caa2c900004e

63638755556;

87364927863; // 87364928736
12345; // 12354
54321; //  -1
6118431; // 1(меньше 8)
61181265; //

/*
1. функция для поиска первой цифры на обмен: ищем первую с конца цифру которая будет меньше предыдущей
2. функция для поиска второй цифры на обмен:
//  функция принимает индекс первой цифры на обмен и массив из правой части числа (относительно первой цифры)
3. 

*/
//  857266412174083  / 857266412174308
function getSecondToSwitch(tail, first) {
  let m = 9;
  let secondIndex = 0;
  for (let i = 0; i < tail.length; i++) {
    if (tail[i] > first && tail[i] < m) {
      m = tail[i];
      secondIndex = i;
    }
  }
  return secondIndex;
}

console.clear();
const log = console.log;

function nextBiggerVic(num) {
  const numArr = ('' + num).split('');
  log('num: ', num);
  for (let i = numArr.length; i > 0; i--) {
    if (numArr[i - 1] < numArr[i]) {
      const firstMin = numArr[i - 1];
      const firstMinIndex = i - 1;
      log('firstMin: ', firstMin, 'indexFirtsmin', firstMinIndex);
      const tailAftermin = numArr.slice(firstMinIndex + 1);
      log('tailNextMin: ', tailAftermin);

      //  3452387456477775954386378

      //   function getSecondToSwitch(tail, first) {
      //   let m = 9;
      //   let secondIndex = 0;
      //   for (let i = 0; i < tail.length; i++) {
      //     if (tail[i] > first && tail[i] < m  ) {
      //       m = tail[i];
      //       secondIndex = i;
      //     }
      //   }
      //   return secondIndex;
      // }

      let m = 9;
      let secondIn = 0;
      for (let j = 0; j < tailAftermin.length; j++) {
        if (tailAftermin[j] > firstMin && tailAftermin[j] < m) {
          m = tailAftermin[j];
          secondIn = j;
        }
      }
      // const secondBig = tailAftermin[j];
      // const secondBigIndex = j;
      // log(
      //   "secondBignum: ",
      //   secondBig,
      //   "secondBigIndex: ",
      //   secondBigIndex + firstMinIndex + 1
      const secIn = secondIn + firstMinIndex + 1;
      const resultNum = numArr.slice();
      resultNum[firstMinIndex] = m;
      resultNum[secIn] = firstMin;
      const sortedTail = resultNum
        .slice(firstMinIndex + 1)
        .sort((a, b) => a - b);

      return +resultNum
        .slice(0, firstMinIndex + 1)
        .concat(sortedTail)
        .join('');
    }
  }
  return -1;
}

//
// return +arr.slice(0, firstIndex + 1).concat(sortedTail).join('');

// log('VC:', nextBiggerVic(12), "?= 21");
// log('VC:', nextBiggerVic(513), "?= 531");
log('VC:', nextBiggerVic(197753), '?= 315779');

log('VC:', nextBiggerVic(87364927863), '?= 87364928763');
// log(nextBiggerVic(857266412174083), '857266412174308')
// log(nextBiggerVic(1234567890), '1234567908')
