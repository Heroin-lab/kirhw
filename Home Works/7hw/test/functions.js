// 1 task \\

function dayName(num) {
    if (num === undefined || num < 1 || num > 7 || typeof num === 'string') {
        return 'error';
    }

    var dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
                 'Friday', 'Saturday', 'Sunday'];
    return dayName[num - 1];
}
// console.log(dayName(3));

// Задание 2\\
// Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function distance(x1, x2, y1, y2){
    if (x1 === undefined || x2 === undefined || y1 === undefined || y2 === undefined ||
        typeof x1 === 'string' || typeof x2 === 'string' || typeof y1 === 'string' || typeof y2 === 'string') {
        return 'error';
    }

    var result = (((x2 - x1)**2) + ((y2 - y1)**2))**0.5;
    return result;
}
// console.log(distance(-1, 1, 0, 0));

// Задание 3 \\
// Вводим число(0-999), получаем строку с прописью числа.

var arrHundreds = ['Сто ', 'Двести ', 'Триста ', 'Четыреста ', 'Пятьсот ', 'Шестьсот ', 'Семьсот ', 'Восемьсот ', 'Девятьсот ',];
var arrDecade = ['Двадцать ', 'Тридцать ', 'Сорок ', 'Пятьдесят ', 'Шестьдесят ', 'Семьдесят ', 'Восемьдесят ', 'Девяносто '];
var arrUnits = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять', 'Десять', 'Одинадцать', 
                'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать',];


function callName(num) {
    if (num === undefined || num < 0 || num > 999 || typeof num === 'string') {
        return 'error';
    }

    endName = '';
    num = String(num);

    if (num < 20) {
        endName = arrUnits[num];
        return endName;
    }
    if (num > 19 && num < 100){
        endName = arrDecade[num[0] - 2];
        num[1] !== '0' ? endName += arrUnits[num[1]] : endName += '';
        return endName;
    }
    if (num >= 100){
        endName = arrHundreds[num[0] - 1];
        if (num[1] === '1') {
            endName += arrUnits[num[1] + num[2]];
        } else {
            num[1] !== '0' ? endName += arrDecade[num[1] - 2] : endName += '';
            num[2] !== '0' ? endName += arrUnits[num[2]] : endName += '';
        }
        return endName;
    }
}
// console.log(callName(999));

// Задание 4 \\
// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

var arrNumbers = {'ноль': 0,'один': 1,'два': 2, 'три': 3, 'четыре': 4, 'пять': 5, 'шесть': 6, 'семь': 7, 'восемь': 8, 'девять': 9, 'десять': 10, 
                'одиннадцать': 11, 'двенадцать': 12, 'тринадцать': 13, 'четырнадцать': 14, 'пятнадцать': 15, 'шестнадцать': 16, 'семнадцать': 17, 
                'восемнадцать': 18, 'девятнадцать': 19, 'двадцать': 20, 'тридцать': 30, 'сорок': 40, 'пятьдесят': 50, 'шестьдесят': 60, 
                'семьдесят': 70, 'восемьдесят': 80, 'девяносто': 90, 'сто': 100, 'двести': 200, 'триста': 300, 'четыреста': 400, 
                'пятьсот': 500, 'шестьсот': 600, 'семьсот': 700, 'восемьсот': 800, 'девятьсот': 900,};

function callNumb(str) {
    if (str === undefined || typeof str === 'number') {
        return 'error';
    }

    string = str.toLowerCase() + ' ';
    var num = 0;
    var x = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] !== ' ' && num !== 'error'){
            x += string[i];
        } else {
            searcher(x) !== 'error' ? num += searcher(x) : num = 'error';
            x = '';
        }
    }
    return num;
}

function searcher(x) {
    for (key in arrNumbers){
        if (key === x){
            return arrNumbers[key];
        }
    }
    return 'error';
}
console.log(callNumb('Триста ноль один'));


module.exports = {dayName, distance, callName, callNumb};