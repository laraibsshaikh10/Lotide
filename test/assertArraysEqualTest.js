
const assertArraysEqual = require("../assertArraysEqual");

// Test case:\
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// assertArraysEqual(eqArrays(array1, array2), true);

// A positive test case
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // Should print a message that the arrays are equal

// A negative test case
assertArraysEqual([1, 2, 3, 4], [4, 3, 2, 1]); // Should print a message that the arrays are not equal

// Another negative test case (different lengths)
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Should print a message that the arrays are not equal

// An edge case (nested arrays)
assertArraysEqual([[1], [2], [3]], [[1], [2], [3]]); // Should print a message based on how your eqArrays handles nested arrays

// Another edge case (empty arrays)
assertArraysEqual([], []); // Should print a message that the arrays are equal