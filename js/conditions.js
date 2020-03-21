//конструкции ветвления
//используются , когда появляется необходимость выполнить код в зависимости  от условий

/*if  (условие) {
    блок кода выполняется если условие true
}
*/

let age = 13;
if (age>=18){
    console.log("Добро пожаловать на сайт")
} else { //пополнительный блок
    console.log("Вы не можете посещать наш сайт")
}

const GREEN = "green";
const BLUE = "blue";
const ORANGE = "orange";
const YELLOW = "yellow";
const WHITE = "white";

//spring | summer | autumn | winter
let season = 'summer';

if (season === 'spring') {document.body.style.background = YELLOW;  } //фон body в html
else if(season === 'summer') {document.body.style.background = GREEN;}
    else if (season === 'autumn') {document.body.style.background = ORANGE;}
        else if (season ==='winter') {document.body.style.background = BLUE;}
            else {document.body.style.background = WHITE;}

let day = 'среда';

if (day === 'суббота' || day === 'воскресенье') {console.log('выходные дни');}
else if (day === 'понедельник' || day === 'вторник' || day === 'среда' || day === 'четверг' || day === 'пятница' ) {console.log('рабочая неделя');}
    else {console.log('введите правильное значение'); }

//switch  в яваскрипте работает хуже if else
let  num = 333333;
switch (num) {
    case 11111:
        console.log("крупный приз");
        break; //прерывание switch
    case 222222:
    case 333333:
        console.log("Срдений приз");
        break;
    case 444444:
    case 555555:
    case 666666:
        console.log("Небольшой приз");
        break;
    default:
        console.log("Попробуйте еще"); //если нет совпадений в case
}
//выполняется от первого найденого совпадения  , до первого Break или до конца конструкции без проверки последующих условий






