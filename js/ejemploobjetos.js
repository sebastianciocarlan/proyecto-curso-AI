class Persona{
    
    constructor(dni,nombre,telefono){
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    estado="vivo";
    cambioNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    morirse(){
        this.estado="muerto";
    }
}
let jorge = new Persona("x8311677Y","Jorge Villa","677982312")
console.log("Ahora jorge esta: "+jorge.estado)
jorge.morirse()
console.log("Ahora jorge esta: "+jorge.estado)
console.log(typeof jorge)
