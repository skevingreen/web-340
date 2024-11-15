/**
 * Author: Scott Green
 * Date: November 14, 2024
 * File Name: taco-stand.spec.js
 * Description: File to test the TacoStandEmitter class methods.
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");  // I changed this from tacoStand.
const tacoStand = new TacoStandEmitter();

function testServeCustomer() {  // Test for the TacoStandEmitter serveCustomer method.
  let served = false; // This will act as a flag to let us know if the serve event was emitted.

  try {
    tacoStand.on("serve", (customer) => { // Register an event listener for the "serve" event.
      served = true;  // We got a "serve" event so set the served value to true.
    });

    tacoStand.serveCustomer("John");  // Call the serveCustomer method.

    assert.strictEqual(served, true); // If the "serve" event was emitted, then served should now be true.

    console.log("Passed testServeCustomer");  //Log test success.
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);  //"serve" event was not emitted as expected; log error.
    return false;
  }
}

function testPrepareTaco() {  // Test for the TacoStandEmitter prepareTaco method.
  let prepared = false; // This will act as a flag to let us know if the prepare event was emitted.

  try {
    tacoStand.on("prepare", (taco) => { // Register an event listener for the "prepare" event.
      prepared = true;  // We got a "prepare" event so set the prepared value to true.
    });

    tacoStand.prepareTaco("beef");  // Call the prepareTaco method.

    assert.strictEqual(prepared, true); // If the "prepare" event was emitted, then prepared should now be true.

    console.log("Passed testPrepareTaco");  //Log test success.
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);  //"prepare" event was not emitted as expected; log error.
    return false;
  }
}

function testHandleRush() { // Test for the TacoStandEmitter handleRush method.
  let handled = false;  // This will act as a flag to let us know if the rush event was emitted.

  try {
    tacoStand.on("rush", (rush) => {  // Register an event listener for the "rush" event.
      handled = true; // We got a "rush" event so set the handled value to true.
    });

    tacoStand.handleRush("lunch");  // Call the handleRush method.

    assert.strictEqual(handled, true);  // If the "rush" event was emitted, then handled should now be true.

    console.log("Passed testHandleRush"); //Log test success.
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`); //"rush" event was not emitted as expected; log error.
    return false;
  }
}

function main() { // Main function to run all our tests.
  testServeCustomer();
  testPrepareTaco();
  testHandleRush();
}

main(); // Invoke all the tests.
