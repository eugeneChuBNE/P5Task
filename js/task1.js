"use strict";

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    fill(255, 0, 0); // Red
    ellipse(mouseX, mouseY, 60, 60);
  
    fill(255, 255, 255); // White
    ellipse(mouseX, mouseY, 40, 40);
  
    fill(255, 0, 0); red
    ellipse(mouseX, mouseY, 20, 20);

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 10, 10);

    strokeWeight(1);
    stroke(0);  // Black
    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);
}