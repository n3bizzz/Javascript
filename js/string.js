//строки (тип string)
//строки в javascript неизменны (можно только создать новую на основе пред)

let greeting= 'Добро пожаловать';
greeting = "Добро пожаловать";
greeting = "Добро пожаловать на \"Сайт\""; // экранирование " с помощью \ или использвать другие ковычки
greeting = "добро пожаловать \n Сайт"; // \n - пецсимвол ,
greeting = "добро пожаловать \\n Сайт";// если надо вывводит в тексте то экранировать как указанно выше \

//строки в обратных ковычках  позваляют  передавать выражения через $ {}
let  login = 'qwe';
let age =18;
let info=`Пользователь ${login}, возраст ${age}`; // в обрвтных ковычка ничего не экранируется как выше, все отображается как есть
console.log(info);

//длинна строки
let tstStr='Автобус';
console.log(tstStr.length);

//доступ  к символам в строки
console.log(tstStr[3]);
for (let elem of tstStr)
{
    console.log(elem)
}

//методы,создают новую строчку на основе обробатываемой
tstStr='Автобус';

let newStr = tstStr.toUpperCase(); // в верхний регистр
//tstStr=tstStr.toUpperCase(); так тоже можно, просто при переназначении мусор оcтанется в виде старой строки в  памяти, а запишется новая строка
console.log(newStr);

newStr = tstStr.toLocaleLowerCase();//нижний регистр
console.log(newStr);

//убрать пробеллы с начала и конца строки
tstStr = '      Автобус      ';
console.log(tstStr.length);
tstStr = tstStr.trim();
console.log(tstStr.length);

tstStr='Автобус';
console.log(tstStr.startsWith('ав')); //Начинается с
console.log(tstStr.endsWith('с'));// Заканчивается на
console.log(tstStr.includes('то')); //Содержит
//возвращают true false

//сравнение  строк, у каждого символа есть свой номер юникоде
let compare1 = 'апоезд';
let compare2 = 'тпоезд';
// сравнивается до первого  различия
console.log(compare1 > compare2);
console.log(compare1 < compare2);
console.log(compare1 === compare2);

let compareRes = compare1.localeCompare(compare2); //метод сравнения строк , возвращает число - + число  ил 0
console.log(compareRes); //1
// 0 - строки равны
// положительное число - compare1 больше (позже в юникод таблице ) compare2
// отрицательное число - сompare1 меньтше (раньше в юникод таблице) compare2

//indexOf / lastindexOf поиск индекса
// slice / substring  получить часть строки

//оперделить является ли слово полиндромом
let polindrom = prompt('Введите строку');
polindrom = polindrom.trim();
let revPol = polindrom.split("").reverse().join("");
//split из строчки массив
//reverse переворачивает массив
//join из массива строку соеденив указанным символом (по умолчанию ,)
console.log(revPol);
//
let res = (polindrom === revPol) ? 'палиндром' : 'не полиндром';
console.log(res);

