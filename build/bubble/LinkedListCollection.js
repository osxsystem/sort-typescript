"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedListCollection = /** @class */ (function () {
    function LinkedListCollection() {
        this.head = null;
    }
    LinkedListCollection.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bound');
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bound');
    };
    LinkedListCollection.prototype.compare = function (left, right) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        return this.at(left).data > this.at(right).data;
    };
    LinkedListCollection.prototype.swap = function (left, right) {
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedListCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedListCollection;
}());
exports.LinkedListCollection = LinkedListCollection;
