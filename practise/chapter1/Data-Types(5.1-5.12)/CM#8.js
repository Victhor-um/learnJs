// https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  let setOfContinents = new Set();
  for (let object of list) {
    for (let key in object) {
      if (key === 'continent') {
        setOfContinents.add(object[key]);
      }
    }
    if (setOfContinents.size === 5) {
      return true;
    }
  }

  return false;
}

var list1 = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
  {
    firstName: 'Agustín',
    lastName: 'M.',
    country: 'Chile',
    continent: 'Americas',
    age: 37,
    language: 'C',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Laia',
    lastName: 'P.',
    country: 'Andorra',
    continent: 'Europe',
    age: 55,
    language: 'Ruby',
  },
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 65,
    language: 'PHP',
  },
];

var list2 = [
  {
    firstName: 'Fatima',
    lastName: 'A.',
    country: 'Algeria',
    continent: 'Africa',
    age: 25,
    language: 'JavaScript',
  },
];
debugger;
console.log(allContinents(list1)); //true
console.log(allContinents(list2)); //false
