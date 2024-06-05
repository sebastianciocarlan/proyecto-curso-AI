//Tu código va aquí. Recordad que teneis toda la documentacion en https://p5js.org/es/reference/
//Esta variable almacenará todos los ladrillos juntos en un array
var ladrillos = [];
//Aqui definimos todas las variables que utiliza el programa. 
var posXPala = 610;
var posYPala = 700;
var posXBola = 640;
var posYBola = 690;
var vxBola = 2;
var vyBola = -2;
var imagenPala;
function preload(){
    imagenPala =  loadImage('../assets/pala.png');
      
}
//Aqui tenemos una funcion que comprueba en cada frame de la funcion draw si la bola ha chocado con alguno de los ladrillos
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
//Esta funcion redibuja los ladrillos cada frame de la funcion draw
function redibujarLadrillos(){
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){ //Obviamente solamente redibujamos los ladrillos si no han sido rotos anteriormente
            fill(0,255,100)
            rect(ladrillo.x,ladrillo.y,128,10)
            noFill()
        }
    });
}




//Esta funcion es la que se ejecuta una sola vez, la primera vez que ejecutamos el juego
function setup() {
    //Definimos la resolucion del canvas
    createCanvas(1280, 720);
    //Definimos el color de fondo
    background(220);   
    var x = 0;
    var y = 0;
   //Este bucle anidado crea el array de ladrillos
    for(let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++) {
            rect(x,y,128,10)
            ladrillos.push({x:x,y:y,isBroken:false})
            x=x+128;   
        }
        x=0;
        y=y+10;
    }


}

//Esta es la funcion principal del programa que se ejecuta cada frame
function draw() {
    background(220); 
    //Aqui llamamos a las funciones de uso de los ladrillos 
    redibujarLadrillos();
    comprobarSiChocaConLadrillos();
    fill(200,30,10)
    ellipse(posXBola, posYBola, 10, 10)
    noFill()
    //Aqui comprobamos si la bola choca con los bordes de la pantalla
    if(posXBola<=0 || posXBola >=1280){
        vxBola = vxBola * -1;
    }
    if(posYBola<=0 ){
        vyBola=vyBola*-1;

    }
    //Recargamos la ventana cuando la bola choca con el fondo
    if(posYBola ==720){
        location.reload()
    }
    if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+60)){
        vyBola = vyBola * -1;
    }
    posXBola = posXBola + vxBola;
    posYBola = posYBola + vyBola;
    image(imagenPala,posXPala,posYPala,60,20)
    keydown();
}
//Esta funcion controla si el usuario pulsa las flechas para mover la pala
function keydown(){
    if (keyIsDown(37) && posXPala > 0) {
        posXPala = posXPala-10;
      }
      if(keyIsDown(39) && posXPala < (1280-60)){
        posXPala = posXPala +10;
      }
}
let vidas = document.getElementById("num-vidas").innerHTML;
alert(vidas)

