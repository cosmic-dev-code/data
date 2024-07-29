/* ##########============########## */
/* ######===--- Canvas ---===###### */
/* ##########============########## */

const canvas = document.createElement("canvas");

// Medidas del (canvas), medidas de la (imagen).
canvas.width = 600;
canvas.height = 600;

// Crear el canvas en imagen.
let imageString = canvas.toDataURL();
// Puede especificarse el formato de la imagen.
let imageString = canvas.toDataURL("image/jpeg");

// Puede utilizarse.
document.getElementById("img").src = imageString;

// NOTA: La imagen se devuelve en (base64).

/* ##########=========================########## */
/* ######===--- Utilizar con (Blob) ---===###### */
/* ##########=========================########## */

// Obtener lienzo en imagen.
var dataURL = canvas.toDataURL("image/png");

// Desconvertir de base64.
var binary = atob(dataURL.split(',')[1]);

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