function listarNumeros() {
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}

//Reemplazamos esta funcion por la de switch

/* function ejecutar(numEjercicio) {
    if (numEjercicio == 1) {
        listarNumeros();
    } else if (numEjercicio == 2) {
        listarNumerosReversa();
    } else if (numEjercicio == 3) {
        listarPares();
    }else if(numEjercicio==4){
        listarImpares();

    }

} */

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

//reto for
/*Crear una función llamada listarImpares, que imprima en consola los
números impares desde el 1 hasta el 7*/
function listarImpares() {
    for (i = 1; i <= 7; i += 2) {
        console.log(i);
    }
}

//swich
function ejecutar(numEjercicio) {
    switch (numEjercicio) {
        case 1: listarNumeros();
            break;
        case 2: listarNumerosReversa();
            break;
        case 3: listarPares();
            break;
        case 4: listarImpares();
            break;
    }
}
