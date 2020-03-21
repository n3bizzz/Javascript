//циклы позволяют выполнить однотипное действие несколько раз

//while
//do while
//for

/*while (условие) {
    тело цикла
}
*/

/* пример :
let key = null;
while (key !=='admin'){
    key = prompt("Введите пароль"); // prompt - модальное окно js  для получения данных , не используется в сайтах т.к. не стилизуется
}
*/
/*do {
    тело цикла
} while (условие);
 */
let b = 0;
while (b<=50)
{
    if (!(b%3) && !(b%5)) {console.log(+b, "Three Five делиться на 3 и на 5")}
    else if(!(b%3)) {console.log(+b, "Three делиться на 3")}
        else if(!(b%5)) {console.log(+b, "Five делиться на 5")}
            else console.log(+b);
    b++;
}

//for (инициализация счетчиков; условие; обновление счетчика) {тело цикла}

let attemptCont = 5;
let answer1 =456;

for (let i =1; i<=attemptCont; i++){
    let  user_data = prompt("Ввидете число");
    if (parseInt(user_data) === answer1) {
        alert("вы угодали");
        break;
        //continue; переход на следующую итерацию без продолжения кода из тела цикла
    }
    alert("Осталось попыток" + (attemptCont-i));
}
let answer = 456;
let m = 0;
for (let k = 5; k>0 && !(m === answer) ; k--) {
    m=+prompt("Угодайте число. поппыток осталось:" +k);
}

