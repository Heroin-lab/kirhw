var previousResults = [];
var min = 0;
var max = 0;

var minInput = document.querySelector('.min-input'),
    maxInput = document.querySelector('.max-input'),
    genButton = document.querySelector('.gen-button'),
    resButtton = document.querySelector('.res-button'),
    output = document.querySelector('.gen-out');

minInput.addEventListener('focusout', minRange);
maxInput.addEventListener('focusout', maxRange);
genButton.addEventListener('click', generate);
resButtton.addEventListener('click', reset);

function minRange() {
    min = minInput.value * 1;
    previousResults.length = 0;
}

function maxRange() {
    max = maxInput.value * 1;
    previousResults.length = 0;
}

function generate() {
    if (minInput.value !== '' && maxInput.value !== '' && minInput.value > 0 &&
        minInput.value % 1 === 0 && maxInput.value % 1 === 0) {
        var ranNum = generateNum();
        var flag = true;
        for (var i = 0; i < previousResults.length; i++){
            if (ranNum === previousResults[i] && previousResults.length < (max - min) + 1) {
                generate();
                flag = false;
                break;
            } 
        }
        if (flag === true && previousResults.length < (max - min) + 1) {
            addAlert(ranNum);
            previousResults.push(ranNum);
            console.log(previousResults);
        } else if (previousResults.length === (max - min) + 1) {
            addAlert(previousResults[previousResults.length - 1]);
            previousResults.length += 1;
        } else if (flag === true) {
            genButton.disabled = true;
            addAlert('Elements are over');
        }
    } else {
        output.innerHTML = ('Uncorrect values or empty input!')
    }
}

function generateNum() {
    var result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return result;
}

function addAlert(text) {
    output.innerHTML = `Generated number: ${text}`;
}

function reset() {
    previousResults.length = 0;
    output.innerHTML = '';
    genButton.disabled = false;
}