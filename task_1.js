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