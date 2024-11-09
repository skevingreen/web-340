"use strict";

//Measurements taken from https://www.jpl.nasa.gov/_edu/pdfs/scaless_reference.pdf

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

//The distance between Mercury and Venus should be |0.39 - 0.72| = 0.33
function testMercuryToVenus() {
  try {
    assert.strictEqual(calculateDistance('Mercury', 'Venus'), 0.33);
    console.log("Passed testMercuryToVenus");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToVenus: ${error.message}`);
    return false;
  }
}

//The distance between Venus and Earth should be |0.72 - 1| = 0.28
function testVenusToEarth() {
  try {
    assert.strictEqual(calculateDistance('Venus', 'Earth'), 0.28);
    console.log("Passed testVenusToEarth");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToEarth: ${error.message}`);
    return false;
  }
}

// The distance between Mars and Jupiter should be |1.52 - 5.2| = 3.68
function testMarsToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Mars', 'Jupiter'), 3.68);
    console.log("Passed testMarsToJupiter");
    return true;
  } catch (error) {
    console.error(`Failed testMarsToJupiter: ${error.message}`);
    return false;
  }
}

// Main function to call all the test functions
function main() {
  testMercuryToVenus();
  testVenusToEarth();
  testMarsToJupiter();
}

// Call your test functions here
main ();