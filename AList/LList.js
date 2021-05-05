var IList = require("./IList");

var LList = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.next = null;
    }
};
LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
    this.size = 0;
    this.root = null;
};

LList.prototype.getSize = function () {
    return this.size;
};

LList.prototype.add = function (value) {
    var newNode = new this.Node(value);
    this.size++;
    if (this.root === null) {
        // newNode.next = this.root;
        this.root = newNode;
    } else {
        var tempNode = this.root;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }
};

LList.prototype.set = function (value, index) {
    if (this.size < index || index < 0 || this.root === null) {
        return 'Error'
    } 
    var counter = 0;
    var tempNode = this.root;
    while (counter !== index) {
      tempNode = tempNode.next;
      counter++;
    }
    tempNode.value = value;
    return tempNode;
}

LList.prototype.get = function (value) {
    if (value === undefined) {
        return 'Error: Cannot work without argument value!'
    }
    var tempNode = this.root;
    while (tempNode.value !== value) {
        if (tempNode.next === null) {
            return 'Error: Argument value is not found!'
        }
        tempNode = tempNode.next 
    }
    return tempNode;
}

LList.prototype.toString = function () {
    if (this.root === null){
        return 'Error: Empty collection!'
    }
    counter = 0;
    output = '';
    tempNode = this.root;
    while (tempNode !== null){
        output += tempNode.value
        tempNode = tempNode.next;
    }
    return output;
}

LList.prototype.remove = function (value) {
    if (this.root === null) {
        return;
    }
    var tempNode = this.root;
    if (tempNode.value === value) {
        var removeValue = tempNode.value;
        this.root = tempNode.next;
        this.size--;
        return removeValue;
    }
    while (tempNode.next !== null) {
        if (tempNode.next.value === value) {
            var removedNode = tempNode.next;
            tempNode.next = tempNode.next.next;
            this.size--;
            return removedNode.value;
        } else {
            tempNode = tempNode.next;
        }
    }
};

LList.prototype.toArray = function () {
    var array = new Array(this.size);
    var index = 0;
    var tempNode = this.root;
    while (tempNode !== null) {
        array[index++] = tempNode.value;
        tempNode = tempNode.next;
    }
    return array;
};

LList.prototype.contains = function (value) {
    if (this.root === null) {
        return 'Error: Empty collection!'
    }
    var tempNode = this.root;
    while (tempNode.value !== value) {
        if (tempNode.next === null) {
            return false
        }
        tempNode = tempNode.next 
    }
    return true;
}

LList.prototype.minValue = function () {
    if (this.root === null) {
        return 'Error: Empty collection!'
    }
    var tempNode = this.root;
    var minResult = tempNode.value;
    while (tempNode !== null) {
        tempNode.value < minResult ? minResult = tempNode.value : minResult;
        tempNode = tempNode.next;
    }
    return minResult;
}

LList.prototype.maxValue = function () {
    if (this.root === null) {
        return 'Error: Empty collection!'
    }
    var tempNode = this.root;
    var maxResult = tempNode.value;
    while (tempNode !== null) {
        tempNode.value > maxResult ? maxResult = tempNode.value : maxResult;
        tempNode = tempNode.next;
    }
    return maxResult;
}

LList.prototype.minIndex = function () {
    if (this.root === null) {
        return 'Error: Empty collection!'
    }
    indexCounter = 0;
    result = 0;
    var tempNode = this.root;
    var minResult = tempNode.value;
    while (tempNode !== null) {
        if (tempNode.value < minResult){
            minResult = tempNode.value;
            result = indexCounter;
        }
        indexCounter++;
        tempNode = tempNode.next;
    }
    return result;
}

LList.prototype.maxIndex = function () {
    if (this.root === null) {
        return 'Error: Empty collection!'
    }
    indexCounter = 0;
    result = 0;
    var tempNode = this.root;
    var maxResult = tempNode.value;
    while (tempNode !== null) {
        if (tempNode.value > maxResult){
            maxResult = tempNode.value;
            result = indexCounter;
        }
        indexCounter++;
        tempNode = tempNode.next;
    }
    return result;
}

LList.prototype.reverse = function () {
    tempNode = this.root;
    next = null;
    prev = null;
    while (tempNode !== null) {     // { value: 1, next: { value: 2, next: { value: 3, next: {value: 4, next: null} } } }
        next = tempNode.next;       // next === { value: 2, next: { value: 3, next: {value: 4, next: null} } } 
        tempNode.next = prev;       // tempNode.next === {value: 1, next: null}
        prev = tempNode;            // prev === {value: 1, next: null}
        tempNode = next;            // tempNode === { value: 2, next: { value: 3, next: {value: 4, next: null} } }
    }
    return prev;
}

LList.prototype.halfReverse = function () {
    var arr = this.toArray();
    tempNode = this.root;
    half = Math.floor(arr.length/2);
    for (var i = 0; i < arr.length; i++) {
        if (i < half) {
            tempNode.value = (arr[i + half])
        } else {
            tempNode.value = (arr[i - half])
        }
        tempNode = tempNode.next;
    }
    return this.root;
}

LList.prototype.retainAll = function (array) {
}

LList.prototype.removeAll = function (array) {

}

LList.prototype.sort = function () {

}

LList.prototype.print = function () {
    var string = '';
    var tempNode = this.root;
    while (tempNode !== null) {
      string += tempNode.value;
      tempNode = tempNode.next;
    }
    string += 'empty';
    return string
};

var trash = new LList()
trash.add(1)
trash.add(2)
trash.add(3)
trash.add(4)
trash.add(5)
trash.add(6)
console.log(trash.retainAll([2, 4, 6]));

module.exports = LList;