/**
 * Author: Scott Green
 * Date: November 2, 2024
 * File Name: index.js
 * Description: Program to demonstrate importing and using a module.
*/

"use strict";

// Import recipes module using require
const{createRecipe, setTimer, quit} = require("./recipes");

// Use the imported functions to "create the recipe", "set the time", and "quit the program".
// Log the results of each action to the console.
function main() {
    console.log(createRecipe(["sugar", "flower", "butter", "milk"]));
    console.log(setTimer(45));
    console.log(quit());
}

// Run the program
main();