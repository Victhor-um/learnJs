//Number.isNaN === true only if NaN, isNan() true for undefined/string/object/NaN
console.log('5', isNaN(5)); //false

console.log('NaN', isNaN(NaN)); //true

console.log('null', isNaN(null)); // false

console.log('undefined', isNaN(undefined)); // true

console.log(isNaN('37')); // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN('37.37')); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN('37,5')); // true
console.log(isNaN('123ABC')); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
console.log('string', isNaN('string')); // true

console.log('Infinity', isNaN(Infinity)); // false

console.log('[]]', isNaN([])); // false

console.log('{}', isNaN({})); // true

isNaN(new Date()); // false
isNaN(new Date().toString()); // true

console.log('5', Number.isNaN(5)); // false

console.log(Number.isNaN('37')); // false: "37" is converted to the number 37 which is not NaN
console.log(Number.isNaN('37.37')); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(Number.isNaN('37,5')); // false
console.log(Number.isNaN('123ABC')); //false

console.log('NaN', Number.isNaN(NaN)); // true

console.log('null', Number.isNaN(null)); // false

console.log('undefined', Number.isNaN(undefined)); // false

console.log('string', Number.isNaN('string')); //false

console.log('Infinity', Number.isNaN(Infinity)); // false

console.log('[]]', Number.isNaN([])); // false

console.log('{}', Number.isNaN({})); // false
