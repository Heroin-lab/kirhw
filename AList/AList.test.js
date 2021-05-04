var AList = require('./AList');

var emptyList = new AList;
var numInList = new AList(20);
var arrayInList = new AList([6,6,6]);
var arr = new AList([1, 2, 3, 4, 5, 0])

describe('Alist creation', function () {
    newAlist = new AList;
    it('Should be defind', function () {
        expect(emptyList).toBeDefined();
    });
    it('Should be defind', function () {
        expect(AList).toBeDefined();
    });
    it('AList function constructor Should be function', function () {
        expect(typeof AList).toBe('function');
    });
    it('New list must be an object', function () {
        expect(typeof emptyList).toBe('object');
    });
    it('Should create empty array with default capacity wich equal to 10', function () {
        expect(emptyList.size).toBe(0);
        expect(emptyList.capacity).toBe(10);
        expect(emptyList.array).toStrictEqual(new Array(10)); 
    });
    it('Should return collection with array length which user put as value', function () {
        expect(numInList.size).toBe(0);
        expect(numInList.capacity).toBe(20);
        expect(numInList.array).toStrictEqual(new Array(20));  
    });
    it('Should return collection with array which user put as value', function () {
        expect(arrayInList.size).toBe(3);
        expect(arrayInList.capacity).toBe(3);
        expect(arrayInList.array).toEqual([6,6,6]); 
    });
});

describe('Alist clear', function () {
    it('Should be defined ', function () {
        expect(arr.clear).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.clear).toBe('function');
    });
    it('Size must be a Zero', function () {
        emptyList.clear();
        expect(emptyList.size).toBe(0);
    });
    it('Array must be clear with default capacity', function () {
        emptyList.clear();
        expect(emptyList.array).toStrictEqual(new Array(10));
    });
    it('Size Shouldn`t be biger than 0', function () {
        emptyList.clear();
        expect(emptyList.size).not.toBe(1);
    });
    it('Array length Shouldn`t be smaller than default capacity', function () {
        emptyList.clear();
        expect(emptyList.array.length).not.toBe(0);
    });
});

describe('Alist getSize', function () {
    it('Should be defined ', function () {
        expect(arr.getSize).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.getSize).toBe('function');
    });
    it('Should return zero because collection is empty', function () {
        expect(emptyList.getSize()).toBe(0);
    });
    it('Should`nt return negative number', function () {
        expect(emptyList.getSize()).not.toBe(-1);
    });
    it('Should return zero because collection is empty even if capacity not default', function () {
        expect(numInList.getSize()).toBe(0);
    });
    it('Should return size bigger than zero even if capacity not default', function () {
        expect(numInList.getSize()).not.toBe(1);
    });
    it('Should return size of added array', function () {
        expect(arrayInList.getSize()).toBe(3);
    });
});

describe('Alist add', function () {
    it('Should be defined ', function () {
        expect(arr.add).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.add).toBe('function');
    });
    it('Should add new element to collection', function () {
        testList = new AList;
        testList.add(6);
        expect(testList.array).toEqual([
            6,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ]);
    });
    it('Should add new elements to collection', function () {
        testList = new AList;
        testList.add(6);
        testList.add(6);
        testList.add(6);
        expect(testList.array).toEqual([
            6,
            6,
            6,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ]);
    });
});

describe('AList set', function () {
    it('Should be defined ', function () {
        expect(arr.set).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.set).toBe('function');
    });
    it('Should set new element of collection', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        arr.set(10, 1)
        expect(arr.array).toEqual([1, 10, 3, 4, 5, 6]);
    });
    it('Should set new element of collection', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        arr.set(10, 3)
        expect(arr.array).toEqual([1, 2, 3, 10, 5, 6]);
    });
    it('Should set new element of collection', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        arr.set(10, 5)
        expect(arr.array).toEqual([1, 2, 3, 4, 5, 10]);
    });
    it('Should set new element of collection', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.set(10, -1)).toBe('ArrayIndexOutBoundsException');
    });
    it('Should set new element of collection', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.set(10, 6)).toBe('ArrayIndexOutBoundsException');
    });
});

