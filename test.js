
function esPrimo(x){
    
    for(let i = 2; i<x;i++){
        if(x%i==0){
            return false
        }
    }
    return true;
}
let heAcabado = false;
let contador = 2;
let cuantosPrimosLlevo = 0;
while(!heAcabado){
    if(esPrimo(contador)){
        console.log(contador)
        cuantosPrimosLlevo++;
    }
    if(cuantosPrimosLlevo ==100){
        heAcabado = true;
    }
contador++;
}