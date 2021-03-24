"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./bubble/NumbersCollection");
var Sorter_1 = require("./bubble/Sorter");
var numbers = new NumbersCollection_1.NumbersCollection([99, 2, 3, 0, 9, 10, 1]);
var sorter = new Sorter_1.Sorter(numbers);
// sorter.sort();
sorter.sort();
console.log(numbers.data);
// Sort string
// const charracters = new CharactorsCollection('XjjGHBCA');
// const sorter = new Sorter(charracters);
// sorter.sort();
// console.log(charracters);
// version 2.0
// const numbers = new NumbersCollection([50, 3, 60, 12, 1, 9, 7]);
// numbers.sort();
// console.log(numbers.data);
