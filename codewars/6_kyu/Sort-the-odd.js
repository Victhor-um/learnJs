// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  const sortedOdd = array.filter((elem) => elem % 2).sort((a, b) => a - b);
  let i = 0;
  return array.map((elem) => {
    return elem % 2 ? sortedOdd[i++] : elem;
  });
}
