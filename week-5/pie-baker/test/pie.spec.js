/**
 * Author: Scott Green
 * Date: November 22, 2024
 * File Name: pie.spec.js
 * Description: Test Suite For the bakePie Function in pie.js
 */

"use strict";

// Import bakePie function from pie.js
const { bakePie } = require("../src/pie");

// Monitor the exit method of the process object so we can tell what exit code was used
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

// Your tests here

// Create the Jest test suite
describe("isBaked", ()=> {
    let pieStatus;  // Variable to hold the status returned from bakePie()
    let log;        // Variable for the mocked console log

    // Before each test, mock the log
    beforeEach(()=>{
        log = jest.spyOn(console, "log");
    });

    // After each test, restore the log to normal
    afterEach(()=>{
        log.mockRestore();
    });

    // Test unsuccessful, but non-fatal, return message.
    // bakePie is called with all essential ingredients for the crust but no filling.
    test("cherry pie status", () => {
        pieStatus = bakePie("cherry", ["butter", "flour", "sugar"]);
        expect(pieStatus).toEqual("cherry pie has NOT been baked");
        expect(exit).not.toHaveBeenCalled();
    });

    // Test a successful call to bakePie
    test("lemon pie status", () => {
        pieStatus = bakePie("lemon", ["flour", "lemon", "sugar", "butter", "cornstarch"]);
        expect(pieStatus).toEqual("lemon pie has been baked");
        expect(exit).not.toHaveBeenCalled();
    });

    // Test calling bakePie with missing essential ingredient (fatal error)
    test("pecan pie status", () => {
        pieStatus = bakePie("pecan", ["flour", "pecan", "butter"]);
        expect(log).toHaveBeenCalledWith("An essential ingredient (flour, sugar, or butter) is missing.");
        expect(exit).toHaveBeenCalledWith(1);
    });
});
