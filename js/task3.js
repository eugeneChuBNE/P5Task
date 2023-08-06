"use strict";
let planetSize = 50; //set the planet size
let moonSize = planetSize / 2;

let angleYellow = 0;
let angleWhite = 0;

function setup(){
    createCanvas(800,800);
}

function draw(){
    background(0); //fill the background to black
  
    // Calculate planet's centre
    let planetX = width / 2;
    let planetY = height / 2;

    // Draw the dark half of the planet
    fill(150); //i chose grey so it's still easy to see on the black background
    arc(planetX, planetY, planetSize, planetSize, PI, PI*2);

    // Draw the bright half of the planet
    fill(255); // white for this one (ofc)
    arc(planetX, planetY, planetSize, planetSize,0, PI);
    
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
    angleYellow += 1; 
    angleWhite += 0.5; 
}


