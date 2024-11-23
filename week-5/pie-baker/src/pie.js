/**
 * Author: Scott Green
 * Date: November 22, 2024
 * File Name: pie.js
 * Description: A function for baking a pie when given pie type and ingredients
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  let essentialIngredients = ["flour", "sugar", "butter"];  // required ingredients
  let pieBaked = true;  // flag to tell if pie was baked or not

  // Check that in addition to the essential ingredients there is at least one more
  if (ingredients.length < 4) {
    console.log("You need at least 4 ingredients to bake a pie - flour, sugar, butter, and a filling");
    pieBaked = false; // missing something so set flag to false
  }

  // Check that each of the essential ingredients is among the passed in ingredient list
  for (let ingredient of essentialIngredients) {
    if (!ingredients.includes(ingredient)) {
      // One of the essential ingredients is missing so log a message and exit the program
      console.log("An essential ingredient (flour, sugar, or butter) is missing.");
      process.exit(1);
    }
  }

  // Return an appropriate message for whether the pie was baked or not
  if (pieBaked) {
    return pieType + " pie has been baked";
  } else {
    return pieType + " pie has NOT been baked";
  }
}

// Export the bakePie function
module.exports = { bakePie };