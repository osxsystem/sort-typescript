"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./bubble/NumbersCollection");
// const numbers = new NumbersCollection([99, 2, 3, 0, 9, 10, 1]);
// const sorter = new Sorter(numbers);
// ----------- version 1.0
// sorter.sort();
// console.log(numbers.data);
// linked list
// const linkedList = new LinkedListCollection();
// linkedList.add(10);
// linkedList.add(-5);
// linkedList.add(3);
// linkedList.add(-10);
// const sort = new Sorter(linkedList);
// sort.sort();
// linkedList.print();
// Sort string
// const charracters = new CharactorsCollection('XjjGHBCA');
// const sorter = new Sorter(charracters);
// sorter.sort();
// console.log(charracters);
// ------------- version 2.0
var numbers = new NumbersCollection_1.NumbersCollection([50, 3, 60, 12, 1, 9, 7]);
numbers.sort();
console.log(numbers.data);
