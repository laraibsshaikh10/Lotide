
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


// //It will take in two parameters as well:

// - The array to work with
// - The callback (which Lodash calls "predicate")

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

// Instruction
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  // let modifiedArray be the new array
  const modifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    //using callback to go over each item in the array to see if its false and return it until callback returns true
    if (!callback(array[i])) {
      modifiedArray.push(array[i]);
    } else { //once callback returns true, the function exits
      break;
    }
  }
  return modifiedArray;
};


//Test Cases:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
