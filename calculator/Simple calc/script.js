var input = document.querySelector('.calc__main-input')

function insert(num) {
    input.value = input.value + num;
}

function operator(oper) {
    var inputNum = input.value;
    if (inputNum.slice(-1) >= 0 && inputNum.slice(-1) <= 9){
        input.value = input.value + oper;
    } else {
        backspace();
        input.value = input.value + oper;
    }
}

function clearAll() {
    input.value = '';
}

function backspace() {
    var needDel = input.value;
    input.value = needDel.substring(0, needDel.length - 1);
}

function equal() {
    var forEqual = input.value;
    if (forEqual){
        input.value = eval(forEqual);
    }
}