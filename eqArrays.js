
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(array1, array2) {
  //check if both arrays have the same length
  if (array1.length === array2.length) {
    //checks if both arrays have the same elements
    for (let i = 0; i < array1.length; i++) {
      array1[i] === array2[i];
     }
    return true;
  } else {
    return false;
  }
}

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
assertEqual(eqArrays([1, 5, 7], [1, 2, 3]), true); // should fail
assertEqual(eqArrays(['Hello', 'World'], [1, 2, 3]), true); //should fail