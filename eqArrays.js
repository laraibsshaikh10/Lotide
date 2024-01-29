
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(array1, array2) {
  //check if both arrays have the same length
  if (array1.length !== array2.length) {
    //checks if both arrays have the same elements
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {

      return false;

    }
  }
  return true;
};
    
    
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test case:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
<<<<<<< HEAD
assertEqual(eqArrays([5, 6, 7], [5, 5, 7]), false); // should fail
=======
assertEqual(eqArrays([5, 6, 7], [5, 5, 7]), false); // should pass
>>>>>>> cae3c184179aa5849259d86a753a129de36ae12d
