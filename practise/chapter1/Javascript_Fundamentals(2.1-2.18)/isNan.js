//Number.isNaN === true only if NaN, isNan() true for undefined/string/object/NaN
console.log('5', isNaN(5)); //false

console.log('NaN', isNaN(NaN)); //true

console.log('null', isNaN(null)); // false

console.log('undefined', isNaN(undefined)); // true

console.log('string', isNaN('string')); // true

console.log('Infinity', isNaN(Infinity)); // false

console.log('[]]', isNaN([])); // false

console.log('{}', isNaN({})); // true

console.log('5', Number.isNaN(5)); // false

console.log('NaN', Number.isNaN(NaN)); // true

console.log('null', Number.isNaN(null)); // false

console.log('undefined', Number.isNaN(undefined)); // false

console.log('string', Number.isNaN('string')); //false

console.log('Infinity', Number.isNaN(Infinity)); // false

console.log('[]]', Number.isNaN([])); // false

console.log('{}', Number.isNaN({})); // false
