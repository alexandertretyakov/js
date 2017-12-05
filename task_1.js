//---------------------------------------------    #1    ---------------------------------------------

//------------------------    1

var bloknot = {
    visota: '30cm',
    shirina: '5cm',
    tolshina: '5cm',
    ves: '150gr'
};

var provod = {
    dlina: '15m',
    sechenie: '3kv',
    tip: 'mnogogilniy',
    ves: '1kg'
};

var tramvay = {
    dlina: '15m',
    shirina: '4m',
    tip: 'KTM-5',
    ves: '18tonn'
};

var televizor = {
    diagonal: '42dyima',
    tip: 'GK',
    marka: 'KIVI',
    ves: '2kg'
};

var shar = {
    material: 'stal',
    diametr: '1metr',
    izdelie: 'globus',
    ves: '2kg'
};

var MFU = {
    material: 'plastik',
    format: 'a4',
    funkcii: {
        knopka1: 'printer',
        knopka2: 'skaner',
        knopka3: 'kseroks'
    },
    gabariti: {
        shirina: '50cm',
        dlina: '30sm',
        ves: '5kg'
    }
};

var PC = {
    monitor: 'LG',
    kolonki: 'Luxeon',
    camera: 'Sven',
    sistemniyBlok: {
        Korpus: 'Cooler Master',
        processor: 'AMD',
        OZU: 'Pioneer',
        VideoKarta: 'Radeon'
    }
};

var Lampa = {
    firma: 'Feron',
    Yarkost: '620 Lyuminov',
    moshnost: '7 watt',
    strana: 'Kitay'
};

var kniga = {
    nazvanie: 'Java Skript',
    stranici: '1080',
    glava: {
        identifikator: '7.3',
        zaglavie: 'Razregennie massivi',
        stranica: '167',
        primeri: '5 virageniy'
    }
};

//------------------------    2

var one = function(a, b) {
    var c;
    c = a + b;
    return c;
};

var two = function() {
    var a = 5;
    var b = -7;
    if(a < b) {
        console.log('Идём налево');
    } else {
        console.log('Идём вправо');
    }
};

var tree = function() {
    var a = [20,-5,-21,41,5];
    var b = 5;
    var c = 5;
    var d;
    if (a[2] < a[1]) {
        d = b + c;
    } else {
        d = b * c;
    }
    return d;
};

var four = function() {
    var hours = 12;
    var minutes = 30;
    if (hours === 12 && minutes === 30) {
        alert('12 часов 30 минут');
    }
};

var five = function() {
    var a = [33,2,45,6,71,24];
    var count = 0;
    while (count < a.length) {
        alert('Подтвердите вход');
        count = count + 1;
    }
};

//------------------------    3

var spisokPokupok = [
    'moloko',
    'seledka',
    'kefir',
    'samogon',
    'vafelki'
];

var chek = [
    'gvozdi-30 edenic',
    'nalichnik-6 edenic',
    'shurup-30 edenic',
    'molotok-1 edenica'
];

var chastiDvigatelya = [
    'porshnya',
    'svechi zagiganiya',
    'kollektor',
    'stopornie kolca',
    'generator',
    'radiator'
];

var patronSostav = [
    'pulya',
    'gilza',
    'cokol',
    'poroh'
];

var sostavKindera = [
    'шоколад',
    'игрушка',
    'пластиковый кокон',
    'инстуркция',
    'обертка'
];

var massiv = [
    1,
    2,
    3,
    [
        123,
        'y',
        {
            ruchka: 'derevo',
            rabochayaPloskost: 'rezina' //*------------name?-----------------------------------------
        },
        true
    ],
    function(){},
    22,
    false
];

var massiv2 = [
    [
        1,
        2,
        3,
        [function() {},
            'e',
            [
                5,
                6,
                7
            ]
        ]
     ]
];

var karman = [
    'telefon',
    'klyuchi'
];



//---------------------------------------------    #3    ---------------------------------------------

