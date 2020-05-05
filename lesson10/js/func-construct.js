// Синтаксис let obj = {}; позволяет создать только один объект
// Если нам необходима возможность создать несколько одинаковых объеков,
// то нужно использовать синтаксис ооп подхода.

// Это можно сделать при помощи функции-конструктора и оператора "new":
// Функция - конструктор: здесь мы перечисляем,
// какие свойства и методы будут у будущих объектов.
// Создаем шаблон, по которому можно будет создать однотипные объекты.
function Mouse(name, speed) { // названия функций - конструкторов принять присать с заглавной буквы

    // допустим, нам нужно иметь возможность создавать объекты мышей со свойсвами: имя, скорость, здоровье
    // перечислим свойства
    this.name = name;
    this.speed = speed;
    this.health = 12;
}

//вызов функции конструктора через new и создание объекта
let jerry = new Mouse("Jerry", 23); // первый объект
// значение свойства name объекта  jerry - "Jerry", speed - 23, health - 12
let mickey = new Mouse("Mickey", 13); // второй объект
// значение свойства name объекта mickey - "Mickey", speed - 13, health - 12

console.log(jerry);
console.log(mickey);

                    // _attack: 22
                    // _health: 15
                    // _name: "Иван"
                    // attack: (...)

                    // __proto__: Object

// добавим мышам возможность бежать, создадим метод run
Mouse.prototype.run = function () {
    console.log(`${this.name} бежит со скоростью ${this.speed}`);
};

// вызовем метод для объекта jerry
jerry.run();
// вызовем метод для объекта mickey
mickey.run();

// создадим еще одну функцию - конструктор. Шаблон для объектов котов
function Cat(name, speed) {
    // допустим, нам нужно иметь возможность создавать объекты мышей со свойсвами: имя, скорость, устал/не устал
    // перечислим свойства
    this.name = name;
    this.speed = speed;
    this.tired = false;
}

// создадим объекты котов
let tom = new Cat("Tom", 15);
let fastCat = new Cat("Fast Cat", 30);

console.log(tom);
console.log(fastCat);

// добавим котам возможность съесть мышь, если кот сможет ее догнать
Cat.prototype.takeMouse = function(mouse){
    if (mouse.health <= 0) {
        console.log(`${this.name} должен найти другую мышь`);
        return;
    }

    if (this.tired) {
        console.log(`${this.name} устал и не может бежать за мышью`);
        return;
    }

    if (mouse.speed > this.speed) {
        console.log(`${mouse.name} сбежал от ${this.name}`);
        this.tired = true;
        return;
    }

    mouse.health = 0;
    console.log(`${this.name} съел ${mouse.name}`);

};

// вызовем метод takeMouse для объектов
tom.takeMouse(jerry);
fastCat.takeMouse(mickey);
tom.takeMouse(mickey);

// Array - функция - конструктор всех массивов js
Array.prototype.newFunc = function () {
    console.log("Hello newFunc")
};

Array.prototype.push = function(data){
    console.log("Hello push " + data);
};

let arr = [1, 5, 7];
arr.push(34);
arr.newFunc();














