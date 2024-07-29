"use strict";

// (geolocation), contiene la informacion de la geolocalizacion.
navigator.geolocation;

function getPosition(position){
	// La latitud y la longitud forman la ubicación.

	// Contiene la informacion de la posicion del usuario.
	position;
	// Devuelve la latitud.
	position.coords.latitude;
	// Devuelve la longitud.
	position.coords.longitude;
}

function getErrors(error){
	// En caso de recibir algun error.
}

const options = new Object({
	// '0' indica que siempre dará la información real y no la que hay en caché.
	maximumAge: 0, 
	// El tiempo que tarda en pedir la información.
	timeout: 3000, 
	// Toma todos los recursos de posicionamiento para tener la mayor precisión posible.
	enableHightAccuracy: true
});

// (getCurrentPosition), recibe por parametros los callbacks y las opciones para obtener la posicion.
navigator.geolocation.getCurrentPosition(getPosition, getErrors, options);