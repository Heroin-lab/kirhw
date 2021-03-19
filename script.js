// Задание 1 \\
// Нахождение четного и нечетного + условия

// var a = parseInt(prompt('Укажите элемент А'));
// var b = parseInt(prompt('Укажите элемент B'));

// if (a % 2 === 0) {
// 	console.log('Элемент A четный значит буду умножать', a*b);
// } else {
// 	console.log("Элемент B не четный, значит буду прибавлят", a + b);
// }



// Задание 2 \\
// Нахождение четверти по значениям (x,y)

// var x = prompt('Укажите значение X');
// var y = prompt('Укажите значение Y');

// if (x > 0 && y > 0) {
// 	console.log('Right Over');
// } else if (x > 0 && y < 0){
// 	console.log('Right Under');
// } else if (x < 0 && y > 0) {
// 	console.log('Left Over');
// } else if (x < 0 && y < 0) {
// 	console.log('Left Under');
// }



// Задание 3 \\
// Найти суммы только положительных из трех чисел

// var array = [];
// var result = 0;
// array[0] = parseInt(prompt('Введите первое число'));
// array[1] = parseInt(prompt('Введите второе число'));
// array[2] = parseInt(prompt('Введите третье число'));

// for (var i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         result += array[i];
//     }
// }

// console.log(result);



// Задание 4 \\
// Посчитать выражение (макс(а*б*с, а+б+с))+3

// var a = parseInt(prompt('Введите первое число'));
// var b = parseInt(prompt('Введите второе число'));
// var c = parseInt(prompt('Введите третье число'));

// if ((a*b*c) > (a+b+c)) {
//     console.log((a*b*c)+3);
// } else if ((a*b*c) == (a+b+c)) {
//    console.log('Они конечно одинаковые но меня это не сильно волнует, держи балтику', (a*b*c)+3);
// } else  {
//     console.log((a+b+c)+3);
// }



// Задание 5 \\
// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

// var x = parseInt(prompt('Введите среднюю оценку студента:'));

// if (x > 0 && x <= 19){
//     console.log('Буквенная оценка F');
// } else if (x > 19 && x <= 39) {
//     console.log('Буквенная оценка E');
// } else if (x > 39 && x <= 59){
//     console.log('Буквенная оценка D');
// } else if (x > 59 && x <= 74){
//     console.log('Буквенная оценка C');
// } else if (x > 74 && x <= 89){
//     console.log('Буквенная оценка B');
// } else if (x > 89 && x <= 100){
//     console.log('Буквенная оценка A');
// } else {
//     console.log('Ошибка границ или допустимых значений');
// }

                    

// Конец первого блока заданий \\
// Задание 1 \\
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99

// var x = 0;

// for(var i = 0; i <= 99; i++){
//     if (i % 2 === 0){
//          x += i;
//     }
// }
// console.log(x);



// Задание 2\\
// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

// var prime = 'Prime';
// var x = parseInt(prompt('Введите число которое нужно проврить на простоту:'));

// for (var i = 2; i < x; i++){
//    if (x % i === 0) {
//         prime = 'Is not prime'
//         break;
//     } else {
//         continue;
//     }
// }
// console.log(prime);



// Задание 3 \\
// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// var variant = 'не найден';
// var sqrtNum = prompt('Введите число чтобы узнать его корень:');

// for (var i = 1; i < sqrtNum; i++){
//     if ((i*i) == sqrtNum) {
//         variant = i;
//         break;
//     } 
// }
// console.log('Корень введенного числа', variant)


// Метод бинарного поиска\\


// var n = parseInt(prompt('Введите число чтобы узнать его корень:'))
// var low = 0;
// var mid = 0;
// var high = n;

// while ((high-low) > 1) {
//     mid = Math.floor((high+low)/2);
//     if ((mid*mid) <= n){
//         low = mid;
//         console.log(low);
//     } else {
//         high = mid;
//         console.log(high);
//     }
// }
// console.log(low);



// Задание 4 \\
// Вычислить факториал числа n. n! = 1*2*…*n-1*n


// var fak = 5;
// var plus = 1;

// for(var i = 1; i <= fak; i++){
//     plus*=i;
// }

// console.log('Ваше факториал', plus);



// Задание 5 \\
// Посчитать сумму цифр заданого числа

// var a = 999;
// var b = 0;

// function sum(str) {
//     c = String(str);
//     for (var i = 0; i < c.length; i++) {
//         b += c[i]*1;
//     }
//     console.log(b);
// }
// sum(a);



// Задание 6 \\
// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

// var a = 1234;
// var b = '', c = '';

// function revers(str) {
//     c = String(str);
//     for (var i = 0; i < c.length; i++) {
//         b += c[c.length -1 -i]
//     }
//     console.log(parseInt(b));
// }
// revers(a);
