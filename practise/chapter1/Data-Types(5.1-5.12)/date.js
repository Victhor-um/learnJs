//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

const date = new Date(2012, 1, 20, 3, 12, 0, 0);

//alert.log(date);

/** 
 * Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:
 */
function gedDateAgo(date, days) {
  let dateAgo = date.getTime() - days * 86400000;
  console.log(dateAgo);
  let newDate = new Date(dateAgo);
  console.log(newDate.getDate());
}
let dateNow = new Date();
gedDateAgo(dateNow, 366);
/**
 * В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
 */
function getLocalDay(date) {
  const euDays = [7, 1, 2, 3, 4, 5, 6];
  const getDay = date.getDay();
  return euDays[getDay];
}
console.log(getLocalDay(dateNow));

/**
 * Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
 */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date;
}
console.log(getLastDayOfMonth(2012, 1)); //29

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
function getSecondsToday() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

alert(getSecondsToday());

//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let now = new Date();

  // создаём объект с следующим днём и текущем месяцем/годом
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = now - tomorrow; //разница в миллисекундах
  return Math.round(diff / 1000); //получаем секунды
}
alert(getSecondsToTomorrow());
