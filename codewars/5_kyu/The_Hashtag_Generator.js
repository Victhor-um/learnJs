// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  if (!str.trim()) return false;
  const strArr = str.split(' ').map((word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
  const result = '#' + strArr.join('');
  return result.length <= 140 ? result : false;
}
