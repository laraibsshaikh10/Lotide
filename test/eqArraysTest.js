const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


// Test case:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([5, 6, 7], [5, 5, 7]), false); // should fail