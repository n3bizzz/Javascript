// addEventListener + именованая функция
let firstElem = document.getElementById("firstElem");
console.log(firstElem);
firstElem.addEventListener("click", firstHandler); // добавление

function firstHandler(event) {
    console.log("firstHandler");
    console.log(event, this);
    this.removeEventListener("click", firstHandler); // удаление
}

let secondElem = document.getElementById("secondElem");
console.log(secondElem);
// Передача аргументов:
// если не нужно будет удалять обработчик:
//если bind, то внутри первый арг - This
// secondElem.addEventListener("click", secondHandler.bind(secondElem, "аргументы"),{once: true}); // {once: true} - вызов не более одного раза. есть разные опции
// если нужно будет удалять обработчик:
let secondHandler_in_var = secondHandler.bind(secondElem, "аргументы в secondHandler");
secondElem.addEventListener("click", secondHandler_in_var);

function secondHandler(arg, event) {
    console.log("secondHandler");
    console.log("arg " + arg);
    console.log("event", event);
    console.log("this", this);
    this.removeEventListener("click", secondHandler_in_var);
}

// addEventListener + анонимная функция
let thirdElem = document.getElementById("thirdElem");
console.log(thirdElem);
thirdElem.addEventListener("click", (event)=>{
    console.log("thirdElem Handler");
    console.log("event", event);
    console.log("this", this); // анонимная стрелочная функция: this - window, анонимная функция:  this - thirdElem
});

// не использовать, если нужно удаление обработчика!
// Если нужна возможность удаления обработчика функцию нужно сохранить в переменную

// on+название_события + анонимная функция
let fourthElem = document.getElementById("fourthElem");
console.log(fourthElem);
fourthElem.onclick = (event) => {
    console.log("fourthElem Handler");
    console.log("event", event);
    console.log("this", this); // для анонимных стрелочных this - window, для анонимных this - fourthElem

    // удаление
    fourthElem.onclick = null;
};
//через addeventlistner можно вешать сколько угодно обработчиков, через устаревший способ (onclick) только один
// on+название_события + именованая функция
let fifthElem = document.getElementById("fifthElem");
console.log(fifthElem);
fifthElem.onclick = fifthHandler;

function fifthHandler(event) {
    console.log("fifthHandler");
    console.log("event", event);
    console.log("this", this); // this - fifthElem

    // удаление
    fifthElem.onclick = null;
}

// on+название_события + именованая функция - передача аргументов
let sixElem = document.getElementById("sixElem");
console.log(sixElem);
sixElem.onclick = sixHandler.bind(sixElem, "аргументы в sixHandler"); // в такой ситуации лучше использовать addEventListener!!!

function sixHandler(arg, event) {
    console.log("sixHandler");
    console.log("arg " + arg);
    console.log("event", event);
    console.log("this", this);

    // удаление
    sixElem.onclick = null;
}
