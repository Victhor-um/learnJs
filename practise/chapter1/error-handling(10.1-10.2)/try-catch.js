//Не верный код
try {
  setTimeout(function () {
    // noSuchVariable; // скрипт упадёт тут
  }, 1000);
} catch (e) {
  console.log('не сработает');
}
//try catch синхронный и функция выполнится после try catch
//try catch должен находиться внутри

setTimeout(() => {
  try {
    noSuchVariable;
  } catch {
    console.log('opa opa');
  }
});

try {
  //Встроенные конструкторы стандартных ошибок
  let er1 = new Error('message');
  let er2 = new SyntaxError('msg');
  let er3 = new ReferenceError('ogo');
  let er4 = new TypeError('tipo tip');

  throw false; // можем бросать как объекты так и примитивы(что не желательно )
} catch {
  // (err) не обязательно в современных браузерах
  console.log(typeof e);
}

// Custom Errors

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function test(json) {
  let user = JSON.parse(json);
  if (!user.age) {
    throw new ValidationError('Nema age');
  }

  if (!user.name) {
    throw new ValidationError('Nema name');
  }
  return user;
}
try {
  test('{"age": 25}');
} catch (err) {
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}
