//import relevant functions
const assertArraysEqual = require("./assertArraysEqual");

const eqArrays = require("./eqArrays");
 

//Implement middle which will take in an array and return the middle-most element(s) of the given array.


const middle = function(array) {
  let middleArray = [];
  //to calculate the middle index and then rounding it down if its an odd number
  const middleIndex = Math.floor(array.length / 2); 
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    // for odd length, it will push in the middle index only
    middleArray.push(array[middleIndex]);
  } else {
    //for length that is an even number, it pushes the two middle numbers
    middleArray.push(array[middleIndex -1], array[middleIndex]);
  }

  return middleArray;
};

module.exports = middle;
