/* ##########==========########## */
/* ######===--- JSON ---===###### */
/* ##########==========########## */

// Los objetos JSON se utilizan para guardar o enviar informacion en formata de "string".

/* ##########======================########## */
/* ######===--- Convertir a JSON ---===###### */
/* ##########======================########## */

// Para convertir un objeto JavaScript a JSON, se utiliza este formato.
let objetoJson = {
	"nombre": "Brandon",
	"apellidos": "Olivares Amador",
	"edad": 21
};

// Este objeto tambien es valido a convertir.
let objetoJson = {
    nombre: "Brandon",
    "apellidos": "Olivares Amador",
    edad: 21
};

/**
 * Convierte un objeto a "string".
 */
let jsonString = JSON.stringify(objetoJson);

// "{\"nombre\": \"Brandon\",\"Apellidos\": \"Olivares Amador\",\"Edad\": 21}"
console.log(jsonString);

/* ##########=======================########## */
/* ######===--- Desconvertir JSON ---===###### */
/* ##########=======================########## */

let jsonString = "{\"nombre\": \"Brandon\",\"Apellidos\": \"Olivares Amador\",\"Edad\": 21}";

/**
 * Convierte un JSON en formato de cadena a objeto.
 */
let objeto = JSON.parse(jsonString);

objeto.nombre;
objeto.apellido;
objeto.edad;