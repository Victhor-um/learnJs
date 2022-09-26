function nextBigger(num) {
  let array = String(num).split('');
  console.log('NUM', num);
  outer: for (let i = array.length - 1; i > 0; i--) {
    console.log('III: ', i);
    for (let j = array.length - 1; j >= 0; j--) {
      console.log('JJJ: ', j);
      if (i <= j || i >= j + 3) continue;
      // if (array[i] === array[i - 1]) break;
      if (array[j] > array[j - 1]) {
        let tempDigit = array[i];
        array[i] = array[j];
        array[j] = tempDigit;
        let newArr = array.splice(j + 1).sort();
        array = array.concat(newArr);
        if (num < +array.join('')) break outer;
      }
      if (array[i] > array[j]) {
        console.log(['array i', array[i]]);
        console.log(['array j', array[j]]);
        let tempDigit = array[i];
        array[i] = array[j];
        array[j] = tempDigit;
        let newArr = array.splice(j + 1).sort();
        console.log('NewArr', newArr.join(''));
        console.log('array', array.join(''));
        array = array.concat(newArr);

        if (num < +array.join('')) break outer;
      }
    }
  }
  //  console.log(+array.join(''))
  if (num === +array.join('')) return -1;
  return +array.join('');
}

//console.log('NADO: 1234567908, EST', nextBigger(1234567890));
//console.log('NADO: 91955, EST', nextBigger(91595));
//console.log('NADO: 85516, EST', nextBigger(85165));
//console.log('NADO: 827510640568, EST', nextBigger(827510608654));
console.log('NADO: 19225, EST', nextBigger(15922));
