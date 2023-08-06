"use strict";

let comedy = 4;
let action = 5;
let romance = 6;
let drama = 1;
let sciFi = 4;

let types = ["Comedy", "Action", "Romance", "Drama", "SciFi"];
let counts = [comedy, action, romance, drama, sciFi];
let colors = ['red', 'blue', 'green', 'purple', 'orange'];

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120,120,120);
    let lastAngle = 0;
    let total = comedy + action + romance + drama + sciFi;

    for (let i = 0; i < types.length; i++) {
        let val = counts[i];
        let sliceAngle = 2 * PI * val / total;
        fill(colors[i]);
        arc(width / 2, height / 2, 200, 200, lastAngle, lastAngle + sliceAngle);
        
        let midAngle = lastAngle + sliceAngle / 2.0;
        let textX = width / 2 + (100 * cos(midAngle));
        let textY = height / 2 + (100 * sin(midAngle));
        let percent = (val / total) * 100;

        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(12);
        text(types[i] + " " + nf(percent, 0, 2) + "%", textX, textY);
        
        lastAngle += sliceAngle;
    }
}