/*Задание №3.
Работая с объектом house из файла access.htm получить выражение возвращающие:
1) год постройки дома
2) материал стен дома
3) список имен жильцов квартиры №20
4) цвет холодильника из квартиры 20
5) количество каналов у телевизора из квартинры 20
6) цвет пылесоса из квартиры 20
7) цвет револьвера лежащего в серванте из квартиры 20
8) какая программа идет в текущий момент по телевизору в квартире номер 20
9) список имен жильцов из квартиры 25
10) имя кота из квартиры 25
11) цвет шкафа из квартиры 25
12) цвет перчаток лежащих в шкафу из квартиры 25

все эти выражения должны быть однострочными. т.е. без переносов строк и символа ;
с переменной house можно играть в консоли. она уже создана.*/


/*
1)
 house.godPostroyki
 1964

2)
 house.materialSten
 "кирпич"

3)
 house.kvartiry[0].ktoZivet;
 ["Марина", "Егор", "Олег"]

4)
 house.kvartiry[0].predmetiVnutri[0].zvet;
 "зеленый"

5)
 house.kvartiry[0].predmetiVnutri[1].kolichestvoKanalov;
 90

 6)house.kvartiry[0].predmetiVnutri[2].zvet;
 "белый"

 7)
 house.kvartiry[0].predmetiVnutri[3].otkrit().poluchitSoderzhimoe()[2].color;
 "черный"

 8)
 house.kvartiry[0].predmetiVnutri[1].vkluchit().poluchitTekushuuProgrammu();
 "Окна с Дмитрием Нагиевым"

 9)
 house.kvartiry[1]. ktoZivet;
 (3) ["Саша", "Лида", "Юля"]

 10)
 house.kvartiry[1].predmetiVnutri[2].name;
 "Пушок"

 11)
 house.kvartiry[1].predmetiVnutri[3].zvet;
 "коричневый"

 12)
 house.kvartiry[1].predmetiVnutri[3].otkrit().poluchitSoderzhimoe()[2].color;
 "белый" */

var first = function(array) {
    if (array === undefined) {
        return undefined;
    } else {
        return array[0];         // возвращает первый элемент массива
    }
};

var last = function(array) {
    if (array === undefined) {
        return undefined;
    } else {
        return array[array.length - 1]; // возвращает последний элемент массива
    }
};

//Функция принимает массив чисел находит наименьшее из них и возвращает его
var min = function(a) {
    var min = a[0];
    var i = 0;
    while (i<a.length) {
        if (a[i]<min) {
            min = a[i];
        }
        i = i + 1;
    }
    return min;
};

//Функция принимает массив чисел находит наибольшее из них и возвращает его
var max = function(a) {
    var max = a[0];
    var i = 0;
    while (i<a.length) {
        if (a[i]>max) {
            max = a[i];
        }
        i = i + 1;
    }
    return max;
};

// Функция compact возвращает копию массива без undefined значений
var compact = function(a) {
    var b = [];
    var i = 0;
    while (i<a.length) {
        if (a[i] !== undefined) {
            b[b.length] = a[i];
        }
        i = i + 1;
    }
    return b;
};

//Функция contains вернет true если значение переменной b содержится в значении переменной а
var contains = function(a, b) {
    var i = 0;
    while (i<a.length) {
        if (a[i] === b) {
            return true;
        }
        i = i + 1;
    }
    return false;
};

//Функция size возвращает количество элементов в массиве
var size = function(a) {
    return a.length;
};

//Функция isUndefined проверяет, равен ли её аргумент undefined
var isUndefined = function(a) {
    if(a === undefined) {
        return true;
    } else {
        return false;
    }
};

//Функция isBoolean проверяет принадлежность аргумента к логическому типу данных
var isBoolean = function(a) {
    if( a === true || a === false ) {
        return true;
    } else {
        return false;
    }
};

// Функция indexOf проверяет нахождение элемента в масиве и возвращает его индекс (позицию) в массиве, иначе выводит -1
var indexOf = function(a, b) {
    var i = 0;
    while ( i < a.length ) {
        if ( a[i] === b ) {
            return i;
        }
        i = i + 1;
    }
    return -1;
};

var a = function (b) {
    if (b === null) {
        return true;
    } else {
        return false;
    }
};

var a = function (b, c) {
    i = 0;
    while( i < b.length) {
        if( b[i] === c ) {
            return b[]
        }
        i = i + 1;
    }

};