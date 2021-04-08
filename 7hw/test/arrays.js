// 1 task \\

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

console.log(bubbleSort([2, 8, 5, 22, 8, 7, 12,]));

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


module.exports = {smallestElement, largestElement, smallestIndex, largestIndex, oddIndex, arrRevers, oddNumbers, halfRevers, bubbleSort, selectSort, insertSort}