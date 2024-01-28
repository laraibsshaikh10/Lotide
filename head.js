// FUNCTION IMPLEMENTATION
// const _ = require('lodash');
  const head = function(array){
    if (array.length !== 0) {
      console.log (array[0]);
    } else {
      console.log (undefined);
    }
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