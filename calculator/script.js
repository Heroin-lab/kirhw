class Calculator {
    constructor() {};

    clearAllHistory() {};

    backspace() {};

    insertNumber(value) {};

    insertOperation(value) {};

    insertDecimalPoint() {};

    generateResult() {};
}

var input = document.querySelector('.calc__main-input');
var output = document.querySelector('.calc__main-output ');

var clearAllButton = document.querySelector('[data-all-clear]');
var backspaceButton = document.querySelector('[data-backspace]');
var operationButtons = document.querySelector('[data-operator]');
var numberButtons = document.querySelector('[data-number]');
var equalsButton = document.querySelector('data-equals');
