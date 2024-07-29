
/* ##########==================================########## */
/* ######===--- ¿Qué es el 'service worker'? ---===###### */
/* ##########==================================########## */

/* ADVERTENCIA: --- NECESITA UN SERVIDOR --- */

/* Los services workers son archivos (js) que seutilizan 
como intermediarios entre la pagina web y el servidor, 
este ejemplo muestra mejor el funcionamiento: 

	--- Pagina web hace la peticion al (service worker), 
	y del (service worker) al servidor. ---

		[Pagina web] ---> [serviceWorker] ---> [servidor]  

	--- Luego el servidor devuelve la respuesta al (service worker) 
	y del (service worker) a la pagina web. ---

		[Pagina web] <--- [serviceWorker] <--- [servidor]

El (service worker) es capaz de hacer muchas cosas, es un 
document (js) lleno de muchos escuchadores de eventos. */

/* ##########====================================================########## */
/* ######===--- Validar si esta disponible el (service worker) ---===###### */
/* ##########====================================================########## */

if(navigator.serviceWorker){
	console.log("El service worker esta disponible.");
}else{
	console.log("El service worker no esta disponible.");
}

/* ##########=====================================########## */
/* ######===--- Inicializar el (service worker) ---===###### */
/* ##########=====================================########## */

///////// --- --- --- Archivo (miJs.js) --- --- --- /////////

if(navigator.serviceWorker){
	/* Por medio del metodo (register) inicializamos el archivo 
	(service worker) el cual sera un documento (js). */
	navigator.serviceWorker.register("archivo.js");

}else{
	console.log("El service worker no esta disponible.");
}

/* ##########===========================================########## */
/* ######===--- Comprobaciones en el (service worker) ---===###### */
/* ##########===========================================########## */

///////// --- --- --- Archivo (archivo.js) --- --- --- /////////

// En este archivo decir (self) es lo mismo que decir (this).

/* El evento (install) se ejecuta solo la primera vez, por lo que 
solo mandara el mensaje cuando el worker se registre por 
la primera vez. */
self.addEventListener("install", e => console.log("Instalando el service worker:", e));

/* El evento (active) permite saber si el (service worker) se encuentra registrado. */
self.addEventListener("active", () => console.log("El service worker esta activo."));

/* El evento (error) se ejecuta cuando hay un error en el (service worker). */
self.addEventListener("error", e => console.log("Hubo un error: "+e));

/* El evento (fetch) se ejecuta cuando se realiza una peticion al (service worker). */
self.addEventListener("fetch", e => console.log("Peticion detectada", e));

/* ##########====================================================########## */
/* ######===--- Intercambio entre la web y el (service worker) ---===###### */
/* ##########====================================================########## */

///////// --- --- --- Archivo (miJs.js) --- --- --- /////////

if(navigator.serviceWorker){

	// Registrar el archivo (js)
	navigator.serviceWorker.register("archivo.js");

	// La propiedad (ready) devuelve una promesa.
	let serviceWorkerResult = navigator.serviceWorker.ready;

	// Recibimos la respuesta.
	serviceWorkerResult.then(respuesta => {
		/* Por medio de la propiedad (active) podemos saber si 
		el (service worker) se encuentra activo, si el 
		(service worker) se encuentra activo entonces 
		mandamos un mensaje al archivo (worker) por 
		medio del metodo (postMessage). */
		respuesta.active.postMessage("Este es un mensaje para el (service worker).");
	});

	/* El evento (message) permite escuchar cuando recibimos un mensaje. */
	navigator.serviceWorker.addEventListener("message", e => {
		// Mostramos el mensaje enviado desde el worker.
		console.log("Mensaje recibido desde el worker:", e.data);
	});

}else{
	console.log("El service worker no esta disponible.");
}

///////// --- --- --- Archivo (archivo.js) --- --- --- /////////

self.addEventListener("install", e => console.log("Instalando el service worker:", e));

self.addEventListener("active", () => console.log("El service worker esta activo."));

self.addEventListener("error", e => console.log("Hubo un error: "+e));

self.addEventListener("fetch", e => console.log("Peticion detectada", e));

// Por medio del evento (message) recibimos un mensaje.
self.addEventListener("message", e => {

	/* Mostramos el mensaje que recibimos. */
	console.log("Mensaje recibido:", e.data);

	/* Enviamos un mensaje devuelta. */
	e.source.postMessage("Mensaje devuelta desde el worker.");
});

/* ##########======================########## */
/* ######===--- Peticiones fetch ---===###### */
/* ##########======================########## */

