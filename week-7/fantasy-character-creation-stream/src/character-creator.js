/**
 * Author: Scott Green
 * Date: December 7, 2024
 * File Name: character-creator.js
 * Description: Duplex Stream Processor for Character Generator
 */

"use strict";

const {Duplex} = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // Set up a queue for reading/writing character information to
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // Put the data in a constant string
    const character = chunk.toString().trim();

    // If the character data is bad, log an error
    if (!character) {
      callback(new Error("Invalid character data."));
      return;
    } else {
      // Otherwise, parse the data and push the transformed results to the stream
      const characterJSON = JSON.parse(character);

      const characterClass = characterJSON.characterClass;
      const gender = characterJSON.gender;
      const funFact = characterJSON.funFact;

      this.queue.push(`The character class is: ${characterClass}    The character gender is: ${gender}    A fun fact about the character: ${funFact}`);

      callback();
    }
  }

  _read(size) {
    // If we have character data in the queue, read it
    if(this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      // Otherwise push null to stream
      this.push(null);
    }
  }
}

// Export the class
module.exports = CharacterCreator;