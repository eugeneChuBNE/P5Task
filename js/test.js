"use strict";
let planetSize = 50;
let moonSize = planetSize / 2;

let angleYellow = 0;
let angleWhite = 0;

function setup() {
  createCanvas(800, 600);
  ellipseMode(CENTER); // Ensure that ellipses are drawn from the center
}

function draw() {
  background(0); // Black background

  // Calculate planet's center
  let planetX = width / 2;
  let planetY = height / 2;

  // Draw the grey half (left)
  fill(150);
  arc(planetX, planetY, planetSize, planetSize, PI / 2, 3 * PI / 2);
  
  // Draw the white half (right)
  fill(255);
  arc(planetX, planetY, planetSize, planetSize, -PI / 2, PI / 2);

  // Angular arithmetic for the position of the moons
  angleMode(DEGREES);

  // Yellow moon (horizontal ellipse orbit)
  let moonYellowX = planetX + (planetSize / 2 + moonSize / 2) * 5 * cos(angleYellow);
  let moonYellowY = planetY + (planetSize + moonSize) * sin(angleYellow);

  // White moon (vertical ellipse orbit)
  let moonWhiteX = planetX + (planetSize + moonSize) * cos(angleWhite);
  let moonWhiteY = planetY + (planetSize / 2 + moonSize / 2) * 5 * sin(angleWhite);

  // Drawing tracks for moons
  stroke(255, 255, 0, 50); // Transparent yellow for the yellow moon's track
  noFill();
  ellipse(planetX, planetY, (planetSize + moonSize) * 5, (planetSize + moonSize) * 2);

  stroke(255, 50); // Transparent white for the white moon's track
  ellipse(planetX, planetY, (planetSize + moonSize) * 2, (planetSize + moonSize) * 5);

  // Drawing the moons
  fill(255, 255, 0); // Yellow color for yellow moon
  noStroke();
  ellipse(moonYellowX, moonYellowY, moonSize);

  fill(255); // White color for white moon
  ellipse(moonWhiteX, moonWhiteY, moonSize);

  // Incrementing angles for the moons' movement
  angleYellow += 1; // Adjust this for faster/slower speed
  angleWhite += 0.5; // Adjust this for faster/slower speed
}