//кроме вариантов получения эл-в из lesson6
//эл-ты формы можно получить через значение атрибута name
//document.forms - все формы в html
let form = document.forms.lesson; //lesson значение атрибута  name формы
console.log(form);

//доступ к эл-м формы (form) по значению атрибута name
//form.elements все эл-ты формы form
let loginInput = form.elements.login; //login значение атрибута name эл-тa input
console.log(loginInput);

//получение и установка значения (атрибут value)
 console.log(loginInput.value); // так получить пользовательский ввод нельзя, потому что скрипт отрабатывает до ввода
loginInput.value='qwe'; //передать значение можно

//получим эл-ты со значением атрибута name=color
let colorRadio = form.elements.color;
//colorRadio - коллекция , т.к. в форме несколько эл-в c name=color
console.log(colorRadio);
for (let radio of colorRadio)
    radio.addEventListener('focus', changeColor);
function changeColor() {
    form.elements.checkbox_fieldset.style.background = this.value;
}
//получаем  группу чекбоксов
//значение атрибутов name чекбоксов == lang[],
//в таком случае синтаксис как ниже
let langArr = form.elements["lang[]"];
console.log(langArr);
//у чекбоксов и радиокнопок есть атрибут checked
//на js мы можем получить значение этого атрибута через elem.checked (true || false)
// можем получить заранее отмеченный чекбоксы, то что отмечает пользователь так получить нельзся, т.к. js загружается раньше нажатий
for(let cb of langArr){
    if(cb.checked){
        console.log(cb.value);
    }
}
//выпадающий список name=countries
let countries = form.elements.countries;
console.log(countries);
//у option есть атрибут selected
//на js можем получить значение данного атрибута
//через св-во elem.selected
for(let elem of countries){
    console.log(elem); // в elem optgroup не копираются, только options
    if(elem.selected){
        console.log(elem.value); //тоже самое(см выше), не ользовательский выбор, т.к. js загружается раньше выбора
    }
}

//отправка формы (нажатие на кнопку с типом submit) - событие формы!! submit
form.addEventListener("submit",takeForm);
function takeForm(event) {
    //по умолчанию данный формы сразу отправляются на сервер
    //пользовательский ввод нужно обрабатывать как в js так и на сервер
    event.preventDefault();//отмена события по умолчанию (тут отправка на сервер)
    console.log('Обработка формы на js');
    //тут можем получить пользовательский ввод через value, т.к. уже после нажатия кнопки
    console.log(this.elements.login.value);
    for (let elem of form.elements.countries) {
        if (elem.selected) {
            console.log(elem.value);
        }
    }
    //формируем объект для отправки данных на сервер
    //1 вариант создать собственный объект {}
    //2 вариант взять готовый из js см ниже
    //FormData собирает все данные html формы
    //хранит данные в формате : знач. атр name - знач.атр value
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.get("login"));// возваощает одно значение атр. value, по значению атр. name
    console.log(formData.getAll("lang[]"));//возвращает все value по name
    formData.delete("pwd");//удаление поля с заданным именем
    formData.append("some_field","some value"); //добавление поля с заданным именем
    for (let data of formData.entries()){
        console.log(data);//[key, value];
    }
}

loginInput = form.elements.login;
//когда пол-ль закончил ввод (потеря фокуса blur),
//проверить введенные данный и сообщит об успехе / ошибке
loginInput.addEventListener("blur",focusOutElem);
function focusOutElem() {
    console.log("потеря фокуса login input");
    if(this.value.length < 3)
        this.nextElementSibling.classList.add('error');
    else {
        this.nextElementSibling.classList.remove('error');
        this.nextElementSibling.classList.add('success');
    }
}
loginInput.addEventListener("focus",focusOnElem);
function focusOnElem() {
    console.log("фокус на login input");
}