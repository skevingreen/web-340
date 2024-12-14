"use strict";

/**
 * Author: Scott Green
 * Date: December 10, 2024
 * File Name: character-creation.spec.js
 * Description:
 */

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
 const fs = require('fs');

// For promises:
// const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;
  let testCharacter = {"class":"Warrior", "gender":"Male", "funFact":"Looks like Sean Connery"};

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here

    // jest.spyOn(fs, 'readFile').mockImplementation( () => Promise.resolve() );
    // jest.spyOn(fs, 'writeFile').mockImplementation( () => Promise.resolve() );

    jest.spyOn(fs, 'writeFile').mockImplementation((file, data, callback) => callback(null));
    jest.spyOn(fs, 'readFile').mockImplementation((file, options, callback) => callback(null, testCharacter));

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file

  // test("writes character to file", async () => {
  //   await expect(createCharacter(testCharacter)).resolves.toBeUndefined();
  // });

  test("writes character to file", (done) => {
    createCharacter(testCharacter, (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  // 2. Test that getCharacters reads characters from the file
  test("reads character data", (done)=> {
    getCharacters((err, character) => {
      expect(err).toBeNull();
      expect(character).toEqual(testCharacter);
      done();
    })
  })

  // 3. Test that createCharacter handles errors when writing to the file
  test("handles errors when writing character to file", (done) => {
    fs.writeFile.mockImplementationOnce((file, options, callback) => callback(new Error("File not found")));

    createCharacter(testCharacter, (err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe("File not found");
      done();
    });
  });
});