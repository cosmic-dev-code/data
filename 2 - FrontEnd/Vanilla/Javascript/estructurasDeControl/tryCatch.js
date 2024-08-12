{
	/* Los bloques pueden ponerse solos */
}

/* ##########===============########## */
/* ######===--- Try Catch ---===###### */
/* ##########===============########## */

try{
	// Codigo a atrapar.
	variableNoDefinida
	
}catch(errorAtrapado){
	// El error se atrapa en la variable sin especificar tipado.
	console.warn("Ha ocurrido un error: ", errorAtrapado);

// La ejecucion ha terminado.
}finally{
	console.info("Ejecución finalizada.");
}

/* ##########=============================########## */
/* ######===--- Lanzar exepcion (throw) ---===###### */
/* ##########=============================########## */

try{

	/**
	 * La palabra reservada (throw) lanza un error aproposito.
	 */

	// Lanzar un mensaje.
	throw console.warn("Esto es un error intencionado");

	// Lanzar un objeto.
	throw object = {
		nombre: "Brandon",
		edad: 21
	}
	
	// Lanzar un arreglo.
	throw arrNombres = new Array("Uno", "Dos", "Tres");
	
}catch(error){
	// Se recibien los datos.

	typeof error; // "string"

	error.nombre; // "Brandon"

	error[0]; // "Uno"

}finally{
	// Bloque que se ejecuta al final, haya error o no.
}