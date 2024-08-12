"use strict";

/* ##########================########## */
/* ######===--- Estructura ---===###### */
/* ##########================########## */

// Por defecto hace una peticion GET y retorna una promesa.
fetch("https://api.example.com")

	// Se recibe el resultado y este se transforma, por ejemplo en (texto). Esto devuelve otra promesa.
	.then(result => {
		result.text();
	})

	// Se recibe el resultado de la conversion de los datos.
	.then(response => {
		console.log(response);
	})

	// En caso de haber un error, aqui se recibe.
	.catch(error => {
		console.log("Error: ", error);
	});

/**
 * Esta es otra manera de hacerlo.
 */

fetch("https://api.example.com")

	.then(result => result.text())

	// Se recibe el resultado de la conversion de los datos.
	.then(response => console.log(response))

	// En caso de haber un error, aqui se recibe.
	.catch(error => console.log("Error: ", error));

/* ##########=====================########## */
/* ######===--- catch y finally ---===###### */
/* ##########=====================########## */

fetch("http://localhost/documento.txt")
	.then(result => result.text())
	.then(response => {})
	.catch(error => {})

	// Bloque que se ejecuta cuando termina todo, (haya o no errores).
	.finally(() => {
		// ...
	});

/* ##########==================########## */
/* ######===--- Metodo (GET) ---===###### */
/* ##########==================########## */

// No se envia nada al servidor, el metodo es GET.
fetch("servidor.php")
	.then(result => result.text())
	.then(response => {
		// ...
	});

/* Se hace la peticion enviando los parametros: 
	--- (?nombres=Brandon%20Anthony&age=23). */
fetch("servidor.php?nombres=Brandon%20Anthony&age=23")
	.then(result => result.text())
	.then(response => {
		// ...
	});

/* ##########===================########## */
/* ######===--- Metodo (POST) ---===###### */
/* ##########===================########## */

/**
 * Realizar una peticion POST.
 */

fetch("servidor.php", {
	// Indicamos el metodo.
	method: "POST",
	// Esta es la informacion que se envia.
	body: ("el_post="+"post"),
	// Simulamos el envio de un formulario por seguridad.
	headers: {"Content-type": "application/x-www-form-urlencoded"}
})
	.then(result => result.text())
	.then(response => {
		// ...
	});

/**
 * Enviar un JSON al servidor.
 */

// Objeto a enviar.
let data = {
	nombres: "Brandon Anthony", 
	apellidos: "Olivares, amador", 
	edad: 21
};

fetch("https://http://pagina.in/y/f/users",{
	method: "POST",
	// Convertimos el objeto a JSON.
	body: JSON.stringify(data), 
	// Le indicamos al servidor que estamos enviando un JSON.
	headers: {"Content-type": "application/json"}
})
.then(result => result.json())
.then(response => console.log(response);

/* ##########==================########## */
/* ######===--- Metodo (PUT) ---===###### */
/* ##########==================########## */

fetch('https://api.example.com/users/1', {
	// El metodo se indica como (put).
	method: 'PUT', 
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({name: 'John Doe'})
})
	.then(response => response.json())
	.then(data => {
		// ...
	})
	.catch(error => console.error(error));

/* ##########=====================########## */
/* ######===--- Metodo (DELETE) ---===###### */
/* ##########=====================########## */

// El recurso a eliminar esta en la 'url'.
fetch('https://api.example.com/users/1', {
	// Indica el metodo (delete).
	method: 'DELETE'
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error))

/* ##########============================########## */
/* ######===--- Promesas (encadenadas) ---===###### */
/* ##########============================########## */

fetch('https://api.example.com')
	.then((result) => {
		// Si el (status) no es (200).
		if (!result.ok) {
			// Se manda un error y se captura en el metodo (catch).
			throw new Error('HTTP error, status = ' + result.status);
		}
		// De lo contrario, se retorna una promesa con la respuesta.
		return result.text();
	})
	.then((response) => {

		// Recibimos la respuesta que se resuelve aqui.

		return fetch('https://api.example.com', {
			method: "POST",
			// Se utiliza la respuesta para hacer otra peticion.
			body: (JSON.parse(response)), // Nota: Se supone que la respuesta es un JSON válido.
			headers: {"Content-type": "application/x-www-form-urlencoded"}
		});

		// La respuesta se retorna para que se resuelva.
	})
	.then((result) => {
		/* Mismo resultado, verificamos como la primera vez y de ser correcto retornamos la (promesa) 
		para que la respuesta se resuelva. */
		if (!result.ok) {
			throw new Error('HTTP error, status = ' + result.status);
		}
		return result.text();
	})
	.then((response) => {
		// Se resulve la promesa retornada y aqui se recibe el resultado final.

		typeof response; // string
	})

	// Este (catch) se encarga de recibir cualquier error de cualquier promesa, (incluyendo los throw).
	.catch((error) => {
		console.error('Error: ' + error.message);
	});

/* ##########=======================########## */
/* ######===--- (Fetch) asincrono ---===###### */
/* ##########=======================########## */

/**
 * Dado que se recibe una (promesa), esta puede ser asincrona.
 */
const getInfo = async () => {
	// (await) hace que se espere una respuesta para seguir ejecutando el codigo.
	let peticion = await fetch("archivo.txt"); // Fetch por defecto devuelve promesas.
	
	// Recibimos la respuesta y la convertimos a un objeto JSON.
	let resultado = await peticion.json();
	
	console.log(resultado);
};

// -------------------------------------- //
// ------ Utilizar (try) y (catch) ------ //
// -------------------------------------- //

(async function(){
	try{
		let result = await fetch('url');

		// Verificamos el 'status'.
		if(result.status === 200){

			let response = await result.blob();
			sendResponse(response);

		}else{
			throw new Error("Error al pedir la imagen.");
		}

	}catch(error){
		console.log(error);
	}finally{
		console.log("Peticion finalizada.");
	}
}());