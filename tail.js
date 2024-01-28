
//array will be sliced at index 1 to get the tail 
const tail = function(array){
  if (array.length !== 0) {
    return array.slice(1);
  } 
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};



// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the original array 
const emptyArray = [];
tail(emptyArray); // no need to capture the return value since we are not checking it
assertEqual(emptyArray.length, 3); // original array should still have 3 elements!

//Test case
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse");  //ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); //ensure second element is "Labs"
