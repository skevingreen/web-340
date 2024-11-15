/**
 * Author: Scott Green
 * Date: November 14, 2024
 * File Name: index.js
 * Description: Main file to interact with the TacoStandEmitter class.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand"); // I changed this from tacoStand.
const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Event listeners for the tacoStand object
tacoStand.on("serve", (customer) => { // Register an event listener for the "serve" event.
  console.log(`Taco Stand serves: ${customer}`);  
});

tacoStand.on("prepare", (taco) => { // Register an event listener for the "prepare" event.
  console.log(`Taco Stand prepares: ${taco} taco`); 
});

tacoStand.on("rush", (rush) => {  // Register an event listener for the "rush" event.
  console.log(`Taco Stand handles rush: ${rush}`);  
});

tacoStand.on("error", (err) => {  // Register an event listener for errors.
  console.error('A error occurred:', err);
})

rl.on("line", (input) => {  // Read in the commands
  const [command, ...args] = input.split(" ");

  if (args.length !== 1) {  // Check that the command included a single argument.
    console.log("Please enter a single argument.");
  } else {  // Handle the commands
    if (command === "serve") {
      tacoStand.serveCustomer(args[0]);
    } else if (command === "prepare") {
      tacoStand.prepareTaco(args[0]);
    } else if (command === "rush") {
      tacoStand.handleRush(args[0]);
    } else {
      console.log(  // If an invalid command was entered, notify the user.
        'Please choose either "serve", "prepare", or "rush" as the command.'
      );
    }
  }
});

console.log(  // Print out instructions to the user.
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
