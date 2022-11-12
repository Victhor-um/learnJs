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
  #Capacity = 2000; //Вместимость чайника
  #waterMax = 1800; //Макс объем для кипячения
  #waterMin = 500; // Мин объем для кипячения
  constructor() {
    super();
    // console.log('this into kettle', this);
    this.name = Kettle; // нейм так записывать? или можно как-то проще\ЛУЧШЕ
    this._water = 0;
    this._temp = 0;
  }
  addWater(number = 0) {
    if (number < 0) {
      console.log(`Дебил нельзя налить ${number}мл. воды`);
      return;
    }
    this._water = Math.min(this._water + number, this.#Capacity);
    return this.checkWater();
  }
  reduceWater(number = 0) {
    if (number < 0) {
      console.log(`Дебил нельзя вылить ${number}мл. воды`);
      return;
    }
    this._water = Math.max(this._water - number, 0);
    return this.checkWater();
  }
  checkWater() {
    console.log(`Сейчас ${this._water}мл. воды в чайнике`);
    if (this._water > this.#waterMax)
      console.log(
        `Чайник под завязку(${this._water}мл.) Кипячение доступно с 500-1800мл. `
      );
    if (this._water < this.#waterMin)
      console.log(
        `Чайник  бомжует(${this._water}мл.) Кипячение доступно с 500-1800мл. `
      );
    return this._water;
  }
}
class Sucker extends Electrical {
  constructor() {
    super();
    this.name = Sucker;
  }
}

let k = new Kettle();
let s = new Kettle();
k.plugOn();
s.plugOn();
k.checkWater();
k.addWater(-5);
k.addWater(2300);
k.reduceWater(600);
k.reduceWater(1200);
k.reduceWater(4444);
s.checkWater();
s.addWater(1330);
let l = new Sucker();
// l.plugOn();
// l.plugOff();
