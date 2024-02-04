//Implement without which will return a subset of a given array, removing unwanted elements.

const without = function(sourceArray, itemsToRemoveArray) {
  const newArray = [];
  for (let element of sourceArray) {
    if (!itemsToRemoveArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};


// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: Arrays equal - ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: Arrays not equal - ${array1} !== ${array2}`);
  }
};


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


const words = ["hello", "world", "lighthouse"];
const modifiedArray = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//check the modified array was modified as expected
assertArraysEqual(modifiedArray, ["hello", "world"]);