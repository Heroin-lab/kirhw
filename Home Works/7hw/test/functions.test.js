var {dayName, distance, callName, callNumb} = require('./functions.js');

// 1 task \\

describe('dayName', function () {
    it('Should be defined', function () {
        expect(dayName).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof dayName).toBe('function');
    });
    it('Should work with correct arguments', function () {
        expect(dayName(1)).toBe('Monday');
    });
    it('Should work with correct arguments', function () {
        expect(dayName(3)).toBe('Wednesday');
    });
    it('Should work with correct arguments', function () {
        expect(dayName(5)).toBe('Friday');
    });
    it('Shouldn`t return other day name', function () {
        expect(dayName(7)).not.toBe('Tuesday');
    });
    it('Shouldn`t work without arguments', function () {
        expect(dayName()).toBe('error');
    });
    it('Shouldn`t work with string', function () {
        expect(dayName('4')).toBe('error');
    });
    it('Shouldn`t work if argument < 1', function () {
        expect(dayName(0)).toBe('error');
    });
    it('Shouldn`t work if argument > 7', function () {
        expect(dayName(8)).toBe('error');
    });
});

// 2 task \\

describe('distance', function () {
    it('Should be defined', function () {
        expect(distance).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof distance).toBe('function');
    });
    it('Should work with correct arguments', function () {
        expect(distance(1, 1, 3, 2)).toBe(1);
    });
    it('Should work with correct arguments', function () {
        expect(distance(1, 1, 3, 5)).toBe(2);
    });
    it('Should work with correct arguments', function () {
        expect(distance(-1, 1, 0, 0)).toBe(2);
    });
    it('Shouldn`t return other distance', function () {
        expect(distance(1, 1, 3, 3)).not.toBe(2);
    });
    it('Shouldn`t work without arguments', function () {
        expect(distance()).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === string', function () {
        expect(distance('1', 1, 1, 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === string', function () {
        expect(distance( 1, '2', 1, 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === string', function () {
        expect(distance(1, 2, '1', 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === string', function () {
        expect(distance(1, 2, 1, '2')).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === undefined', function () {
        expect(distance(undefined, 1, 1, 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === undefined', function () {
        expect(distance( 1, undefined, 1, 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === undefined', function () {
        expect(distance(1, 2, undefined, 2)).toBe('error');
    });
    it('Shouldn`t work if one or many arguments === undefined', function () {
        expect(distance(1, 2, 1, undefined)).toBe('error');
    });
});

// 3 task \\

describe('callName', function () {
    it('Should be defined', function () {
        expect(callName).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof callName).toBe('function');
    });
    it('Should return special name if number < 20', function () {
        expect(callName(19)).toBe('Девятнадцать');
    });
    it('Should return special name if number < 20', function () {
        expect(callName(0)).toBe('Ноль');
    });
    it('Should return special name if number contain', function () {
        expect(callName(111)).toBe('Сто Одинадцать');
    });
    it('Should work with correct arguments', function () {
        expect(callName(90)).toBe('Девяносто ');
    });
    it('Should work with correct arguments', function () {
        expect(callName(69)).toBe('Шестьдесят Девять');
    });
    it('Should work with correct arguments', function () {
        expect(callName(100)).toBe('Сто ');
    });
    it('Should work with correct arguments', function () {
        expect(callName(666)).toBe('Шестьсот Шестьдесят Шесть');
    });
    it('Shouldn`t return other day name', function () {
        expect(callName(201)).not.toBe('Двести Ноль Один');
    });
    it('Shouldn`t work without arguments', function () {
        expect(callName()).toBe('error');
    });
    it('Shouldn`t work with string', function () {
        expect(callName('666')).toBe('error');
    });
    it('Shouldn`t work if argument < 0', function () {
        expect(callName(-1)).toBe('error');
    });
    it('Shouldn`t work if argument => 1000', function () {
        expect(callName(1000)).toBe('error');
    });
});

// 4 task \\


describe('callNumb', function () {
    it('Should be defined', function () {
        expect(callNumb).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof callNumb).toBe('function');
    });
    it('Should return special number if number < 20', function () {
        expect(callNumb('Девятнадцать')).toBe(19);
    });
    it('Should return special name if number < 20', function () {
        expect(callNumb('Ноль')).toBe(0);
    });
    it('Should return special name if number contain', function () {
        expect(callNumb('Сто Одиннадцать')).toBe(111);
    });
    it('Should work with correct arguments', function () {
        expect(callNumb('Девяносто Девять')).toBe(99);
    });
    it('Should work with correct arguments', function () {
        expect(callNumb('Шестьсот Девять')).toBe(609);
    });
    it('Should work with correct arguments', function () {
        expect(callNumb('Сто')).toBe(100);
    });
    it('Should work with correct arguments', function () {
        expect(callNumb('Шестьсот Шестьдесят Шесть')).toBe(666);
    });
    it('Should return correct number even if you got uncorrect string', function () {
        expect(callNumb('Двести Ноль Один')).toBe(201);
    });
    it('Shouldn`t work without arguments', function () {
        expect(callNumb()).toBe('error');
    });
    it('Shouldn`t work with number', function () {
        expect(callNumb(666)).toBe('error');
    });
    it('Shouldn`t work if argument < 0', function () {
        expect(callNumb('Минус один')).toBe('error');
    });
    it('Shouldn`t work if argument => 1000', function () {
        expect(callNumb('Тысяча')).toBe('error');
    });
})