self.addEventListener("fetch", function(event)){

	/* Muestra cada una de las peticiones, desde 
	el (html, css, javascript), etc. */
	console.log(event.request);

	// Muestra la 'url' de cada peticion.
	console.log(event.request.url);
}

///////// --- --- --- Archivo (archivo.js) --- --- --- /////////

/* ##########==================================########## */
/* ######===--- Modificaciones de peticiones ---===###### */
/* ##########==================================########## */

// CANCELAR UNA PETICION.
self.addEventListener("fetch", function(event){

	/* Interceptamos las peticiones y buscamos entre las 
	peticiones los estilos (css). */
	if(event.request.url.includes("real.css")){
		event.respondWith(null); // Cancelamos esa peticion.
	}

	/* Por m edio de la funcion (fetch) enviamos la peticion y 
	recibimos la respuesta. */
	let peticion = fetch(event.request);
		peticion = fetch(event.request.url);
		peticion = fetch('documento.html');

	// Ejecutamos la peticion.
	event.respondWith(peticion);
});

// MODIFICAR UNA PETICION.
self.addEventListener("fetch", function(){
	// Interseptamos la peticion (css).
	if(event.request.url.includes("real.css")){
		/* Creamos un objeto (respuesta):

			--- En el primer parametro recibe el contenido del documento.
			--- En el segundo parametro recibimos un objeto con la cabecera 
			del tipo de contenido, en este caso texto (css). */
		let response = new Response(`
			body{background-color: red; color: darkred;}
		`, {
			headers: {'Content-Type': 'text/css'}
		});

		/* Enviamos la respuesta que creamos reemplazandola por la 
		peticion (css) original. */
		event.respondWith(response);
	}
});

// REEMPLAZAR UNA PETICION.
self.addEventListener("fetch", function(event){
	/* Interceptamos la peticion al archivo (index.html). */
	if(event.request.url.includes("index.html")){

		// Creamos la nueva URL con la ruta de otro archivo (html).
		let nuevaUrl = fetch('segundoIndex.html');

		// Cambiamos la peticion inicial por la nueva.
		event.respondWith(nuevaUrl);
	}
})

/* ##########=======================########## */
/* ######===--- Archivos en cache ---===###### */
/* ##########=======================########## */

/* Variables constantes las cuales contienen el 
nombre del cache que almacenara los datos. 

(CACHE_STATIC) contiene el nombre del cache el cual se 
va a encargar de guardar todos los archivos estaticos, 
los que no van a cambiar pero se van a actualizar 
en caso que haya una nueva actualizacion.
(CACHE_DYNAMIC), contiene el nombre del cache el cual 
se encargara de guardar todos los archivos que se 
realizan por peticiones.
(CACHE_INMUTABLE), contiene el nombre del cache el cual se 
encargara deguardar aquellos archivos que nunca van a 
cambiar. */

const CACHE_STATIC = "static-1";
const CACHE_DYNAMIC = "dynamic-1";
const CACHE_INMUTABLE = "inmutable-1"

// Cuando elservice Worker se instale entonces...
self.addEventListener("install", e => {
	/* (caches) devuelve una promesa la cual almacenamos 
	en la variable (cacheProm). */
	const cacheProm = caches.open(CACHE_STATIC)
		.then(cache => {
			/* Almacenamos varios archivos */
			return cache.addAll([
				"real.html",
				"real.js"
			]);
		});

	/* En el cache (inmutable) guardamos el archivo (css). */
	const cacheInmutable = caches.open(CACHE_INMUTABLE)
		.then(cache => cache.add("real.css"));

	/* Esperamos a que ambas promesas del (caches) guardadas en 
	las variables (cacheProm y cacheInmutable) terminen de 
	guardar los datos. */
	e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});

// Cuando se intercepten peticiones entonces...
self.addEventListener("fetch", e => {

	// Buscamos cada peticion dentro del cache.
	const respuesta = caches.match(e.request)
		.then(response => {
			/* Si el archivo que pide la peticion es encontrado 
			en cache entonces lo retornamos. */
			if(response) return response;

			/* Si el archivo que pide la peticion no se encuentra 
			en el cache entonces por medio de la funcion (fetch) 
			reenviamos la peticion al servidor. */

			return fetch(e.request).then(newResp => {
				/* Una vez hecha la peticion, pasamos a guardar 
				el archivo pedido en cache. */
				caches.open(CACHE_DYNAMIC)
					.then(cache => {
						/* Grabamos la peticion en el cache. */
						cache.put(e.request, newResp);
					});

				// Clonamos la peticion y la retornamos.
				return newResp.clone();
			});
		})

	/* Mandamos como peticion la promesa perteneciente de (caches).  */
	e.respondWith(respuesta);
});