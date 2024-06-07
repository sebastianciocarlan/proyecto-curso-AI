
function setup() {
    createCanvas(1000, 800);

}
let bolaX = 500;
let bolaY = 400;

 function draw() {
    background(0);
    if(mouseIsPressed && dist(mouseX, mouseY, bolaX, bolaY) < 100) {
        bolaX = mouseX;
        bolaY = mouseY;
    }
    ellipse(bolaX, bolaY, 50, 50);
}

