let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakSet();

let readMap = new WeakMap();

readMap.set(messages[0], Date.now());

console.dir(readMap.get(messages[0]));
