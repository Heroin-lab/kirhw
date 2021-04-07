// // Задание 1 \\
// // Нахождение четного и нечетного + условия

// function even(a, b) {
//     var c;
//     if (typeof a === 'string' || typeof b === 'string' || a === undefined || b === undefined){
//         return 'error';
//     }

//     a % 2 === 0 ? c = a * b : c = a * 1 + b * 1
//     return c;
// }
// // console.log(even(12, 3));



// // Задание 2 \\
// // Нахождение четверти по значениям (x,y)

// function getQuarter(x, y) {
//     var result;
//     if (typeof x === 'string' || typeof y === 'string' || x === undefined || y === undefined) {
//         return 'error';
//     }

//     if (x > 0 && y > 0) {
//         return 'At the first quarter';
//     } else if (x > 0 && y < 0){
//         return 'At the fourth quarter';
//     } else if (x < 0 && y > 0) {
//         return 'At the second quarter';
//     } else if (x < 0 && y < 0) {
//         return 'At the third quarter';
//     } else if (x === 0 && y === 0) {
//         return 'Your point at the origin of the coordinate plane'
//     } else if (x === 0 && y !== 0) {
//         y > 0 ? result = 'between first and second quarter' : result = 'between third and fourth quarter';
//     } else if (y === 0 && x !== 0) {
//         x > 0 ? result = 'between first and fourth quarter' : result = 'between second and third quarter';
//     }
//     return result;
// }
// // console.log(getQuarter());


// // Задание 3 \\
// // Найти суммы только положительных из трех чисел

// function positivSum(a, b, c) {
//     if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string' ||
//          a === undefined || b === undefined || c === undefined) {
//         return 'error';
//     }

//     var array = [a, b, c];
//     var result = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             result += array[i];
//         }
//     }
//     return result;
// }
// // console.log(positivSum(-1, -1 ,-1));


// // Задание 4 \\
// // Посчитать выражение (макс(а*б*с, а+б+с))+3

// function max(a, b, c) {
//     if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string' ||
//          a === undefined || b === undefined || c === undefined) {
//         return 'error';
//     }

//     (a * b * c >= a + b + c) ? result = ((a * b * c) + 3) : result = ((a + b + c) + 3);
//     return result;
// }
// // console.log(max(1, 2, -3));



// // Задание 5 \\
// // Написать программу определения оценки студента по его рейтингу, на основе следующих правил

// function getMark(x) {
//     if (typeof x === 'string' || x === undefined){
//         return 'error';
//     }

//     if (x >= 0 && x <= 19){
//         return 'Буквенная оценка F';
//     } else if (x > 19 && x <= 39) {
//         return 'Буквенная оценка E';
//     } else if (x > 39 && x <= 59){
//         return 'Буквенная оценка D';
//     } else if (x > 59 && x <= 74){
//         return 'Буквенная оценка C';
//     } else if (x > 74 && x <= 89){
//         return 'Буквенная оценка B';
//     } else if (x > 89 && x <= 100){
//         return 'Буквенная оценка A';
//     } else {
//         return 'error';
//     }
// }

// module.exports = {even, getQuarter, positivSum, max, getMark};