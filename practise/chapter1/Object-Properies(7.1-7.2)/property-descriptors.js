let str = 'abcd';
console.log(Object.getOwnPropertyDescriptors(str));
let obj = {
  name: 'John',
};
Object.defineProperty(obj, 'age', {
  value: 25,
});

let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
let descriptorAge = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(descriptorAge);
Object.defineProperty(obj, 'name', {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptors(obj));
const user = {};
Object.defineProperties(user, {
  name: {
    value: 'Joh',
    writable: false,
    enumerable: false,
    configurable: true,
  },
  surname: {
    value: 'Smith',
    writable: false,
    enumerable: false,
    configurable: true,
  },
});

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} + FULL`;
  },
  set(value) {
    this.surname = value;
  },
});
console.log('USER PROPS:', Object.getOwnPropertyDescriptors(user));

console.log(Object.isFrozen(user));
Object.freeze(user);
console.log(Object.isFrozen(user));
