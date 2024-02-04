

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

// Our map function will take in two arguments:

// - An array to map
// - A callback function
// The map function will return a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  //
  const results = [];
  for (let string of array) {
    results.push(callback(string));
  }
  return results;
};



const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
