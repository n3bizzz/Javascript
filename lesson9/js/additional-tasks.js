// задача на комментарии
// отображать каждый добавляемый комментарий:
//img  Имя автора | Дата комментария
//     текст комментария
// img по умолчанию - default.png
// Имя автора - по умолчанию - Гость
let currentDate = new Date(); // получение объекта даты (текущая дата)
console.log(`Число ${currentDate.getDate()}, Месяц ${currentDate.getMonth()}, 
Год ${currentDate.getFullYear()} `);
console.log(`Время ${currentDate.getHours()}:${currentDate.getMinutes()} `);
// getDate(): возвращает день месяца
// getDay(): возвращает день недели (отсчет начинается с 0 - воскресенье, и последний день - 6 - суббота)
// getMonth(): возвращает номер месяца (отсчет начинается с нуля, то есть месяц с номер 0 - январь)
// getFullYear(): возвращает год
// toDateString(): возвращает полную дату в виде строки
// getHours(): возвращает час (от 0 до 23)
// getMinutes(): возвращает минуты (от 0 до 59) !!! если значение меньше 10 вывод без 0 впереди !!!
// getSeconds(): возвращает секунды (от 0 до 59)
// getMilliseconds(): возвращает миллисекунды (от 0 до 999)
// toTimeString(): возвращает полное время в виде строки

// задача на вывод книг
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];

// вывести информацию о товаре
// Название
// Автор
// - 10 +
// если количество 0 -> [- 0 +] нельзя нажать на + и -
// при нажатии на + количество увеличивается (но не больше количества),
// при нажатии на - уменьшается (но не меньше 0)
// Дополнительно: можно ввести количество с клавиатуры

// задание на вывод данных
let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer); // вывод информации по массиву объектов
// вывести информацию по каждой кошке
// Имя кошки | возраст
// картинка       Дополнительная информация:
//                Цвет:  цвет кошки
//                Документы: да / нет
//                Прививик: да / нет























