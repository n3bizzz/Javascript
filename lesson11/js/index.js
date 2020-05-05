//валидатор может обрабатывать текстовые поля
let rules = {
    login:{ //login - значение атрибута data-validate
        required: true,
        minLength: 2,
        maxLength: 12
    },
    password: { //password - значение атрибута data-validate
        required: true,
        minLength: 6
    }
};
//если пользуемся сторонним валидатором из библиоткеи или фреймворка, нужно читать документацию
Validator.setForm(document.forms["auth-form"], rules)
    .setSuccess(()=>{
        console.log("данные можно отправлять на сервер")
    })
    .setError(()=> {
     console.log("Форма заполнена с ощибками")
     })
    .run();
// при такой записи методы должны возварщать ссылку на объект
