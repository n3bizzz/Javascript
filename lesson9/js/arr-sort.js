// массив.sort()
let someArr = ["Москва", "Москва", "Тверь", "Владивосток", "Анапа"];
someArr.sort(); // сортировка в лексикографическом порядке
console.log(someArr);

someArr = [7, 40, 600, 6];
someArr.sort();
console.log(someArr); // [ 40, 6, 600, 7 ]
let users = [
    {                                // 1. по городу, если города равны
        login: "qwe",                // 2. по возрасту, если возраст одинакоый,
        age: 23,                     // 3. по логину
        city: "Москва",
    },
    {
        login: "asd",
        age: 34,
        city: "Москва",
    },
    {
        login: "rty56",
        age: 34,
        city: "Тверь",
    }
];

function sortUsers(a, b) {

    return (a.city.toLowerCase().localeCompare(b.city.toLowerCase()) !== 0)
        ? a.city.toLowerCase().localeCompare(b.city.toLowerCase())
        : (a.age - b.age === 0)
            ? a.login.toLowerCase().localeCompare(b.login.toLowerCase())
            : a.age - b.age;

}


// принимает на вход 2 элемента массива
function sortArr(first, second) {
    // функция должна возвращать:
    // 0 - если first == second
    // отрицательное - если first < second
    // положительное - если first > second

    return first.city.localeCompare(second.city);
}

users.sort(sortArr); // принимает на вход функцию сортировки
console.log(someArr);
