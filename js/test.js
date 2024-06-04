function setup(){
    createCanvas(1280,720,WEBGL)
    colorMode(RGB)
    

}
function draw(){
    background(244,141,48)
line(200,200,300,200)
line(300,200,350,100)
line(350,100,250,0)
line(250,0,150,100)
line(150,100,200,200)
 // Enable orbiting with the mouse.
 orbitControl();
fill(123,255,12)
 // Draw the box.
 box();

}