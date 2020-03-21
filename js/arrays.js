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
