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

module.exports = {getSum, isPrime, sqrt, sqrtBin, fak, getStrSum, revers};