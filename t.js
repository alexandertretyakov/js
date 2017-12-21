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

//Функция isNull проверяет что ее аргумент не равен null
var isNull = function (value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
};

//Функция without возвращает копию массива без второго входящего значения.
var without = function(array, value) {
    var result = [];
    var i = 0;
    while (i < array.length) {
        if (array[i] !== value) {
            result[result.length] = array[i];
        }
        i = i + 1;
    }
    return result;
};

//Функция reverse возвращает копию массива array с элементами в обратном порядке
var reverse = function(array) {
    var result = [];
    var i = array.length - 1;
    while (i >= 0) {
        result[result.length] = array [i];
        i = i - 1;
    }
    return result;
};

//Функция concat возвращает массив содержащий элементы array1 и array2
var concat = function(array1, array2) {
    var result = [];
    var i = 0;
    while (i < array1.length) {
        result[result.length] = array1[i];
        i = i + 1;
    }
    i = 0;
    while (i < array2.length) {
        result[result.length] = array2[i];
        i = i + 1;
    }
    return result;
};

//Функция sum принимает массив чисел и возвращает их сумму
var sum = function(array) {
    var i = 0;
    var sum = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i = i + 1;
    }
    return sum;
};

//Функция multiply принимает массив чисел и возвращает их произведение
var multiply = function(array) {
    var i = 0;
    var multiply = 1;
    while (i < array.length) {
        multiply = multiply * array[i];
        i = i + 1;
    }
    return multiply;
};

//Функция push2 добавляет в конец копии массива array значение value и возвращает его
var push2 = function (array, value) {
    var result = [];
    var i = 0;
    while (i < array.length) {
        result[result.length] = array[i];
        i = i + 1;
    }
    result[result.length] = value;
    return result;
};

//Функция push добавляет в конец массива array значение value
var push = function (array, value) {
    array[array.length] = value;
};

//Функция join возвращает строку состоящую из элементов массива array и сепараторов
var join = function(array, separator) {
    var i = 0;
    var result = '';
    while (i < array.length) {
        result = result + array[i];
        if (i < array.length - 1) {
            result = result + separator;
        }
        i = i + 1;
    }
    return result;
};

//Функция lastIndexOf возвращает индекс value в массиве array с конца массива иначе возвращает -1
var lastIndexOf = function(array, value) {
    var i = array.length - 1;
    while (i >= 0) {
        if (array[i] === value) {
            return i;
        }
        i = i - 1;
    }
    return -1;
};

//Функция keys возвращает все свойства(ключи) объекта obj
var keys = function(obj) {
    var result = [];
    var p;
    for (p in obj) {
        result[result.length] = p;
    }
    return result;
};

//Функция values возвращает значения всех свойств объекта obj
var values = function(obj) {
    var result = [];
    var p;
    for (p in obj) {
        result[result.length] = obj[p];
    }
    return result;
};

//Функция pairs возвращает список пар [свойство, значение] входящего объекта.
var pairs = function(obj) {
    var p;
    var array = [];
    for (p in obj) {
        array[array.length] = [p, obj[p]];
    }
    return array;
};

//Функция has проверяет, содержит ли объект указанный ключ (свойство). Если да то возвращает true иначе false.
var has = function(obj, prop) {
    var p;
    for (p in obj) {
        if (p === prop) {
            return true;
        }
    }
    return false;
};

//Функция omit возвращает копию объекта без указаного свойства.
var omit = function(obj, prop) {
    var o = {};
    var p;
    for (p in obj) {
        if (p !== prop) {
            o[p] = obj[p];
        }
    }
    return o;
};

//Функция isEmpty вернёт true если коллекция (объект или массив) не содержит ни одного значения иначе false.
var isEmpty = function (list) {
    var p;
    for (p in list) {
        return false;
    }
    return true;
};

//Функция invert возвращает копию входящего объекта где свойства - значения, а занчение - свойства.
var invert = function(obj) {
    var o = {};
    var p;
    for (p in obj) {
        o[obj[p]] = p;
    }
    return o;
};