function Unit(name) {
    // свойства (условно приватные)
    this._health = 10;
    this._attack = 3;
    this._name = name;
    // приватные свойства
    // let privateProp = "Приватное свойство";
}

// описание методов
Unit.prototype.isAlive = function () {
    return this._health > 0;
};
//Unit.prototype[isAlive]

let unit1 = new Unit("Алёша");
//[_health=10, _attack = 3, _name ="Алеша", proto]
unit1._health = 90;
unit1.isAlive();
let unit2 = new Unit("Кеша");
//[_health=10, _attack = 3, _name ="Кеша", proto]
unit2._health = 50;
unit2.isAlive();




