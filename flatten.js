
//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(nestedArray) {
  //mergedArray is where all the values are stored
  const mergedArray = [];
  // loop through all the values of the nestedArray
  for (let i = 0; i < nestedArray.length; i++) {
    // use Array.isArray to check whether each index within the nested array is an array or not
    if (Array.isArray(nestedArray[i])) {
      // if its an array within the array, use the recursive call to flatten the array within the array and then pushes those elements into the merged array
      // mergedArray.push(...flatten(nestedArray[i]));

      //to flatten and spread only one level of nesting as per the program requirement
      mergedArray.push(...nestedArray[i]);

      // if the index is not an array, it simply just pushes that index into the merged array
    } else {
      mergedArray.push(nestedArray[i]);
    }
  }
  
  return mergedArray;
};


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

//TEST CASE:
assertArraysEqual([1, 2], [1, 2]);
//uses the assertArrayEqual function to check if its the same or not
flatten([1, 2, 3, [4, 5], 6, [7]]);
assertArraysEqual(flatten([1, 2, 3, [4, 5], 6, [7]]), [1, 2, 3, 4, 5, 6, 7]);