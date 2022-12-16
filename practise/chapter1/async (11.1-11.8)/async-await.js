async function f() {
  return 1; // равносильно return Promise.resolve(1)
}

f().then((res) => console.log(res)); // 1

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('well done!');
    }, 1000);
  });

  let result = await promise;

  console.log(result); // well done!
}

f2();

class Waiter {
  async wait() {
    return await Promise.resolve('waiteeeeer');
  }
}

new Waiter().wait().then((res) => console.log(res));

async function d() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json;
  } catch (err) {
    console.log('Tipo Again ErRorR: in trycatch ');
  }
}
d();

async function c() {
  let response = await fetch('/hhtht/parassha.dot.com');
}

//c().catch((err) => console.log('catch ot promisa poimal er'));
console.log('after c function');
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
/**
 * function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
 */
async function loadJsonAsync(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}
//oadJsonAsync('no-site-here.json').catch(console.log('loadAsyncError'));

//Как вызвать асинк функцию из обычной
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function g() {
  // покажет 10 через 1 секунду
  wait().then((result) => console.log(result));
}

g();
