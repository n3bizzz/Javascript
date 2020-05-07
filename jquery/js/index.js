// Библиотека jQuery - набор методов для работы с DOM деревом.
// Для того, чтобы иметь возможность использовать
// набор методов библиотеки html элемент в первую очередь
// необходимо преобразовать в jQuery объект.
// htmlEelement -> jQuery(htmlEelement)
// document.body - не доступны методы jQuery
// jQuery(document.body) - доступны методы jQuery
jQuery(document).ready(function () {  /* код */ });

jQuery(function () {
    // для получения jQuery объекта в jQuery()
    // необходиом передать либо html элемент
    // либо css селектор
    jQuery('*'); // все элементы
    jQuery('p'); // все теги p
    jQuery('.some-class'); // все элементы с классом .some-class
    jQuery('#some_id'); // элемент с id=some_id
    jQuery('ul > li'); // все li в ul (дочерний селектор)
    jQuery('.border', '#btn', 'h2'); // все элементы в классом
    // border + элемент с id=btn + все теги h2

    let elem = document.getElementById('animation');
    jQuery(elem); // преобразование html элемента в jQuery объект

    // jQuery(elem) аналогично $(elem)

    // методы jQuery делятся на те,
    // что возвращают преобразованный jQuery объект и
    // те, что возвращают какую-то информацию / ничего не возвращают

    /*jQuery(селектор)
        .someMethod1()
        .someMethod2()
        .someMethod3()
        .someMethod4();

    let text = jQuery(селектор).text();*/

    // нечетные tr, кроме первого
    jQuery("#table tr:even")
        .not("#table tr:first-child") // исключает по селекторы из выборки
        .css('background', 'orange'); // добавление стиелей

    jQuery('#table tr:odd').css('background', 'yellow');
    jQuery('#table tr:first-child').css('background', 'red');

    //атрибуты
    let table = jQuery('#table'); //Нужно делать так , что б не искало каждый раз когда пишем jQuery('#table')
    //для эл-та с id=table добавить атрибут some-attr созначением 1
    table.attr('some-attr',1);
    //возвращает значение some-attr эл-та c id=table
    console.log(table.attr('some-attr'));
    table.removeAttr('some-attr'); //удаляет атрибут some-attr
    table.attr('border', 1);
    // эти  методы в зависимоти от кол-ва аргументов , либо устанавливают значение , либо возвращаю его

    //все div из элемента с id=cards
    let cardsDiv = jQuery('#cards div');
    //last - вернул послдений эл-т из набора
    cardsDiv.last().css('border-bottom', '1px solid black')
        .end() // вернул carsDiv (Вернет нас к cardsDiv)
        .first() //вернул первый эл-т из набора
        .css('border-top','1px solid black');
    //обработчик событий
    cardsDiv.on('click', function () {
        //this -> div в #cards  - элемент html!!!
        console.log(this); //this - div
        jQuery(this)// jQuery(this) - объект jQuery;
            .text(this.dataset.present.toUpperCase());// установить текст эл-ту
        console.log(jQuery(this).text()); //возварщает текст
        if (jQuery(this).data('present')==='pig') {
            jQuery(this).css('background', 'pink');
        }else{
            jQuery(this).css('background','yellowgreen');
        }
        cardsDiv.off();//выключили все события добавленные на элемент
    });

    //one  означает что событие отработает только один раз на эл-те
    jQuery('#cards_info').one('click',function () {
        console.log('one click on #cards_info');
        cardsDiv.each((index,elem,)=>{//each = foreach
           if(jQuery(elem).text()!=='Подарок'){
               jQuery('#cards_info h5').after(`<p>Ваш подарок ${jQuery(elem).data('present').toUpperCase()}</p>`);
           }
           else {
               jQuery(this).append(`<p>Вы могли получить ${jQuery(elem).data('present').toUpperCase()}</p>`);
           }
        })
    });
    let info = jQuery('#info');
    let infoP=info.find('p'); //все p внутри эл-та с id=info
    infoP.css({
        color: '#082567',
        fontStyle: 'italic' //fontStyle вместо font-style, и так со всеми стилями
    });
    info.find('h2').css('color', function (ind, oldVal) {
        //oldVal - текущее значение свойства color
        if(oldVal === 'rgb(0, 0, 0)')
        return '#ed9121';
    });
    //высота и ширина
    let colorDiv = jQuery('#color_div');
    colorDiv.css('background', 'yellowgreen').width('100%').height(200);
    console.log(colorDiv.width());
    console.log(colorDiv.height());

    jQuery('#info h2').click(function () { // способ вешанья обработчика события менне предподчительный чем on
        jQuery(this).siblings().toggle('slow',()=>{ //toggle включает выключает эл-т
            //jQuery(this).siblings().hide скрытие
            //jQuery(this).siblings().show открытие
            console.log('toggle finished');
            if(this.display) colorDiv.html(`<h2>Вы открыли ${$(this).text()}</h2>`);
            else colorDiv.html(`<h2>Вы закрыли ${$(this).text()}</h2>`);
            this.display = !this.display;
        })
    });
    //li в nav , внутри которых есть эл-ты с классом .submenu
    let liWithSubmenu = jQuery('nav li').has('.submenu');
    liWithSubmenu.find('ul').hide();
    liWithSubmenu.on('click', function () {
       jQuery(this).children().toggle();
    });

    let animationP = jQuery('#animation p');
    let change = jQuery('#change');
    animationP.first().click(function () {
        change.animate({
            fontSize: '+=16px'
        }, 1000, function () {});
    });
    animationP.last().click(function () {
        change.animate({
            fontSize: '-=16px'
        }, 1000, function () {});
    });
});

