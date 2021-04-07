var {getSum, isPrime, sqrt, sqrtBin, fak, getStrSum, revers} = require('./cycles');
// 1 task \\

describe('getSum', function() {
    it('Should be defined', function () {
        expect(getSum).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof getSum).toBe('function');
    });
    it('Should work without arguments', function () {
        expect(getSum()).toBe('Sum of even elements = 2450, count of even numbers = 50');
    });
});

// 2 task \\

describe('isPrime', function() {
    it('Should be defined', function () {
        expect(isPrime).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof isPrime).toBe('function');
    });
    it('Shouldn`t work without arguments', function () {
        expect(isPrime()).toBe('error');
    });
    it('Shouldn`t work with string arguments', function () {
        expect(isPrime('13')).toBe('error');
    });
    it('Should return "Is prime" if argument = 0', function () {
        expect(isPrime(0)).toBe('Is prime');
    });
    it('Should return "Is prime" if argument = prime', function () {
        expect(isPrime(7)).toBe('Is prime');
    });
    it('Should return "Is not prime" if argument = not prime', function () {
        expect(isPrime(8)).toBe('Is not prime');
    });
});

// 3 task \\

describe('sqrt', function() {
    it('Should be defined', function () {
        expect(sqrt).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof sqrt).toBe('function');
    });
    it('Should work with number which has square root', function () {
        expect(sqrt(144)).toBe(12);
    });
    it('Should`t work with number which hasn`t square root', function () {
        expect(sqrt(88)).toBe('Can`t find round sqrt');
    });
    it('Shouldn`t work with string', function () {
        expect(sqrt('144')).toBe('error');
    });
    it('Shouldn`t work without arguments', function () {
        expect(sqrt()).toBe('error');
    });
});

// 4 task \\

describe('sqrtBin', function() {
    it('Should be defined', function () {
        expect(sqrtBin).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof sqrtBin).toBe('function');
    });
    it('Should work with number which has square root', function () {
        expect(sqrtBin(144)).toBe(12);
    });
    it('Should return closest number to square root', function () {
        expect(sqrtBin(88)).toBe(9);
    });
    it('Shouldn`t work with string', function () {
        expect(sqrtBin('144')).toBe('error');
    });
    it('Shouldn`t work without arguments', function () {
        expect(sqrtBin()).toBe('error');
    });
});

// 5 task \\

describe('getStrSum', function() {
    it('Should be defined', function () {
        expect(getStrSum).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof getStrSum).toBe('function');
    });
    it('Should work with number', function () {
        expect(getStrSum(999)).toBe(27);
    });
    it('Should work with string', function () {
        expect(getStrSum('888')).toBe(24);
    });
    it('Shouldn`t work without arguments', function () {
        expect(getStrSum()).toBe('error');
    });
});

// 6 task \\

describe('revers', function() {
    it('Should be defined', function () {
        expect(revers).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof revers).toBe('function');
    });
    it('Should work with number', function () {
        expect(revers(1234)).toBe(4321);
    });
    it('Should work with string', function () {
        expect(revers('4343')).toBe(3434);
    });
    it('Shouldn`t work without arguments', function () {
        expect(revers()).toBe('error');
    });
});