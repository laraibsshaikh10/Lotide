
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
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
    
    //To check if the values corresponding to respective keys arent the same
    //to check if values are array
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // if the eqArrays function returns false
      if (!eqArrays(value1, value2)) {
        return false;
      }
    // if the values are not arrays and are not the same
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};


//Test Cases:

//non-array values in the object
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };


eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

//to check values as arrays
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);


//logging the actual equalobjects functions results
console.log(eqObjects(shirtObject, anotherShirtObject));
console.log(eqObjects(shirtObject, longSleeveShirtObject));
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
