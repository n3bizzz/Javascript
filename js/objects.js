//создаем пустой объект
let userData = {};
console.log(userData); //вывод объекта - путсой

userData.name = "Anna";
userData.age = 28;
console.log(userData);
userData.fovouriteColors = ['red', 'orange', 'yellow'];
console.log(userData.fovouriteColors);
console.log(userData.age);
userData.age = 63;
console.log(userData.avatar); //несуществующее свойство объектов = undifined

//проврка налчия свойства в объекте
//1. варинат - проверика на udefined
if(userData.avatar === undefined){ userData.avatar = 'default.png'; }
userData.login = null;  // св-во значение которого иницилизируем потмо  - то оно null должно быть
console.log(userData);

let jsBook = {};
let phpBook = {};

//Создание объектов
//1 способ
jsBook.title = 'Капитанская дочка';
jsBook.author = 'А.С. Пушкин';
jsBook.pageCount = 502;
phpBook.title = 'Учебник';
phpBook.author = 'Дарья';
phpBook.pageCount = 10000;

//2способ
jsBook = {
    title: 'php book',
    author: 'js book',
    pageCount: 351
};
phpBook = {
    title: 'php book',
    author: 'js book',
    pageCount: 725
};
userData.books = [jsBook, phpBook];
console.log(userData);
propName = 'title';
for(propName in jsBook)
    console.log(`имя свойтсва ${propName}, значение свойства ${jsBook[propName]}`);


let  messages = [
    {
        text: 'short',
        priority: 'high',
        code: 12
    },
    {
        text: 'long',
        priority: 'low',
        code: 424
    },
    {
        text: 'message',
        priority: 'high',
        code: 143
    }
];
let n = prompt('Введите число');


for(let i=0; i<messages.length;i++){
    if ( n < messages[i].code ) {
        console.log(messages[i].text)
    }
}


//Деструктуризация обЪекта
phpBook = {
    title: 'php book',
    author: 'js book',
    pageCount: 725
};
let {author: authorVar, pic: picVar = null, ...other} = phpBook;
console.log(authorVar);
console.log(picVar);
console.log(other);

let user =  {
    login: 'qwe',
    pwd: '123',
    name: 'Евгений'
}

let {login: login, email: email = null,  pwd: pwd, ...other1} =  user;
console.log(login);
console.log(email);
console.log(pwd);
console.log(other1);


let colors = userData.fovouriteColors;
let [redcolor, orangecolor] =colors;
console.log(redcolor);
console.log(orangecolor);

let [color, color2, color3, color4 = 'green', colors5] = color;

phpBook = {
    title: 'php book',
    author: 'js book',
    pageCount: 725
};


//Очень полезно, для перебора  объекта в дестроктуре
for ( let [key, val] of Object.entries(phpBook)) {
    console.log(`key=${key}, val=${val}`);
}
//Object.entries создает массив на основе объекта
