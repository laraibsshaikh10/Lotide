//import functions
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


//TEST CODE:
//logs the outcome of middle function 
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//logs the results of assertArraysEqual function
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])