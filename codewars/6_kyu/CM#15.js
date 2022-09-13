function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  let filtredArray = [];
  filtredArray = list.filter((element) => {
    let charSum = 0;
    for (let symbol of element.firstName) {
      charSum += symbol.charCodeAt(0);
    }
    return charSum % 2;
  });
  return filtredArray;
}
