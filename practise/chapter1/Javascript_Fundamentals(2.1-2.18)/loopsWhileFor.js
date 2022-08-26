for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) alert(i);
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

// сделать из for -> while

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

while (true) {
  let number = prompt('Введите число больше 100', '');
  if (number > 100 || number == null) {
    break;
  }
}

let n = 10;

nextPrime: for (let i = 0; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert(i); // простое число
}
