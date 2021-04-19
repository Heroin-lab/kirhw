var {
    getDays,
    isOdd,
} = require('./practice');

// 1 task \\

describe('getDays', function () {
    it('Should be defind', function () {
        expect(getDays).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof getDays).toBe('function');
    });
    it('Should work with number arguments', function () {
        expect(getDays(2021, 4)).toBe(30);
    });
    it('Should work with stirng arguments', function () {
        expect(getDays(2021, 'April')).toBe(30);
    });
    it('Should work with number arguments', function () {
        expect(getDays(2021, 5)).toBe(31);
    });
    it('Should work with stirng arguments', function () {
        expect(getDays(2021, 'May')).toBe(31);
    });
    it('Should work with leap year', function () {
        expect(getDays(2020, 'February')).toBe(29);
    });
    it('Should work with leap year', function () {
        expect(getDays(2020, 2)).toBe(29);
    });
    it('Shouldn`t work only with empty arguments', function () {
        expect(getDays()).toBe('error');
    });
});

// 2 task

describe('isOdd', function () {
    var a = 10;
    var b = 9;
    it('Should be defind', function () {
        expect(isOdd).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof isOdd).toBe('function');
    });
    it('Should return false', function () {
        expect(a.isOdd()).toBe(false);
    });
    it('Should return false', function () {
        expect(b.isOdd()).toBe(true);
    });
    it('Should not return false', function () {
        expect(b.isOdd()).not.toBe(false);
    });
    it('Should not return true', function () {
        expect(a.isOdd()).not.toBe(true);
    });
});


