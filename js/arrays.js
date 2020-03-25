//массивы
let arr = [];// пустой массив

console.log(arr);

let colors = ['red', 'white', 'green'];
console.log(colors);

//доступ к эллементам  массива осуществляется по индексу
let item = colors[2];
console.log(item);
item = colors[58];
console.log(item); // undefined

colors[1] = "black";
console.log(colors);

colors[34] =  "orange"; //массив становиться на 35 элементов, пустые ячейки - undefined
console.log(colors);

let colorsLen = colors.length; // длина массива
console.log(colorsLen);

//перебрать массив
colors = ['red', 'white', 'green'];
for (let i=0; i<colors.length; i++)
{
    console.log(colors[i]);
    colors[i] +='-color';
}
console.log(colors);

let inttArr = [23, 56, -12, 67, -222, 0, -98];
//вывести в консоль все элементы больше 0;
for(i = 0; i<inttArr.length; i++ )
{
    if (inttArr[i]>0) {console.log(inttArr[i])}
}


intArr =[3, 5, -2, 7];
//уеличить значение каждого эл-та массива в 2 раза
for (let i = 0; i < intArr.length; i++){
    intArr[i]*=2;
}
console.log(intArr);
intArr =[3, 5, -2, 7];

//перебор масссива через for of
for (let elem of intArr){
    //эл-т массива копируется в elem, массив сам не меняется
    console.log(elem);}

//for in не используются для перебора массива

let someArr = [
    [34, 67, 12, -44],
    [12, -8, 0, -23],
];
console.log(someArr[1][2]);

for(let i=0; i<someArr.length; i++)
    //someArr[i] вложенный массив
    for(let j=0; j<someArr[i].length; j++)
        someArr[i][j]+=3;
console.log(someArr);

//методы массивов

colors = ['red', 'white', 'green'];

// добавление. извлечение перевого или последнего эл-та массива
colors.push('black', 'orange'); //push добавляет элементы в конец массива
console.log(colors);

let lastElem=colors.pop(); // pop удаляет и возвращает последний эл-т массива
console.log(colors,lastElem);

colors.unshift('orange','yellow'); //unshift добавляет элементы в начало массива
console.log(colors);

colors.shift();//удаляет и возвращает первый эл-т массива
console.log(colors);

//если есть выбор лучше работать с концом массива, методы работают быстрее чем с началом

let searchRes=colors.includes('orange'); // показывает есть ли искомый эл-т в массиве или нет , возвращает true false
console.log(searchRes);

//reverse - изменяет порядок эл-в на обратный
//split / join - ! (из строки в массив и обратно)
//concat объеденение массивов
//spliсe / slice !
//indexOf / lastindexOf -  возвращает индекс искомого эл-та
let myArr=[[],[],[]];
let max;
let maxi;
let maxj;
for(let i=0; i<3; i++)
    for (let j=0; j<6; j++)
    {
        myArr[i][j] = Math.floor( Math.random()*199-99);
    }
console.log(myArr);
max=myArr[0][0];
for(let i=0; i<3; i++)
    for (let j=0; j<6; j++)
    {
        if (myArr[i][j]>max ){max = myArr[i][j]; maxi=i; maxj=j; }
    }
console.log('elem',max,'index',maxi,maxj);

//сумма всех элементов
intArr = [3, 4, 12,-34, 0];
let sum = 0;
for(let elem of intArr)
    sum+=elem;
console.log(sum);