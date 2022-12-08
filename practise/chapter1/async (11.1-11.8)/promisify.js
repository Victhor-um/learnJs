//callback
function loadScript(src, callback) {
  let script = document.createElement('script)');

  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}

//Давайте промисифицируем её. Новая функция loadScriptPromise(src) будет делать то же самое, но будет принимать только src (не callback) и возвращать промис.

let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      resolve(script);
    });
  });
};
//Использование loadScriptPromise('path/scirpt.js').then(...)

//promisify(f) она принимает функцию для промисификации f и возвращает функцию-обертку.

function promisify(f) {
  return function (...args) {
    //возвращает функцию-обертку
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
      args.push(callback);

      f.call(this, ...args);
    });
  };
}

//Использование:
// let loadScriptPromiseTwo = promisify(loadScript);
// loadScriptPromiseTwo(...).then(...);
