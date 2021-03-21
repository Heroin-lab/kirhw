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



// Блок 3 \\
// Одномерные массивы
// Задание 1 Найти минимальный элемент массива

// var arr = [1, 2, -3, -4];

// function lower(ray) {
//     zero = ray[0];
//     for(i = 1; i < ray.length; i++){
//         if (zero > ray[i]) {
//             zero = ray[i];
//         }
//     }
//     console.log(zero);
// }

// lower(arr);



// Задание 2 \\
// Найти максимальный элемент массива

// var arr = [1, -23, -32, 3];

// function high(ray) {
//     first = ray[0];
//     for(i = 1; i < ray.length; i++){
//         if (first < ray[i]) {
//             first = ray[i];
//         }
//     }
//     console.log(first);
// }

// high(arr);



// Задание 3 \\
// Найти индекс минимального элемента массива

// var arr = [1, -4, -344, -3];

// function lowIndex(ray) {
//     first = ray[0];
//     index = 0;
//     for(i = 1; i < ray.length; i++){
//         if (first > ray[i]) {
//             first = ray[i];
//             index = i;
//         }
//     }
//     console.log(index);
// }
// lowIndex(arr);


// Задание 4 \\
// Найти индекс максимального элемента массива

// var arr = [1, -4, -344, 3];

// function highIndex(ray) {
//     first = ray[0];
//     index = 0;
//     for(i = 1; i < ray.length; i++){
//         if (first < ray[i]) {
//             first = ray[i];
//             index = i;
//         }
//     }
//     console.log(index);
// }
// highIndex(arr);


// Задание 5 \\
// Посчитать сумму элементов массива с нечетными индексами

// var array = [4, 1, 3, 1, 5, 1, 7,];
// var result = 0;

// function oddIndex(arr) {
//     for(var i = 0; i < arr.length; i++){
//         if (i % 2 !== 0) {
//             result += arr[i];
//         }
//     }
//     console.log(result);
// }

// oddIndex(array);


// Задание 6 \\
// Сделать реверс массива (массив в обратно направлении)

// var array = [1, 2, 3, 4, 5, 6,];
// var secArr = [];

// function arrRevers(arr) {
//     for(var i = 0; i < arr.length; i++){
//         secArr[i] = arr[arr.length -i -1]
//     }
//     console.log(secArr);
// }

// arrRevers(array);


// Задание 7 \\
// Посчитать количество нечетных элементов массива

// var array = [1, 2, 3, 4, 5, 6, 7,];

// function oddNumbers(arr) {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             sum += arr[i];
//         }
//     }
//     console.log(sum);
// }

// oddNumbers(array);


// Задание 8 \\
// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

// var array = [1, 2, 3, 4, 5, 6, 7, 8,]; // Работает даже если массив не делится на две части

// function halfRevers(arr) {
//     buffer1 = [];
//     buffer2 = [];
//     for(var i = 0; i < arr.length; i++){
//         if(i < arr.length/2){
//             buffer2[i] = arr[i];
//         } else {
//             buffer1[i-(Math.round(arr.length/2))] = arr[i];
//         }
//     }
//     var output = [...buffer1, ...buffer2];
//     console.log(output);
// }
// halfRevers(array);


// Задание 9 \\
// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// var array = [10, 2, 5, 22, 8, 7, 12,];
// var swapper;

// function bubbleSort(arr) {
//     swapper = false;
//     var end = arr.length -1;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]){
//             swapper = true;
//             var x = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = x; 
//         }
//     }
//     end--;
// }

// do {
//     bubbleSort(array); 
// }   while(swapper);

// console.log(array);


// Select Sort \\

// var array = [2, 5, 6, 213, 1, 4, 10, 21, 12, -1,];

// function selectSort(arr) {
//     for(var i = 0; i < arr.length -1; i++){
//         var minIndex = i;
//         for(var j = i + 1; j < arr.length; j++){
//             if (arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         var x = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = x;
//     }
//     console.log(arr);
// }

// selectSort(array);


// Insert Sort \\

// var array = [2, 1, 12, 1513, 2234, 123, 23, 4, 6, 3, 1];

// function insertSort(arr) {
//     for (var i = 1; i < arr.length; i++){
//         for(var j = i; j > 0; j--){
//             if (arr[j] < arr[j-1]){
//                 var x = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = x;
//             } else {
//                 break;
//             }
//         }
//     }
//     console.log(arr);
// }

// insertSort(array);



// Блок 4\\
// Задание 1 
// Получить строковое название дня недели по номеру дня. 

// var dayNumber = 7;
// var dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// console.log(dayName[dayNumber - 1]);

// OR

// var dayNumber = 2;

// switch (dayNumber) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;

//     default:
//         console.log('Day name with this number is not exist')
//         break;
// }


// Задание 2\\
// Найти расстояние между двумя точками в двухмерном декартовом пространстве.

// var x1 = 0, x2 = 0, y1 = 0, y2 = 0;

// function Distance(x1, x2, y1, y2){
// var result = (((x2 - x1)**2) + ((y2 - y1)**2))**0.5;
// return result;
// }
// console.log(Distance(9,6,7,5));


// Задание 3 \\
// Вводим число(0-999), получаем строку с прописью числа.

