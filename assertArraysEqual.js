

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${array1} !== ${array2}`);
  }
}


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

// Test case:\
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
assertArraysEqual(eqArrays(array1, array2), true);