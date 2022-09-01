/**
 * Функция принимает массив и число n.
 * Должна переставить n элементов массива из конца в начало,
 * если n >= array.length => вернет новый массив совпадающий со старым
 */

function moveToStart(array, num) {
  let newArray = array.slice();
  let length = newArray.length;
  if (num >= length) return newArray;
  let deletedElements = newArray.splice(length - num, num);
  deletedElements = deletedElements.concat(newArray);

  return deletedElements;
}

const data = [1, 2, 3, 4, 5];

console.log(moveToStart(data, 3)); // [3,4,5,1,2]

console.log(moveToStart(data, 10)); // [1, 2, 3, 4, 5]
