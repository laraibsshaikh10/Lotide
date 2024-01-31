
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

//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentenceString) {
  // resulting object provides an array with indices for each letter
  const position = {};
  for (let i = 0; i < sentenceString.length; i++) {
    //to avoid blank spaces within the sentence
    if (sentenceString[i] !== " ") {
      //if the letter already exists, push the index into the same array
      if (position[sentenceString[i]]) {
        position[sentenceString[i]].push(i);
        //otherwise create a new array for that letter
      } else {
        position[sentenceString[i]] = [i];
      }
    }
  }
  return position;
};

console.log(letterPositions("hello"));

//letterPositions("hello").letter to access the letter from the object
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);


