/*let unit = {
  name: 'Alex',
  health: 23,
  attack: 3,
  run: function () {
      console.log('Юнит бежит');
  }  
};

let unit2 = {
    name: 'Tom',
    health: 33,
    attack: 12,
    run: function () {
        console.log('Юнит бежит');
    }
};
*/
//если  много объектов с одинаковым строением,
// то пользуются синтаксисом классов ( правил создания объекта)
//в js класс = функция-конструктор + доп.возможности!
class Unit { //имя класса с заглавной буквы, сущ в ед числе
    //свойства
    _attack = 3; //3 - значение по умолчанию
    _health = 10;
    //constructor будет вызван при создании объектов
    constructor(name) {
        //значение св-ва name будет устанавливаться
        //в момент создания объекта
        this._name=name;
    }
    //проверка вх данных , создаются меттоды сеттеры и геттеры
    //сеттеры set всегда указывает на установку значения свойства
    //наличие сеттера не защищает полностью .все равно можно обратиться св-м,
    // но есть договоренность  что если св-во начинается с _ , то к нему напрмяую не обращаются , только через сеттер
    set attack(attackValue) {
        if (attackValue<5){
            throw new Error('Атака не может быть меньше 5');
        }
        this._attack=attackValue;
    }
    //на данный момент  можно скрыть свой-ва, но не все браузеры поддерживают

    //геттеры используются для  получения  значения св-ва
    get attack() {
        return this._attack;
    }
    //именна сеттеров и геттеров для одно и того же свойсва
    //должны быть одинаковыми (тут attack для _attack)
    //если есть сеттер у свойства то должнен быть и геттер

    //метод (функция внутри) объекта
    //function не пишем, начинаем сразу с названия метода
    isAlive(){
        return this._health>0;
    }
    attackOther(otherUnit){
        //instanceof проверяет принадлежность объекта (otherUnit)
        //к типу (классу) Unit. Возвращает  true/false
        if(!(otherUnit instanceof Unit)){
            throw new Error('юнит не может атаковать данного персонажа');
        }
        if(!this.isAlive())
        {
            console.log(`юнит ${this._name} Мертв, не может атаковать`);
            return;
        }
        if(!otherUnit.isAlive()){
            console.log(`юнит ${otherUnit._name}  мертв. атака бесполезна`);
            return;//завершаем работу метода
        }
        otherUnit._health-=this._attack;
        console.log(`${this._name} атаковал ${otherUnit._name}. здоровье ${otherUnit._name} = ${otherUnit._health}` );
    }
}
//создание объектов
let unit1 = new Unit('Иван');//={attack:3, health:10, name: 'Иван'}
let unit2 = new Unit('Алёша');//={attack:3, health:10, name: 'Алёша'}
console.log(unit1,unit2);

//доступ к свойствам .
console.log(unit1._name);
console.log(unit1._attack);
unit1._attack=23;
unit2._attack=18;
unit1._health=10;
unit2._health=99;

//вызов сеттера attack,
// установка значения св-ва _attack
unit1.attack = 22;
//вызов геттера attack,
// получения значения св-ва _attack
console.log(unit1.attack);
//интерпретатор различает сеттер от геттер по
//наличию оператора присваивания =

//вызов методов осуществляется через точку
unit1.attackOther(unit2);
unit1.attackOther(unit2);
unit2.attackOther(unit1);
unit1.attackOther(unit2);

//наследование
//cоздание другого объекта с свойстами и методами класса Unit
// + дополнительные
class Knight extends Unit{
    _armor=1;
    constructor(name) { //нужно создавать если нужно что то добавить при создании объекта
        super(name); //вызов конструктора родителя
        console.log('Создать объект типа Knight');
        this._health=12;
        this._attack=7;
    }
    set armor(armorValue) {
        if(armorValue<1){
            //после error программа дальше не пойдет. return вернет _armor=1;
            throw new Error('armor не может быть меньше 1');
        }
    this._armor=armorValue;
    }
    get armor(){
        return this._armor;
    }
    //переопределение метода родителя
    attackOther(otherUnit) {
        //расширение метода родителя
        otherUnit._health+=otherUnit._armor;
        super.attackOther(otherUnit);//вызов метода родителя, без этого метод будет полностью перезаписан.
    }
}

let knight1 = new Knight('Митя');
let knight2 = new Knight('Кеша');
knight1.attackOther(knight2);

class Doctor extends Unit{
    constructor(name){
        super(name);
    this._health=20;
    }
    attackOther(otherUnit) {
        //не используем реализацию родиетля, пишем собственную
        if(!(otherUnit instanceof  Unit)) {
            throw new Error('доктор не может вылечить данного персонажа');
        }
        if (!this.isAlive() || !otherUnit.isAlive()){
            console.log('Лечение невозможно. Все мертвы');
            return;
        }
        otherUnit._health+=this._attack;
        console.log(`${this._name} вылечил ${otherUnit._name}. здоровье ${otherUnit._name} = ${otherUnit._health} `);
    }
}
//делать армии и рандомно атаковать друг друга
