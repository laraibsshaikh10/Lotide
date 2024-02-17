
const assert = require('chai').assert;
const tail = require("../tail");


describe("#tail", () => {
  //test an array of numbers
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  //to test an array of strings
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  //tests an array with a single element
  it('returns [] for ["Lighthouse"]', () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
  
   //tests an empty array
   it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});

// // Test Case: Check the original array and if it remains the unchanged
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// //Test Case: Array containing a single element
// //a single array should not have a tail
// const oneWord = tail(["Lighthouse"]);
// assertEqual(oneWord.length, 0); //tail should return a zero as there's no tail for a single element array
// assertEqual(oneWord[0], undefined);

// // Test Case: Empty array
// const emptyArray = tail([]);
// assertEqual(emptyArray.length, 0);//should have a length of zero
// assertEqual(emptyArray[0], undefined);

// //Test case: An array of multiple elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse");  //ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); //ensure second element is "Labs"