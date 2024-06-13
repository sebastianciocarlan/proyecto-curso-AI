class Pala {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    w = 60;
    h = 10;
    v = 3;
    dibujar() {
        rect(this.x, this.y, this.w, this.h)
    }
    moverse(key1,key2) {
        if (keyIsDown(key1) && this.x > 0) {
            this.x = this.x - this.v;
        }
        if (keyIsDown(key2) && this.x < (1280 - 60)) {
            this.x = this.x + this.v;
        }
    }
    moverseSola(bola){
        if ((this.x + this.w) > bola.x ){
            this.x = this.x - this.v
        }
        if   (this.x < bola.x ){
            this.x = this.x + this.v
        }
    }
}
class Bola {
    constructor(x, y,type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    w = 10;
    h = 10;
    vx = 20;
    vy = -24;
    dibujar() {
        if(this.type == 0){
            fill(0,255,0)
            ellipse(this.x, this.y, this.w, this.h)
            noFill()
        }
        if(this.type == 1){
            fill(255,0,0)
            ellipse(this.x, this.y, this.w, this.h)
            noFill()
        }

    }
    moverse() {
        this.x += this.vx;
        this.y += this.vy;
    }
    comprobarSiChocaConPala(pala) {
        if ((this.y >= pala.y && this.y <= (pala.y + pala.h)) && (this.x >= pala.x -5 && this.x <= pala.x + 65)) {
            this.vy = this.vy * -1;
            if(Math.random() > 0.5){
            this.vx = this.vx * Math.random() * 2 + 2;
            }else{
                this.vx = this.vx * Math.random() * 2 - 2;
            }
        }
    }
    comprobarSiChocaConParedes() {
        //Aqui comprobamos si la bola choca con los bordes de la pantalla
        if (this.x <= 0 || this.x >= 1280) {
            this.vx = this.vx * -1;
        }
        if (this.y <= 0) {
            document.getElementById("puntuacionJ1").innerHTML = Number.parseInt( document.getElementById("puntuacionJ1").innerHTML) + 1;
            this.x = 640;
            this.y = 690;
            this.vx = 2;
            this.vy = -2;
        }
        //Recargamos la ventana cuando la bola choca con el fondo
        if (this.y >= 720) {
            document.getElementById("puntuacionJ2").innerHTML = Number.parseInt( document.getElementById("puntuacionJ2").innerHTML) + 1;
            this.x = 640;
            this.y = 20;
            this.vx = 2;
            this.vy = 2;
        }
    }


}

var j1 = new Pala(610, 700);
var j2 = new Pala(610,10)
var bola = new Bola(640, 690,1);

function preload() {

}
function setup() {
    background(220);

    createCanvas(1280, 720);
 
}

function draw() {
    background(220);
    j1.moverseSola(bola);
    j1.dibujar();
    j2.dibujar();
    j2.moverseSola(bola)
    bola.dibujar();
    bola.moverse();

    bola.comprobarSiChocaConPala(j1);
    bola.comprobarSiChocaConPala(j2);
    bola.comprobarSiChocaConParedes();

}