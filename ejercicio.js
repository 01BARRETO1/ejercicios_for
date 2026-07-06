function listarNumeros() {
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}

function ejecutar(numEjercicio) {
    if (numEjercicio == 1) {
        listarNumeros();
    } else if (numEjercicio == 2) {
        listarNumerosReversa();
    } else if (numEjercicio == 3) {
        listarPares();
    }

}

//en reversa

function listarNumerosReversa() {
    for (let i = 3; i > 0; i--) {
        console.log(i);
    }
}

//ejercicio 3, lsitar pares
function listarPares() {
    for (let i = 0; i < 10; i += 2) {
        console.log(i);
    }
}