function longest(s1, s2) {
  const arr = [...s1, ...s2];
  return arr
    .reduce((acc, item) => {
      return acc + acc.includes(item) ? item : item;
    }, '')
    .split('')
    .sort()
    .join('');
}
debugger;
longest('abc', 'asde');
