/* ##########=====================########## */
/* ######===--- Rest parameters ---===###### */
/* ##########=====================########## */

/**
 * Esta es otra manera de recibir un arreglo.
 */

function sumarNumeros(...numeros) {
	return numeros.reduce((sum, elemento) => sum += elemento);
}

sumarNumeros(10, 10, 5, 3.5, 50); // 78.5

/**
 * Otro ejemplo utilizando un parametro y los demas parametros como (Rest param) haciendo uso del operador (spread).
 */

function calculadora(simbolo = "+", ...arrNumeros){
	/* El operador 'spread' actua como un array en los parametros de una funcion. */
	let suma = arrNumeros.reduce((suma, numero) => {

		if(simbolo === "+"){
			return (suma += numero);
		}else if(simbolo === "-"){
			return (suma -= numero);
		}else if(simbolo === "/"){
			return (suma /= numero);
		}else if(simbolo === "*"){
			return (suma *= numero);
		}else{
			return (suma += numero);
		}
		
	});

	return suma;
}

calculadora("+", 5,5,5); // 15
calculadora("-", 10, 10, 5); // -5
calculadora("*", 5,5,2); // 50
calculadora("/", 10,2,2); // 2.5