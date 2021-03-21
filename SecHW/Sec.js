// Second home work \\
function completer(array) {
    var arrBuffer = '';
    for (var i = 0; i < array.length; i++){
        for (var k = 0; k < array.length; k++){
            arrBuffer += array[i][k];
        }
        arrBuffer += '\n'
    }
    arr = arrBuffer;
}

var arr = [
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
[' ', ' ', ' ', ' ', ' ', ' ', ' ',],
];

// 1 task \\

// function fillAll(array) {
//     for (var i = 0; i < array.length; i++){
//         for (var k = 0; k < array.length; k++){
//             array[i][k] = '*';
//         }
//     }

// }
// fillAll(arr);

// 2 task \\

// function fillSquare(array) {
    // for (var i = 0; i < 7; i++){
    //     for (var k = 0; k < 7; k++){
    //         if (i === 6){
    //             array[i][k] = '*';
    //             array[k][i] = '*';
    //         } else if (i === 0){
    //             array[i][k] = '*';
    //             array[k][i] = '*';
    //         }
    //     }
    // }
//     completer(arr);
//     console.log(arr);   
// }
// fillSquare(arr);

// 3 task \\

// function fillTriangle1(array) {
//     counter = 6;
//     for (var i = 0; i < 7; i++){
//         array[i][counter] = '*';
//         counter--;
//         for (var k = 0; k < 7; k++){
//             if (i === 0){
//                 array[i][k] = '*';
//                 array[k][i] = '*';
//             } 
//         }
//     }
//     completer(arr);
//     console.log(arr);   
// }
// fillTriangle1(arr);


// 4 task \\

// function fillTriangle2(array) {
//     for (var i = 0; i < 7; i++){
//         array[i][i] = '*';
//         for (var k = 0; k < 7; k++){
//             if (i === 0){
//                 array[k][i] = '*';
//             } else if (i === 6){
//                 array[i][k] = '*';
//             }
//         }
//     }
//     completer(arr);
//     console.log(arr);   
// }
// fillTriangle2(arr);

// 5 task \\

// function fillTriangle3(array) {
//     counter = 6;
//     for (var i = 0; i < 7; i++){
//         array[i][counter] = '*';
//         counter--;
//         for (var k = 0; k < 7; k++){
//             if (i === 6){
//                 array[i][k] = '*';
//                 array[k][i] = '*';
//             } 
//         }
//     }
//     completer(arr);
//     console.log(arr);   
// }
// fillTriangle3(arr);

// 6 task \\

// function fillTriangle4(array) {
//     for (var i = 0; i < 7; i++){
//         array[i][i] = '*';
//         for (var k = 0; k < 7; k++){
//             if (i === 0){
//                 array[i][k] = '*';
//             } else if (i === 6){
//                 array[k][i] = '*';
//             }
//         }
//     }
//     completer(arr);
//     console.log(arr);   
// }
// fillTriangle4(arr);

// 7 task \\

// function fillCross(array) {
//     k = 6;
//     for (var i = 0; i < 7; i++){
//         array[i][i] = '*';
//         array[i][k] = '*'
//         k--;
//     }
//     completer(arr);
//     console.log(arr);  
// }
// fillCross(arr);

// 8 task \\

// function fillTriangleDown(array) {
//     k = 6;
//     for (var i = 0; i < 4; i++){
//         array[i][i] = '*';
//         array[i][k] = '*'
//         k--;
//     }
//     for (var k = 0; k < 7; k++){
//         array[0][k] = '*';
//     }
//     completer(arr);
//     console.log(arr);  
// }
// fillTriangleDown(arr);

// 9 task \\

// function fillCross(array) {
//     k = 0;
//     for (var i = 6; i > 2; i--){
//         array[i][i] = '*';
//         array[i][k] = '*'
//         k++;
//     }
//     for (var k = 0; k < 7; k++){
//         array[6][k] = '*';
//     }
//     completer(arr);
//     console.log(arr);  
// }
// fillCross(arr);
