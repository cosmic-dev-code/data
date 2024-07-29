/* ##########=================########## */
/* ######===--- (prototype) ---===###### */
/* ##########=================########## */

/* En JavaScript, un prototipo es un objeto que actúa como plantilla para otros objetos. Cada objeto en JavaScript 
tiene un prototipo que hereda propiedades y métodos de su prototipo.

NOTA: El (prototipo) es una propiedad que solo un constructor puede tener. */

// -------------------------------- //
// ------ Prototipo (global) ------ //
// -------------------------------- //

// Es el prototipo global que comparten todas los datos.
Object.prototype;

// Ejemplo.

// Propiedad (toString) global para todos los datos.
Object.prototype.toString(); // "[object Object]"

// Todos los datos poseen el mismo metodo.
cadena.toString();
numero.toString();
booleano.toString();
funcionAnonima.toString();

// ------------------------ //
// ------ Prototipos ------ //
// ------------------------ //

/**
 * Todos los tipos de datos poseen sus propios prototipos los cuales les 
 * proporcionan algunos metodos y propiedades.
 * 
 * Observando el prototipo podemos ver las propiedades y metodos que tienen.
 */

// Muestran las propiedades y metodos de los cuales pueden disponer las instancias.
String.prototype;
Number.prototype;
Boolean.prototype;
Array.prototype;
RegExp.prototype;
Function.prototype;

/**
 * Ejemplo de como se utiliza un prototipo.
 */

// Clase (String).
String.prototype.sclice; // Function
String.prototype.indexOf; // Function
String.prototype.length; // 0

// Instancia (String).
"Uno".sclice; // Function
"Uno".indexOf; // Function
"Uno".length; // 3

/* ##########=================########## */
/* ######===--- (__proto__) ---===###### */
/* ##########=================########## */

/* La propiedad (__proto__) es una propiedad que solo una instancia puede tener, ya que (__proto__) apunta 
al (prototype) del que fue instanciado. */

// Ejemplo.

"Cadena de texto".__proto__; // String

true.__proto__; // Boolean

[].__proto__; // Array

/^[a-z]$/.__proto__; // RegExp

funcionAnonima.__proto__; // Function

/* ##########======================########## */
/* ######===--- Prototipo global ---===###### */
/* ##########======================########## */

/**
 * Ya que el prototipo global para todos los objetos en JavaScript es (Object), 
 * podriamos acceder al prototipo de los constructores.
 */

"cadena".__proto__; // String

"cadena".__proto__.__proto__; // Object

// Similar a.

String.__proto__; // Object

// ---------------------------------- //
// ------ Prototipo de objetos ------ //
// ---------------------------------- //

/**
 * Los objetos contienen su prototipo (Object) el cual es el global.
 */

let objeto = {
	nombrea: "Brandon Anthony",
	apellido: "Olivares Amador",
	edad: 21
}

objeto.__proto__; // Object

// Mas alla del prototipo global (Object) no se encuentra otro.
usuario.__proto__.__proto__; // null

/* ##########==========================########## */
/* ######===--- Multiples prototipos ---===###### */
/* ##########==========================########## */

/* Como sabemos todos los datos en JavaScript son una instancia de un prototipo, pero muchos de ellos 
son instancias de mas prototipos. */

/* Podemos observar en el ejemplo que el "arreglo" contiene su prototipo (Array) 
que pertenece a su vez al prototipo (Object). */

["arreglo"].__proto__; // Array
["arreglo"].__proto__.__proto__; // Object

/**
 * Por lo tanto el dato puede utilizar los metodos y propiedades de ambos prototipos.
 */

Array.prototype.length; // 0
Object.prototype.toString; // Function

[23].length; // 1
[23].toString(); // "23"

/* ##########==========================########## */
/* ######===--- Modificar prototipos ---===###### */
/* ##########==========================########## */

/**
 * NOTA: Es importante tener en cuenta la diferencia entre (__proto__) y (prototype) al modificarlos.
 */

// Puede modificar a todas las instancias existentes y a la clase.
instancia.__proto__;

// Solo puede modificar las instancias que se creen a partir de ahora, (no a las existentes).
String.prototype;

/**
 * Modificar (__proto__) y (prototype).
 */

// El constructor es (String).
"Cadena".__proto__; // String

// Agrega un nuevo metodo al constructor, (incluyendo los objetos ya instanciados).
"Cadena".__proto__.deleteSpaces = function(){
	console.log(`Texto: ${this}`);
};

// Agrega un nuevo metodo a la clase String, (pero no a los objetos ya instanciados).
String.prototype.deleteSpaces = function(){
	console.log(`Texto: ${this}`);
};

// Todas las cadenas poseeran ese metodo.
"Brandon".deleteSpaces(); // "Texto: Brandon"

// --------------------------------------------- //
// ------ Modificar el prototipo (global) ------ //
// --------------------------------------------- //

// Agregamos un nuevo metodo al constructor (Object).

true.__proto__.__proto__.toArray = function(){
	return [
		Object.keys(this), 
		Object.values(this)
	];
};

// Todos los datos que tengan ese prototipo, pueden utilizarlo.

[].__proto__.__proto__.toArray; // Function

"Cadena".toArray(); // [['0', '1', '2', '3', '4', '5'], ['C', 'a', 'd', 'e', 'n', 'a']]

usuario.toArray(); // [["nombres", "edad"], ["Brandon", 22]]

/* ##########======================########## */
/* ######===--- Crear prototipos ---===###### */
/* ##########======================########## */

// ----------------------------------------- //
// ------ Crear (clase) e (instancia) ------ //
// ----------------------------------------- //

// Tenemos una clase propia.
class Usuario{
	nombre = "";
	edad = 0;
	info(){}
}

// Y una instancia de la misma.
const usuario = new Usuario();

// ----------------------------------- //
// ------ Utilizar (prototipos) ------ //
// ----------------------------------- //

// Muestra los metodos y propiedades que pueden tener las instancias de esta clase.
Usuario.prototype;

// Muestra la clase de la cual fue instanciado el objeto.
usuario.__proto__; // Usuario

usuario.__proto__.__proto__; // Object

// ------------------------------------ //
// ------ Modificar (prototipos) ------ //
// ------------------------------------ //

// Agrega un metodo a las instancias de la clase (Usuario) y a la clase.
usuario.__proto__.obtenerNombre = function(){
	return this.nombre;
};

// Agregar un metodo a la clase (Usuario).
Usuario.prototype.obtenerNombre = function(){
	return this.nombre;
};

/**
 * De manera que podemos utilizarlos.
 */

usuario.obtenerNombre();