
class Enemigo{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    size = 10;
    v = .5;
    dibujar(){
        push()

        rect(this.x,this.y,this.size,this.size)
        pop()
    }
    moverse(tank){
        
        if(this.x > tank.x){
            this.x = this.x - this.v
        }
        if(this.x <tank.x){
            this.x = this.x +this.v
        }
        if(this.y > tank.y){
            this.y = this.y - this.v
        }
        if(this.y < tank.y){
            this.y = this.y +this.v
        }

}
    
}
class Disparo{

    constructor(x,y,angle,bodyAngle){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.bodyAngle = bodyAngle
    }
    calculateAngle(){
         const angleRadians = (this.angle+this.bodyAngle )* Math.PI / 180;
         this.displacementX = 10 * Math.sin(angleRadians);
         this.displacementY = 10* Math.cos(angleRadians);
    }
    dibujar(){
        push()

        rectMode(CENTER);
        translate(this.x,this.y);
        rotate(this.angle+this.bodyAngle);
        rect(0,-25,5,5);
        pop()
    }

    mover(){
        if(keyIsDown(65)){
            this.bodyAngle = this.bodyAngle - 1;
        }
        if(keyIsDown(68)){
            this.bodyAngle = this.bodyAngle + 1;
        }
        this.calculateAngle()
        this.x = this.x + this.displacementX;
        this.y = this.y - this.displacementY;
    }

}
class Tank{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    size = 50;
    sizeTower = this.size/2;
    currentTowerAngle = 0;
    currentBodyAngle = 0;
    dibujarTank(){
        rectMode(CENTER);
        rect(0,0,this.size+10,this.size-10 );
        rect(0,0,this.size,this.size);
      

    }
    dibujarTorreta(){
        rectMode(CENTER);
        rect(0,0 ,this.sizeTower,this.sizeTower);
    }
    calculateAngle(){

    }
    dibujarTroncho(){
        rect(0,0-this.sizeTower ,3,this.sizeTower);
    }
    disparar(arrayProyectiles){
        if(this.cooldown > 0){
            this.cooldown--;
        }else{
            this.cooldown = 10;
            arrayProyectiles.push(new Disparo(this.x,this.y,this.currentTowerAngle,this.currentBodyAngle));
        }
       
    }
    mover(arrayProyectiles){
        if(keyIsDown(32)){
            this.disparar(arrayProyectiles);
        }
        angleMode(DEGREES);
        const angleRadians = this.currentBodyAngle * Math.PI / 180;
        const displacementX = 2 * Math.sin(angleRadians);
        const displacementY = 2 * Math.cos(angleRadians);
        if(keyIsDown(LEFT_ARROW)){
            this.currentTowerAngle = this.currentTowerAngle - 1;

        }
        if(keyIsDown(RIGHT_ARROW)){
            this.currentTowerAngle = this.currentTowerAngle + 1;
        }


        if(keyIsDown(87)){
            
            this.x = this.x + displacementX;
            this.y = this.y - displacementY;
        }
        if(keyIsDown(83)){
            this.x = this.x - displacementX;
            this.y = this.y + displacementY;
        }
        if(keyIsDown(65)){
            this.currentBodyAngle = this.currentBodyAngle - 1;
        }
        if(keyIsDown(68)){
            this.currentBodyAngle = this.currentBodyAngle + 1;
        }
        push()
        translate(this.x,this.y)
        rotate(this.currentBodyAngle);
        this.dibujarTank();
        rotate(this.currentTowerAngle);
        this.dibujarTorreta();
        this.dibujarTroncho()

        pop()
    }
}


function preload(){

}
let enemigo1 = new Enemigo(19,10);
function setup() {
        createCanvas(1280, 720);
    }


    let tank = new Tank(200,200);

    proyectiles = [];
    let enemigos = [];
        
    function draw() {
        if(Math.random() > 0.99){
            let currentX = Math.floor(Math.random() *  120 -60)
            let currentY = Math.floor(Math.random() *  120 -60)
            if(currentX>0){
                currentX=currentX+1280
            }
            if(currentY>0){
                currentY = currentY+720
            }
            enemigos.push(new Enemigo(currentX,currentY))
        }
        
        background(220);
        tank.mover(proyectiles);
        proyectiles.forEach(element => {
            element.mover()
            element.dibujar()

        });
        enemigos.forEach(enemigo=>{
            enemigo.dibujar();
            enemigo.moverse(tank);
        })

    }