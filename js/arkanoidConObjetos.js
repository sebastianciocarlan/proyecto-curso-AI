
class Ladrillo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isBroken = false;
    w = 128;
    h = 10;
    dibujar() {
        rect(this.x, this.y, this.w, this.h)
    }
    romper() {
        this.isBroken = true;
    }

}
class Pala {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    w = 60;
    h = 10;
    dibujar() {
        rect(this.x, this.y, this.w, this.h)
    }
    moverse() {
        if (keyIsDown(37) && this.x > 0) {
            this.x = this.x - 10;
        }
        if (keyIsDown(39) && this.x < (1280 - 60)) {
            this.x = this.x + 10;
        }
    }
}
class Bola {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    w = 10;
    h = 10;
    vx = 2;
    vy = -2;
    dibujar() {
        ellipse(this.x, this.y, this.w, this.h)
    }
    moverse() {
        this.x += this.vx;
        this.y += this.vy;
    }
    comprobarSiChocaConPala(pala) {
        if (this.y == pala.y && (this.x >= pala.x && this.x <= pala.x + 60)) {
            this.vy = this.vy * -1;
        }
    }
    comprobarSiChocaConParedes() {
        //Aqui comprobamos si la bola choca con los bordes de la pantalla
        if (this.x <= 0 || this.x >= 1280) {
            this.vx = this.vx * -1;
        }
        if (this.y <= 0) {
            this.vy = this.vy * -1;

        }
        //Recargamos la ventana cuando la bola choca con el fondo
        if (this.y == 720) {
            location.reload()
        }
    }
    comprobarSiChocaConLadrillo(ladrillo) {
        if (this.y == ladrillo.y && (this.x >= ladrillo.x && this.x <= ladrillo.x + 128)) {
            ladrillo.romper();
            this.vy = this.vy * -1;
        }        
    }

}

var ladrillos = [];
var pala = new Pala(610, 700);
var bola = new Bola(640, 690);

function preload() {

}
function setup() {
    background(220);

    createCanvas(1280, 720);
    var x = 0;
    var y = 0;
   //Este bucle anidado crea el array de ladrillos
    for(let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++) {
            let ladrillo = new Ladrillo(x,y);
            ladrillos.push(ladrillo)
            x=x+128;   
        }
        x=0;
        y=y+10;
    }
}
function draw() {
    background(220);
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){
            ladrillo.dibujar();
            bola.comprobarSiChocaConLadrillo(ladrillo);
        }
    });
    pala.dibujar();
    bola.dibujar();
    bola.moverse();
    pala.moverse();
    bola.comprobarSiChocaConPala(pala);
    bola.comprobarSiChocaConParedes();

}