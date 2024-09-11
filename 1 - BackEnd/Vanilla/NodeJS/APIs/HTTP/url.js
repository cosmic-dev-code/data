"use strict";

// Este modulo nos permite analizar y trabajar con las URLs.
var url = require('url');

// -------------------------- //
// ------ Converciones ------ //
// -------------------------- //

// De "string" a URL.
const location = url.parse('http://localhost:8080?lol=Nuevo&names=Brandon Anthony', true);

// De URL a "string".
const locationstring = url.format({
	protocol: 'https',
	host: 'www.ejemplo.com',
	pathname: '/ruta',
	search: '?param1=valor1&param2=valor2'
});

// ------------------------- //
// ------ Propiedades ------ //
// ------------------------- //

const location = url.parse('http://localhost:8080?lol=Nuevo&names=Brandon Anthony', true);

// URL
location.href; // "https://webdev.brandondeveloper.com/projects"

// Dominio del archivo HTML y subdominio.
location.hostname; // "webdev.brandondeveloper.com"

// Path.
location.pathname; // "/"
location.path; // "/products/info"

// Protocolo.
location.protocol; // "http" || "https"

// Puerto.
location.port; // "8080"

// ------------------------ //
// ------ Parametros ------ //
// ------------------------ //

// Parametros.
location.search; // "?lol=Nuevo&names=Brandon%20Anthony"

// Devuelve un objeto con los queries.s
location.query; // { lol: "Nuevo", names: "Brandon Anthony" }