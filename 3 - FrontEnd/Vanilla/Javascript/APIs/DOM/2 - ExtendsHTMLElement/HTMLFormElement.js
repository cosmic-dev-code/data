/* =================================== */
/* ===--- Propiedades y métodos ---=== */
/* =================================== */

class HTMLFormElement extends HTMLElement
{
    constructor(){
        const form = document.createElement("form");
    }

    // Establece la 'url' del archivo que recibirá los datos del formulario.
    action = "php/server.php";

    // Establece el tipo de codificación.
    encoding = "encitype-multipart";

    // Recibe el tipo de decifrado de datos.
    enctype;

    // Establece el método de envío (GET o POST).
    method = "POST";

    // Especifica el nombre del formulario, (para el envío de datos).
    name = "form";

    /* Establece la página de destino en la cual se recibirá la respuesta luego de enviar los datos. 
    Recibe los valores: 
        --- (_blank), abre una nueva página y muestra la respuesta.
        --- (_self), carga la respuesta en la misma pestaña.
        --- (_parent), carga el resultado en la pestaña o ventana padre.
        --- (_top), carga el resultado en la ventana padre principal, reemplazando cualquier (frame) o (iframe).
        --- ({nombre}), nombre del (frame) o (iframe) en el cual cargará la respuesta. */
    target = "_blank";

    // Retorna el número de campos de entrada del formulario 
    length;

    // Reutorna un arreglo con los inputs del formulario.
    elements;

    // Retorna la longitud de los inputs.
    elements.length;

    #recorrerElementos = function(){
        // (elements), devuelve todos los campos de entrada del formulario.
        for(let i = 0; i < form.elements.length; i++) form.elements[i] // HTMLInputElement
    }

    // Envía el formulario.
    submit(){}

    // Restaura todos los campos a su (value) predeterminado.
    reset(){}
}

const form = document.createElement("form");