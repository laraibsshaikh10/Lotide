//import functions
const middle = require("../middle");
const assert = require('chai').assert;


//TEST CODE:
// //logs the outcome of middle function 
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// //logs the results of assertArraysEqual function
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])


describe("#middle", () => {
  //odd numbered length of array
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  //even numbered length of array
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  //single element array
  it("returns [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });

  //empty array
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });



});