// var arrHundreds = ['Сто ', 'Двести ', 'Триста ', 'Четыреста ', 'Пятьсот ', 'Шестьсот ', 'Семьсот ', 'Восемьсот ', 'Девятьсот ',];
// var arrDecade = ['Двадцать ', 'Тридцать ', 'Сорок ', 'Пятьдесят ', 'Шестьдесят ', 'Семьдесят ', 'Восемьдесят ', 'Девяносто '];
// var arrUnits = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять', 'Десять', 'Одинадцать', 
//                 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать',];

// var number = 839;

// function callName(y) {
//     if (y < 0 || y > 999){
//         console.log('Input number is incorrect, try another one')
//     } else {
//         workGear(number);
//     }
// }

// function workGear(x) {
//     var temp = String(x);
//     var check = '';
//     var point = false;
//     for (var i = 0; i < 3; i++){
//         if (i < 1) {
//         var j = temp[i];
//         var sum = arrHundreds[j-1];
//         } else if (temp[i] == 1 && point === false) {
//             point = true;
//             check = temp[i+1]*1;
//             sum += arrUnits[check+9];
//         } else if (i === 1){
//             sum += arrDecade[temp[i]-2];
//         } else if (point === false){
//             sum += arrUnits[temp[i]-1]
//         }
//     }
//     console.log(sum);
// }
// callName(number);\


// Задание 4 \\
// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

// var str = 'двести сорок пять';

// function strDecrypt(string) {
//     string += ' ';
//     var sum = '';
//     var buffer = '', buffer2 = '', buffer3 = '';
//     var num = '';
//     var counter = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] !== ' '){
//             sum += string[i]; 
//         } else if (buffer === '') {
//             counter += 1;
//             buffer = sum;
//             sum = '';
//         } else if (buffer2 === ''){
//             buffer2 = sum;
//             sum = '';
//             counter += 1;
//         } else {
//             counter += 1;
//         }
//     }
//     if (counter === 2){
//         sum = buffer2;
//         buffer2 = buffer;
//     } else{}
//     switch (buffer) {
//         case 'сто':
//             num += 1;
//             break;
//         case 'двести':
//             num += 2;
//             break;
//         case 'триста':
//             num += 3;
//             break;
//         case 'четыреста':
//             num += 4;
//             break;
//         case 'пятьсот':
//             num += 5;
//             break;
//         case 'шестьсот':
//             num += 6;
//             break;
//         case 'семьсот':
//             num += 7;
//             break;
//         case 'восемьсот':
//             num += 8;
//             break;
//         case 'девятьсот':
//             num += 9;
//             break;    
//         default:
//             break;
//     }
//     switch (buffer2) {
//         case 'одинадцать':
//             num += 11
//             break;
//         case 'двенадцать':
//             num += 12
//             break;
//         case 'тринадцать':
//             num += 13
//             break;
//         case 'четырнадцать':
//             num += 14
//             break;
//         case 'пятнадцать':
//             num += 15
//             break;
//         case 'шестнадцать':
//             num += 16
//             break;
//         case 'семнадцать':
//             num += 17
//             break;
//         case 'восемнадцать':
//             num += 18
//             break;
//         case 'девятнадцать':
//             num += 19
//             break;
//         case 'десять':
//             num += 1
//             buffer3 += 0;
//             break;
//         case 'двадцать':
//             num += 2
//             buffer3 += 0;
//             break;
//         case 'тридцать':
//             num += 3
//             buffer3 += 0;
//             break;
//         case 'сорок':
//             num += 4
//             buffer3 += 0;
//             break;
//         case 'пятьдесят':
//             num += 5
//             buffer3 += 0;
//             break;
//         case 'шестьдесят':
//             num += 6
//             buffer3 += 0;
//             break;
//         case 'семьдесят':
//             num += 7
//             buffer3 += 0;
//             break;
//         case 'восемьдесят':
//             num += 8
//             buffer3 += 0;
//             break;
//         case 'девяносто':
//             num += 9
//             buffer3 += 0;
//             break;
//         case 'один':
//             num += 01;
//             break;
//         case 'два':
//             num += 02;
//             break;
//         case 'три':
//             num += 03;
//             break;
//         case 'четыре':
//             num += 04;
//             break;
//         case 'пять':
//             num += 05;
//             break;
//         case 'шесть':
//             num += 06;
//             break;
//         case 'семь':
//             num += 07;
//             break;
//         case 'восемь':
//             num += 08;
//             break;
//         case 'девять':
//             num += 09;
//             break;
//         default:
//             num += '00';
//             break;
//     }
//     switch (sum) {
//         case 'один':
//             num += 1;
//             break;
//         case 'два':
//             num += 2;
//             break;
//         case 'три':
//             num += 3;
//             break;
//         case 'четыре':
//             num += 4;
//             break;
//         case 'пять':
//             num += 5;
//             break;
//         case 'шесть':
//             num += 6;
//             break;
//         case 'семь':
//             num += 7;
//             break;
//         case 'восемь':
//             num += 8;
//             break;
//         case 'девять':
//             num += 9;
//             break;
//         default:
//             num += buffer3;
//             break;
//     }
//     console.log(num*1);
// }
// strDecrypt(str);