// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords = '') {
  if (!title) return '';

  let arrayOfString = title.split(' ');
  let minorArray = minorWords.split(' ');
  let firstWord = arrayOfString[0];

  firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();

  if (arrayOfString.length === 1) return firstWord;

  arrayOfString = arrayOfString.slice(1).map((element) => {
    for (let word of minorArray) {
      if (element.toLowerCase() === word.toLowerCase()) {
        return word.toLowerCase();
      }
    }

    return element[0].toUpperCase() + element.slice(1).toLowerCase();
  });
  return firstWord + ' ' + arrayOfString.join(' ');
}

console.log(titleCase('')); // ''
console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'
console.log(titleCase('ab', 'ab')); // 'Ab'
