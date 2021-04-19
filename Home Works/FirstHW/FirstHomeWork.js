// Задание 1 \\
// Нахождение четного и нечетного + условия

function even(a, b) {
    var c;
    if (typeof a === 'string' || typeof b === 'string' || a === undefined || b === undefined){
        return 'error';
    }

    a % 2 === 0 ? c = a * b : c = a * 1 + b * 1
    return c;
}
// console.log(even(12, 3));



// Задание 2 \\
// Нахождение четверти по значениям (x,y)

function getQuarter(x, y) {
    var result;
    if (typeof x === 'string' || typeof y === 'string' || x === undefined || y === undefined) {
        return 'error';
    }

    if (x > 0 && y > 0) {
        return 'At the first quarter';
    } else if (x > 0 && y < 0){
        return 'At the fourth quarter';
    } else if (x < 0 && y > 0) {
        return 'At the second quarter';
    } else if (x < 0 && y < 0) {
        return 'At the third quarter';
    } else if (x === 0 && y === 0) {
        return 'Your point at the origin of the coordinate plane'
    } else if (x === 0 && y !== 0) {
        y > 0 ? result = 'between first and second quarter' : result = 'between third and fourth quarter';
    } else if (y === 0 && x !== 0) {
        x > 0 ? result = 'between first and fourth quarter' : result = 'between second and third quarter';
    }
    return result;
}
// console.log(getQuarter());


// Задание 3 \\
// Найти суммы только положительных из трех чисел

function positivSum(a, b, c) {
    if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string' ||
         a === undefined || b === undefined || c === undefined) {
        return 'error';
    }

    var array = [a, b, c];
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i];
        }
    }
    return result;
}
// console.log(positivSum(-1, -1 ,-1));


// Задание 4 \\
// Посчитать выражение (макс(а*б*с, а+б+с))+3

function max(a, b, c) {
    if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string' ||
         a === undefined || b === undefined || c === undefined) {
        return 'error';
    }

    (a * b * c >= a + b + c) ? result = ((a * b * c) + 3) : result = ((a + b + c) + 3);
    return result;
}
// console.log(max(1, 2, -3));



// Задание 5 \\
// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function getMark(x) {
    if (typeof x === 'string' || x === undefined){
        return 'error';
    }

    if (x >= 0 && x <= 19){
        return 'Буквенная оценка F';
    } else if (x > 19 && x <= 39) {
        return 'Буквенная оценка E';
    } else if (x > 39 && x <= 59){
        return 'Буквенная оценка D';
    } else if (x > 59 && x <= 74){
        return 'Буквенная оценка C';
    } else if (x > 74 && x <= 89){
        return 'Буквенная оценка B';
    } else if (x > 89 && x <= 100){
        return 'Буквенная оценка A';
    } else {
        return 'error';
    }
}

// Конец первого блока заданий \\
// Задание 1 \\
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function getSum() {
    var counter = 0;
    var result = 0;
    for (var i = 0; i < 99; i++){
        if (i % 2 === 0){
            counter++;
            result += i;
        }
    }
    return `Sum of even elements = ${result}, count of even numbers = ${counter}`
}
// console.log(getSum());

// Задание 2\\
// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function isPrime(x){
    if (x === undefined || typeof x === 'string'){
        return 'error';
    }

    for (var i = 2; i < x; i++){
        if (x % i === 0) {
            return 'Is not prime';
        } 
    }
    return 'Is prime';
}
// console.log(isPrime(0));

// Задание 3 \\
// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function sqrt(x) {
    if (x === undefined || typeof x === 'string'){
        return 'error';
    }

    for (var i = 1; i < x; i++){
        if ((i*i) === x) {
            variant = i;
            return variant;
        } 
    }
    return 'Can`t find round sqrt'
}
// console.log(sqrt(88));


// Метод бинарного поиска\\

function sqrtBin(n) {
    if (n === undefined || typeof n === 'string'){
        return 'error';
    }

    var low = 0;
    var mid = 0;
    var high = n;
    while ((high-low) > 1) {
        mid = Math.floor((high+low)/2);
        if ((mid*mid) <= n){
            low = mid;
        } else {
            high = mid;
        }
    }
    return low;
}
// console.log(sqrtBin());


// Задание 4 \\
// Вычислить факториал числа n. n! = 1*2*…*n-1*n

function fak(x) {
    if (x === undefined || typeof x === 'string'){
        return 'error';
    }

    var plus = 1;
    for(var i = 1; i <= x; i++){
        plus *= i;
    }
    return plus;
}
// console.log(fak(4));

