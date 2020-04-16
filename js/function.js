//функции позволяют избегать дублирования кода
//функция в js - объект
// функции могут быть именоваными, анонимными (+стрелочные функции)
//функция выполняет одно действие, если много действий - несколько функций
//принято именовать глаголом
//любую функцию можно вызвать в любом месте кода


//дублированный код
let a =34;
let b =12;
console.log(a+b);
let n=54;
let m=90;
console.log(n+m);



//ИМЕННОВАНЫЕ ФУНКЦИИ

//объявление (function) именнованых функции ( имя тут  "getSum")
function getSum(num1, num2)  // (в () аргументы (тут num1, num2)
{// в {} тело функции
    console.log(num1+num2);
} //если именнованая функция , то тут не надо ;

//вызов функции: "имяФункции(аргументы) ;"
getSum(a,b); //  a -->num1 , b -->num2
getSum(n,m); //  n-->num1 , m --->num2

//пример: функция, которая выводит в консоль результат деления 2х чисел
function getDivide(num1,num2){
    if(num2 === 0) {
        console.log('на 0 делить нельзя')
        return;
    }
    let rez = num1/num2;
    console.log(rez);
}
a = 78;
b = 0;
getDivide(a,b);

//функция с возвартом
//по умолчанию c "return;"  или вообще без него , функция будет возвращать undefined(=false)
//если нужно вернуть несколько значений, то нужен  массив или объект
function sub(num1, num2) {
    return num1-num2; // возврат значения из функции
    //return  прерываает работу функции
    console.log('код который не выполниться, т.к. выше return');
}
sub(a,b);
let result = sub(a,b); // в result запишется то что возваращает функция через return
console.log(result);

function nameEnter(str='Гость') // значения аргументов по умолчания через =
//аргументы со значениями поумолчанию - необязательные аргументы, без него - обязательные
//сначало указываются об-ые ар-ты, потом необ-ые
{
    //str = str || 'Гость'; старый синтаксис для значения аргумента по умолчанию
    console.log(`Добро пожаловать, ${str}`)
}
nameEnter('Петрович');
nameEnter(); //будет возвращать значение по умолчанию или undefined (если нет аргументво или их недостаточно)

function compare(a, b) {
    if (typeof a==='undefined' || typeof b ==='undefined' ) {
        console.log(`Недостаточно аргументов`);
        return false; //желательно флаг оставлять а не просто прерывать
    }
    if (typeof a !== "number" || typeof b !== "number") {
        console.log(`кривые аргументы`);
        return false;
    }
    return (a < b) ? a : b;  // предполоагется что a и b не равны
}
console.log("compare: " , compare(0, 7));

//еще вариант
function getMin(num1, num2) {
    if (typeof num1==='undefined' || typeof num2 ==='undefined' ) {
        console.log(`Недостаточно аргументов`);
        return false;
    }
    if (typeof (num1) !== 'number'|| typeof (num2) !== 'number') {
        console.log('Not number');
        return false;
    }
    return Math.min(num1, num2);
}
console.log(getMin(24, 44));

function arrSum(arr) {
    let sum=0;
    for(let el of arr){
        sum+=el;
    }
    return sum;
}
let arr =[2,4,6,7];
console.log(`Сумма ${arrSum(arr)}`);


function changeStr(str) {
    str+= "продолжение строки";
}
function changeArr(arr) {
    for(let i=0; i<arr.length; i++)
        arr[i]+=3;
}
let str= 'String';
arr = [3,7,9,0];
changeStr(str); //строка не изменилась
changeArr(arr); // массив изменился
//лучше в функциях не менять входные данные (объекты), а создавать новые и их возварщать
console.log(str);
console.log(arr);
//при передачи в функции объекты передаются по ссылке, примитивы по занчени


let k = 4;
let h = k;
//копируются по значению
k = 89;
console.log(k); // 89
console.log(h); // 4

let someArr = [45, 78, 90];
let otherArr = someArr;
//копируются по ссылке на массив [45, 78, 90]
someArr[1] = 20000;
console.log(someArr); // [ 45, 20000, 90 ]
console.log(otherArr); // [ 45, 20000, 90 ]

//переменное кол-во аршументов
//оператор ... (spred)
function sumNums(a, b=23,...nums) // через ... можно передавать разное кол-во аргументов, в виде массива
//порядок: обязательные аргументы, необязаетльные, ...
{
    console.log("nums",nums); //nums псевдомассив , циклы работают, методы нет
    let sum = 0;
    for (let num of nums){
        sum+=num;
    }
    console.log("sum",sum);
    return sum;
}
sumNums(34,78); // 34-->a, 78-->b, nums пустой массив
sumNums(34,78,12,90,34); // 34-->a, 78-->b, остальное в nums
sumNums(1); //34-->a, b=23 по умолчанию, nums пустой

function letSum(a,b,c) {
    return a+b+c;
}
arr=[4,78,0,-10];
let resArr=letSum(...arr); //... тут разбивает массив на переменные передаваемые в функцию
// 4 -->a, 78-->b, 0-->c, -10 не используется
console.log("resArr" + resArr);

//старый способо вместо ...
function printArgs() { // все аргументы собираюся собираются в псевдомассив arguments
    //во всех функциях кроме стрелочных этот массив есть по умолчанию, все что передается можно из него достать
    //все есть в  нем даже если бы было printArgs(a,b,c,..other)
for(let arg of arguments){
    console.log(arg);
}
}
printArgs(3,null,[2,5],'String');


//вывести все числа по убыванию начиная с num заканчивая 0
function printNums(num) {
    let i=num;
    while (i>=0) {
        console.log(i);
        i--;
    }
}
printNums(3);
//второй вариант
function printNums2(num) {
    if(num>=0){
        console.log(num);
        printNums2(num-1);
        //рекурсивный вызов функции (вызов функции внутри самой себя, но с другими аргументами)
    }
}
printNums(3);

//Замыкание
function multi(n) {
    let x=n;
    return function (m)  //возвращает функцию
    {
        return x*m;
    }
}
console.log(multi); //вывводит код функции
let multiSix=multi(6); //multiSix - стала функцией, c 6 вместо x
result = multiSix(5);
console.log(result);//30
result=multiSix(10);
console.log(result);//60
//конкретно тут , удобно если часто умножение на 6
//используется для запоминания значения переменной из внешней функии
//замыкание используется чаще чем рекурсия

//самовызывающаяся функция
(function () {
    console.log("cамовызывающаяся функция");
    //meло функции
}()); //() - вызывают функцию внутри внешних ()