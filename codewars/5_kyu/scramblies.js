// https://www.codewars.com/kata/55c04b4cc56a697bb0000048
function scramble(str1, str2) {
  let str2Arr = str2.split('');
  let str1Arr = str1.split('');

  let strMap = new Map();
  let str1Map = new Map();

  for (let letter of str1Arr) {
    if (!str1Map.has(letter)) {
      str1Map.set(letter, 1);
    }
    str1Map.set(letter, str1Map.get(letter) + 1);
  }

  for (let letter of str2Arr) {
    if (!strMap.has(letter)) {
      strMap.set(letter, 1);
    }
    strMap.set(letter, strMap.get(letter) + 1);
  }

  for (let [letter, number] of strMap) {
    if (str1Map.get(letter) >= number) {
      strMap.delete(letter);
      if (!strMap.size) return true;
      continue;
    } else return false;
  }
}
