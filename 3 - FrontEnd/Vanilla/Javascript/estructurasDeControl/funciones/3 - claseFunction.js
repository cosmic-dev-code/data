/* ##########====================########## */
/* ######===--- (new Function) ---===###### */
/* ##########====================########## */

/* Todos los parámetros que se le pasen al constructor de la clase (Function) serán los parámetros de la 
función. Cuando se coloque la palabra reservada 'return' dentro de uno de los parámetros, ése 
parámetro representará el cuerpo de la función. */

// Ejemplo: ...
let fun = new Function('numero0', 'numero1', 'return (numero0+numero1)');

fun(5, 5); // Da: 10.

///////// ------------------------------------------------------------------------------ /////////

// En este caso recibimos los parámetros y después definimos el cuerpo de la función.
const calcularEdad = new Function('year', 'nacimiento', `
	let edad = (year - (nacimiento+1));
	return ("La edad es: "+edad);
`);

calcularEdad(1999);

///////// ------------------------------------------------------------------------------ /////////

// Por parámetro ponemos un array y desarrollamos el cuerpo de la función.
let sumar = new Function('...arrNumeros', `
	let suma = 0;
	// Aquí dentro va el código.
	arrNumeros.forEach(numero => {
		suma += numero;
	});
	
	return ("La suma es: "+suma);
`);

sumar(10, 5, 20);

///////// ------------------------------------------------------------------------------ /////////

// A los argumentos se les puede dar valores por defecto.
let superSuma = new Function('arg = 0', 'arg1 = 0', 'arg2 = 0', `
	console.log("Hola");
	let suma = (arg+arg1+arg2);
	
	return suma;
`);

superSuma(10, 10, 10);