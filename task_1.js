
//------------------------    1

var bloknot = {
    visota:'30cm',
    shirina:'5cm',
    tolshina:'5cm',
    ves:'150gr'
};

var provod = {
    dlina:'15m',
    sechenie:'3kv',
    tip:'mnogogilniy',
    ves:'1kg'
};

var tramvay = {
    dlina:'15m',
    shirina:'4m',
    tip:'KTM-5',
    ves:'18tonn'
};

var televizor = {
    diagonal:'42dyima',
    tip:'GK',
    marka:'KIVI',
    ves:'2kg'
};

var shar = {
    material:'stal',
    diametr:'1metr',
    izdelie:'globus',
    ves:'2kg'
};

//------------------------    2

var one = function (a, b) {
    var c;
    if (a > b) {
        c = a - b;
    }
    else {
        c = a + b;
    }
    return c;
};

var two = function (d, e) {
    var g;
    if (d !== e) {
        g = d * e;
    }
    else {
        g = d - e;
    }
    return g;
};

var tree = function (h, f) {
    var i;
    if (h < f) {
        i = 1;
    }
    else {
        i = 0;
    }
    while (i < 3) {
        alert (Privet);
        i = i + 1;
    }
};

var min = function (a, b) {
    if (a > b) {
        return b;
    }
    else {
        return a;
    }
};

var max = function (a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
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

var  patronSostav = [
    'pulya',
    'gilza',
    'cokol',
    'poroh'
];

var sostavKindera = [
    'shokolad',
    'igrushka',
    'plastikoviy kokon',
    'instrukciya',
    'obertka'
];

