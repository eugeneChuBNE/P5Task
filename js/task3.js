"use strict";
let planetSize = 200; //set the planet size

function setup(){
    createCanvas(800,800);
}

function draw(){
    background(200); //fill the background to black
  
    // Calculate planet's centre
    let planetX = width / 2;
    let planetY = height / 2;

    // Draw the dark half of the planet
    fill(150); //i chose grey so it's still easy to see on the black background
    arc(planetX, planetY, planetSize, planetSize, PI, PI*2);

    // Draw the bright half of the planet
    fill(255); // white for this one (ofc)
    arc(planetX, planetY, planetSize, planetSize,0, PI);
    
}


