let titleElems = document.querySelectorAll(".article p:first-child");
console.log(titleElems);
//перебор html кол-ии
for (let elem of titleElems){
    console.log(elem);
    //добавление обработчика события click (щелчек лкм) каждому элементу p
    //обработчик события - функция, в которой описывается реакция на событие
    //данная функция будет вызвана при наступлении события!
    //1 вариант: addEventListener(название_события, название_функц_обработчика)
    elem.addEventListener("click", openDescription);
    //проработать дома
    /* 2 вариант
    elem.addEventListener("click", function () {
        тело функции
        console.log(this);
        удалить обработчик
    })*/
    /* 3 вариант через описание метода (название метода: on + название события)
    elem.onclick = function () {
        тело функции
        console.log(this);
    }
     */
}
//функция, которая будет вызвана при нажатии лкм на элементе p
function openDescription() {
    console.log("openDescription",this);
    //this - контекст вызова функции(тут elem элемент на котором висит обработчик)
    //this не обязательно тот элемент на котором произошло событие, а тот на который добавлен обработчик
    this.nextElementSibling.classList.toggle("open"); //получаем эл-т this, получаем его соседа справа , добавляем css класс open если его нет и наоборот
}
//атрибут data-* используется для пердачи пользовательских данных из html в js
//data-название_прикрепляемых_данных = "значение данных"
//получение на js: элемент.dataset.название_прикрепленных_данных

// если много  дочерних элементов, и одинаковый обработчик, то обработчик вешают на внешний контейнер
let getPresent = () => { //ключи соответствуют значениям атрибута data-present
  return {
      car: "Машина",
      dog: "Собака",
      book: "Книга"
  }
};
//получим элемент-контейнер
let presentContainer = document.getElementById("present_container");
console.log(presentContainer);
//добавим обработчик события на presentContainer
presentContainer.addEventListener("click",showPresent);

//addEventListener ---> сработал click ---> вызов функции showPresent(объект_с_информацией_о_событии)
function showPresent(event) { // в event объект с информацией о событии
    console.log("showPresent",this);
    console.log(event);
    //event.target - элемент на котором произошло событие
    //тут событие click в рамках presentContainer
    let clickElem = event.target; //любая область внутри presentContainer
    //получим значение атрибута data-present
    let present = clickElem.dataset.present;
    console.log("present = " + present); // если нет атрибута data-present , то будет undefined
    if (present) {
        clickElem.innerText = getPresent()[present];
        clickElem.classList.add("present");

        //удаление обработчика события
        this.removeEventListener("click",showPresent); //удалить можно только с того эл-та на котором был повешен обработчик, тут this=presentContainer
        //могут быть проблемы если функция анонимная, или если функция использует атрибуты
    }
}

window.addEventListener("scroll", fixMenu);
let fixedBlock = document.getElementById("fixed");
let fixedBlockOffset = fixedBlock.getBoundingClientRect().top;
console.log(fixedBlock,fixedBlockOffset);
function fixMenu() {
    //console.log("прокрутка " + window.pageYOffset);
    if (window.pageYOffset > fixedBlockOffset)
       fixedBlock.classList.add("fixed");
       else fixedBlock.classList.remove("fixed");
}
//пройтись по координатам дома, файлик в папке
