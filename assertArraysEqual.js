

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

//Instruction
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: Arrays equal - ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: Arrays not equal - ${array1} !== ${array2}`);
  }
};


// Test case:\
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// assertArraysEqual(eqArrays(array1, array2), true);

// A positive test case
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should print a message that the arrays are equal

// A negative test case
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should print a message that the arrays are not equal

// Another negative test case (different lengths)
assertArraysEqual([1, 2], [1, 2, 3]); // Should print a message that the arrays are not equal

// An edge case (nested arrays)
assertArraysEqual([[1], [2]], [[1], [2]]); // Should print a message based on how your eqArrays handles nested arrays

// Another edge case (empty arrays)
assertArraysEqual([], []); // Should print a message that the arrays are equal