// FUNCTION IMPLEMENTATION
// const _ = require('lodash');
  const head = function(array){
    if (array.length !== 0) {
      return array[0];
     } //else { not need to add this as this will automatically happen
    //   return undefined;
    // }
  };



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");