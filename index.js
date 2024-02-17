// to import all functions into one file
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');


//to import other functions present in the three files
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays
};