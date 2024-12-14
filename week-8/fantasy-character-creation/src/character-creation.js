"use strict";

/**
 * Author: Scott Green
 * Date: December 10, 2024
 * File Name: character-creation.js
 * Description:
 */

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:

const fs = require('fs');
const {join} = require('path');

const CHARACTER_OUTPUT_FILE = join(__dirname, "character_file_out.txt");
const CHARACTER_INPUT_FILE = join(__dirname, "character_file_in.txt");

function createCharacter(character, callback) {
  // TODO: Implement this function
  const data = character;

  fs.writeFile(CHARACTER_OUTPUT_FILE, data, (err) => {
    callback(err);
  });
}

function getCharacters(callback) {
  // TODO: Implement this function
  fs.readFile(CHARACTER_INPUT_FILE, {encoding: "utf8"}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const character_read = data;
      callback(null, character_read);
    }
  });
}


// For promises:
// const fs = require('fs').promises;

// async function createCharacter(character) {
//   // TODO: Implement this function
// }

// async function getCharacters() {
//   // TODO: Implement this function
// }

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

 module.exports = { createCharacter, getCharacters }; // For callbacks
// module.exports = { createCharacter, getCharacters }; // For promises