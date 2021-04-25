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

module.exports = LList;