//Tu código va aquí. Recordad que teneis toda la documentacion en https://p5js.org/es/reference/
function setup() {
    //Este codigo se ejecuta 1 vez solamente, al principio
    createCanvas(1280, 720);
    background(220);   
    var x = 0;
    var y = 0;
    for(let j = 0; j<3;j++){
        console.log("Dibujando fila ",j+1)
        for (let index = 0; index < 10; index++) {
            console.log("Dibujando columna", index+1)
            rect(x,y,128,10)
            x=x+128;   
        }
        x=0;
        y=y+10;
    }

    console.log("X ES :     ",x)

}
var posXPala = 610;
function draw() {
    background(220); 
    ellipse(640, 690, 10, 10)
    rect(posXPala,700,60,10)
    keydown();
}

function keydown(){
    if (keyIsDown(37)) {
        posXPala = posXPala-10;
      }
      if(keyIsDown(39)){
        posXPala = posXPala +10;
      }
}


if(0 == 0 && !(0== 3)){
    console.log("HOLA")
}else{
    console.log("NO HOLA")
}