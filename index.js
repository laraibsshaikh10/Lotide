// to import all functions into one file
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require("./countLetters");
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

//to import other functions present in the three files
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqObjects = require("./eqObjects");
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');




module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects: eqObjects,
  flatten: flatten,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without

};