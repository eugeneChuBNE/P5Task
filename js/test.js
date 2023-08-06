"use strict";
let planetSize = 50; 
let moonSize = planetSize / 2;
let smallerMoonSize = moonSize / 2; // New variable

let angleYellow = 0;
let angleWhite = 0;
let angleSmaller = 0; // New variable

function setup(){
    createCanvas(800,800);
}

function draw(){
    background(0); 
  
    let planetX = width / 2;
    let planetY = height / 2;

    fill(150);
    arc(planetX, planetY, planetSize, planetSize, PI, PI*2);

    fill(255); 
    arc(planetX, planetY, planetSize, planetSize,0, PI);
    
    angleMode(DEGREES);

    let moonYellowX = planetX + (planetSize / 2 + moonSize / 2) * 5 * cos(angleYellow);
    let moonYellowY = planetY + (planetSize + moonSize) * sin(angleYellow);

    let moonWhiteX = planetX + (planetSize + moonSize) * cos(angleWhite);
    let moonWhiteY = planetY + (planetSize / 2 + moonSize / 2) * 5 * sin(angleWhite);

    // Drawing tracks for moons
    stroke(255, 255, 0, 50);
    noFill();
    ellipse(planetX, planetY, (planetSize + moonSize) * 5, (planetSize + moonSize) * 2);

    stroke(255, 50);
    ellipse(planetX, planetY, (planetSize + moonSize) * 2, (planetSize + moonSize) * 5);

    // Drawing the moons
    fill(255, 255, 0); 
    noStroke();
    ellipse(moonYellowX, moonYellowY, moonSize);

    fill(255); 
    ellipse(moonWhiteX, moonWhiteY, moonSize);

    // Smaller moon
    let smallMoonX = moonWhiteX + (moonSize + smallerMoonSize) * cos(angleSmaller);
    let smallMoonY = moonWhiteY + (moonSize + smallerMoonSize) * sin(angleSmaller);
    fill(100, 100, 255); 
    ellipse(smallMoonX, smallMoonY, smallerMoonSize);

    angleYellow += 1; 
    angleWhite += 0.5; 
    angleSmaller += 2;
}
