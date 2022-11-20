// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript/637a613f71cd9bc13701ce3a

function digPow(n, p) {
  const sum = String(n)
    .split('')
    .reduce((sum, elem, index) => (sum += elem ** (p + index)), 0);
  return sum % n ? -1 : sum / n;
}
