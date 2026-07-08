//️ PARTE 5: PRIMER CONTACTO CON JAVASCRIPT 
/* function generarTabla(){
    let contenedorhTML=document.getElementById("html");
    
    let contenido="";
    for(let i=1; i==1; i++){
        console.log("tabla 5")
        contenido+="<html lang='es' id='html'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Tabla de Multiplicar del 3</title><link rel='stylesheet' href='multiplicar.css'><script src='multiplicar.js'></script></head><body><!-- Contenedor principal de la pagina --><main class='page'>"+
        "<header class='page-header'><!-- Boton solicitado en la parte superior --><button class='test-button' type='button' onclick='generarTabla();'>PROBAR</button>"+
        "<div class='title-group'><p class='eyebrow'>Matem&aacute;tica b&aacute;sica</p><h1 id='table-title'>Tabla de multiplicar del 5</h1></div></header>"+
        "<section class='table-section' aria-labelledby='table-title'><!-- Tabla con los resultados de multiplicar el numero 5 --><table class='multiplication-table'><thead>"+
        "<tr><th scope='col'>Operaci&oacute;n</th><th scope='col'>Resultado</th></tr></thead><tbody><tr><td>5 x 1</td><td>5</td></tr><tr><td>5 x 2</td><td>10</td>"+
        "</tr><tr><td>5 x 3</td><td>15</td></tr><tr><td>5 x 4</td><td>20</td></tr><tr><td>5 x 5</td><td>25</td></tr><tr>"+
        "<td>5 x 6</td><td>30</td></tr><tr><td>5 x 7</td><td>35</td></tr><tr><td>5 x 8</td><td>40</td></tr>"+
        "<tr><td>5 x 9</td><td>45</td></tr><tr><td>5 x 10</td><td>50</td></tr></tbody></table></section></main>"+
        "<!-- Pie de pagina con creditos y logo --><footer class='page-footer'><div class='credit-box'><span>Creado por Carlos Barreto</span>"+
        "<img src='octopus.png' alt='Logo octopus' class='footer-logo'></div></footer></body></html>"
        contenedorhTML.innerHTML=contenido;
    }
} */

function generarTabla() {
    let contenido = ""
    // numero de la caja de texto
    let txtNumero = document.getElementById("numberInput");
    let enteroTxt = txtNumero.value;
    let numero = parseInt(enteroTxt);
    //Titulo
    let tituloHtml = document.getElementById("titulo");
    let title1 = "Matem&aacute;tica b&aacute;sica";
    tituloHtml.innerHTML = "<div class='title-group'> <p class='eyebrow'>" + title1 + "</p> <h1 id='table-title'></h1>"
    let numeroTabla = document.getElementById("table-title");
    numeroTabla.innerHTML = "Tabla de multiplicar del " + numero;
    //Recuperar Tabla
    let operacionResultado1 = document.getElementById("operacionResultado");
    operacionResultado1.innerHTML = "<tr><th scope = 'col'>Operaci&oacute;n</th>"+"<th scope = 'col'> Resultado</th> </tr>"   
 
    let tablaNumero = document.getElementById("tablas");
    for (let i = 1; i <= 13; i++) {
        let num = numero * i;
        let resultado = num
        console.log("tabla del " + numero);
        contenido += "<tr> <td>" + numero + "x" +
            i +
            "</td> <td>"
            + resultado +
            "</td> </tr>";
        tablaNumero.innerHTML = contenido;
    }
}
//VALIDACIONES

//mensajes animados 
const input = document.getElementById("numberInput");
const message = document.getElementById("numberMessage");

input.addEventListener("input", (e) => {
  // limpiar caracteres no numéricos
  input.value = input.value.replace(/[^0-9]/g, "");

  // si está vacío, mostrar error
  if (input.value === "") {
    input.classList.add("is-invalid");
    message.classList.add("is-visible");
    message.textContent = "- ingrese un número";
  } else {
    input.classList.remove("is-invalid");
    message.classList.remove("is-visible");
  }
});

//SIN NUMERO O CAMPO VACIO
function generarTabla() {
    const input = document.getElementById("numberInput");
    const message = document.getElementById("numberMessage");
    const numero = parseInt(input.value);

    // Validación: si está vacío o no es número
    if (isNaN(numero) || input.value === "") {
        input.classList.add("is-invalid");
        message.classList.add("is-visible");
        message.textContent = "- ingrese un número válido";
        return; // detener la función, no genera la tabla
    } else {
        input.classList.remove("is-invalid");
        message.classList.remove("is-visible");
    }

    // Título
    document.getElementById("titulo").innerHTML = `
        <div class="title-group">
            <p class="eyebrow">Matem&aacute;tica b&aacute;sica</p>
            <h1 id="table-title">Tabla de multiplicar del ${numero}</h1>
        </div>
    `;

    // Encabezado de tabla
    document.getElementById("operacionResultado").innerHTML = `
        <tr>
            <th scope="col">Operaci&oacute;n</th>
            <th scope="col">Resultado</th>
        </tr>
    `;

    // Filas de la tabla
    let filas = "";
    for (let i = 1; i <= 13; i++) {
        filas += `
            <tr>
                <td>${numero} x ${i}</td>
                <td>${numero * i}</td>
            </tr>
        `;
    }
    document.getElementById("tablas").innerHTML = filas;
}
