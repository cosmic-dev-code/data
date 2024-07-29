
/* ##########=================########## */
/* ######===--- Una promesa ---===###### */
/* ##########=================########## */

/* Creamos una variable la cual almacena una promesa, a la promesa le pasamos 
por parametro una funcion en donde trabajaremos la promesa:

	(resolve) es la funcion que devuelve la respuesta correcta. 
	(reject) es la funcion que devuelve un error en caso deque lo haya. */

// Numero a validar.
let numero = 10;

let promise = new Promise(function(resolve, reject){
	if(!(numero > 20)){
		reject("El numero no es mayor."); // Retorna el valor esperado.
	}else{
		resolve("El numero es mayor a 20."); // Retorna un error en caso de haberlo.
	}
});

/* Dado que la variable (promesa) almacena el resultado retornado 
por la funcion pues...

	-- Extraemos el valor esperado por medio del metodo (then).
	-- Extraemos el error por medio del metodo (catch). */

promise.then(function(respuesta){

	// Mostramos el valor proporcionado por la funcion (resolve).
	console.log(respuesta);

}).catch(function(error){

	// Mostramos el valor proporcionado por la funcion (reject).
	console.log("Error: "+error);

}).finally(function(){

	console.log('Linea que se ejecuta siempre.');
});

// ------------------------------------- //
// ------ La promesa es asincrona ------ //
// ------------------------------------- //

promesa = new Promise(function(resolve, reject){
	/* Las promesas son asincronas dado que una vez que esta lista 
	la respuesta esta se retorna. */
	setTimeout(function(){
		resolve("Hola mundo!");
		// Se retorna la cadena de texto despues de 3 segundos.
	}, 3000);
});

promesa.then(function(respuesta){

	// Despues de 3 segundos recibimos la respuesta y la mostramos.
	console.log(respuesta);

}).catch(function(error){

	// Si hay un error lo recibimos y lo mostramos despues de 3 segundos.
	console.log("Error: "+error);

}).finally(function(){

	console.log('Linea que se ejecuta siempre.');
});

/* ##########==========================########## */
/* ######===--- Funciones asincronas ---===###### */
/* ##########==========================########## */

// --------------------------------- //
// ------ Implementar promesa ------ //
// --------------------------------- //

/* Las promesas trabajan con funcion 'asincronas', las funciones 
'asincronas' esperan a recibir una respuesta de otra funcion la 
cual tiene una promesa dentro para seguir ejecutandose. */

function implementarPromesa(){
	// Variable a validar.
	let validarCadena = "Brandon Anthony Olivares Amador.";

	/* Retornamos una promesa. */
	return new Promise(function(resolve, reject){
		/* Luego de 3 segundos se ejecuta la funcion. */
		setTimeout(function(){
			/* La promesa retorna el valor esperado o un error. */
			(validarCadena.indexOf("Anthony") !== -1) ?
				resolve("La cadena se encuentra.")
			:
				reject("No se encuentra.");
		}, 3000);
	});
}

// ------------------------------- //
// ------ Funcion asincrona ------ //
// ------------------------------- //

/* La funcion asincrona se declara poniendo al principio la 
palabra reservada (sync). */

/* La palabra reservada (await) significa esperar, 
por lo que la funcion (recibirRespuesta) va a 
esperar hasta que la respuesta este lista 
y despues la almacenara en la variable (respuesta). */

async function recibirRespuesta(){

	let respuesta = await implementarPromesa();

	/* Luego de que termine de esperar y recibir la respuesta 
	la linea de arriba, entonces se ejecuta esta instruccion. */
	console.log(respuesta);
}

/* Ejecutamos la funcion la cual mostrara los resultados 
luego de 3 segundos. */
recibirRespuesta();

/* ##########=============================================########## */
/* ######===--- Atrapar errores en funciones asincronas ---===###### */
/* ##########=============================================########## */

let implementarPromesa = function(){
	let respuesta = new String("Brandon Anthony Olivares Amador");

	// Retornamos la promesa la cual tiene una respuesta.
	return new Promise(function(resolve, reject){
		/* Se retorna una cadena de texto luego de 3 segundos. */
		setTimeout(function(){
			(respuesta.indexOf("Olivares") !== -1) ? 
				resolve("La cadena se encuentra.")
			:
				reject("No se encuentra.");
		}, 3000);

	});
};


