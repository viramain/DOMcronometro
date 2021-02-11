// Cronómetro
// Realizar una web con un cronómetro, que tenga las opciones de 
// iniciar,
//  reset (volver el cronómetro a 0) 
// y pausar.

// El evento load dispara el evento al final del proceso de carga del documento. 
window.onload = inicializar();

function inicializar() {
    // variables globales que vuelven a 0 cuando se presiona RESET
    varHora = 0;
    varMinuto = 0;
    varSegundo = 0;

    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    // Activo los botones
    document.getElementById("botIniciar").className = "btn boton boton-enabled";
    document.getElementById("botPausar").className = "btn boton boton-disabled";
    document.getElementById("botReset").className = "btn boton mx-4 boton-disabled";
}

//--- boton INICIAR -----
function cronometrar() {
    document.getElementById("botIniciar").className = "btn boton boton-disabled";
    document.getElementById("botPausar").className = "btn boton boton-enabled";
    document.getElementById("botReset").className = "btn boton mx-4 boton-enabled";
    armaReloj();
    // llama a la funcion arma reloj cada 1000 miliseg = 1 seg.
    // En la variable CantIntervalos acumula los intervalos hasta reset
    cantIntervalos = setInterval(armaReloj, 1000);
}

//-- incrementa cronometro
function armaReloj() {
    // usa variables auxiliares que armaran la hora a escribir cada segundo
    let horaAux, minutoAux, segundoAux;
    // incrementa el reloj: Empieza con 1 segundo, despues de 59 seg incrementa minutos,
    // despues de 59 min incrementa horas. Despues de 23 hs, pasa a 0 horas.
    // usa variables globales para parar y reiniciar el cronometro.
    varSegundo++;

    if (varSegundo > 59) {
        varMinuto++;
        varSegundo = 0;
    }
    if (varMinuto > 59) {
        varHora++;
        varMinuto = 0;
    }
    if (varHora > 24) {
        varHora = 0;
    }

    // Agrega un 0 para mantener 2 digitos
    if (varSegundo < 10) {
        segundoAux = "0" + varSegundo;
    } else {
        segundoAux = varSegundo;
    }

    if (varMinuto < 10) {
        minutoAux = "0" + varMinuto;
    } else {
        minutoAux = varMinuto;
    }

    if (varHora < 10) {
        horaAux = "0" + varHora;
    } else {
        horaAux = varHora;
    }
    document.getElementById("horas").innerHTML = horaAux;
    document.getElementById("minutos").innerHTML = minutoAux;
    document.getElementById("segundos").innerHTML = segundoAux;
}

//--- boton PAUSAR -----
function pausar() {
    // detiene la ejecucion de la funcion se indicó en setinterval, pero no vuelve a 0.
    document.getElementById("botPausar").className = "btn boton boton-disabled";
    document.getElementById("botIniciar").className = "btn boton boton-enabled";
    document.getElementById("botReset").className = "btn boton mx-4 boton-enabled";
    clearInterval(cantIntervalos);
}

//--- boton RESET ------
function reset() {
    document.getElementById("botReset").className = "btn boton mx-4 boton-disabled";
    document.getElementById("botIniciar").className = "btn boton boton-enabled";
    document.getElementById("botPausar").className = "btn boton boton-enabled";
    // detiene la ejecucion de la funcion se indicó en setinterval y vuelve a 0 el cronometro
    clearInterval(cantIntervalos);
    inicializar();
}