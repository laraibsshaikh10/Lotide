
// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(array1, array2) {
  //check if both arrays have the same length
  if (array1.length !== array2.length) {
    //checks if both arrays have the same elements
    return false;
  }
  //to iterate through each element in the arrays
  for (let i = 0; i < array1.length; i++) {
    //return false if elements are not equal at the same index in each array
    if (array1[i] !== array2[i]) {
      return false;

    }
  }

  //return true if both arrays are equal
  return true;
};
    


module.exports = eqArrays;
