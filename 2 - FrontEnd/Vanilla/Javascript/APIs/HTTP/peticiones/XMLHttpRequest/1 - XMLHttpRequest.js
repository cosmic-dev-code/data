"use strict";

/* ##########===================########## */
/* ######===--- ¿Qué es ajax? ---===###### */
/* ##########===================########## */

/* Ajax es la tecnologia que permite hacer peticiones HTTP de manera asincrona a un archivo o servidor. 
Al referirse de manera (asincrona), se refiere a la posibilidad de hacer peticiones sin 
la necesidad de recargar la pagina para mostrar los datos recibidos. */

/* ##########==============================########## */
/* ######===--- Verificar compatibilidad ---===###### */
/* ##########==============================########## */

var xmlXttp = null;

// Navegadores modernos.
if(window.XMLHttpRequest){
	xmlXttp = new XMLHttpRequest();
}else{
	// Navegadores antiguos como (internet explorer).
	xmlXttp = new ActiveXObject("Microsoft.XMLHTTP");
}

/* ##########==================########## */
/* ######===--- Metodo (GET) ---===###### */
/* ##########==================########## */

let noEnviarDatos = function(){
	let xmlXttp = new XMLHttpRequest();

	xmlXttp.addEventListener("load", () => {
		if(xmlXttp.status === 200) xmlXttp.responseText;
	});

	// No se envia nada y el metodo es GET.
	xmlXttp.open("GET", "servidor.php", true);
	xmlXttp.send();
	xmlXttp.responseType = ("text");
};

let enviarDatos = () => {
	let xmlXttp = new XMLHttpRequest();

	xmlXttp.onreadystatechange = function(){
		xmlXttp.onload = function(){
			xmlXttp.response;
		}
	};

	// Enviamos algun par de variables al servidor.
	xmlXttp.open("GET", ("servidor.php?numero_0=10&numero_1=20&operacion=suma"), true);
	xmlXttp.send();
	xmlXttp.responseType = ("text");
};

/* ##########===================########## */
/* ######===--- Metodo (POST) ---===###### */
/* ##########===================########## */

let enviarDatos = () => {
	let xmlXttp;

	xmlXttp.addEventListener("readystatechange", function(){
		if(this.readyState === 4 && xmlXttp.status === 200){
			document.getElementsByTagName('img').setAttribute(
				URL.createObjectURL(this.response)
				'src'
			);
		}
	});

	// Datos a enviar.
	let cadena = ("el_post="+"este_es_el_post");

	// Metodo POST
	xmlXttp.open("POST", "servidor.php", true);
	// La cabecera indica que los datos se enviaran de manera de formulario.
	xmlXttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// Informacion que se envia.
	xmlXttp.send(cadena);

	xmlXttp.responseType = ("blob");
};

function enviarJSON(){
	xhttp = new XMLHttpRequest();

	// Enviaremos un objeto JSON.
	let json = {
		"nombres": "Brandon Anthony",
		"apellidos": "Olivares, amador",
		"edad": "21"
	};

	xmlXttp.responseType = "text";

	// Especificamos el metodo POST.
	xhttp.open("POST", "http://pagina.in/y/f/users");
	// Establecemos los encabezados, especificando que enviaremos un JSON.
	xhttp.sendRequestHeader("Content-type", "application/json;charset=UTF8");
	// Enviamos el objeto JSON.
	xhttp.send(JSON.stringify(json));

	xhttp.onload = () => {
		if(xhttp.readyState === 4 && xhttp.status === 200) xhttp.response;
	};
}

/* ##########==================########## */
/* ######===--- Metodo (PUT) ---===###### */
/* ##########==================########## */

var xmlXttp = new XMLHttpRequest();

// Metodo (PUT) y (url) con el recurso a actualizar.
xmlXttp.open("PUT", "https://api.example.com/users/1", true);

xmlXttp.setRequestHeader("Content-Type", "application/json");

xmlXttp.onreadystatechange = function () {
	if (xmlXttp.readyState === 4 && xmlXttp.status === 200) {
		console.log(xmlXttp.responseText);
	}
};

// Informacion a enviar.
xmlXttp.send(
	JSON.stringify({name: 'John Doe'})
);

/* ##########=====================########## */
/* ######===--- Metodo (DELETE) ---===###### */
/* ##########=====================########## */

var xmlXttp = new XMLHttpRequest();

// Metodo (DELETE) y (url) con el recurso a actualizar.
xmlXttp.open("DELETE", "https://api.example.com/users/1", true);

xmlXttp.onreadystatechange = function () {
	if (xmlXttp.readyState === 4 && xmlXttp.status === 200) {
		console.log(xmlXttp.responseText);
	}
};

xmlXttp.send();

/* ##########======================########## */
/* ######===--- Metodo (OPTIONS) ---===###### */
/* ##########======================########## */

var xmlXttp = new XMLHttpRequest();

// Especificamos el metodo (OPTIONS).
xmlXttp.open('OPTIONS', 'https://api.example.com', true);

xmlXttp.onreadystatechange = function(){
	if(xmlXttp.readyState === XMLHttpRequest.DONE){
		/* El metodo (getAllResponseHeaders) devuelve los encabezados con los tipos de 
		peticiones que se pueden realizar a la API. */
		console.log(
			xmlXttp.getAllResponseHeaders()
		);
	}
}

xmlXttp.send();