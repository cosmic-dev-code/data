/* ##########============########## */
/* ######===--- Canvas ---===###### */
/* ##########============########## */

const canvas = document.createElement("canvas");

// ------------------------------- //
// ------ Insertar (Imagen) ------ //
// ------------------------------- //

// Define la relacion de la imagen.
canvas.width = 600;
canvas.height = 600;

// Acciones para imprimir la imagen dentro del canvas...

// ------------------------------ //
// ------ Obtener (Imagen) ------ //
// ------------------------------ //

// Obten la imagen convertida a (string).
let imageString = canvas.toDataURL();

// Puedes especificar el (formato).
let imageString = canvas.toDataURL("image/jpeg");

// Puede utilizarse.
document.getElementById("img").src = imageString;

/**
 * NOTA: La imagen se devuelve en (base64).
 */

/* ##########======================########## */
/* ######===--- Convertir a Blob ---===###### */
/* ##########======================########## */

// Luego de haber dibujado algo en el (canvas)...

// -------------------------------------------- //
// ------ Convertir manualmente a (Blob) ------ //
// -------------------------------------------- //

// Obtener datos en formato (string).
var dataURL = canvas.toDataURL("image/png"), 
// Desconvertir de base64.
	binary = atob(dataURL.split(',')[1]);

// Convertir a un (array) de enteros.
var array = [];
for(let i = 0; i < binary.length; i++){
    array.push(
        binary.charCodeAt(i)
    );
}

// Crear (Blob).
var blob = new Blob(
    [new Uint8Array(array)], 
    {type: 'image/png'}
);

// Convierte a URL.
const url = URL.createObjectURL(blob);

// ---------------------------- //
// ------ Obtener (Blob) ------ //
// ---------------------------- //

/* El metodo (toBlob) obtiene: 
	--- Callback recibiendo el (Blob).
	--- Formato del (blob) a recibir. */
canvas.toBlob(function(blob) {

	// Convierte a URL.
	const url = URL.createObjectURL(blob);

}, 'image/png');