/* Dado que en las funciones asincronas no tenemos disponible 
el metodo (catch), debemos utilizar la estructura de control 
'try, catch'. */
let recibirRespuesta = async function(){
	try{
		let respuesta = await implementarPromesa();

		console.log(respuesta);
	}catch(error){
		/* Por medio del 'catch' atrapamos el error, (reject).  */
		console.log("Error: "+error);
	}finally{
		console
	}
};

recibirRespuesta();
// Mandamos a llamar la funcion la cual muestra la cadena de texto que retorna la promesa.

/* ##########===================================########## */
/* ######===--- Esperar respuestas asincronas ---===###### */
/* ##########===================================########## */

const getInfoRandom = function(nombre){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(nombre);
		/* Por medio del metodo (random) perteneciente 
		al objeto (Math) establecemos un tiempo de 
		respuesta de 0 a 3 segundos. */
		}, Math.random()*3000);
	});
};

const showData = async function(){

	/* Mandamos por parametro de la funcion (getInfoRandom) el nombre que vamos a recibir en 
	diferentes tiempos, cada una de las variables (data) espera (await) a recibir 
	el dato de la promesa. */

	// No se ejecutara la siguiente linea de codigo hasta que la variable haya recibido el dato, luego lo imprime.
	let data0 = await getInfoRandom("Brandon");
	console.log(data0);
	let data1 = await getInfoRandom("Anthony");
	console.log(data1);
	let data2 = await getInfoRandom("Olivares");
	console.log(data2);
};

showData();
// Ejecutamos la funcion que a demostrar los datos.

/* ##########========================########## */
/* ######===--- Multiples promesas ---===###### */
/* ##########========================########## */

// Variable a validar.
let validar = true;

/* Promesa que retorna un objeto o un error. */
let promesa = () => {
	return new Promise((resolve, reject) => {
		if(validar){
			let object = {
				nombre: "Brandon",
				apellido: "Olivares",
				edad: 21
			}; resolve(object);
		}else{
			reject("Error al extraer el objeto.");
		}
	});
};

/* Promesa que retorna los valores del objeto o un error. */
let promesaFinal = (respuesta) => {
	return new Promise((resolve, reject) => {
		if(respuesta){
			resolve("Nombre: "+respuesta.nombre+" "+respuesta.apellido+" y edad: "+respuesta.edad);
		}else{
			reject("Error al recibir el objeto.");
		}
	});
};

/* Forma de conseguir los datos por medio de una funcion asincrona. */
let recibirRespuesta = async () => {
	try{
		let respuesta = await promesa();
		let respuestaFinal = await promesaFinal(respuesta);
		console.log(respuestaFinal);
	}catch(error){
		console.log("Error: "+error);
	}finally{
		console.warn("Me ejecuto si o si.");
	}
};
recibirRespuesta();

/* Forma de conseguir los datos por medio de los metodos (then, catch y finally). */
promesa().then(respuesta => {
	return promesaFinal(respuesta);
}).then(respuestaFinal => {
	console.log(respuestaFinal);
}).catch(error => console.log("Error: "+error)).finally(() => {
		console.warn("Me ejecuto si o si.");
}).finally(() => {
	console.log('Fin del programa.');
});

/* ##########===========================########## */
/* ######===--- Sincronia en paralelo ---===###### */
/* ##########===========================########## */

// Tenemos la primer promesa.
let suma = new Promise((resolve, reject) => {
    resolve("Primera");
});

// Segunda promesa.
let resta = new Promise((resolve, reject) => {
    resolve("Segunda");
});

Promise.all(
	// En un arreglo enviamos las promesas que deseamos recibir.
    [suma, resta]
).then(function([result, result1]){

	// Recibimos en un arreglo los resultados resultos de cada promesa.

}).catch(error => console.log(error));

/**
 * Funciona tambien con retorno de promesas.
 */

Promise.all(
	[
		retornarPromesaUno(), 
		retornarPromesaDos(), 
		retornarPromesaTres()
	]
).then(function([result, result1, result2]){

	// Recibimos en un arreglo los resultados resultos de cada promesa.

}).catch(error => console.log(error));

// NOTA: Todas las promesas se resulven y una vez hecho eso se recibe el array con los resultados por parametro.