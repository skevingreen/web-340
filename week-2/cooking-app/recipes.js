/**
 * Author: Scott Green
 * Date: November 2, 2024
 * File Name: recipe.js
 * Description: Module demonstrating cooking related functions
*/

"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  let output = "Recipe created with ingredients: ";
  
  // Append all ingredients separated by a comma to the output string.
  for (let i=0; i < ingredients.length; i++) {
    output += ingredients[i] + ", ";
  }

  // Remove the final comma before returning the output string
  return output.substring(0, output.length - 2);
}

// Define the setTimer function
function setTimer(minutes) {
  // Return timer message
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  // Return exit string
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};