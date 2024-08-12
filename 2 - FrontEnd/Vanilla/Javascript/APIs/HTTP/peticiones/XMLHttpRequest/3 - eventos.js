"use strict";

/* ##########=============================########## */
/* ######===--- oneventos - (funciones) ---===###### */
/* ##########=============================########## */

const ajax = () => {
	const xhttp = new XMLHttpRequest();

	xhttp.open("GET", "textPlano.txt", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
	xhttp.responseType = ("text");

	// Cambios del (state).
	xhttp.onreadystatechange = () => {

		// Se ejecuta cuando (inicia) el evento (readystatechange).
		xhttp.onloadstart = () => {console.log("Inicia el evento.");};

		// Se ejecuta cuando (esta en progreso) el evento (readystatechange).
		xhttp.onprogress = () => {console.log("Evento en progreso.");};

		/**
		 * Se ejecuta cuando (hay respuesta) del evento (readystatechange).
		 * 
		 * NOTA: Aqui se puede omitir el estado (readyState) === (opcional), ya que cuando se ejecuta el (onload), 
		 * significa que hay un (readyState) de (200).
		 */
		xhttp.onload = () => {
			if(xhttp.status === 200){
				console.info(
					"%cRespuesta: "+xhttp.responseText,
					"color: blue;background: #ccc;padding: 20px 10px;"
				);
			}
		};

		// Se ejecuta cuando (produce un error) el evento (readystatechange).
		xhttp.onerror = function(){
			console.error(
				"Hubo un error: "+xhttp.readyState+" y "+xhttp.status
			);
		};

		// Se ejecuta cuando (se aborta) el evento (readystatechange).
		xhttp.onabort = () => {console.info("El evento se aborto.");};

		// Se ejecuta cuando (termina) el evento (readystatechange).
		xhttp.onloadend = () => {console.info("El evento ha terminado.");}
	};
};

/* ##########====================================########## */
/* ######===--- oneventos - (funciones flecha) ---===###### */
/* ##########====================================########## */

function ajax(){
	const xhttp = new XMLHttpRequest();

	xhttp.open("GET", "textPlano.txt", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
	xhttp.responseType = ("text");

	// Cambios del (state).
	xhttp.onreadystatechange = function(){

		this.onloadstart = function(){
			// ...
		};

		xhttp.onprogress = function(){
			// ...
		};

		/**
		 * (function) tiene disponible a (this).
		 */
		this.onload = function(){
			if(this.status === 200){
				console.info(
					"%cRespuesta: "+this.responseText,
					"color: blue;background: #ccc;padding: 20px 10px;"
				);
			}
		};

		xhttp.onerror = function(){
			console.error(
				"Hubo un error: "+this.readyState+" y "+this.status
			);
		};

		this.onabort = function(){
			// ...
		};

		// Se ejecuta cuando (termina) el evento (readystatechange).
		xhttp.onloadend = function(){
			// ...
		};
	};
}

/* ##########============================########## */
/* ######===--- Escuchadores de evento ---===###### */
/* ##########============================########## */

function ajax(){
	const xhttp = new XMLHttpRequest();

	xhttp.open("GET", "textPlano.txt", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
	xhttp.responseType = ("text");

	// Cambios del (state).
	xhttp.addEventListener('readystatechange', event => {

		xhttp.addEventListener('loadstart', event => {
			// ...
		});

		xhttp.addEventListener('progress', event => /* ... */);

		xhttp.addEventListener('load', function(event){
			if(this.status === 200){
				console.info(
					"%cRespuesta: "+xhttp.responseText,
					"color: blue;background: #ccc;padding: 20px 10px;"
				);
			}
		});

		xhttp.addEventListener('error', event => {
			console.error(
				"Hubo un error: "+this.readyState+" y "+this.status
			);
		});

		xhttp.addEventListener('abort', event => {
			// ...
		});

		xhttp.addEventListener('loadend', event => /* ... */);
	});
}