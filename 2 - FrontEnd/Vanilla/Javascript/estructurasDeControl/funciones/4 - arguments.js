/* ##########===========================########## */
/* ######===--- El objeto (arguments) ---===###### */
/* ##########===========================########## */

// En este caso el metodo (max) permite pasar una cantidad indefinida de parametros.
Math.max(5,2,3,1,5,6,7,2,7,3);


function sumar(){
	let suma = 0;

	/* La palabra reservada (arguments): 
		--- Es un arreglo que contiene todos los argumentos de la funcion. */
	for(let argument of arguments){
		suma += argument;
	}

	return suma;
}

sumar(5,5,5); // 15

// ------------------------------------- //
// ------ Operador de propagacion ------ //
// ------------------------------------- //

let sumar = function(){

	// Contiene la propiedad (length), que devuelve la longitud del arreglo.
	if(arguments.length > 0){
		// Podemos destruirlo y convertir a un arreglo normal, eso nos dara los metodos de arreglos.
		let arrArguments = [...arguments];

		// Suma.
		let suma = arrArguments.reduce((suma, argument, index, arrayCompleto) => {
			suma += argument;
			return suma;
		});

		// Retornamos la suma.
		return suma;
	}

	// Retornamos nada.
	return 0;
};

sumar(); // Da: 0.
sumar(5); // Da: 5.
sumar(5,5,5); // Da: 15.

/* ##########=====================================########## */
/* ######===--- (Parametros) desde cierto punto ---===###### */
/* ##########=====================================########## */

let superSuma = (string = "", ...misArgumentos) => {
	/* (...argumentos) representa que todos los demas parametros seran recibidos en el arreglo (misArgumentos) */
  let resultado = 0;

  for(let i = 0; i < misArgumentos.length; i++){
    resultado += misArgumentos[i];
  }

  console.log(string + resultado);
};

// Podemos pasar cuántos parámetros querramos.
superSuma("La super suma es: ",5,5,5,17,21,2,3,6,9);
// Solo suma y da el resultado directamente.
superSuma(5,5);