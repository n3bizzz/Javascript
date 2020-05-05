class Validator {
    _errors=0;
    _messages={//желательно  сделать методы для формирования сообщений, или добавить сообщения  по умолчанию  в rules index.js
        minLength: "Минимум",
        maxLength: "Максимум",
        required: "Поле обязательно для заполения"
    };
    constructor(form, rules) {
        this._form=form;
        this._settings=rules;
    }
    //название полей соответствует именам методов валидатора
    required(inputValue){
        return inputValue.length>0;
    }
    minLength(inputValue, rule){
        return inputValue.length>=rule;
    }
    maxLength(inputValue, rule){
        return inputValue.length<=rule;
    }
    validateField(elem, elemRules){
        //метод проверки одного поля(login например)
        //elem - проверяемый элемент
        //elemRules -объект с правилами для этого поля
        for(let rule in elemRules){
           if(!(this[rule](elem.value, elemRules[rule]))){
                elem.nextElementSibling.innerText = `${this._messages[rule]} ${elemRules[rule]}`;
                this._errors+=1;
                return;// что бы не првоерять все подрят правила на поле, а закончить на первой ошибке
           }
           if(this._errors>0) this._errors-=1;
           elem.nextElementSibling.innerText = "Поле заполнено верно";
        }
    }
    submitValidate(event){ //будет вызван при событии submit
        event.preventDefault();
        for(let elem of this._form.elements){ //что бы все не перебирать можно в конструкторе  добавить перебор  и что бы остались только нужные элементы
            if(elem.dataset.validate){
                this.validateField(elem, this._settings[elem.dataset.validate]);
            }
        }
        if(this._errors === 0) this._successFunc();
        else this._errorFunc();
    }
    blurValidate(elem, elemRules){ //будет вызван когда элемент теряет фокус
        this.validateField(elem, elemRules);
    }
    //обработчики событий
    initSubmit(){
        this._form.addEventListener("submit",this.submitValidate.bind(this));
    }
    initBlur(){
        for (let elem of this._form.elements){
            if(elem.dataset.validate){
                elem.addEventListener("blur", this.blurValidate.bind(this, elem, this._settings[elem.dataset.validate]));
            }
        }
    }
    setSuccess(successFunc){
        this._successFunc= successFunc;
        return this; //возвращаем этот же объект
    }
    setError(errorFunc){
        this._errorFunc=errorFunc;// если пользователь не передаст сюда ничего то будет undefined и в 44 строчке нужно делать проверку нужно ли функцию вызывать
        return this;
    }
    static setForm(form,rules){//статик позволяет пользоваться  методом класса без созданного объекта
        return new Validator(form,rules); //часто  используют такой метод ,внутри класса, который создает объект
    }
    run(){
        this.initBlur();
        this.initSubmit();
    }
}