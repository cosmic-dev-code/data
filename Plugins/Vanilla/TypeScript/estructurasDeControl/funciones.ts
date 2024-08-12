"use strict";

/* ##########============================########## */
/* ######===--- Declarar e inicializar ---===###### */
/* ##########============================########## */

function funcion(){
	// Esta funcion no necesita ningun tipado.
}

/**
 * Funciones (anonimas).
 * 
 * Cuando las funciones anonimas se asignan a una variable, esta puede declararse 
 * con el tipado de (Function).
 */

let funcion:Function = function(){
	// Esta es una variable que alberga una función.
};

var funcion:Function = new Function(`
	// Una variable que alberga una funcion.
`);

var funcion:Function = () => {
	// Una variable alberga un función flecha.
};

/* ##########==============================########## */
/* ######===--- Parametros por funciones ---===###### */
/* ##########==============================########## */

// Cada parametro lleva su propio tipado.
let decirNombre:Function = (nombre:string, edad:number) => `${nombre} tiene una edad de ${edad}`;

decirNombre("Brandon", 21);
decirNombre(55, 'Brandon'); // Error: Porque el tipado no es correcto.

// ------------------------------------ //
// ------ Arrays como parametros ------ //
// ------------------------------------ //

function recibiendoArreglos(array:number[] = [], array2:string[]){
	// Podemos recibir en particular un arreglo inicializado.
	// Tambien un arreglo sin inicializar, (pero esta especificado como arreglo).
}

recibiendoArreglos(
	// Recibiendo el arreglo de solo numeros.
	[10, 20, 30], 
	// Recibiendo el arreglo de solo strings.
	["Hola", "Numero uno"]
);

// ------------------------------------ //
// ------ Objetos por parametros ------ //
// ------------------------------------ //

// Especifica como tipado el objeto que se va a recibir, especificando sus propiedades.
function getObject(usuario:{name:string, age:number}){
	usuario.name; // string
	usuario.age; // number
}

// ------------------------------------ //
// ------ Objetos con (interfaz) ------ //
// ------------------------------------ //

// Cuando se trata de objetos mas grandes, definimos una interfaz.

interface Usuario{
	names:string;
	surnames:string;
	age:number;
	active:boolean;
}

// Ahora podemos recibir el objeto de acuerdo a la interfaz.
function showUser(user:Usuario):void{
	console.log(`
		<dl>
			<dt>Usuario: ${user.names}</dt>
			<dd>
				<ul>
					<li><b>Nombres: </b>${user.names}</li>
					<li><b>Apellidos: </b>${user.surnames}</li>
					<li><b>Edad: </b>${user.age}</li>
					<li><b>Active: </b>${user.active}</li>
				</ul>
			</dd>
		</dl>
	`);
}

// ----------------------------------- //
// ------ Parametros opcionales ------ //
// ----------------------------------- //

// La funcion recibe dos parametros opcionales (?).
function parametros(arg0:string, arg1?:number, arg2?:[string, number|boolean]){
	// ...
}

/* Cuando se coloca el signo (?) delante del nombre de la variable entonces la variable se 
convierte en (opcional). */
let getRespose = (array:string[], text?:string):string => {
	if(text === undefined){
		// ...
	}else{
		// ...
	}
};

// Omitimos el segundo parametro.
getRespose(["Hola", "Mundo"]);

// Colocamos ambos parametros.
getRespose(new Array("Uno", "Dos", "Tres"), "Numeros: ")

// ---------------------------------- //
// ------ Multiples parametros ------ //
// ---------------------------------- //

// Colocamos (|) para referirnos a un parametro que puede adquirir uno u otro dato.
function parametros(param:string|number){
	// El parametro puede ser un (string) o un (number).
}

function multiples(
	// Parametro que puede tomar uno u otro valor.
	param:string|number, 
	// Parametro que puede recibir uno u otro arreglo, (opcional).
	param1:string[]|number[] = [], 
	// Parametro que puede recibir varios tipados de datos, (opcional).
	param2?:string|number|boolean|boolean[]):string
{
	// ...
}

/* ##########======================########## */
/* ######===--- Retorno de datos ---===###### */
/* ##########======================########## */

// Esta funcion retorna un dato de tipo (number).
let calculator:Function = function(number0:number, number1:number):number{
	return Math.pow(number0, number1)
};

calculator(10, 10); // number

// Error: Los parametros no son iguales a lo recibido.
calculator("10", 10);

// --------------------------- //
// ------ Retornar nada ------ //
// --------------------------- //

// Al indicar (void) al final, significa que la funcion no retorna ningun valor.
let printNumbers:Function = (number:number|string):void => {
	// ...
};

printNumbers("55");

// Podemos indicar que no vamos a recibir nada.
printNumbers(55) as null;

// ------------------------------- //
// ------ Retornar 'arrays' ------ //
// ------------------------------- //

// Al final indicamos el tipado que la funcion puede retornar (string[]|number[]).
function retornarArreglo(nombre:string = "Ninguno"):string[]|number[]{
	// ...
}

// Recibimos el arreglo.
let arreglo:string[]|number[] = retornarArreglo("Bandon");