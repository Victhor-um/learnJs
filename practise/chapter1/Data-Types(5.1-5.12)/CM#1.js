// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
  let result = 0;
  list.forEach((element) => {
    if (element.continent === 'Europe' && element.language === 'JavaScript') {
      result += 1;
    }
  });
  return result;
  // your awesome code here :)
}

const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Asia',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Europe',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

const list2 = [
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 19,
    language: 'HTML',
  },
  {
    firstName: 'Lukas',
    lastName: 'R.',
    country: 'Austria',
    continent: 'Europe',
    age: 89,
    language: 'HTML',
  },
];
console.log(countDevelopers(list1)); // 1

console.log(countDevelopers(list2)); // 0
