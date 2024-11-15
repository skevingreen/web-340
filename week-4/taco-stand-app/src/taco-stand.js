/**
 * Author: Scott Green
 * Date: November 14, 2024
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class file.
 */

"use strict";

const EventEmitter = require("events");

// TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
  }

  serveCustomer(customer) { // Emit the "serve" event
    this.emit("serve", customer);   // Comment this line out to see test failure.
  }

  prepareTaco(taco) {   // Emit the "prepare" event.
    this.emit("prepare", taco);    // Comment this line out to see test failure.
  }

  handleRush(rush) {    // Emit the "rush" event.
    this.emit("rush", rush);       // Comment this line out to see test failure.
  }
}

module.exports = TacoStandEmitter;