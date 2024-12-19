"use strict";

/**
 * Author: Scott Green
 * Date: December 10, 2024
 * File Name: game-characters.js
 * Description: spawns child process to read in character data
 */

// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // TODO: Set the script file path
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node", [this.scriptPath]);

    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(characterData, null);
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

// let gc = new GameCharacters();
// gc.getCharacters();

module.exports = { GameCharacters };