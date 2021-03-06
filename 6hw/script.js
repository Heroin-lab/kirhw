// 1 task \\

function getCookingTime (eggsAmount) {
    return Math.ceil(eggsAmount / 5) * 5; 
}    

// console.log(getCookingTime(11));

// 2 task \\

function getNumber (array) {
    var result;
    var odd = [];
    var even = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    odd.length > even.length ? result = even[0] : result = odd[0];
    return result;
}

// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));

// 3 task \\

var arr = [
    {title: 'Some title'}, 
    {title: 'I like JS'}, 
    {nonTitle: 'This obj doesn’t have key title js'},
    {title: 'Js - is the best!'}
];

function findTitle(arr, str) {
    str = str.toLowerCase();
    var arrBuffer = [];
    for(var i=0; i<arr.length; i++){
            if(arr[i].hasOwnProperty('title') && arr[i].title.toLowerCase().includes(str)){
                arrBuffer.push(arr[i]);
            }
    }
    arr = arrBuffer
    return arr
}

// console.log(findTitle(arr, 'js')); 


//////////////////////////////


var array = [
    {title: 'Some title'}, 
    {title: 'I like JS'}, 
    {nonTitle: 'This obj doesn’t have key title js'},
    {js: 'test another props2'},
    {nonTitle: 'This obj'},
    {title: 'Js - is the best!'},
    {js: 'test another props'},
];

function findCorrectProp(arr, titleName) {
    objStorage = [];
    titleName = titleName.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(titleName)) {
            objStorage.push(arr[i]);
        }
    }
    arr = objStorage;
    return arr;
}

// console.log(findCorrectProp(array, 'js'));

// 4 task \\

function countCharacters(string) {
    var result = {};
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++){
        if (result[string[i]] = result[string[i]]){
            result[string[i]] += 1;
        } else {
            result[string[i]] = 1;
        }
    }
    return result;
}

// console.log(countCharacters('wtfq weqwe'));

// 5 task \\

// var number = 15563;

function nextPalindrome(num) {
    while (true) {
        if (isPalindrome(num) === true){
            return num;
        }
        num++;
    }
}

function isPalindrome(catchNum) {
    catchNum = String(catchNum);
    var a = Math.floor(catchNum.length/2);
    for (var  i = 0; i < a; i++) {
        if (catchNum[i] !== catchNum[catchNum.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(nextPalindrome(number));