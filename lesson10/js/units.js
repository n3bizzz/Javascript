// в JavaScript класс - функция!!!
// в JavaScript класс - функция-конструктор + дополнительные возможности
// шаблон будущих объектов типа Unit
class Unit { // имя класса - существительно в единственном числе
    // свойства
    _attack = 3; // свойство _attack со значением по умолчанию 3
    _health = 10; // свойство _health со значением по умолчанию 10
    // constructor будет вызван при создании объектов
    constructor(name) {
        // значение свойства _name будет устанавливаться
        // в момент создания объекта
        this._name = name;
    }

    // сеттеры set указывает на установку значения свойству
    set attack(attackValue) {
        if (attackValue < 5) {
            throw new Error("атака не может быть меньше 5");
        }
        this._attack = attackValue;
    }

    // геттеры get указывает на получение значения свойсва
    get attack() {
        return this._attack;
    }

    // метод (функция внутри) объекта
    // function не пишем,
    // начинаем сразу с названия метода
    isAlive() {
        return this._health > 0;
    }

    // метод (функция внутри) объекта
    attackOther(otherUnit) {
        // instanceof проверяет принадлежность объекта (otherUnit)
        // к типу (классу) Unit. Возвращает true/false
        if (!(otherUnit instanceof Unit)) {
            throw new Error("юнит не может атаковать " +
                "данного персонажа");
        }
        // аналогично для атакующего
        if (!this.isAlive()) {
            console.log(`юнит ${this._name} мертв. Атаковать не может`);
            return; // завершаем работу метода
        }
        if (!otherUnit.isAlive()) {
            console.log(`юнит ${otherUnit._name} мертв. Атака бесполезна`);
            return; // завершаем работу метода
        }

        otherUnit._health -= this._attack;
        console.log(`${this._name} атаковал ${otherUnit._name}.
                    Здоровье ${otherUnit._name} = ${otherUnit._health}`);

    }

}

// создание объектов
let unit1 = new Unit("Иван");
let unit2 = new Unit("Алёша");

console.log(unit1);
console.log(unit2);

// доступ к свойствам осуществляется через точку
// получили значение свойства _name объекта unit1
console.log(unit1._name); // Иван
// получили значение свойства _attack объекта unit2
console.log(unit2._attack); // 3
// установили значение свойства _attack объекта unit1
unit1._attack = 23;
// установили значение свойства _attack объекта unit2
unit2._attack = 18;
unit1._health = 15;
unit2._health = 32;

// вызов сеттера attack,
// установка значения свойства _attack
unit1.attack = 22;

// вызов геттер attack,
// получение значения свойства _attack
console.log(unit1.attack);

// вызов методов осуществляется через точку
// вызвали метод атаки у объекта unit1, unit2 передается аргументом
unit1.attackOther(unit2);
// вызвали метод атаки у объекта unit1, unit2 передается аргументом
unit1.attackOther(unit2);
// вызвали метод атаки у объекта unit2, unit1 передается аргументом
unit2.attackOther(unit1);

// наследование
// Unit класс + доп. свойства и методы
// Класс Knight наследуется (расширяет!!!) от класса Unit
// при этом объекты типа Knight получат все методы и свойсва,
// описанные в классе Unit + те, которые описаны в классе Knight
class Knight extends Unit{
    // свойства
    _armor = 1;
    constructor(name){
        super(name); // вызов конструктора родителя
        this._health = 12;
        this._attack = 7;
        console.log("Создан объект типа Knight");
    }
    set armor(armorValue) {
        if (armorValue < 1) {
            throw new Error("armor не может быть меньше 1");
        }
        this._armor = armorValue;
    }
    get armor(){
        return this._armor;
    }
    // переопределение метода родителя
    attackOther(otherUnit){
        // расширение метода родителя (добавление своего функционала)
        otherUnit._health += otherUnit._armor;
        // вызов метода родителя в том виде, в каком он описан
        // в классе Unit
        super.attackOther(otherUnit);
    }
}
let knight1 = new Knight("Митя");
let knight2 = new Knight("Кеша");
knight1.attackOther(knight2);

class Doctor extends Unit{
    constructor(name){
        super(name); // вызов конструктора родителя (Unit)
        this._health = 20;
    }
    attackOther(otherUnit){
        // не используем реализацию родителя, пишем собственную
        if (!(otherUnit instanceof Unit)){
            throw new Error("доктор не может вылечить данного персонажа");
        }
        if (!this.isAlive() || !otherUnit.isAlive()) {
            console.log("Лечение невозможно. Все мертвы");
            return;
        }
        otherUnit._health += this._attack;
        console.log(`${this._name} вылечил ${otherUnit._name}.
                   Здоровье ${otherUnit._name} = ${otherUnit._health}`);
    }
}

class PrivateProp {
    // приватное свойство (доступно только внутри класса)
    #privateProp = 100;
    //условно приватное свойство (доступно везде, но _ указывает, что
    // доступ должен осуществляться через get / set)
    _privateProp = 120;

    set privateProp(value){
        this.#privateProp = value;
    }
    get privateProp(){
        return this.#privateProp;
    }
    // #privateVoid(){
    //     console.log("private void");
    // }
}

let obj = new PrivateProp();
obj._privateProp = 200;
console.log(obj._privateProp);

// console.log(obj.#privateProp); // SyntaxError: Private field '#privateProp' must be declared
console.log(obj.privateProp); // вызов get privateProp

// оператор static
class UnitsHelper {
    // метод принадлежит классу (не объекту),
    // для вызова нет необходимости создавать объект
    // static обычно используется для создания фабричных (методы,
    // которые создают и возвращают объекты)
    // или утилитарных методов (например, Math.floor())
    static getUnit(unitType, unitName){
        if (unitType.toLowerCase() === "knight") return new Knight(unitName);
        if (unitType.toLowerCase() === "doctor") return new Doctor(unitName);
    }

    static compareByAttack(unit1, unit2){
        return unit1.attack - unit2.attack;
    }
    static compareByHealth(unit1, unit2){
        return unit1._health - unit2._health;
    }
}

let userInput1 = prompt("введите тип Юнита"); // knight
let userInput2 = prompt("введите тип Юнита"); // doctor

let userUnit1 = UnitsHelper.getUnit(userInput1, userInput1);
//let userUnit1 = new Knight("knight");
let userUnit2 = UnitsHelper.getUnit(userInput2, userInput2);
//let userUnit2 = new Doctor("doctor");
userUnit2.attackOther(userUnit1);




// class Army {
//     []
//     addUnit()
//     attackArmy
// }

// класс Книга, класс ДетскаяКнига
// класс Библиотека - добавляет книги, выдает книги





// let u1 = {name: "Иван", attack: 3, health: 10};
// let u2 = {name: "Алёша", attack: 3, health: 10};


// let unit1 = {
//     name: "Alex",
//     attack: 23,
//     health: 12
// };
// let unit2 = {
//     name: "Tom",
//     attack: 44,
//     health: 2
// };