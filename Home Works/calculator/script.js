var input = document.querySelector('.calc__main-input');

function clearInput() {
    input.value = '';
}

function deleteOne() {
    input.value = input.value.substring(0, input.value.length - 1)
}

function addNum(val) {
    input.value += val;
}

function addSign(val) {
    
}

function equal() {
    if(input.value){
        input.value = eval(input.value);
    }
}