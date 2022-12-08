async function f() {
  return 1; // равносильно return Promise.resolve(1)
}

f().then(alert); // 1

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('well done!');
    }, 1000);
  });

  let result = await promise;

  alert(result); // well done!
}

f2();
