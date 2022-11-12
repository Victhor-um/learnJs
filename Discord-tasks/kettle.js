/**
 * plugOn()/ plugOff() включает\выключает вилку из розетки
 * isPlug() Включен ли прибор в розетку
 * addWater(number) Добавляет воду в чайник
 * reduceWater(number) выливает воду из чайника
 * checkWater() проверяет кол-во воды в чайнике
 * startBoil(temp) начинает кипячение до temp (default = 100)
 * stopBoil() останавливает кипячение
 * watt - Мощность чайника 500-3000 дефолт 1500
 */
class Electrical {
  // Флаг вставлена ли вилка(в глаз)
  constructor() {
    this._isPlug = false;
  }

  plugOn() {
    this._isPlug = true;
    console.log(`Прибор ${this.name.name} включен в сеть`); // хз как избавиться от name.name
  }
  plugOff() {
    this._isPlug = false;
    console.log(`Прибор ${this.name.name} выключен из сети`);
  }
  isPlug() {
    return this._isPlug;
  }
}
/**
 * todo
 * Кипячение скорость зависит от мощности и воды проверять розетку и баланс воды, вдруг идиот выльет
 * выключение кипячения по команде, отключение из розетки,
 * создание чайника с мощностью
 */
class Kettle extends Electrical {
  constructor(watt = 1500) {
    //watt - Мощность чайника 500-3000 дефолт 1500
    super();
    // console.log('this into kettle', this);
    this.name = Kettle; // нейм так записывать? или можно как-то проще\ЛУЧШЕ
    this._water = 0;
    this._temp = 0;
    this._watt = watt >= 500 && watt <= 3000 ? watt : 1500;
  }
  #Capacity = 2000; //Вместимость чайника
  #waterMax = 1800; //Макс объем для кипячения
  #waterMin = 500; // Мин объем для кипячения
  #isBoiling = false; // Индикатор кипячения
  addWater(number = 0) {
    if (number <= 0) {
      console.log(`Дебил нельзя налить ${number}мл. воды`);
      return;
    }
    this._temp = 0;
    this._water = Math.min(this._water + number, this.#Capacity);
    console.log(this._water);
    return this.checkWater();
  }
  reduceWater(number = 0) {
    if (number < 0) {
      console.log(`Дебил нельзя вылить ${number}мл. воды`);
      return;
    }
    this._water = Math.max(this._water - number, 0);
    console.log(this._water);
    return this.checkWater();
  }
  checkWater() {
    // console.log(`Сейчас ${this._water}мл. воды в чайнике`);
    if (this._water > this.#waterMax) {
      console.log(
        `Чайник под завязку(${this._water}мл.) Кипячение доступно с 500-1800мл. `
      );
      return false;
    }
    if (this._water < this.#waterMin) {
      console.log(
        `Чайник  бомжует(${this._water}мл.) Кипячение доступно с 500-1800мл. `
      );
      return false;
    }
    return true;
  }

  startBoil(temp = 100) {
    temp = Math.min(Math.round(temp), 100);
    if (this.#isBoiling) {
      console.log('Чайник уже кипятит');
      return;
    }
    if (!this.checkWater()) {
      return;
    }
    if (!this.isPlug()) {
      console.log('Чайник не вставлен в розетку');
      return;
    }
    if (this._temp > temp) {
      console.log('В чайнике температура больше заданой');
      return;
    }
    this.#isBoiling = true;
    this.timerId = setInterval(() => {
      if (this.checkWater() && this.isPlug() && this._temp < temp) {
        console.log(this._temp, '°C');
        this._temp += 1;
        if (this._temp >= temp) {
          console.log(`Кипячение закончено температура ${this._temp} °C`);
          this.stopBoil();
          return;
        }
      } else {
        console.log(
          'Мало воды, не включен шнур, температура в чайнике больше выставленной или чайник уже кипятит'
        );
        // clearInterval(this.boilTimer);
        this.#isBoiling = false;
        clearInterval(this.timerId);
        return;
      }
    }, (this._water / this._watt) * 150);
  }
  stopBoil() {
    if (this.#isBoiling) {
      this.#isBoiling = false;
      clearInterval(this.timerId);
      //clearTimeout(this.timerId);
      //learInterval(this.boilTimer);
    } else console.log('Чайник не кипятит, остынь браток');
  }
}
class Sucker extends Electrical {
  constructor() {
    super();
    this.name = Sucker;
  }
}
let k = new Kettle(550);
let s = new Kettle();
k.plugOn();
s.plugOn();
console.log(k._watt);
console.log(s._watt);
k.checkWater();
k.addWater(-5);
k.addWater(2300);
k.reduceWater(600);
k.reduceWater(1200);
k.reduceWater(4444);
s.addWater(1330);
console.log(s.checkWater());
//debugger;
//s.startBoil(50);
//s.stopBoil();
let l = new Sucker();
// l.plugOn();
// l.plugOff();
// startBoil(temp = 100) {
//   temp = Math.min(temp, 100);
//   this.timerId = setInterval(() => {
//     if (
//       this.checkWater() &&
//       this.isPlug() &&
//       this._temp < temp &&
//       !this.#isBoiling
//     ) {
//       this.#isBoiling = true;
//       console.log('we into if');
//       this.boilTimer = setInterval(() => {
//         console.log(this._temp, '°C');
//         this._temp += 1;
//         if (this._temp >= temp) {
//           console.log(`Кипячение закончена температура ${this._temp}`);
//           this.#isBoiling = false;
//           clearInterval(this.boilTimer);
//         }
//       }, (this._water / this._watt) * 150);

//       clearInterval(this.timerId);
//     } else {
//       console.log(
//         'Мало воды, не включен шнур или температура в чайнике больше выставленной'
//       );
//       clearInterval(this.boilTimer);
//       clearTimeout(this.timerId);
//     }
//   }, 5);
// }
