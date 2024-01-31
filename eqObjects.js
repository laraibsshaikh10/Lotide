
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
//to create arrays of the keys and values of both objects
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  //check if both key arrays have the same length
  if (key1.length !== key2.length) {
    //checks if both keys arrays have the same elements
    return false;
  }
  // to check if both objects have the same keys
  for (const key of key1) {
    //if key in object1 isnt present in object2
    if (!(key in object2)) {
      return false;
    }
    //values of each object assigned to its corresponding keys
    const value1 = object1[key];
    const value2 = object2[key];
    //if values corresponding to respective keys arent the same
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


//Test Cases:
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), undefined); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), undefined); // => false

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };


eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

console.log(eqObjects(shirtObject, anotherShirtObject));
console.log(eqObjects(shirtObject, longSleeveShirtObject));