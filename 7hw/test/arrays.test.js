var {smallestElement, largestElement, smallestIndex, largestIndex, oddIndex, arrRevers, oddNumbers, halfRevers, bubbleSort, selectSort, insertSort} = require('./arrays');

// 1 task \\

describe('smallestElement', function () {
    it('Should be defind', function () {
        expect(smallestElement).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof smallestElement).toBe('function');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(smallestElement([12, 3, 56, -1])).toBe(-1);
    });
    it('Shouldn`t work only with empty array', function () {
        expect(smallestElement([-12, 3, 56, 41])).toBe(-12);
    });
    it('Should work only with arguments', function () {
        expect(smallestElement()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(smallestElement(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(smallestElement([])).toBe('error');
    });
});

// 2 task\\ 

describe('largestElement', function () {
    it('Should be defind', function () {
        expect(largestElement).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof largestElement).toBe('function');
    });
     it('Should work with correct array', function () {
        expect(largestElement([12, 3, 56, -1])).toBe(56);
    });
    it('Should work with correct array', function () {
        expect(largestElement([-12, 3, -56, -41])).toBe(3);
    });
    it('Should work only with arguments', function () {
        expect(largestElement()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(largestElement(321)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(largestElement([])).toBe('error');
    });
});

// 3 task \\

describe('smallestIndex', function () {
    it('Should be defind', function () {
        expect(smallestIndex).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof smallestIndex).toBe('function');
    });
    it('Should work with correct array', function () {
        expect(smallestIndex([12, 3, 56, -1])).toBe(3);
    });
    it('Should work with correct array', function () {
        expect(smallestIndex([-12, 3, -56, -41])).toBe(2);
    });
    it('Should work only with arguments', function () {
        expect(smallestIndex()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(smallestIndex(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(smallestIndex([])).toBe('error');
    });
});

// 4 task \\

describe('largestIndex', function () {
    it('Should be defind', function () {
        expect(largestIndex).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof largestIndex).toBe('function');
    });
    it('Should work with correct array', function () {
        expect(largestIndex([12, 3, 56, -1])).toBe(2);
    });
    it('Should work with correct array', function () {
        expect(largestIndex([-12, 3, -56, -41])).toBe(1);
    });
    it('Should work', function () {
         expect(largestIndex([-12, 3, -56, -41])).not.toBe(2);
    });
    it('Shouldn`t work', function () {
         expect(largestIndex([12, 3, 56, -1])).not.toBe(3);
    });
    it('Should work only with arguments', function () {
        expect(largestIndex()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(largestIndex(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(largestIndex([])).toBe('error');
    });
});

// 5 task \\

describe('oddIndex', function () {
    it('Should be defind', function () {
        expect(oddIndex).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof oddIndex).toBe('function');
    });
    it('Should work with correct array', function () {
        expect(oddIndex([4, 10, 3, 10, 5, 10, 7,])).toBe(30);
    });
    it('Should work with correct array', function () {
        expect(oddIndex([4, 1, 3, 2, 5, 3, 7,])).toBe(6);
    });
    it('Should`t if you want to get sum of even index elements', function () {
        expect(oddIndex([4, 1, 3, 2, 5, 3, 7,])).not.toBe(19);
    });
    it('Should work only with arguments', function () {
        expect(oddIndex()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(oddIndex(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(oddIndex([])).toBe('error');
    });
});

// 6 task \\

describe('arrRevers', function () {
    it('Should be defind', function () {
        expect(arrRevers).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof arrRevers).toBe('function');
    });
    it('Should revers with correct array', function () {
        expect(arrRevers([1])).toStrictEqual([1]);
    });
    it('Should revers with correct array', function () {
        expect(arrRevers([1, 2, 3, 4, 5, 6,])).toStrictEqual([6, 5, 4, 3, 2, 1]);
    });
    it('Should revers with correct array', function () {
        expect(arrRevers([6, 5, 4, 3, 2, 1,])).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
    it('Should work only with arguments', function () {
        expect(arrRevers()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(arrRevers(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(arrRevers([])).toBe('error');
    });
});

// 7 task \\

describe('oddNumbers', function () {
    it('Should be defind', function () {
        expect(oddNumbers).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof oddNumbers).toBe('function');
    });
    it('Should count all odd numbers', function () {
        expect(oddNumbers([1, 2, 3, 4, 5, 6, 7, 7,])).toBe('5 odd numbers');
    });
    it('Should count all odd numbers', function () {
        expect(oddNumbers([1, 2, 3, 4, 5, 6, 7,])).toBe('4 odd numbers');
    });
    it('Should`t count even numbers', function () {
        expect(oddNumbers([1, 2, 3, 4, 5, 6, 7, 7,])).not.toBe('3 odd numbers');
    });
    it('Should work only with arguments', function () {
        expect(oddNumbers()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(oddNumbers(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(oddNumbers([])).toBe('error');
    });
});

// 8 task \\

describe('halfRevers', function () {
    it('Should be defind', function () {
        expect(halfRevers).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof halfRevers).toBe('function');
    });
    it('Should revers half of all array', function () {
        expect(halfRevers([1, 2, 3, 4, 5, 6, 7, 8,])).toStrictEqual([5, 6, 7, 8, 1, 2, 3, 4]);
    });
    it('Should rever half of array even if arr.length % !== 0', function () {
        expect(halfRevers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([6, 7, 8, 9, 1, 2, 3, 4, 5]);
    });
    it('Should`t revers quarter of array', function () {
        expect(halfRevers([1, 2, 3, 4, 5, 6, 7, 8,])).not.toStrictEqual([3, 4, 5, 6, 7, 8, 1, 2,]);
    });
    it('Should work only with arguments', function () {
        expect(halfRevers()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(halfRevers(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(halfRevers([])).toBe('error');
    });
});

// 9 task \\

describe('bubbleSort', function () {
    it('Should be defind', function () {
        expect(bubbleSort).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof bubbleSort).toBe('function');
    });
    it('Should sort all array', function () {
        expect(bubbleSort([10, 2, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 10, 12, 22]);
    });
    it('Should sort all array even if numbers got a clone', function () {
        expect(bubbleSort([2, 8, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 8, 12, 22]);
    });
    it('Should`t revers quarter of array', function () {
        expect(bubbleSort([2, 8, 5, 22, 8, 7, 12,])).not.toStrictEqual([22, 12, 7, 6, 7, 8, 1, 2,]);
    });
    it('Should work only with arguments', function () {
        expect(bubbleSort()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(bubbleSort(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(bubbleSort([])).toBe('error');
    });
});

describe('selectSort', function () {
    it('Should be defind', function () {
        expect(selectSort).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof selectSort).toBe('function');
    });
    it('Should sort all array', function () {
        expect(selectSort([10, 2, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 10, 12, 22]);
    });
    it('Should sort all array even if numbers got a clone', function () {
        expect(selectSort([2, 8, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 8, 12, 22]);
    });
    it('Should`t sort array in revers', function () {
        expect(selectSort([2, 8, 5, 22, 8, 7, 12,])).not.toStrictEqual([22, 12, 8, 8, 7, 5, 2,]);
    });
    it('Should work only with arguments', function () {
        expect(selectSort()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(selectSort(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(selectSort([])).toBe('error');
    });
});

describe('insertSort', function () {
    it('Should be defind', function () {
        expect(insertSort).toBeDefined();
    });
    it('Should be function', function () {
        expect(typeof insertSort).toBe('function');
    });
    it('Should sort all array', function () {
        expect(insertSort([10, 2, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 10, 12, 22]);
    });
    it('Should sort all array even if numbers got a clone', function () {
        expect(insertSort([2, 8, 5, 22, 8, 7, 12,])).toStrictEqual([2, 5, 7, 8, 8, 12, 22]);
    });
    it('Should`t sort array in revers', function () {
        expect(insertSort([2, 8, 5, 22, 8, 7, 12,])).not.toStrictEqual([22, 12, 8, 8, 7, 5, 2,]);
    });
    it('Should work only with arguments', function () {
        expect(insertSort()).toBe('error');
    });
    it('Should work only with array', function () {
        expect(insertSort(123)).toBe('error');
    });
    it('Shouldn`t work only with empty array', function () {
        expect(insertSort([])).toBe('error');
    });
});
