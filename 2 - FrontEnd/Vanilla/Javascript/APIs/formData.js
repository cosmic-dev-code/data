
/* ##########===============########## */
/* ######===--- Form data ---===###### */
/* ##########===============########## */

/* (FormData) como su nombre lo dice, se encarga de guardar 
los datos del formulario, y estos pueden ser enviador 
a traves de (ayax o fetch) simulando un envio 
real de un formulario. */

"use strict";

/* ##########=================================================########## */
/* ######===--- Manipular los datos de un objeto (FormData) ---===###### */
/* ##########=================================================########## */

/* Nuevo objeto el cual puede contener los datos del formulario. */
const formData = new FormData();

/* Por medio del metodo (name) agregamos un nuevo 'name' con su valor, 
como en el caso de un formulario. */
formData.append("name", "valor");

/* Modifica un valor de un 'name' ya existente, si dicho 'name' no existe, 
entonces lo crea. */
formData.set("name", "nuevo valor");

// Se utiliza para obtener el valor de un 'name'.
formData.get("name");

formData.append("nombre", "Brandon");
formData.append("nombre", "Anthony");
formData.append("nombre", "Cosmic");

formData.get("nombre"); // Da: Brandon.

// Devuelve un 'array' con todos los valores de los campos 'nombre'.
formData.getAll("nombre"); // Da: Array(3) => [Brandon, Anthony, Cosmic].

// Comprueba si el 'name' existe o no. Devuelve un valor booleano.
formData.has("name");

// Elimina un 'name'.
formData.delete("name");

// Vacia el form data eliminando todos los keys.
for(let key of formData.keys()) formData.delete(key);

/* ##########=================================########## */
/* ######===--- Iterar el objeto (FormData) ---===###### */
/* ##########=================================########## */

formData.forEach(function(valor, indice){
	console.log(indice + " => " + valor);
});

/* Da: 
	nombre => Brandon
	segundo_nombre => Anthony
	edad => 21
*/

/* El metodo (keys) devuelve los 'names', pero es 
necesario iterarlos para poder verlos. */
const keys = formData.keys();

for(let key of keys){
	console.log(key);
}

// El metodo (values) devuelve los valores de los 'names', pero es necesario iterarlos para poder verlos.
const valores = formData.values();

for(let valor of valores){
	console.log(valor);
}

/* ##########======================================########## */
/* ######===--- Obtener valores de un formulario ---===###### */
/* ##########======================================########## */

/* Formulario: */
document.write(`
	<form method="POST" action="server.php" autocomplete="on">
		<label>
			<span>Primer nombre: <span>
			<input type="text" name="nombre" placeholder="Ingrese su primer nombre">
		</label>
		<label>
			<span>Segundo nombre: <span>
			<input type="text" name="nombre_1" placeholder="Ingrese su segundo nombre">
		</label>
		<label>
			<span>Edad: <span>
			<input type="number" name="edad" placeholder="Ingrese su edad">
		</label>
		<div>
			<input type="submit" value="Enviar">
		</div>
	</form>
`);

document.getElementsByName('nombre')[0].value = "Brandon";
document.getElementsByName('nombre_1')[0].value = "Anthony";
document.getElementsByName('edad')[0].value = 21;

// Obtenemos la etiqueta (form).
const $formulario = document.querySelector('form[autocomplete="on"]');

/* Al meter el elemento (form) por parametro de la clase (FormData) le estamos 
dando automaticamente todos los atributos 'name' con sus respectivos valores. */
const formData = new FormData($formulario);

// Le podemos dar un 'name' adisional con su valor.
formData.append("registrar_al_usuario", true);

formData.forEach(function(valor, indice){
	console.log(indice + " => " + valor);
});

/* Da: 
		nombre => Brandon
		nombre_1 => Anthony
		edad => 21
		registrar_al_usuario => true
*/

/* ##########====================================########## */
/* ######===--- Trabajar con (FormData) y ajax ---===###### */
/* ##########====================================########## */

const $formulario = document.querySelector('[action="servidor.php"]');

// Extraemos los datos del formulario y le agregamos un nuevo campo llamado (registrar_al_usuario).
const formData = new FormData($formulario);

formData.append("registrar_al_usuario", true);

let xhttp;

/* Iniciamos con ajax. */
if(window.XMLHttpRequest){
	xhttp = new XMLHttpRequest();
}else{
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.addEventListener("load", event => {
	if(xhttp.status === 200){
		document.querySelector('#idText').textContent = event.target.responseText;
	}
});

xhttp.open("POST", "servidor.php", true);

// NOTA: No es necesario definir la cabecera como un formulario, porque el objeto (FormData) simula elenvio de datos.

// xmlXttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhttp.send(formData);

/* ##########=====================================########## */
/* ######===--- Trabajar con (FormData) y fetch ---===###### */
/* ##########=====================================########## */

/* Extraemos el elemento del formulario. */
const $formulario = document.querySelector('form[method="POST"]'),
	  $btn = document.querySelector('#idBtn');
	  
// Creamos el objeto (FormData) y le pasamos el elemento (formulario) por parametro.
const formData = new FormData($formulario);

$btn.addEventListener("click", async event => {
	event.preventDefault();

	let result = await fetch("servidor.php", {
		method: "POST",
		body: formData,
		
		// NOTA: No es necesario definir los (headers) porque el objeto (FormData) simula los envios de un formulario.
		
		// headers: {"Content-type": "encitype-multipart/x-www-form-urlencoded"}
	});
	let response = await result.text();

	document.querySelector('#idText').textContent = response;
});

/* ##########=====================================########## */
/* ######===--- Trabajar con (FormData) y axios ---===###### */
/* ##########=====================================########## */

// Mandamos el (formData) por segundo parametro.
axios.post("servidor.php", formData, {
	// Tipo de formulario.
    'Content-Type': 'multipart/form-data'
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log("ERR: ", error);
});