// var AList = require("./AList");
// var LList = require("./LList");
var BStree = require("./BST");

// describe("AList check init capacity", function () {
//     test("init_empty", function () {
//         var list = new AList();
//         expect(list.array.length).toBe(list.DEFAULT_CAPACITY);
//     });
//     test("init_capacity", function () {
//         var CAPACITY = 30;
//         var list  = new AList(CAPACITY);
//         expect(list.array.length).toBe(CAPACITY);
//     });
//     test("init_array", function () {
//         var ARRAY = [1, -2, 3, 15, -60, 90];
//         var list = new AList(ARRAY);
//         expect(list.array).toEqual(ARRAY);
//         expect(list.getSize()).toBe(ARRAY.length);
//         expect(list.array.length).toBe(ARRAY.length);
//     });
// });

// describe("AList add values", function () {
//     test("add first", function () {
//         var list = new LList();
//         console.log("size = ", list.getSize());
//         list.add(10);
//         console.log("size = ", list.getSize());
//         console.log(list.array);
//         // var expected = [10, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
//         expect(list.array).toEqual(expected);
//         expect(list.getSize()).toBe(1);
//     });
//
//     test("add ensure capacity", function () {
//         var list = new AList();
//         for (var i = 0; i < 10; i++) {
//             list.add(i);
//         }
//         list.add(50);
//         console.log(list.array);
//         console.log(list.array.length);
//     });
// });

// describe("AList set values", function () {
//     test("set first", function () {
//         var list = new AList();
//         list.add(10);
//         list.add(5);
//         list.add(3);
//         list.set(50, 5);
//         list.add(-100);
//         list.add(150);
//         list.add(250);
//         console.log(address);
//     });
// });

// describe("LList add values", function () {
//     test("add first", function () {
//         var list = new LList();
//         list.add(10);
//         list.add(20);
//         list.add(-30);
//         var expected = [10, 20, -30];
//         expect(list.toArray()).toEqual(expected);
//         expect(list.getSize()).toBe(expected.length);
//     });
// });
//
// describe("LList remove", function () {
//     test("remove from middle", function () {
//         var list = new LList();
//         list.add(10);
//         list.add(20);
//         list.add(-30);
//         list.add(50);
//         list.add(200);
//         var expectedValue = 10;
//         var expectedArray = [20, -30, 50, 200];
//         expect(list.remove(10)).toBe(expectedValue);
//         expect(list.toArray()).toEqual(expectedArray);
//         expect(list.getSize()).toBe(expectedArray.length);
//     });
// });
//
describe("BStree insert", function () {
    test("insert", function () {
        var tree = new BStree();
        tree.init([25,35,66,-60,-105,5,15,75,34]);
        var str = "root -> ";
        tree.print("in", (value) => {
            str += value + " --> ";
        });
        console.log(str);
        // tree.insert(200);
        // var expectedValue = 10;
        // var expectedArray = [20, -30, 50, 200];
        // expect(list.remove(10)).toBe(expectedValue);
        // expect(list.toArray()).toEqual(expectedArray);
        // expect(list.getSize()).toBe(expectedArray.length);
    });
});