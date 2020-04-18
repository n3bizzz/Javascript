let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "https://picsum.photos/id/162/300"
    }
};

function generateCards(cardsData, cardsElem) {
    for(let item in cardsData){
        let card=document.createElement('div');//создали div
        card.classList.add('card');  //добавили класс card
        let title = document.createElement('h2');
        title.innerText = cardsData[item].title;
        let pic = document.createElement('img');
        pic.setAttribute('src',cardsData[item].img);
        let price = document.createElement('p');
        price.innerText = `Цена ${cardsData[item].price}`;
        card.append(title,pic,price); // в div добавили  h2,img,p
        cardsElem.append(card); //добавили div со всем содержимым куда нам надо
    }
}
let section = document.querySelector('.goods');
generateCards(goods,section);

//Slider
let slider ={
    init: function (id) {
        //в объектк slider создвется св-во cliderContainer
        //со значением -объект html, полученный по id
        this.cliderContainer = document.getElementById(id);
        //в объектк slider создвется св-во slides
        //со значением - эл-ты слайдера (список li)
        this.slides = this.cliderContainer.children;
        this.currentSlide=0; //индекс отображаемого слайда
    },
    nextSlide: function () {
        //логика переключения слайдов
        if(this.currentSlide || this.currentSlide === 0){
            this.slides[this.currentSlide].classList.remove('active');
            this.currentSlide++;
        }
        this.currentSlide = this.currentSlide < this.slides.length ? this.currentSlide : 0;
        this.slides[this.currentSlide].classList.add('active');
    },
    run: function () {
        //запуск метода nextSlide
        this.nextSlide();
        setInterval(this.nextSlide.bind(this), 1000);//вызывает функцию в указанный промежуток времени
        //при вызове this.nextSlide, this внутри nextSlide будет теряться, Bind привязывает контекст (в  данном случае this)
    }
};

slider.init('slider');
slider.run();