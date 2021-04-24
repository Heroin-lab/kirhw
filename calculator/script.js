var input = document.querySelector('.calc__main-input');
var output = document.querySelector('.calc__main-output');
var lastString = '';

function insert(num) {
    if (input.value == '0'){
        input.value = '';
        input.value = input.value + num;
        lastString = input.value;
    } else {
        input.value = input.value + num;
    }
    
}

// Check if our input value == 0
function clearZero() {              
    if (input.value == 0){
        input.value = ''; 
        return true;
    }
    return false;
}

// Got a last numbers before operators
function getLast() {
    inp = input.value;
    var result = '';
    for (var i = inp.length - 1; i >= 0; i--){
        if (inp[i] >= 0 && inp[i] <= 9) {
            result = inp[i] + result;
            input.value = (input.value).substring(0, (input.value.length) - 1);
        } else {
            return result;
        }
    }
    return result;
}

function percent() { // доделать работу
    input.value = input.value / 100;
}

function operator(oper) {
    var inputNum = input.value;
    if ((inputNum.slice(-1) >= 0 && inputNum.slice(-1) <= 9) || inputNum.slice(-1) == '(' || inputNum.slice(-1) == ')'){
        input.value = input.value + oper;
    } else {
        backspace();
        input.value = input.value + oper;
    }
}

function clearAll() {
    input.value = '0';
}

function backspace() {
    var needDel = input.value;
    input.value = needDel.substring(0, needDel.length - 1);
    if (input.value == 0) {
        input.value = '0';
    }
}

function factor() {
    num = getLast();
    console.log(input.value, num);
    var result = 1;
    for (var i = 1; i <= num*1; i++){
        result *= i;
    }
    lastString = input.value + result;
    input.value += `${num}!`;
}

function Pi() { // можно спаять вместе с E
    clearZero() ? input.value += Math.PI.toFixed(8) : input.value += 'π';
}
function E() {
    clearZero() ? input.value += Math.E.toFixed(8) : input.value += 'e';
}

function equal() {
    var forEqual = input.value;
    if (lastString){
        input.value = eval(lastString)
        lastString = '';
    } else {
        input.value = eval(forEqual);
    }
}