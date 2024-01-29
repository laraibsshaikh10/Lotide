

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




const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: Arrays equal - ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: Arrays not equal - ${array1} !== ${array2}`);
  }
};

//Implement middle which will take in an array and return the middle-most element(s) of the given array.


const middle = function(array) {
  let middleArray = [];
  //to calculate the middle index and then rounding it down if its an odd number
  const middleIndex = Math.floor(array.length / 2); 
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    // for odd length, it will push in the middle index only
    middleArray.push(array[middleIndex]);
  } else {
    //for length that is an even number, it pushes the two middle numbers
    middleArray.push(array[middleIndex -1], array[middleIndex]);
  }

  return middleArray;
};



//TEST CODE:
//logs the outcome of middle function 
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//logs the results of assertArraysEqual function
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
