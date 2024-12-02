/**
 * Author: Scott Green
 * Date: November 30, 2024
 * File Name: server.js
 * Description: Node.js server with 3 endpoints for managing character generator
 */

"use strict";

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Three routes
  if(pathname === '/createCharacter' && req.method === 'POST') {
    const characterClass = query.characterClass;
    const gender = query.gender;
    const funFact = query.funFact;

    res.writeHead(201);
    res.end(`A ${gender} ${characterClass} has been created: ${funFact}`);
  } else if (pathname === '/confirmCharacter' && req.method === 'POST') {
    res.writeHead(200);
    res.end('Character has been confirmed.');
  } else if (pathname === '/viewCharacter' && req.method === 'GET') {
    res.writeHead(200);
    res.end(`Class: ${query.characterClass}, Gender: ${query.gender}, Fun Fact: ${query.funFact}`);
  } else {
    res.writeHead(404);
    res.end;
  }

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;