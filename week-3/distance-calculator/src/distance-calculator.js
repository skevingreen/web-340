"use strict";

//Measurements taken from https://www.jpl.nasa.gov/_edu/pdfs/scaless_reference.pdf
let planetDistances =  {mercury:0.39, venus:0.72, earth:1, mars:1.52, jupiter:5.2, saturn:9.54, uranus:19.2, neptune:30.06}

//Get the distance in AU between two planets
function calculateDistance(planet1, planet2) {
  // This works, but I think it's confusing to read.
  //return parseFloat((Math.round( Math.abs(planetDistances[planet1.toLowerCase()] - planetDistances[planet2.toLowerCase()]) * 100 ) / 100).toFixed (2));

  let a = planet1.toLowerCase();  //Convert planet1 to lower case so we can find it in planetDistances
  let b = planet2.toLowerCase();  //Convert planet2 to lower case so we can find it in planetDistances
  let distanceBetweenAandB = Math.abs(planetDistances[a] - planetDistances[b]); //Get the positive distance between the two planets

  return parseFloat((Math.round(distanceBetweenAandB * 100) / 100).toFixed(2)); //Get the value to two decimal places
}

module.exports = calculateDistance;