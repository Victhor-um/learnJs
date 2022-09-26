String.prototype.mySplit = function (split = null, limit) {
  if (split === null) {
    return [`${this}`];
  }
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== split) arr.push(this[i]);
  }
  return arr;
};

let omg = 'ol=ke=eke';
//console.log(omg.mySplit());
console.log(omg.mySplit(''));
console.log(omg.split());
console.log(omg.split(''));
console.log(omg.split('='));
console.log(omg.split('=', 2));
