/*
Variables
*/
let x = 0; // position of the current rectangle
let w = 1; // width of a rectangle
let h = 0;
let angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight); // canvas bevat de volledige breedte en hoogte van de viewport
    background(0); // achtergrondkleur van de canvas is zwart 
    noStroke(); // no border

    h = height; // start height of the first rectangle
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    //background(0);
    if(x > width) {
        // Stop generating rectangles
        background(0,0,0);
    } else {
        fill(random(0,255), random(0,255), random(0,255));
        rotate(angle);
        rect(x, height/2, w, h); // draw a rectangle
        x += w;  
        h -= w/2;
        angle += 3;
    }
}
