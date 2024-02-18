# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @laraibsshaikh10/lotide`

**Require it:**

`const _ = require('@laraibsshaikh10/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Checks if two arrays are the same and returns assertion pass/failure messages
* `assertEqual(actual, expected)`: Compares the actual result with the expected result and returns assertion pass/failure messages 
* `assertObjectsEqual(actual, expected)`: Takes in two objects and compare their actual and expected results and displays an assertion pass/fail message
* `countLetters(stringOfLetters)`: Takes in a string and counts how many times each letter was repeated in the string
* `countOnly(allItems, itemsToCount)`: Takes in an array of items and an object of what items to count
* `eqArrays(array1, array2)`: Takes in two arrays and checks if both are equal
* `eqObjects(object1, object2)`: Takes in two objects and checks both are the same
* `findKey(object, callback)`: Takes in an object and a callback and returns the specified key from the object
* `findKeyByValue(object, value)`: Takes in an object and checks if the given value matches any of the values of the keys present in the object and returns the key
* `flatten(nestedArray)`: Takes in an array that has nested arrays within and flattens it into one array of all elements
* `head(array)`: Takes in an array and returns the value at index[0]
* `letterPositions(string)`: Takes in a string and returns the indexes of where each letter is present
* `map(array, callback)`: Takes in an array and results a modified version based on the callback
* `middle(array)`: Takes in an array and displays the middle elements in an array
* `tail(array)`: Takes in an array and displays the array from index[1] onwards
* `takeUntil(array, callback)`: Takes in an array and displays a section of that array based on the callback function
* `without(sourceArray, itemsToRemove)`: Takes in the soure array and removes items from it and displays the result


