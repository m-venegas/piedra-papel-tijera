let opciones = ["PIEDRA", "PAPEL", "TIJERA"]
let jugador = null
let bot = null 

function playGame(){
    //lo que decida la computadora
    //lo que decida el jugador
    console.log("Juego en acción");
    seleccionBot ()
    seleccionJugador ()
}


function seleccionBot (){
    // Definir la funcion elegida por el bot
    return bot = Math.round (Math.random()*2) 
    /*random ejecuta un valor entre 0 y casi 1 y si lo multiplico x2 me devuel de 0 a casi 2 y Math.round lo que hace es //redondear el numero hacia arriba.*/
}

function seleccionJugador (){
    //lo que decida el jugador
    jugador = parseInt 
    (prompt (`Ingrese su opcion: 0 = PIEDRA, 1 = PAPEL, 2 = TIJERA`));
    
    if (!isNaN(jugador)){  
    //isNaN esto no es un numero y cuando se niega !IsNaN esto es un numero
        if(jugador >= 0 && jugador <= 2) {
        switch (true) {
        case jugador===bot:
            mensajeAlert ("EMPATE")
            break;
        case jugador===0 && bot===2:
            mensajeAlert ("GANASTE")
            break;
        case jugador===1 && bot===0:
            mensajeAlert ("GANASTE")
            break;
        case jugador===2 && bot===1:
            mensajeAlert ("GANASTE")
        break;
        default:
            mensajeAlert ("PERDISTE")
            break;
    }

        }else{
    //cuando es otro numero
        mensajeAlert ("noOpción")
    }
    }else{
    //cuando no sea un numero
    mensajeAlert ("noNúmero")
}
    
}



function mensajeAlert(resultado){
    //Devuelve el mensaje en pantalla
    if (resultado ==="noOpción"){
        swal("Error!", "No existe la opción elegida!", "error");
    }
    if (resultado ==="noNúmero"){
        swal("Error!", "Debe ingresar un número entre 0 y 2!", "error");
}

if (resultado ==="GANASTE"){
    swal("GANASTE!", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "success");
}

if (resultado ==="PERDISTE"){
    swal("PERDISTE!", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "error");
}

if (resultado ==="EMPATE"){
    swal("EMPATE!", `Elegiste ${opciones[jugador]} y el bot eligió ${opciones[bot]}`, "info");
}
}

