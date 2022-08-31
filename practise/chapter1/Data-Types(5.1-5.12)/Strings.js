/**
 * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
 */
function ucFirst(str) {
  if (str === '') return '';
  return str[0].toUpperCase() + str.slice(1);
}
/**
   * Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
   */

function checkSpam(str) {
  if (!str) return false;

  str = str.toLowerCase();
  if (str.includes('viagra') || str.includes('xxx')) {
    return true;
  }
  return false;
}

/**
 * Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
 */
function truncate(str, maxlength) {
  strLength = str.length;
  if (strLength <= maxlength) return str;

  let shortStr = str.slice(0, maxlength - 1);
  return shortStr + '…';
}
