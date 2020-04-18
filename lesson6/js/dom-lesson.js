// DOM - Document Object Model - объектная модель документа.
//Каждый эл-т html для js - объект,
// значит у каждого html есть свойства и методы
//js может добавлять любые html эл-ты на страницу
// Согласно этой модели каждый html элемент является объектом.
// Элементы, которые расположены радом - соседние элементы.
// Вложенные элементы являются детьми родительских элементов.


console.log(document); // весь HTML документ
console.log(document.body); // body

let list = document.getElementById("list"); //  получение объектов по id
console.log(list);

//все структуры получаемые при перемещении по дом дереву коллекции  - не массивы,
//в кол-ях эл-ты хранятся под индексом, для перебора for of
//перемещение по DOM дереву
console.log(list.childNodes); // все узлы
console.log(list.children); // все узлы теги

// перебор DOM коллекций
for (let elem of list.children) {
    console.log(elem);
}

console.log(list.firstChild); // первый дочерний узел
console.log(list.lastChild);// последний дочерний узел

console.log(list.firstElementChild);// первый дочерний узел тег
console.log(list.lastElementChild);// последний дочерний узел тег

console.log(list.previousSibling); // предыдущий соседний узел
console.log(list.nextSibling);// следующий соседний узел

console.log(list.previousElementSibling);// предыдущий соседний узел-тег
console.log(list.nextElementSibling);// следующий соседний узел-тег

console.log(list.parentNode); // родительский узел
console.log(list.parentElement); // родительский узел-тег

// поиск элементов в DOM дереве
// 1. по id
list = document.getElementById("list"); //возвращает первый найденый
// 2. по значению атрибута name
let elemsByName = document.getElementsByName("data"); //возвращает коллекцию
console.log(elemsByName);
// 3. по имени тега
let elemsByTag = document.getElementsByTagName("li");//возвращает коллекцию
console.log(elemsByTag);
// 4. по имени класса
let elemsByClassName = document.getElementsByClassName("orange-border");
console.log(elemsByClassName);
// 5. по css селектору
let elemByCSS = document.querySelector("ul>li"); //возвращает 1 первый найденный эл-т
console.log(elemByCSS);
let elemsByCSS = document.querySelectorAll("input[type=text]"); //возвращает коллекцию
console.log(elemsByCSS);
//коллекции нельзя назначить стили, можно только конкретному эл-ту из нее
// создание элементов
// после создания нужно его добавлять  в html
let div = document.createElement("div"); // элемент создан, но в html его пока нет

// работа с атрибутами
div.setAttribute("id", "container"); // установили атрибут id со значением container для созданного элемента
// <div id="container"></div>
console.log(div.hasAttribute("id")); // проверяет наличие атрибута
console.log(div.getAttribute("id")); // вызвращает значение атрибута по id
div.removeAttribute('id'); //удаляет атрибут

// атрибут style
//cssText позволяет описать несколько сss сво-в в атрибут  style
div.style.cssText = `
    width: 500px;
    height: 1000px;
`;

div.style.background = "yellow";

// получить все стили элемента
let listStyles = getComputedStyle(list);
console.log(listStyles);
console.log(listStyles.background);
console.log(listStyles.marginTop);

// работа с классами
//у js доступа в сss файлы нет, стили опишсываем вручную в css, потом через js их вклочаем
div.classList.add("orange-border");
// <div id="container" class="class-name"></div>
div.classList.remove("orange-border");
// <div id="container"></div>
div.classList.toggle("orange-border"); // добавить / удалить
div.classList.contains("orange-border"); // прверка наличия

// добавление элементов (в HTML)
// elem.append(...other_elem) создают вложеные
// elem.prepend(...other_elem)
// elem.before(...other_elem) создают соседий
// elem.after(...other_elem)

// elem.replaceWith(...other_elem) замена
// elem.remove() удаление
// elem.clone() копирование

for (let i = 0; i < 5; i++) {
    let p = document.createElement("p"); // создали элемент p
    // p.textContent доступ к тексту за вычетом всех тегов
    console.log(p.textContent);
    //p.textContent = `Текстовый абзац ${i}`;
    p.innerText = `Текстовый абзац ${i}`; // добавили текст
    p.classList.add("border"); // добавили класс
    div.append(p); // элемент p добавили в элемент div, который был создан ранее
}

document.body.prepend(div); // элемент div , который был создан ранее добавили первым в body

// работа с таблицами
let tableArea = document.getElementById("users-block");
let table = document.createElement("table");
table.setAttribute("border", 1);

// заголовок
let caption = table.createCaption();
caption.innerText = "Заголовок таблицы";

// ряд
let row = table.insertRow(0);

// ячейки
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = "Cell 1";
cell2.innerText = "Cell 2";

tableArea.append(table);