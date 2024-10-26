/**
 * Author: Scott Green
 * Date: October 26, 2024
 * File Name: weight-converter.js
 * Description: Converts pounds to kilograms
 */

"use strict";

// Converts pounds to kilograms
function main() {
  // Display an error message and exit program if the required command line argument is not provided (or if there is more than one command line argument provided)
  if (process.argv.length != 3) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  }

  // Display an error message and exit program if the provided command line argument is not a number
  if (isNaN(process.argv[2])) {
    console.error("Input must be a number.");
    process.exit(1);
  }

  // Display the conversion of pounds to kilograms to two decimal places
  console.log( (parseFloat(process.argv[2]) * 0.45359237).toFixed(2) );
}

// Execute the main function
main();