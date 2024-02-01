
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //to create arrays of the keys and values of both objects
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  
  //check if both key arrays have the same length
  if (key1.length !== key2.length) {
    //checks if both keys arrays have the same elements
    return false;
  }
  // to check if both objects have the same keys
  for (const key of key1) {
    //if key in object1 isnt present in object2
    if (!(key in object2)) {
      return false;
    }
    //values of each object assigned to its corresponding keys
    const value1 = object1[key];
    const value2 = object2[key];
      
    //To check if the values corresponding to respective keys arent the same
    //to check if values are array
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // if the eqArrays function returns false
      if (!eqArrays(value1, value2)) {
        return false;
      }
    // if the values are not arrays and are not the same
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  
  // To show the actual object in the console, use the util library's inspect function
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: Objects equal - ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: Objects not equal - ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CASES:


assertObjectsEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
assertObjectsEqual({a: 1, b: ["Hello", "World"], c: [5, 6, 7]}, {a: 1, b: ["Hello", "World"], c: [5, 6, 7]});
assertObjectsEqual({Name: "Harry Potter", Age: 24, School: "LighthouseLabs"}, {Name: "Harry Potter", Age: 24, School: "Lighthouse Labs"});

