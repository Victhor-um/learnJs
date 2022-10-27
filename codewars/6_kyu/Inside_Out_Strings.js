// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript
function insideOut(x) {
  let wordsArr = x.split(' ');
  let newArr = wordsArr.map((elem) => {
    let l = elem.length;
    let leftWord = elem
      .split('')
      .splice(0, Math.floor(l / 2))
      .reverse()
      .join('');
    let rightWord = elem
      .split('')
      .splice(Math.ceil(l / 2))
      .reverse()
      .join('');
    if (l <= 2) return elem;
    if (l % 2) {
      return leftWord + elem[Math.floor(l / 2)] + rightWord;
    }
    return leftWord + rightWord;
  });
  return newArr.join(' ');
}
