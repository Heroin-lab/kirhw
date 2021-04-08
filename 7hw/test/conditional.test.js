var {even, getQuarter, positivSum, max, getMark} = require('./conditional.js');

// 1 task \\

describe('even', function () {
    it('should be defined', function(){
        expect(even).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof even).toBe('function');
    })
    it('Must be multiplied if first num === even', function(){
        expect(even(4, 3)).toBe(12);
    })
    it('Must be add up the numbers', function(){
        expect(even(3, 7)).toBe(10);
    })
    it('should work only with number', function(){
        expect(even('4', '4')).toBe('error');
    })
    it('shouldn`t work if string contain letters', function(){
        expect(even('4', 'fu')).toBe('error');
    })
    it('shouldn`t work if string contain letters', function(){
        expect(even('ck', '4')).toBe('error');
    })
    it('shouldn`t work without arguments', function(){
        expect(even()).toBe('error');
    })
    it('shouldn`t work with only one argument', function(){
        expect(even(2)).toBe('error');
    })
    it('shouldn`t work with only one argument', function(){
        expect(even(3)).toBe('error');
    })
});

// 2 task \\

describe('getQuarter', function () {
    it('should be defined', function(){
        expect(getQuarter).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof getQuarter).toBe('function');
    })
    it('Should return first quarter', function(){
        expect(getQuarter(4, 3)).toBe('At the first quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(-3, 7)).toBe('At the second quarter');
    })
    it('Should return first quarter', function(){
        expect(getQuarter(-1, -3)).toBe('At the third quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(3, -8)).toBe('At the fourth quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(0, 1)).toBe('between first and second quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(0, -1)).toBe('between third and fourth quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(2, 0)).toBe('between first and fourth quarter');
    })
    it('Should return second quarter', function(){
        expect(getQuarter(-2, 0)).toBe('between second and third quarter');
    })
    it('should work only with number', function(){
        expect(getQuarter('4', '4')).toBe('error');
    })
    it('shouldn`t work if string contain letters', function(){
        expect(getQuarter('4', 'fu')).toBe('error');
    })
    it('shouldn`t work if string contain letters', function(){
        expect(getQuarter('ck', '4')).toBe('error');
    })
    it('shouldn`t work without arguments', function(){
        expect(getQuarter()).toBe('error');
    })
    it('shouldn`t work with only one argument', function(){
        expect(getQuarter(2, undefined)).toBe('error');
    })
    it('shouldn`t work with only one argument', function(){
        expect(getQuarter(undefined, 3)).toBe('error');
    })
});

// 3 task \\

describe('positivSum', function () {
    it('should be defined', function(){
        expect(positivSum).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof positivSum).toBe('function');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(positivSum('4', 4, 4)).toBe('error');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(positivSum(4, 'fu', 3)).toBe('error');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(positivSum(5, 4, 'u')).toBe('error');
    })
    it('shouldn`t work without arguments', function(){
        expect(positivSum()).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(positivSum(undefined, 3, 4)).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(positivSum(2, undefined, 2)).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(positivSum(2, 2, undefined)).toBe('error');
    })
    it('should return sum of all arguments', function(){
        expect(positivSum(1, 2, 3)).toBe(6);
    })
    it('should return sum of second and third arguments', function(){
        expect(positivSum(-1, 2, 3)).toBe(5);
    })
    it('should return sum of first and third arguments', function(){
        expect(positivSum(1, -2, 3)).toBe(4);
    })
    it('should return sum of first and second arguments', function(){
        expect(positivSum(1, 2, -3)).toBe(3);
    })
    it('should return zero', function(){
        expect(positivSum(-1, -2, -3)).toBe(0);
    })
});

// 4 task \\

describe('max', function () {
    it('should be defined', function(){
        expect(max).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof max).toBe('function');
    })
    it('shouldn`t work without arguments', function(){
        expect(max()).toBe('error');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(max('4', 4, 4)).toBe('error');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(max(4, 'fu', 3)).toBe('error');
    })
    it('should`t work if one of arguments be a string', function(){
        expect(max(5, 4, 'u')).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(max(undefined, 3, 4)).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(max(2, undefined, 2)).toBe('error');
    })
    it('shouldn`t work without one argument', function(){
        expect(max(2, 2, undefined)).toBe('error');
    })
    it('should return number even if sum and multipy are equal', function(){
        expect(max(1, 2, 3)).toBe(9);
    })
    it('should return multiply of all elements + 3', function(){
        expect(max(2, 2, 3)).toBe(15);
    })
    it('should return sum of elements + 3', function(){
        expect(max(1, 1, 1)).toBe(6);
    })
});

// 5 task \\

describe('getMark', function () {
    it('should be defined', function(){
        expect(getMark).toBeDefined();
    })
    it('should be function', function(){
        expect(typeof getMark).toBe('function');
    })
    it('should work only with number', function(){
        expect(getMark('4')).toBe('error');
    })
    it('shouldn`t work if string contain letters', function(){
        expect(getMark('fu')).toBe('error');
    })
    it('shouldn`t work without arguments', function(){
        expect(getMark()).toBe('error');
    })
    it('shouldn`t work with undefined argument', function(){
        expect(getMark(undefined)).toBe('error');
    })
    it('shouldn`t work if argument < 0', function(){
        expect(getMark(-1)).toBe('error');
    })
    it('shouldn`t work if argument > 100', function(){
        expect(getMark(101)).toBe('error');
    })
    it('should return F mark if argument <= 19', function(){
        expect(getMark(19)).toBe('Буквенная оценка F');
    })
    it('should return E mark if argument > 19 and <= 39', function(){
        expect(getMark(39)).toBe('Буквенная оценка E');
    })
    it('should return D mark if argument > 39 and <= 59', function(){
        expect(getMark(59)).toBe('Буквенная оценка D');
    })
    it('should return C mark if argument > 59 and <= 74', function(){
        expect(getMark(74)).toBe('Буквенная оценка C');
    })
    it('should return B mark if argument > 74 and <= 89', function(){
        expect(getMark(89)).toBe('Буквенная оценка B');
    })
    it('should return A mark if argument > 89 and <= 100', function(){
        expect(getMark(100)).toBe('Буквенная оценка A');
    })
});