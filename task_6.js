// API браузера
//
// console
// console.log()
//
// document
// document.title
// document.querySelector('cssSelector')
// document.querySelectorAll('cssSelector')
// document.createElement('tagName')
//
// el.src
// el.href
// el.id
// el.className
// el.dataset
// el.innerText
// el.innerHTML
// el.style
// el.style.color
// el.style.backgroundColor
// el.style.fontSize
// el.style.border
// el.classList.add('className')
// el.classList.remove('className')
// el.classList.contains('className')
// el.classList.toggle('className')
// el.appendChild(el)
// el.parentNode.removeChild(el)
// el.addEventListener('click', function(event) {
//     // Тело функции-обработчика события
//     // event.target
// });
//
// setTimeout(f, ms)
// clearTimeout(id)
// setInterval(f, ms)
// clearInterval(id)


//------------------------------------------------ console ------------------------------------------------
//------------------------------------------------ console.log ------------------------------------------------
var plus = function(a, b) {
    var c = a + b;
    console.log(c)
};


//------------------------------------------------ document ------------------------------------------------
//------------------------------------------------ document.title ------------------------------------------------
document.title = 123;
//123


//------------------------------------------------ document.querySelector('css selector') ------------------------------------------------
document.querySelector('.header .logo img').src
//"file:///D:/Work/OUT/airbionic/img/logo.gif"
document.querySelector('.header .logo img').src = 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg';
//'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg'


//------------------------------------------------ document.querySelectorAll('css selector') ------------------------------------------------
document.querySelectorAll('.nav-2 a')[1].innerText;
//"Our advantages"
document.querySelectorAll('.nav-2 a')[1].innerText = 'KOLOBOK';
//"KOLOBOK"


//------------------------------------------------ el.src ------------------------------------------------
document.querySelectorAll('.module--featured-projects .item img')[1].src;
//"file:///D:/Work/OUT/airbionic/img/stub.gif"
document.querySelectorAll('.module--featured-projects .item img')[1].src = 'http://www.pro-smm.com/wp-content/uploads/2014/11/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D0%BD%D1%8B%D0%B5-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%A4%D0%B5%D0%B9%D1%81%D0%B1%D1%83%D0%BA.png';
//"http://www.pro-smm.com/wp-content/uploads/2014/11/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D0%BD%D1%8B%D0%B5-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%A4%D0%B5%D0%B9%D1%81%D0%B1%D1%83%D0%BA.png"


//------------------------------------------------ el.href ------------------------------------------------
document.querySelectorAll('.module--featured-projects .item a')[0].href;
//"file:///D:/Work/OUT/airbionic/about_us.htm#"
document.querySelectorAll('.module--featured-projects .item a')[0].href = 'http://zoo.kiev.ua/';
//"http://zoo.kiev.ua/"


//------------------------------------------------ el.id ------------------------------------------------
document.querySelectorAll('.nav-3')[0].id = 'population';
//"population"


//------------------------------------------------ el.className ------------------------------------------------
document.querySelectorAll('.header')[0].className;
//"header"
document.querySelectorAll('.header')[0].className = 'GOLOVA';
//"GOLOVA"


//------------------------------------------------ el.innerText ------------------------------------------------
document.querySelectorAll('.nav-3 a')[0].innerText;
//"Our works"
document.querySelectorAll('.nav-3 a')[0].innerText = 'Your Sexy';
//"Your Sexy"


//------------------------------------------------ el.innerHTML ------------------------------------------------
document.querySelectorAll('.nav-3')[0].innerHTML;
/*"
<a href="#">Our works</a>
<a href="#">Prices</a>
    <a href="#">Portfolio</a>
    "*/
document.querySelectorAll('.nav-3')[0].innerHTML = '';
//""


//------------------------------------------------ el.style ------------------------------------------------
//------------------------------------------------ el.style.color ------------------------------------------------
document.querySelectorAll('.nav-3')[0].style.color;
//""
document.querySelectorAll('.nav-3')[0].style.color = 'red';
//"red"


//------------------------------------------------ el.style.backgroundColor ------------------------------------------------
document.querySelectorAll('.nav-3')[0].style.backgroundColor;
//""
document.querySelectorAll('.nav-3')[0].style.backgroundColor = 'green';
//"green"


//------------------------------------------------ el.style.fontSize ------------------------------------------------
document.querySelectorAll('.nav-3')[0].style.fontSize;
//""
document.querySelectorAll('.nav-3')[0].style.fontSize = '25px';
//"25px"


//------------------------------------------------ el.style.border ------------------------------------------------
document.querySelectorAll('.nav-3')[0].style.border;
//""
document.querySelectorAll('.nav-3')[0].style.border = '5px solid red';
//"5px solid red"


//------------------------------------------------ el.classList.add('class name') ------------------------------------------------
document.querySelectorAll('.nav-3')[0].classList.add('eldorado');


//------------------------------------------------ el.classList.remove('class name') ------------------------------------------------
document.querySelectorAll('.nav-3')[0].classList.remove('eldorado');


//------------------------------------------------ el.classList.contains('class name') ------------------------------------------------
document.querySelectorAll('.nav-3')[0].classList.contains('nav-3');
//true
document.querySelectorAll('.nav-3')[0].classList.contains('nav-33');
//false


//------------------------------------------------ el.classList.toggle('class name') ------------------------------------------------
document.querySelectorAll('.nav-3')[0].classList.toggle('nav-33');
//true Добавила класс nav-33 т.к. его не было
document.querySelectorAll('.nav-3')[0].classList.toggle('nav-33');
//false Удалила уже имеющийся класс nav-33


//------------------------------------------------ el.addEventListener ------------------------------------------------
var q = document.querySelectorAll('.nav-3 a')[0];
q.addEventListener('click', function() {
    alert('Клик');
});
//При нажатии на ссылку вылезает диалоговое окно "Клик"