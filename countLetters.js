

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(stringOfLetters) {
  //The result is a letterCount Object, where key is the letter and its value would be the number of times it was repeated
  const letterCount = {};
  for (const letter of stringOfLetters) {
    // to avoid counting empty spaces within a sentence
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};


//Test Case:
//shows the actual resulting object without spaces
console.log(countLetters("lighthouse in the house"));

//to use the assertEqual function
const string = "lighthouse in the house";

const result = countLetters(string, { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });

assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);

