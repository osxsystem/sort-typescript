import {CharactorsCollection} from "./bubble/CharactorsCollection";
import {NumbersCollection} from "./bubble/NumbersCollection";
import {Sorter} from "./bubble/Sorter";

const numbers = new NumbersCollection([8, 2, 3, 0, 9, 10, 1]);
const sorter = new Sorter(numbers);

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


