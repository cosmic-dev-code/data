"use strict";

/* ##########=========================########## */
/* ######===--- Introduccion a ajax ---===###### */
/* ##########=========================########## */

function ajax(){
	let peticion;

	// Validamos si el metodo existe.
	if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
	else peticion = new ActiveXObject("Microsoft.XMLHTTP");

	// El evento (onreadystatechange/readystatechange) se activa (4) veces, una vez por cada cambio en readyState.
	peticion.addEventListener("readystatechange", () => {
		/* La propiedad (readyState) tiene 4 cambios: 
			--- La primera (1) significa que la solicitud se creo correctamente.
			--- La segunda (2) significa que la solicitud se envio correctamente, fue recibida correctamente.
			--- La tercera (3) significa que se esta procesando la peticion.
			--- La cuarta (4) significa que el resultado fue recibido y que ya se puede utilizar. */
		if(peticion.readyState === 4){
			/* La propiedad (status) muestra el estado de la peticion: 
				--- (404), significa que no se encontro la direccion.
				--- (200), significa que el archivo se encontro y todo salio bien. */
			if(peticion.readyState === 4 && peticion.status === 200){

				peticion.responseText;
			}
		}
	});

	peticion.open("GET", "documento.txt", true);
	peticion.send();
}