// Задание 5 \\
// Посчитать сумму цифр заданого числа

function getStrSum(str) {
    if (str === undefined){
        return 'error';
    }

    a = String(str);
    b = 0;
    for (var i = 0; i < a.length; i++) {
        b += a[i]*1;
    }
    return b;
}
// console.log(getStrSum('1234'));

// Задание 6 \\
// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

function revers(str) {
    if (str === undefined){
        return 'error';
    }

    var result = '';
    str = String(str);
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result * 1;
}
// console.log(revers(12345));

// Блок 3 \\
// Одномерные массивы
// Задание 1 Найти минимальный элемент массива

function smallestElement(ray) {
    if (ray === undefined || ray.length === 0 || Array.isArray(ray) === false){
        return 'error'
    }

    first = ray[0];
    for(i = 1; i < ray.length; i++){
        if (first > ray[i]) {
            first = ray[i];
        }
    }
    return first;
}
// console.log(smallestElement([12, 3, 56, -1]));

// Задание 2 \\
// Найти максимальный элемент массива

function largestElement(ray) {
    if (ray === undefined || ray.length === 0 || Array.isArray(ray) === false){
        return 'error'
    }
    
    first = ray[0];
    for(i = 1; i < ray.length; i++){
        if (first < ray[i]) {
            first = ray[i];
        }
    }
    return first;
}
// console.log(largestElement([1, -23, -32, -515]));

// Задание 3 \\
// Найти индекс минимального элемента массива

function smallestIndex(ray) {
    if (ray === undefined || ray.length === 0 || Array.isArray(ray) === false){
        return 'error'
    }

    first = ray[0];
    index = 0;
    for(i = 1; i < ray.length; i++){
        if (ray[i] < first) {
            first = ray[i];
            index = i;
        }
    }
    return index;
}
// console.log(smallestIndex([4, 1, -2, -666]));

// Задание 4 \\
// Найти индекс максимального элемента массива

function largestIndex(ray) {
    if (ray === undefined || ray.length === 0 || Array.isArray(ray) === false){
        return 'error'
    }

    first = ray[0];
    index = 0;
    for(i = 1; i < ray.length; i++){
        if (ray[i] > first) {
            first = ray[i];
            index = i;
        }
    }
    return index;
}
// console.log(largestIndex([1, -4, -344, 3]));


// Задание 5 \\
// Посчитать сумму элементов массива с нечетными индексами

function oddIndex(arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    result = 0;
    for(var i = 0; i < arr.length; i++){
        if (i % 2 !== 0) {
            result += arr[i];
        }
    }
    return result;
}
// console.log(oddIndex([4, 10, 3, 10, 5, 10, 7,]));


// Задание 6 \\
// Сделать реверс массива (массив в обратно направлении)

function arrRevers(arr){
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    var secArr = [];
    for(var i = arr.length - 1; i >= 0; i--){
        secArr.push(arr[i]);
    }
    return secArr;
}
// console.log(arrRevers([1, 2, 3, 4, 5, 6,]));

// Задание 7 \\
// Посчитать количество нечетных элементов массива

function oddNumbers(arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            sum++;
        }
    }
    return `${sum} odd numbers`
}
// console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7, 7,]));


// Задание 8 \\
// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function halfRevers(arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    var halfLength = Math.round(arr.length / 2);
    for (var i = 0; i < halfLength; i++){
        arr.push(arr[i]);
    }
    arr.splice(0, halfLength);
    return arr;
};
// console.log(halfRevers([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// Задание 9 \\
// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function bubbleSort (arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }
    
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
// console.log(bubbleSort([2, 8, 5, 22, 8, 7, 12,]));

// Select Sort \\

function selectSort(arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    for(var i = 0; i < arr.length -1; i++){
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        var x = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = x;
    }
    return arr;
}
// console.log(selectSort([2, 5, 6, 213, 1, 4, 10, 21, 12, -1,]));

// Insert Sort \\

function insertSort(arr) {
    if (arr === undefined || arr.length === 0 || Array.isArray(arr) === false){
        return 'error'
    }

    for (var i = 1; i < arr.length; i++){
        for(var j = i; j > 0; j--){
            if (arr[j] < arr[j-1]){
                var x = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = x;
            } else {
                break;
            }
        }
    }
    return arr;
}
// console.log(insertSort([2, 1, 12, 1513, 2234, 123, 23, 4, 6, 3, 1]));

// Блок 4\\
// Задание 1 
// Получить строковое название дня недели по номеру дня. 

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
// console.log(callNumb('Триста ноль один'));