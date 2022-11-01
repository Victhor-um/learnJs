/**
 * 1. реализовать счетчик createCounter():
на функциональном конструкторе (ООП) и на замыканиях с общим интерфейсом: increment(), decrement(), getValue().
2. После, расширьте ваш код сущностью counterBaseValue, которая должна определять на сколько изменяется значение при increment/decrement и которую можно определить при создании и изменить на уже созданном счетчике. Старый код использования до расширения должен поддерживаться и после расширения (вызов без аргумента). 
 */
log = console.log;
function CreateCounter(num = 1) {
  this.i = 0;
  this.base = num;
  this.increment = function () {
    return (this.i += this.base);
  };
  this.decrement = function () {
    return (this.i -= this.base);
  };
  this.getValue = function () {
    return this.i;
  };
  this.counterBaseValue = function (num = this.base) {
    this.base = num;
    return `You change base by: ${this.base}`;
  };

  return this.i;
}
const key = new CreateCounter(5);
debugger;
log(key.decrement());

log(key.decrement());

log(key.decrement());

log(key.getValue());
log(key.counterBaseValue(5));
log(key.counterBaseValue(5));
log(key.counterBaseValue(5));
log(key.increment());
log(key.counterBaseValue());
log(key.increment());
log(key.counterBaseValue(99));
log(key.decrement());

log(key.getValue());
