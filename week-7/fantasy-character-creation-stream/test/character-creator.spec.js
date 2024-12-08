/**
 * Author: Scott Green
 * Date: December 7, 2024
 * File Name: character-creator.spec.js
 * Description: Test Suite for Stream Character Generator
 */

"use strict";

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // Create an array of characters
    const characters = [
      {"characterClass":"Warrior", "gender":"Male", "funFact":"Has one eye."},
      {"characterClass":"Rouge", "gender":"Female", "funFact":"Has a peg leg."}
    ]

    // Write each character to the stream
    characters.forEach( character => {
      characterCreator.write(JSON.stringify(character));
    });

    // Process a character
    characterCreator.on('data', (data) => {
      const character = characters.shift();

      const characterClass = character.characterClass;
      const gender = character.gender;
      const funFact = character.funFact;

      expect(data.toString().trim()).toBe(`The character class is: ${characterClass}    The character gender is: ${gender}    A fun fact about the character: ${funFact}`)

      if(characters.length === 0) {
        done();
      }
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // Create an invalid character
    characterCreator.write("");

    // Process error
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid character data.");
      done();
    });
  });

  test("should transform data correctly when written to", (done) => {
    // Create a character
    const character = '{"characterClass":"Mage","gender":"Female","funFact":"Has purple hair."}';

    // Process the character
    characterCreator.write(character, 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe("The character class is: Mage    The character gender is: Female    A fun fact about the character: Has purple hair.")
        done();
      });
    });
  });
});