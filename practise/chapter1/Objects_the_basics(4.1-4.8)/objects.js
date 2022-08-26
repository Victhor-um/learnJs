const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

function isEmpty(obj) {
  for (let props in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalary(obj) {
  let sum = 0;
  for (let props in obj) sum += obj[props];
  return sum;
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2;
    }
  }
}
