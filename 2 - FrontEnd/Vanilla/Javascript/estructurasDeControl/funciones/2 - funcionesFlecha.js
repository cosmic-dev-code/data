/* ##########======================================########## */
/* ######===--- Funciones y flecha, (diferencia) ---===###### */
/* ##########======================================########## */

window.nombres = "Brandon Anthony";
					 
let objeto = {
	nombres: "Brandon Anthony",
	// El "this" hace referencia al objeto como tal.
	info: function(){
		console.log("Los nombres son: ("+this.nombres+").");

		// Hace referencia a la funcion.
		(this === function);
	}
}

let objeto = {
	nombres: "Brandon Anthony",
	/* Las funciones flecha no son recomendadas para ser usadas como métodos o constructores, ya que dentro de ellas 
	el "this" hace referencia al objeto "window". */
	info: () => {
		console.log(`Los nombres son: (${this.nombres}).`);

		// Hace referencia al objeto (window).
		(this === window);
	}
}

/* El "this" dentro de las funciones flecha hace referencia al objeto "window", por eso es que podemos crear dicha 
propiedad e invocarla. */
objeto.info();

/* ##########==================########## */
/* ######===--- Acortamiento ---===###### */
/* ##########==================########## */

// Las funciones flecha se utilizan para acortar.
let array = [true, 199, "Hola"];

// -------------------------------- //
// ------ Funciones normales ------ //
// -------------------------------- //

array.forEach(function(data){
	// Funcion normal.
});

array.forEach(function(data, index, array){
	// Funcion normal.
});

// ------------------------------ //
// ------ Funciones flecha ------ //
// ------------------------------ //

array.forEach(data => {
	// Funcion flecha, (no necesita parentesis).
});

array.forEach((data, index, array) => {
	// Funcion flecha, aqui (necesita los parentesis para indicar mas de un valor).
});

/* ##########======================########## */
/* ######===--- Retorno de datos ---===###### */
/* ##########======================########## */

// -------------------------------- //
// ------ Funciones normales ------ //
// -------------------------------- //

// Funciones anonimas.
const potencia = function(data){
	return (data * 2);
};

const suma = function(numUno, numDos){
	return (numUno + numDos);
};

// Funcion normal.
function calculos(numero, op = "+"){
	// Algun codigo grande en esta zona.

	return numero;
}

// ------------------------------ //
// ------ Funciones flecha ------ //
// ------------------------------ //

// Cuando solo hay un parametro obligatorio, no es necesario colocar (parentesis).
const potencia = data => data * 2;

// Ademas las funciones flecha puedes acortarse en una linea cuando el retorno es corto.
const suma = (numUno, numDos) => numUno + numDos;

const calculos = (numero, op = "+") => {
	// Es importante aclarar que las funciones flecha solo pueden declararse de manera anonima.

	return numero
};

/**
 * Ejemplos practicos.
 */

let nuevoArreglo = array.filter(function(data){
	return data.includes("Brandon");
});

nuevoArreglo.forEach(function(data, index){
	console.log(data, index);
});

// La implementacion se vuelve mas facil.
let nuevoArreglo = array.filter(data => data.includes("Brandon"));

// En una sola linea y es opcional retornar datos.
nuevoArreglo.forEach((data, index) => console.log(data, index));