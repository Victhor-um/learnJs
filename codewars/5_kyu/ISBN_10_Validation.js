// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript

function validISBN10(isbn) {
  // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  if (isbn.length !== 10) return false;
  let sum = 0;
  let i = 1;
  const isbnArray = isbn.split('');
  for (let digit of isbnArray) {
    if (i === 10 && digit === 'X') digit = 10;
    if (isFinite(digit) && i <= 10) {
      sum += digit * i;
    } else return false;
    ++i;
  }
  return !(sum % 11);
}