describe('AList get', function () {
    it('Should be defined ', function () {
        expect(arr.get).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.get).toBe('function');
    });
    it('Should get element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.get(1)).toBe(2);
    });
    it('Should get element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.get(0)).toBe(1);
    });
    it('Should get element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.get(5)).toBe(6);
    });
    it('Should get element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.get(-1)).toBe('ArrayIndexOutBoundsException');
    });
    it('Should get element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6])
        expect(arr.get(7)).toBe('ArrayIndexOutBoundsException');
    });
});

describe('AList remove', function () {
    it('Should be defined ', function () {
        expect(arr.remove).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.remove).toBe('function');
    });
    it('Should remove element from collection by index', function () {
        var arr = new AList([1, 2, 3, 4, 5, 6]);
        arr.remove(1);
        expect(arr.array).toEqual([2, 3, 4, 5, 6, undefined]);
    });
    it('Should gen element from collection by index', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        arr.remove(1);
        expect(arr.array).toEqual([4, 5, 6, undefined, undefined, undefined]);
    });
});

describe('AList toArray', function () {
    it('Should be defined ', function () {
        expect(arr.toArray).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.toArray).toBe('function');
    });
    it('Should return array with all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.toArray()).toEqual([1, 1, 1, 4, 5, 6]);
    });
    it('Should`nt return string of all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.toArray()).not.toBe(1, 1, 1, 4, 5, 6);
    });
});

describe('AList toString', function () {
    it('Should be defined ', function () {
        expect(arr.toString).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.toString).toBe('function');
    });
    it('Should return array with all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.toString()).toBe('1,1,1,4,5,6');
    });
    it('Should`nt return string of all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.toString()).not.toEqual([1, 1, 1, 4, 5, 6]);
    });
});

describe('AList contains', function () {
    it('Should be defined ', function () {
        expect(arr.contains).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.contains).toBe('function');
    });
    it('Should return array with all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.contains(1)).toBe(true);
    });
    it('Should return array with all collecntion', function () {
        var arr = new AList([1, 1, 1, 4, 5, 6]);
        expect(arr.contains(7)).toBe(false);
    });
});

describe('AList minValue', function () {
    it('Should be defined ', function () {
        expect(arr.minValue).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.minValue).toBe('function');
    });
    it('Should return minValue from collection', function () {
        expect(arr.minValue()).toBe(0);
    });
    it('Should`nt return first element from collection', function () {
        expect(arr.minValue()).not.toBe(1);
    });
});

describe('AList maxValue', function () {
    it('Should be defined ', function () {
        expect(arr.maxValue).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.maxValue).toBe('function');
    });
    it('Should return maxValue from collection', function () {
        expect(arr.maxValue()).toBe(5);
    });
    it('Should`nt return last element from collection', function () {
        expect(arr.maxValue()).not.toBe(0);
    });
});

describe('AList minIndex', function () {
    it('Should be defined ', function () {
        expect(arr.minIndex).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.minIndex).toBe('function');
    });
    it('Should return minIndex from collection', function () {
        expect(arr.minIndex()).toBe(5);
    });
    it('Should`nt return first element from collection', function () {
        expect(arr.minIndex()).not.toBe(0);
    });
});

describe('AList maxIndex', function () {
    it('Should be defined ', function () {
        expect(arr.maxIndex).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.maxIndex).toBe('function');
    });
    it('Should return maxIndex from collection', function () {
        expect(arr.maxIndex()).toBe(4);
    });
    it('Should`nt return last element from collection', function () {
        expect(arr.maxIndex()).not.toBe(5);
    });
});

describe('AList reverse', function (){
    it('Should be defined ', function () {
        expect(arr.reverse).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.reverse).toBe('function');
    });
    it('Should return reverse array', function (){
        arr.reverse()
        expect(arr.array).toEqual([0, 5, 4, 3, 2, 1])
    });
    it('Should`nt return sorted reverse array', function (){
        arr.reverse()
        expect(arr.array).not.toEqual([5, 4, 3, 2, 1, 0])
    });
    it('Should`nt return half reverse array', function (){
        expect(arr.array).not.toEqual([0, 5, 4, 1, 2, 3])
    });
});

