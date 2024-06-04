//Tu código va aquí. Recordad que teneis toda la documentacion en https://p5js.org/es/reference/
//Esta variable almacenará todos los ladrillos juntos en un array
var ladrillos = [];
//Esta funcion es la que se ejecuta una sola vez, la primera vez que ejecutamos el juego
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
            ladrillos.push({x:x,y:y,isBroken:false})
            x=x+128;   
        }
        x=0;
        y=y+10;
    }

    console.log("Los ladrillos son: ",ladrillos)

}
function redibujarLadrillos(){
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){
            rect(ladrillo.x,ladrillo.y,128,10)
        }
    });
}

var posXPala = 610;
var posYPala = 700;
var posXBola = 640;
var posYBola = 690;
var vxBola = 2;
var vyBola = -2;
function comprobarSiChocaConLadrillos(){
    ladrillos.forEach(ladrillo =>{
        if(!ladrillo.isBroken){
            if((ladrillo.y == posYBola && posXBola>=ladrillo.x) && posXBola <= ladrillo.x + 128 ){
                ladrillo.isBroken = true;
                vyBola = vyBola*-1;
            }

        }
    })
}

function draw() {
    background(220); 
    redibujarLadrillos();
    comprobarSiChocaConLadrillos();
    ellipse(posXBola, posYBola, 10, 10)
    if(posXBola<=0 || posXBola >=1280){
        vxBola = vxBola * -1;
    }
    if(posYBola<=0 ){
        vyBola=vyBola*-1;

    }
    if(posYBola ==720){
        location.reload()
    }
    if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+60)){
        vyBola = vyBola * -1;
    }
    posXBola = posXBola + vxBola;
    posYBola = posYBola + vyBola;
    rect(posXPala,posYPala,60,10)
    keydown();
}

function keydown(){
    if (keyIsDown(37) && posXPala > 0) {
        posXPala = posXPala-10;
      }
      if(keyIsDown(39) && posXPala < (1280-60)){
        posXPala = posXPala +10;
      }
}

