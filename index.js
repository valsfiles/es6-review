// index.js

import { Calculator, getData, doubleNumbers } from './tools.js';

const calc = new Calculator();
console.log("5 + 3 =", calc.add(5, 3));

getData().then(console.log);

const nums = [1, 2, 3];
console.log("Doubled:", doubleNumbers(nums));
