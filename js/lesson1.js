//днострочный комент
/*многострочный комент */

//Javascript - интерпритируемый язык программирования со слабой динамической  типизацией

// объявление переменных


let title = "Книга";
// если два слова в названии то let bookTitle , либо так book_title но не смешивать

//переопределение значения переменной
title = "Журнал";

var count = 147; //устаревший спопособ объявления переменных, переменная с глобальной областью видимостью (может быть ограничена функцией)
// let область видимости ограничена  блоком {}

// отладка - вывод  в консоль
console.log(title);
console.log(title, count);
// выводить alert(); и в браузер нельзя отладку выводить

// значения констант изменить нельзя
// значения константам необходимо присваивать в момент объявления
const VERSION_CODE = 564; // принято заглавнысми буквами, каждое слово через _
console.log(VERSION_CODE);

let message;
message = "Авторизация прошла успешно";

// Примитивные типы данных

// Числа (number)
let age = 57; //целый числа, +-0
age = 57.5; // числа с плавающей точкей

//cпециальные числовые значения:
//Infinity  бесконечность
//-Infinity - безконечность
//NaN - ошибка вычисления

console.log(age / 0); // infinity
console.log(-age / 0); // -infinity
console.log(message /  age); // NaN

//Строки (string) пишутся в двойных или одинарных ковычках
let auth_info = 'Успешная авторизация';
let reg_info = "Успешная регистрация";
console.log(auth_info);
console.log(reg_info);

let welcome = "Добро пожаловать в 'МАГАЗИН' "; // сли нужно вывести в ковычках  то внутри "dsf 'sd'"  наоборот 'sad "sdaf"'
console.log(welcome);
welcome = "Добро пожаловать в \"Магазин\""; // \ экранирование
console.log(welcome);

//логический тип  данных (boolean)
//может принимать два значения : true или false
// при преобразовниях 0, undefined, null, пустая строка - false, остальное true
let stopped = true;
let isActive = false;
console.log(stopped, isActive);

//undefined - значение переменной не присвоено
let undefinedValue;
console.log(undefinedValue);

//null - значение ниезвестнод
let nullValue = null;
console.log(nullValue);

//определение типа данных typeof
console.log(typeof age);
console.log(typeof reg_info);
console.log(typeof isActive);

// операторы
// арифметические  операторы
// + | - | * | / | % взятие остатка от деления | ** возведение в степень

// + используется для преобразвония строки  с числом в тип  number
let a = "5";
console.log(a, typeof a);
a = +a;
console.log(a, typeof a);
console.log(+"4 не число"); //Nan

// + используется  для склеивания  строк
// если один из операндов строка , то второй тоже будет преобразован к строке
let info = auth_info + reg_info;
console.log(info);

//остальные  арифметические  операторы преобразуют операнды к числам, если преобразование не возможно то Nan
console.log('30'/ '2'); //15
console.log('30px' * 2); //Nan
console.log(30 - '2'); // 28

console.log("Проверка на Nan"); //isNaN() не число, или нельзя преобразовать в число - true
console.log(isNaN("string")); //true
console.log(isNaN("123px")); // true
console.log(isNaN("123")); // false
console.log(isNaN(123)); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false


console.log("Взятие остатка от деления");
console.log(9%2);
console.log(8%2);
console.log(810%2);
console.log(546%10);
console.log(7%6);

//оперторы присваивания
// = | +=| -= | *= | /= | %=
let num = 10;
num += 10; // num = num + 10;

//операторы сравнения
// результат работы операторов сравнения : true  или false
// > | < | >= | <= |
// == равенcтво (с преведением переменных к одному типу)
// === строгое равенство используется в javascript  (без преведения переменных к одному типу)
// != неравенство
// !== строгое неравенство  используется в javascript

let height = 120;
let width = '120';

console.log(height == width); //true | если == то сначала преобразует к одному типу потом сравнение, если === и типы разные то сразу false
console.log(height === width); //false

console.log(true == 1); //true
console.log(true === 1); //false


//инкремент ++ и декремент -- применяются только к переменным
//инкремент - увеличвает значение на 1
//префиксная форма ++i
num = 2;
console.log(++num); //3 | сначло увелечение
console.log(num); // 3 |
//постфиксная форма i++
num = 2;
console.log(num++); //2 | снчало переменная потом увелечение
console.log(num); //3 |

//декремент уменьшает значение на 1
num = 2;
console.log(--num); //1 |
console.log(num); // 1 |
//постфиксная форма i++
num = 2;
console.log(num--); //2 |
console.log(num); //1 |

num = 7;
let result =  num++ - num++ + num++ - --num;
//7 - 8 + 9 - 9
console.log(result); //-1

//логические операторы
// результат работы : true или false
// || или . && и . ! не
height = 120;
width = 120;
console.log(height < width); //false
console.log(height <= width); //true
console.log(height > 100) ; //true
console.log(height < width  && height > 100); // false
console.log(height < width  || height > 100); //true

//тернарный  оператор ?
// res = (условие) ? значение 1 : значениа 2;  если условие true то значение  1, если false то значение 2;

height = 560;
width = 124;
result=height < width ? "ширина": "высота";
console.log(result);


a=50;
result = !(a%2)  ? a/2: a-2;
//result = (a%2 === 0 ) ? a/2: a-2  // выше в условии 0 преобразуется в false сразу ,! меняет на true- условие выполненяется
console.log(result);

//задать высоту длину и ширину прямоуглоного параллелепипида . Найти его площад. вывести результат в консоль

let length = 2;
height = 10;
width = 3;

console.log(2*(height*width + height*length + length*width));
