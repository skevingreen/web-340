/**
 * Author: Scott Green
 * Date: November 30, 2024
 * File Name: server.spec.js
 * Description: File for testing server endpoints
 */

"use strict";

const http = require('http');
const server = require('../src/server');

// Begin test suite
describe("server", () => {
  // Close server when testing is done
  afterAll( () => {
    server.close();
  })

  // Test 1
  test('responds to /createCharacter POST request with query parameters', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      method: 'POST',
      path: '/createCharacter?characterClass=Warrior&gender=Male&funFact=has%20six%20fingers%20on%20right%20hand'
    };

    const req = http.request(options, res => {
      let data = "";
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('A Male Warrior has been created: has six fingers on right hand');
        done();
      });
    });

    req.end();
  })

  // Test 2
  test('responds to /confirmCharacter POST request', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      method: 'POST',
      path: '/confirmCharacter'
    };

    const req = http.request(options, res => {
      let data = "";
      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character has been confirmed.');
        done();
      });
    });

    req.end();
  })

  // Test 3
  test('responds to /viewCharacter GET request', done => {
      http.get('http://localhost:3000/viewCharacter?characterClass=Warrior&gender=Male&funFact=has%20six%20fingers%20on%20right%20hand', res => {
      let data = "";
      res.on('data', chunk => {
        data += chunk;
      })

      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Class: Warrior, Gender: Male, Fun Fact: has six fingers on right hand')
        done();
      });
    });
  });

})