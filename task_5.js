var expectation = function(str, expression) {
    if (expression) {
        console.log(str + ' выполнен успешно!');
    } else {
        console.log(str + ' не пройден!');
    }
};



// Задание 1
// Проверить, что на странице присутствует логотип. Проверить путь ссылки и путь к изображению логотипа.
expectation('Тест №1.1', document.querySelectorAll('#logo a')[0].href === "http://zoo.kiev.ua/");
expectation('Тест №1.2', document.querySelectorAll('#header_top #logo a img')[0].src === "http://zoo.kiev.ua/images/logo290_proz.png");


// Задание 2
// Проверить, что на странице в верхнем меню 8 пунктов и что они соответствуют своим текстовым идентификаторам.

//-----------------------------------------------2.1
expectation('Тест №1.1', document.querySelectorAll('#ul_catalog_menu_Lk7Vbr .bx-nav-1-lvl').length  === 8);


//-----------------------------------------------2.2
var test = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[0].innerText;
//undefined

//test
//"ЗООПАРК	"

if (test === "ЗООПАРК") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test === "ЗООПАРК	") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test1 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[10].innerText;
//undefined

//test1
//"ТВАРИНИ	"

if (test1 === "ТВАРИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test1 === "ТВАРИНИ	") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test2 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[17].innerText;
//undefined

//test2
//"НОВИНИ	"

if (test2 === "НОВИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test2.trim() === "НОВИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test3 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[23].innerText;
//undefined

//test3
//"ЕКОПРОСВІТА	"

if (test3 === "ЕКОПРОСВІТА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test3 === "ЕКОПРОСВІТА	") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test4 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[26].innerText;
//undefined

//test4
//"ЗООКОМАНДА	"

if (test4 === "ЗООКОМАНДА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test4 === "ЕКОПРОСВІТА	") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test5 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[35].innerText;
//undefined

//test5
//"КВИТКИ"

if (test5 === "КВИТКИ   ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test5 === "КВИТКИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test6 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[36].innerText;
//undefined

//test6
//"КОНТАКТИ"

if (test6 === "КОНТАКТИ   ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test6 === "КОНТАКТИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var test7 = document.querySelectorAll('.bx-top-nav-container .bx-nav-1-lvl a span')[37].innerText;
//undefined

//test7
//"ГАЛЕРЕЯ"

if (test7 === "ГАЛЕРЕЯ   ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test7 === "ГАЛЕРЕЯ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



//--------------------------------------------- 3 ---------------------------------------------
//Проверит, что на сайте правильно указан адресс и телефон.



var t = document.querySelectorAll('#adress_1')[0].innerText;
//undefined

//t
//"Пр-т Перемоги, 32."

if (t === "Пр-т Перемоги, 32.   ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (t === "Пр-т Перемоги, 32.") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var t1 = document.querySelectorAll('#adress_1')[1].innerText;
//undefined

//t1
//"Тел. +38 (044) 277-47-69"

if (t1 === "Тел. +38 (044) 277-47-69   ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (t1 === "Тел. +38 (044) 277-47-69") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



//--------------------------------------------- 4 ---------------------------------------------
//Проверить, что на странице пять баннеров.



var banner = document.querySelectorAll('.owl-pagination .owl-page').length;
//undefined

//console.log(banner)
//5

if (banner === 5) {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку пройден !



//--------------------------------------------- 5 ---------------------------------------------
//Проверить, что путь к изображению селектора background-image соответствует действительности.



var gorilla = document.querySelectorAll('div.aminals-list .preview_picture')[0].style.backgroundImage;
//undefined

//gorilla
//"url("/upload/iblock/442/4425345c4806c777511d15c5508a322c.jpg")"

if (gorilla === 'url("/upload/iblock/442/4425345c4806c777511d15c5508a322c.jpg")') {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку пройден !

if (gorilla === 'url("/upload/iblock/442/4425345c4806c777511d15c5508a322c.jp")') {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !




//--------------------------------------------- 6 ---------------------------------------------
//Проверить, что на странице есть это меню и что все пункты имеют правильные названия и правильный url.



//-----------------------------------------------6.1





//-----------------------------------------------6.2
var f = document.querySelectorAll('#footer-links li a')[0].innerText;
//undefined

//f
//"ЗООПАРК"

if (f === "ООПАРК") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (test === "ЗООПАРК") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f1 = document.querySelectorAll('#footer-links li a')[1].innerText;
//undefined

//f1
//"ТВАРИНИ"

if (f1 === "ВАРИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f1 === "ТВАРИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f2 = document.querySelectorAll('#footer-links li a')[2].innerText;
//undefined

//f2
//"ЕКОПРОСВІТА"

if (f2 === "КОПРОСВІТА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f2 === "ЕКОПРОСВІТА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f3 = document.querySelectorAll('#footer-links li a')[3].innerText;
//undefined

//f3
//"ЗООКОМАНДА"

if (f3 === "ООКОМАНДА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f3 === "ЗООКОМАНДА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f4 = document.querySelectorAll('#footer-links li a')[4].innerText;
//undefined

//f4
//"НОВИНИ"

if (f4 === "ОВИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f4 === "НОВИНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f5 = document.querySelectorAll('#footer-links li a')[5].innerText;
//undefined

//f5
//"ГАЛЕРЕЯ"

if (f5 === "АЛЕРЕЯ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f5 === "ГАЛЕРЕЯ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f6 = document.querySelectorAll('#footer-links li a')[6].innerText;
//undefined

//f6
//"КОНТАКТИ"

if (f6 === "ОНТАКТИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f6 === "КОНТАКТИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var f7 = document.querySelectorAll('#footer-links li a')[7].innerText;
//undefined

//f7
//"КАРТА САЙТА"

if (f7 === "АРТА АЙТА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (f7 === "КАРТА САЙТА") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



//-----------------------------------------------6.3

var ssilka = document.querySelectorAll('#footer-links li a')[0].href;
//undefined

//ssilka
//"http://zoo.kiev.ua/about/"

if (ssilka === "ttp://zoo.kiev.ua/about/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka === "http://zoo.kiev.ua/about/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka1 = document.querySelectorAll('#footer-links li a')[1].href;
//undefined

//ssilka1
//"http://zoo.kiev.ua/animals/"

if (ssilka1 === "ttp://zoo.kiev.ua/animals/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka1 === "http://zoo.kiev.ua/animals/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka2 = document.querySelectorAll('#footer-links li a')[2].href;
//undefined

//ssilka2
//"http://zoo.kiev.ua/ekoprosvita/"

if (ssilka2 === "ttp://zoo.kiev.ua/ekoprosvita/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka2 === "http://zoo.kiev.ua/ekoprosvita/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka3 = document.querySelectorAll('#footer-links li a')[3].href;
//undefined

//ssilka3
//"http://zoo.kiev.ua/zookomanda/"

if (ssilka3 === "ttp://zoo.kiev.ua/zookomanda/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka3 === "http://zoo.kiev.ua/zookomanda/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka4 = document.querySelectorAll('#footer-links li a')[4].href;
//undefined

//ssilka4
//"http://zoo.kiev.ua/news/"

if (ssilka4 === "ttp://zoo.kiev.ua/news/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka4 === "http://zoo.kiev.ua/news/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka5 = document.querySelectorAll('#footer-links li a')[5].href;
//undefined

//ssilka5
//"http://zoo.kiev.ua/gallery/"

if (ssilka5 === "ttp://zoo.kiev.ua/gallery/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka5 === "http://zoo.kiev.ua/gallery/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka6 = document.querySelectorAll('#footer-links li a')[6].href;
//undefined

//ssilka6
//"http://zoo.kiev.ua/contacts/"

if (ssilka6 === "ttp://zoo.kiev.ua/contacts/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka6 === "http://zoo.kiev.ua/contacts/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var ssilka7 = document.querySelectorAll('#footer-links li a')[7].href;
//undefined

//ssilka7
//"http://zoo.kiev.ua/search/map.php"

if (ssilka7 === "ttp://zoo.kiev.ua/search/map.php") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (ssilka7 === "http://zoo.kiev.ua/search/map.php") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



//--------------------------------------------- 7 ---------------------------------------------
//Проверить, что на странице присутствуют 6 ссылок. Что 2-я с текстом "ПТАХИ" а 4-я "ПЛАЗУНИ". Проверить атрибуты "href".



//-----------------------------------------------7.1
var animal = document.querySelectorAll('.bx_catalog_tile .bx_catalog_tile_ul li').length;

//animal
//6

if (animal === 8) {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (animal === 6) {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !




//-----------------------------------------------7.2
var birds = document.querySelectorAll('.bx_catalog_tile .bx_catalog_tile_ul li')[1].innerText;
//undefined

//birds
/*"ПТАХИ
"*/

birds.trim();
//"ПТАХИ"

if (birds.trim() === "ТАХИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (birds.trim() === "ПТАХИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



var reptiles = document.querySelectorAll('.bx_catalog_tile .bx_catalog_tile_ul li')[3].innerText;
//undefined

//reptiles
/*"ПЛАЗУНИ
"*/

reptiles.trim();
//"ПЛАЗУНИ"

if (reptiles.trim() === "ЛАЗУНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (reptiles.trim() === "ПЛАЗУНИ") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !




//-----------------------------------------------7.3
var birdsLinks = document.querySelectorAll('.bx_catalog_tile .bx_catalog_tile_ul li a')[2].href;
//undefined

//birdsLinks
//"http://zoo.kiev.ua/animals/ptakhi/"

if (birdsLinks === "ttp://zoo.kiev.ua/animals/ptakhi/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку не пройден !

if (birdsLinks === "http://zoo.kiev.ua/animals/ptakhi/") {
    console.log('Тест на проверку выполнен успешно !');
} else {
    console.log('Тест на проверку не пройден !');
}
//Тест на проверку выполнен успешно !



// Тест №99
var reptilessLinks = document.querySelectorAll('.bx_catalog_tile .bx_catalog_tile_ul li a')[6].href;
//expectation('Сравниваем что a === b', reptilessLinks === "ttp://zoo.kiev.ua/animals/plazuni/");
expectation('Тест №99', reptilessLinks === "http://zoo.kiev.ua/animals/plazuni/");
