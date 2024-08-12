"use strict";

/* ##########===========########## */
/* ######===--- Cache ---===###### */
/* ##########===========########## */

/* 

ADVERTENCIA: --- NECESITA UN SERVIDOR ---

El caché sirve como el (indexedDB), es como una base de datos en dónde se 
va el macenar información. En este caso la información que almacenamos 
pueden ser las 'urls' de nuestros archivos pertenecientes a nuestro 
sitio web, esto con el fin de que cuando el usuario entre a 
nuestra página los archivos se carguen de 
forma más rápida. */

// Creamos un nuevo cache llamado (nuevoCache).
caches.open("nuevoCache");

/* El cache nos devuelve una promesa. */
let cachePromesa = caches.open("nuevoCache");

cachePromesa.then(function(respuestaCache){

	// ------------------------------- //
	// ------ Agregar elementos ------ //
	// ------------------------------- //

	// Metodo que nos permite cargar un archivo al cache.
	respuestaCache.add("index.html");

	/* Metodo que nos permite cargar multiples 
	archivos al cache, (solo puede leer arrays). */
	respuestaCache.addAll(["index.html", "index.css", "index.js"]);

	// ---------------------------- //
	// ------ Leer elementos ------ //
	// ---------------------------- //

	/* (Match) es similar al metodo (querySelector), solo va a seleccionar 
	el primer archivo coincidente y lo va a retornar en forma de 
	una promesa ya resuelta, (resolve). */
	respuestaCache.match("index.html").then(resultado => {
		console.log("El archivo obtenido es: "+resultado);
	});

	/* (MatchAll) es similar al metodo (querySelectorAll), va a seleccionar 
	todos archivos coincidentes y los va a retornar como array 
	en forma de una promesa ya resuelta, (resolve). */
	respuestaCache.matchAll("todosLosIndex.html").then(resultado => {
		console.log("El array con todos los archivos coincidentes es: "+resultado);
	});

	/* (Keys) devuelve todos los datos almacenados en chache en forma de un 
	array de objetos. */
	respuestaCache.keys().then(todosLosDatos => {
		console.log("Estos son todos los datos: "+todosLosDatos);
	});

	// --------------------------------- //
	// ------ Comprobar elementos ------ //
	// --------------------------------- //

	respuestaCache.has().then(existe => {
		console.log("Existe: "+existe);
	});

	// ---------------------------------- //
	// ------ Reemplazar elementos ------ //
	// ---------------------------------- //

	// Reemplaza un archivo del cache.
	respuestaCache.put("index.html", "newIntex.html");

	// -------------------------------- //
	// ------ Eliminar elementos ------ //
	// -------------------------------- //

	/* (Delete) nos permite eliminar un archivo del cache y podemos recibir 
	la respuesta resuelta, (resolve) de la promesa. */
	respuestaCache.delete("index.html").then(resultado => {
		console.log("El archivo se elimino correctamente.");
	});
	
});

/* ##########============================================########## */
/* ######===--- Trabajar el cache por medio de (fetch) ---===###### */
/* ##########============================================########## */

// Creamos una nueva mini base de datos (chache).
caches.open("nuevoCache").then(respuestaCache => {
	// Hacemos la peticion para agregar un archivo.
	fetch("index.html").then(resultado => {

		/* Agregamos el archivo con el metodo (put) en lugar 
		del metodo (add), pero (put) sirve para añadir y 
		para modificar elementos del cache. */
		respuestaCache.put("index.html", resultado);
	});
});

/* ##########===================================########## */
/* ######===--- Agregar, extraer y reemplazar ---===###### */
/* ##########===================================########## */

// Comprobamos que el cache esta disponible.
if(window.caches){

	// Abrimos un nuevo espacio en el cache llamado (version-1).
	caches.open("version-1").then(cache => {
		// Agregamos varios archivos.
		cache.addAll(["real.html","real.css","real.js"])
			.then(() => {
				/* --- Una vez grabados los archivos. --- */
				console.log("Archivos grabados correctamente!");
				// Reemplazamos el archivo (real.html) por un texto plano (Hola mundo).
				cache.put("real.html", new Response("Hola mundo"));
			});

		// Seleccionamos el archivo (real.html).
		cache.match('real.html').then(response => {
			// Convertimos el archivo a texto plano.
			response.text().then(response => {
				console.log(response); // Imprimimos en consola.
			});
		});
	});

	// Extraemos todos los caches que hay, en este caso solo tenemos uno, (version-1).
	caches.keys().then(response => {
		console.log("Los keys: "+response); // Imprimimos los caches devueltos.
	});
}