describe('AList halfReverse', function (){
    it('Should be defined ', function () {
        expect(arr.halfReverse).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.halfReverse).toBe('function');
    });
    it('Should return half reverse array', function (){
        arr.halfReverse()
        expect(arr.array).toEqual([4, 5, 0, 1, 2, 3])
    });
    it('Should`nt return full reverse array', function (){
        expect(arr.array).not.toEqual([0, 5, 4, 3, 2, 1])
    });
    it('Should`nt return sorted reverse array', function (){
        expect(arr.array).not.toEqual([0, 1, 2, 3, 4, 5])
    });
});

describe('AList retainAll', function (){
    it('Should be defined ', function () {
        expect(arr.retainAll).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.retainAll).toBe('function');
    });
    it('Should return array only with post array numbers', function (){
        var arr = new AList([1, 2, 3, 4, 5, 6,])
        arr.retainAll([1, 3, 5])
        expect(arr.array).toEqual([1, 3, 5, undefined, undefined, undefined])
    });
    it('Should return array only with post array numbers', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.retainAll([1, 6])
        expect(arr.array).toEqual([1, 1, 6, 6, undefined, undefined])
    });
    it('Should return array only with post array numbers', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.retainAll([1, 6, 7])
        expect(arr.array).toEqual([1, 1, 6, 6, undefined, undefined])
    });
    it('Should`nt return element which not include in post array', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.retainAll([1, 6])
        expect(arr.array).not.toEqual([1, 1, 3, 6, 6, undefined])
    });
    it('Should return all elements which include in array(not only first finded)', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.retainAll([1, 6])
        expect(arr.array).not.toEqual([1, 6, undefined, undefined, undefined, undefined])
    });
    it('Should return error message if post array is empty', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        expect(arr.removeAll([])).toBe('Nothing to delete! Argument array is empty!')
    });
    it('Should return error message if post array is empty', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        expect(arr.removeAll()).toBe('Nothing to delete! Argument array is empty!')
    });
});

describe('AList removeAll', function (){
    it('Should be defined ', function () {
        expect(arr.removeAll).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.removeAll).toBe('function');
    });
    it('Should delet elements from collection', function (){
        var arr = new AList([1, 2, 3, 4, 5, 6,])
        arr.removeAll([1, 3, 5])
        expect(arr.array).toEqual([2, 4, 6, undefined, undefined, undefined])
    });
    it('Should delet elements from collection (not only first)', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.removeAll([1, 6])
        expect(arr.array).toEqual([3, 4, undefined, undefined, undefined, undefined])
    });
    it('Should delet elements from collection (not only first)', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.removeAll([1, 6])
        expect(arr.array).not.toEqual([1, 3, 4, 6, undefined, undefined])
    });
    it('Should delet elements from collection', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        arr.removeAll([1, 6])
        expect(arr.array).not.toEqual([1, 1, 6, 6, undefined, undefined])
    });
    it('Should return error message if post array is empty', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        expect(arr.removeAll([])).toBe('Nothing to delete! Argument array is empty!')
    });
    it('Should return error message if post array is empty', function (){
        var arr = new AList([1, 1, 3, 4, 6, 6,])
        expect(arr.removeAll()).toBe('Nothing to delete! Argument array is empty!')
    });
});

describe('AList print', function () {
    var arr = new AList([1, 2, 3, 4]);
    it('Should be defined ', function () {
        expect(arr.print).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arr.print).toBe('function');
    });
    it('Should call console.log with elements from collection', function () {
        console.log = jest.fn();
        arr.print();
        expect(console.log).toBeCalledTimes(4);
        expect(console.log).toHaveBeenCalledWith(1);
        expect(console.log).toHaveBeenCalledWith(2);
        expect(console.log).toHaveBeenCalledWith(3);
        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).not.toHaveBeenCalledWith();
    });
});