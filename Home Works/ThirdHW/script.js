var guesses = 5;
var min = 1;
var max = 100;
var previousResult = 0;
var lastHeat = 0;
var trys = 0;
var attempMod = false;
var startGame = false;

var alerting = document.querySelector('.alerting');
var mainInput = document.getElementById('mainInput');
var genButton = document.getElementById('generate');
var tempOut = document.querySelector('.temp-out');
var helloWords = document.getElementById('hello-words');
var minRange = document.getElementById('minRange');
var maxRange = document.getElementById('maxRange');
var setRange = document.getElementById('setRange');
var attempChange = document.getElementById('change-attemps');
var attempInput = document.querySelector('.attemps-input');
var popupStart = document.querySelector('.popup-open');
var popupAlert = document.querySelector('.popup-alert');
var popupWindow = document.querySelector('.popup-window');
var popupEnd = document.querySelector('.popup-header__close-button');
var shutdown = document.querySelector('.exit');

setRange.addEventListener('click', setNewRange);
attempChange.addEventListener('click', attempChanger);
genButton.addEventListener('click', pressMainButton);
popupStart.addEventListener('click', popupOpen);
popupEnd.addEventListener('click', popupClose);
shutdown.addEventListener('click', exit);

function greeting() {
    helloWords.innerHTML = `Hey, let's play a game.  
    After pressing the 'start' button, I will guess a number from ${min} to ${max}.
    And you will try to guess it in ${guesses} attempts.
    Good luck`;
}

function pressMainButton() {
    if (genButton.value === 'start' && startGame === false) {
        trys = guesses;
        startGame = true;
        tempOut.innerHTML = `${trys} attempts left`;
        popupStart.disabled = true;
        mainInput.disabled = false;
        pressGenerate();
    } else if (genButton.value === 'Play again' && startGame === false) {
        trys = guesses;
        genButton.value = 'start';
        mainInput.value = '';
        tempOut.innerHTML = '';
        alerting.innerHTML = '';
        popupStart.disabled = false;
        mainInput.disabled = true;
    } else if (trys !== 0 && startGame === true){
        trys--;
        tempOut.innerHTML = `${trys} attempts left`;
        compare();
    } 
    if (trys === 0 && startGame === true) {
        tempOut.innerHTML = 'You lose';
        genButton.value = 'Play again';
        startGame = false;
    }
}

function setNewRange() {
    if (attempMod === true) {
        minRange.style.display = "inline";
        maxRange.style.display = "inline";
        attempInput.style.display = "none";
        attempMod = false;
    }   else {
    if (minRange.value*1 >= 1 && maxRange.value*1 <= 200 && minRange.value % 1 === 0 && maxRange.value % 1 === 0 && minRange.value*1 < maxRange.value*1) {
        min = minRange.value * 1;
        max = maxRange.value * 1;
        addAlert('New range was set');
        greeting();
        minRange.placeholder = min;
        maxRange.placeholder = max;
        minRange.value = '';
        maxRange.value = '';
    } else if (minRange.value == '' || maxRange.value == '' || minRange.value % 1 !== 0 || maxRange.value % 1 !== 0) {
        addAlert('Can`t update: Uncorrect value or empty input');
    } else if (maxRange.value > 200) {
        addAlert('The upper limit is too large');
    } else if (minRange.value < 1) {
        addAlert('The lower limit is too small');
    } else if (minRange.value > maxRange.value) {
        addAlert('Lower limit bigger than upper limit!');
    }
}
}

function compare() {
    hoter = 0;
    colder = 0;
    if (mainInput.value !== '' && mainInput.value * 1 >= min && mainInput.value * 1 <= max && mainInput.value % 1 === 0) {
        if (previousResult == mainInput.value) {
            tempOut.innerHTML = 'Congratulations you win';
            genButton.value = 'Play again';
            alerting.innerHTML = '';
            mainInput.value = '';
            startGame = false;
        } else if (mainInput.value < previousResult) {
            hoter = previousResult - mainInput.value;
            hotCold(hoter);
        } else if (mainInput.value > previousResult) {
            colder = mainInput.value - previousResult;
            hotCold(colder);
        }
    } else {
        addAlert('Uncorrect value, try another one!');
        trys++;
        tempOut.innerHTML = `${trys} attempts left`;
    }
}

function hotCold(heat) {
    if (hoter >= 1) {
        heat > lastHeat ? alerting.innerHTML = 'Wrong \n Colder' : alerting.innerHTML = 'Wrong \n Warmer';
        lastHeat = heat;
    } else if (colder >= 1) {
        heat > lastHeat ? alerting.innerHTML = 'Wrong \n Colder' : alerting.innerHTML = 'Wrong \n Warmer';
        lastHeat = heat;
    } 
        if (trys == guesses - 1) {
            alerting.innerHTML = 'You guessed wrong! Try again!';
        }
}

function pressGenerate() {
    ranNum = generateNum();
    if (ranNum === previousResult) {
        pressGenerate();
    }
    previousResult = ranNum;
    genButton.value = 'Guess'
}

function generateNum() {
    var result = Math.floor(min - 0.5 + Math.random() * (max - min + 1));
    console.log(result);
    return result;
}

function attempChanger() {
    if (attempInput.value >= 1 && attempInput.value <= 15 && attempInput.value % 1 === 0 && attempMod === true) {
        guesses = attempInput.value;
        attempInput.placeholder = guesses;
        attempInput.value = '';
        greeting();
        addAlert('New attemp number was set');
    } else if (attempMod === false) {
        minRange.style.display = "none";
        maxRange.style.display = "none";
        attempInput.style.display = "flex";
        attempInput.placeholder = guesses;
        attempMod = true;
    } else if (attempInput.value < 1) {
        addAlert('Thats too small number of attempts');
    } else if (attempInput.value > 15) {
        addAlert('Thats too big number of attempts');
    } else if (attempInput.value === '' || attempInput.value !== 0){
        addAlert('Can`t update: Uncorrect value or empty input');
    }
}

function addAlert(text) {
    popupAlert.innerHTML = text;
    alerting.innerHTML = text;
    setTimeout(alertCleaner, 3000);
}

function alertCleaner() {
    popupAlert.innerHTML = '';
    alerting.innerHTML = '';
}

function popupOpen() {
    popupWindow.style.display = "flex";
}

function popupClose() {
    popupWindow.style.display = "none";
    attempInput.value = '';
    document.getElementById('minRange').value = '';
    document.getElementById('maxRange').value = '';
}

function exit() {
    trys = guesses;
    genButton.value = 'start';
    mainInput.value = '';
    tempOut.innerHTML = '';
    alerting.innerHTML = '';
    startGame = false;
    popupStart.disabled = false;
    mainInput.disabled = true;
}

window.onclick = function (e) {
    if (e.target == popupWindow) {
        popupWindow.style.display = 'none';
    }
}

greeting();