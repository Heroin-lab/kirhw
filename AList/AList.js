var IList = require("./IList");

var AList = function (capacity) {
    IList.call(this, capacity);
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if (!this.capacity) {
            return new Array(this.DEFAULT_CAPACITY);
        } else if (typeof this.capacity === "number") {
            return new Array(this.capacity);
        } else if (Array.isArray(this.capacity)) {
            this.array = this.capacity;
            this.size = this.capacity.length;
            this.capacity = this.capacity.length;
            return this.array;
        } else {
            throw new Error("Exception message");
        }
    })();

    this.clear = function () {
        this.array = new Array(this.DEFAULT_CAPACITY);
        this.capacity = 0;
        this.size = 0;
    };

    this.reverse = function () {
        newArray = new Array (this.capacity);
        for (var i = 0; i < this.array.length; i++){
            newArray[i] = this.array[this.array.length - 1 - i]
        };
        this.array = newArray;
    };

    this.halfReverse = function () {
        newArray = new Array (this.capacity);
        halfLength = Math.floor(this.array.length/2)
        for (var i = 0; i < this.array.length; i++){
            if (i < halfLength) {
                newArray[i] = this.array[i + halfLength]
            } else {
                newArray[i] = this.array[i - halfLength]
            }
        };
        this.array = newArray;
    };

    this.ensureCapacity = function() {
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.capacity = newArray.length;
        this.array = newArray;
    };

    this.addValue = function(value) {
        this.array[this.offset++] = value;
        this.size++;
    };
};
AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.getSize = function() {
    return this.size;
};
AList.prototype.add = function(value) {
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};
AList.prototype.set = function(value, index) { //
    if (index < 0 || index > this.array.length - 1) {
        throw new Error("ArrayIndexOutBoundsException");
    }
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
};
AList.prototype.get = function (index) {
    return this.array[index];
};
AList.prototype.remove = function (value) {
    var newArray = new Array (this.capacity);
    var flag = 0;
    var toReturn = 0;
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] !== value && this.array[i] !== undefined) {
            newArray[i - flag] = this.array[i];
        } else if (typeof this.array[i] === 'number') {
            toReturn = this.array[i];
            flag += 1;
        };
    };
    this.array = newArray;
    return toReturn;
};
AList.prototype.toArray = function () {
    return this.array;
};
AList.prototype.toString = function () {
    return this.array.toString();
};
AList.prototype.contains = function (value) {
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] === value){
            return true;
        }
    };
    return false;
};
AList.prototype.minValue = function () {
    temp = this.array[0];
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] < temp) {
            temp = this.array[i];
        }
    };
    return temp;
};
AList.prototype.maxValue = function () {
    temp = this.array[0];
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] > temp) {
            temp = this.array[i];
        }
    };
    return temp;
};
AList.prototype.minIndex = function () {
    temp = this.array[0];
    index = 0;
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] < temp) {
            temp = this.array[i];
            index = i;
        }
    };
    return index;
};
AList.prototype.maxIndex = function () {
    temp = this.array[0];
    index = 0;
    for (var i = 0; i < this.array.length; i++){
        if (this.array[i] > temp) {
            temp = this.array[i];
            index = i;
        }
    };
    return index;
};
AList.prototype.retainAll = function (array) {
    size = this.size;
    oldArray = this.array;
    this.array = new Array (this.capacity);
    for (var i = 0; i < array.length; i++){
        for (var k = 0; k < oldArray.length; k++){
            if (array[i] === oldArray[k]){
                this.addValue(oldArray[k]);
            };
        };
    };
    this.size = size;
};
AList.prototype.removeAll = function (array) {
    flag = false;
    size = this.size;
    oldArray = this.array;
    this.array = new Array (this.capacity);
    for (var i = 0; i < oldArray.length; i++){
        for (var k = 0; k < array.length; k++){
            if (oldArray[i] === array[k]){
                flag = true;
                break;
            };
        };
        flag === false ? this.addValue(oldArray[i]) : flag = false;
    };
    this.size = size;
};
AList.prototype.sort = function () {
    
};
AList.prototype.print = function () {
    for (var i = 0; i < this.array.length; i++){
        console.log(this.array[i]);
    }
};

var list = new AList([1, 1, 3, 3, 5, 6, 7, 8]);
var newList = new AList(20);

// list.halfReverse();
console.log(list);

module.exports = AList;