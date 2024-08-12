/* ##########==================================########## */
/* ######===--- Declaracion e inicializacion ---===###### */
/* ##########==================================########## */

// Las funciones declaradas con la palabra reservada (function) se guardan en (pila).
// Las anonimas no se guardan en pila.
function fun(){
	// ...
}

/**
 * Estas funciones no se guardan en pila, son por (declaracion).
 */

// Función ánima.
let fun = function(){
	// ...
};

// Función ánima flecha.
let fun = () => {
	// ...
};

// La funcion por (clase), es como las demas anonimas.
let fun = new Function(`
	// No tiene acceso al codigo de fuera, es codigo totalmente (independiente).
`);

// ------------------ //
// ------ IIFE ------ //
// ------------------ //

/* IIFE o "Immediately Invoked Function Expression" es un patron de diseño de JavaScript que 
consiste en crear una funcion e invocarla justamente despues de su creacion. */

// Función anónima autoinvocada.
(function(){
	// El codigo de fuera no tiene acceso al codigo de aqui dentro.
}());

// Otra forma de hacerlo.

(function(){
	// El codigo de fuera no tiene acceso al codigo de aqui dentro.
})();

// ------------------------- //
// ------ Llamamiento ------ //
// ------------------------- //

// Las funciones pueden mandar a llamar otras dentro de si mismas.
function funcion(){
	funcionUno();
	funcionDos();
}

funcion();

// ----------------------- //
// ------ Anidacion ------ //
// ----------------------- //

// Pueden haber funciones dentro de funciones y llamarse entre si.
function funcion(){
	var anidadaUno = () => {
		// ...
	};
	function anidadaDos(){
		// ...
	}

	anidadaUno();
	anidadaDos();
}

funcion();

/* ##########================########## */
/* ######===--- Parametros ---===###### */
/* ##########================########## */

function decirNombre(nombre, edad){
	// Recibimos los parametros y los imprimimos en consola.
	console.log(`${nombre} tiene una edad de ${edad}`);

	return 0;
}

decirNombre("Brandon", 21);

// Las funciones anonimas no tienen limitaciones.
const myFunction = function(numero){
	for(i = 0; i < numero; i++){
		console.log("Numero: "+i+" hasta ("+numero+")");
	}
};

myFunction(30);

// ------------------------------------- //
// ------ Valores predeterminados ------ //
// ------------------------------------- //

// Definir desde los parametros de la funcion.
var potencia = (numero, pot = 2) => {
	console.log(numero * pot);
}

potencia(4);
potencia(5, 55);

// -------------------- //
// ------ Arrays ------ //
// -------------------- //

// Recibe un array opcional por parametro.
function sumarArray(array = []){
	let suma = 0;
	array.forEach(elemento => suma += (Number(elemento)));

	console.log(suma);
}

// Podemos pasarle un array y este sumara cada uno de sus valores.
sumarArray([5,5,5]); // 15

sumarArray([
	10, 20, 5, 2, 1, 10
]); // 38

/**
 * Recibir mas parametros.
 */

const mostrarUsuarios = (arrUsuarios = new Array(), mensaje = "No hay mas usuarios") => {
	console.group("Usuarios");
	arrUsuarios.forEach(usuario => console.log(usuario));
	console.groupEnd();
	console.info(mensaje);
};

// Recibir solo array.
mostrarUsuarios([
	"Brandon", "Anthony", "Cosmic"
]);

// Recibir ambos parametros.
mostrarUsuarios(
	["Brandon", "Anthony", "Cosmic"], 
	"Son todos los usuarios por ahora."
);

// ---------------------------------- //
// ------ Destructurando array ------ //
// ---------------------------------- //

/**
 * Recibiendo argumento normal.
 */

function recibirArray(data){
	let uno = data[0], 
		 dos = data[1];

	uno; // "Brandon"
	dos; // "Anthony"
}

recibirArray(["Brandon", "Anthony"]);

/**
 * Destructurar argumento.
 */

function recibirArray([uno, dos]){
	// Evito declarar y asignar los valores.

	uno; // "Brandon"
	dos; // "Anthony"
}

recibirArray(["Brandon", "Anthony"]);

/* ##########======================########## */
/* ######===--- Retorno de datos ---===###### */
/* ##########======================########## */

function suma(numero0 = 0, numero1 = 0){
	return (numero0 + numero1);
}

suma(10, 15); // 25

// Podemos pasar algunos parametros ya definidos y trabajar con ellos.
var toFixed = function(numero = 0, decimales = 0){
	let numTexto = numero.toString();
	let numFinal = "";
	decimales++;

	if(numTexto.includes(".")){
		let posicion = numTexto.indexOf(".")+decimales;
		numFinal = numTexto.slice(0, posicion);
   }else{
   	return 0;
   }

	return (parseFloat(numFinal));
};

toFixed(5.553252525425,3); // 5.553
toFixed(); // 0
toFixed(555.555); // 555

// -------------------- //
// ------ Arrays ------ //
// -------------------- //

var devolverComentarios = new Function(`
	/* Podemos retornar directamente un 'array'. */
	return [
		"Uno", "Dos", "Tres"
	];
`);

devolverComentarios().forEach(element => {
	// ...
});

// ----------------------- //
// ------ funciones ------ //
// ----------------------- //

function obtener(){
	// Aqui se retorna una funcion anonima.
	return function(){
		console.log("Hola mundo");
	};
}

// Obtener y ejecutar.
const func = obtener(); func();

// Ejecutar directamente.
obtener()();

////// ------------------------------------------------------------------------------------- //////

// Se recibe un callback y se ejecuta, retornando lo que devuelve el callback.
function obtener(callback){
	return callback();
}

// Se recibe una funcion anonima, (el callback).
obtener(function(){
	// Se retorna una funcion.
	return function(){
		console.log("Hola mundo");
	};

// Se ejecuta la funcion retornada, ().
})();

// ----------------------------- //
// ------ El operador (|) ------ //
// ----------------------------- //

// Imaginemos que tenemos una funcion que puede retornar una valor incierto.

function funcion(parametro = true){
	// Muchos procesos...
	return parametro;
}

/**
 * Al recibir el valor.
 */

// De acuerto al valor se asigna el valo u otro.
let variable = funcion() ? funcion() : new OtroValor();

// Esta es la manera simplificada de acerlo.

let variable = funcion() | new OtroValor();

porOtraFuncion(
	funcion() | "Un string"
);

/* ##########==================########## */
/* ######===--- Recursividad ---===###### */
/* ##########==================########## */

var i = 10;

function myFunction(){
   if(i < 1){
      console.log(i);
   }else{
      console.log(i); --i;

      // Se consigue la recursividad de ambas maneras.
      return myFunction();
      myFunction();
   }
};

myFunction();

/* ##########==============########## */
/* ######===--- Callback ---===###### */
/* ##########==============########## */

/**
 * NOTA: Las funciones pueden aceptar (funciones anonimas) por (callbacks).
 */

function mostrar(callback){
	console.log(callback);
	return false;
}

function callBack(texto){
	return mostrar(texto);
}

// Se llama al (callback) que retorna algo que sera enviado a otra funcion.
callBack(() => {
	return "El resultado es: "+(5+8);
});