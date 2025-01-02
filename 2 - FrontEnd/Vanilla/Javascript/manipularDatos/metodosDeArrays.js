
/* ##########==================================########## */
/* ######===--- Prototipo del objeto (Array) ---===###### */
/* ##########==================================########## */

// Retorna un nuevo arreglo de arreglos.
Array.of(["Hola", "mundo"], [10, 29]);

// Retorna un nuevo arreglo con los elementos.
Array.of(5,6,"Hola",false,29,["Google"]);

// Convierte una lista en arreglo.
Array.from(["Hola", "mundo"]);

// Verifica si el elemento pasado por parametro es un array.
Array.isArray([5, 5, 5]); // Da: true.
Array.isArray(4); // Da: false.

/* ##########==================########## */
/* ######===--- Conversiones ---===###### */
/* ##########==================########## */

// -------------------- //
// ------ String ------ //
// -------------------- //

// Convierte un array completo a una cadena de texto.
let string = array.toString();

// Convierte un array completo a una cadena pero ademas puede especificarse el separador.
string = array.join(",");

/* ##########==================================########## */
/* ######===--- Eliminar o agregar elementos ---===###### */
/* ##########==================================########## */

let array = ["Manzana", "Pera", "Mango"];

// -------------------------------- //
// ------ Eliminar elementos ------ //
// -------------------------------- //

// Elimina el ultimo elemento de un array.
array.pop();
// Elimina y devuelve el ultimo elemento que elimino.
let elemento = array.pop();

// elimina el primer elemento del array y desplaza todos los demás elementos un índice más bajo.
array.shift();

// Elimina y devuelve el primer elemento que elimino.
elemento = array.shift();

/* El metodo (splice) se utiliza para eliminar elementos y devolverlos: 
	--- Recibe el indice desde donde va a eliminar, (contando el indice).
	--- Recibe la cantidad que eliminara a partir del indice. */
array.splice(0, 1);
// Se elimina el indice 1.
array.splice(1, 1);
// Elimina (6) elementos desde el indice (3).
array.splice(3, 6);

// ------------------------------- //
// ------ Agregar elementos ------ //
// ------------------------------- //

// Agrega un nuevo elemento al final del array.
array.push("Fresa");
// Agrega y devuelve la cantidad de elementos del array.
elemento = array.push("Fresa");

// Agrega un elemento al principio del array.
array.unshift("Coco");
array.unshift("Coco", "Elote");

// Agrega y devuelve la cantidad de elementos del array.
elemento = array.unshift("Coco");

/* El metodo (splice) se utiliza para agregar elementos a un array.
	--- Indica desde que posicion se van a agregar los nuevos elementos.
	--- Indica cuantos elementos se van a eliminar. 
	--- Los demas parametros son los elementos que se van a agregar. */
array.splice(2, 0, "Limon", "Pepino");

/* ##########=========================########## */
/* ######===--- Manipular elementos ---===###### */
/* ##########=========================########## */

let arrFrutas = ["Pera", "Manzana", "Uva", "Frambuesa", "Mango", "Coco"];

/* Invierte el arreglo. */
arrFrutas.reverse();
/* Da: ["Coco", "Mango", "Frambuesa", "Uva", "Manzana", "Pera"]. */

// Incorpora un array anidado dentro del padre.
[128, true, 58, ["Map", "Otro"], false].flat(); // [128, true, 58, "Map", "Otro", false]

// Incorpora niveles de anidacion.
[128, ["Map", "Otro", [true, 58]], false].flat(2);

// Incorpora todos los niveles.
[128, ["Map", "Otro", [true, [[125]], 58]], false].flat(2);

/* ##########======================########## */
/* ######===--- Buscar en arrays ---===###### */
/* ##########======================########## */

const arrNumbers = [5,8,3];

// Devuelve la cantidad de elementos del array.
arrNumbers.length;

/* (includes) busca un valor dentro de un array, devuelve un valor booleano. */
arrNumbers.includes(3); // Da: true.
arrNumbers.includes(4); // Da: false.

/* (indexOf) busca el elemento y devuelve la posicion, si da (-1) 
entonces el elemento no se encuentra en el 'array'. */
arrNumbers.indexOf(3); // Da: 3.
arrNumbers.indexOf(4); // Da: -1.

// Busca y devuelve el indice del elemento coincidente.
animals.findIndex(animal => animal === 'elephant'); // 10

// Busca y devuelve el elemento coincidente.
animals.find(animal => animal === 'elephant'); // "elephant"

/* ##########=======================########## */
/* ######===--- Concatenar arrays ---===###### */
/* ##########=======================########## */

let arrFrutas = Array("Manzana", "Pera", "Fresa"),
	arrVerduras = new Array("Calabaza", "Pepino", "Lechuga");

// Concatena los arrays en uno solo, devuelve un array nuevo.
arrFrutas.concat(arrVerduras); // ["Manzana", "Pera", "Fresa", "Calabaza", "Pepino", "Lechuga"].
arrFrutas.concat("uva"); // ["Manzana", "Pera", "Fresa", "uva"]

// El operador (spread) funciona tambien para concatenar 'arrays'.
newArray = [...arrFrutas, ...arrVerduras]; // ["Manzana", "Pera", "Fresa", "Calabaza", "Pepino", "Lechuga"]
newArray = [...arrFrutas, "uva"]; // ["Manzana", "Pera", "Fresa", "uva"]

/* ##########=======================########## */
/* ######===--- Relleno de arrays ---===###### */
/* ##########=======================########## */

// Devuelve un array vacio con (10) espacios declarados.
let array = Array(3); // length 3

// Llena todos los (indices) con el dato especificado.
array.fill("Llenado"); // ["Llenado", "Llenado", "Llenado"]

// Llena desde el indice 1 hasta el 3, (el 4 no cuenta).
array.fill("Llenado", 1, 4);

// Crea un array de (3) espacios y los llena con el dato especificado.
Array(3).fill(10); // [10,10,10]

/* ##########===================########## */
/* ######===--- Cortar arrays ---===###### */
/* ##########===================########## */

let arrFrutas = Array("Manzana", "Pera", "Uva", "Nectarina", "Durazno", "Naranja");

// Devuelve un nuevo array desde el indice indicado en adelante.
let newArray = arrFrutas.slice(2);

/* Toma la (Pera, Uva) y se detiene en el indice 3 en este caso. */
newArray = arrFrutas.slice(1, 3);

/* ##########=====================########## */
/* ######===--- Recorrer arrays ---===###### */
/* ##########=====================########## */

let arrNumbers = Array(5, 10, 15, 20, 25, 30);

// -------------------------- //
// ------ metodo (map) ------ //
// -------------------------- //

/* El metodo (map) recorre los elementos de un arreglo y los retorna en un nuevo arreglo. 
Pueden hacerse modificaciones para el nuevo arreglo retornado. */
let newArrayNumbers = arrNumbers.map(function(indice){
	return (indice*2);
});

let newArrayNumbers = arrNumbers.map((elemento, indice, array) => elemento * 2);
/* Da:

	Array(5,10,15,20,25,30) =>  [0] => 5
	Array(5,10,15,20,25,30) =>  [1] => 10
	Array(5,10,15,20,25,30) =>  [2] => 15
	Array(5,10,15,20,25,30) =>  [3] => 20
	Array(5,10,15,20,25,30) =>  [4] => 25
	Array(5,10,15,20,25,30) =>  [5] => 30

	Array retornado: [10, 20, 30, 40, 50, 60]. */

// ------------------------------ //
// ------ metodo (forEach) ------ //
// ------------------------------ //

/* El metodo (forEach) recorre el array, sin embargo no retorna ninguno nuevo 
ni modifica el existente, solo permite trabajar con sus valores. */
arrNumbers.forEach((elemento, indice, array) => {
	console.log(`Array(${array}) =>  [${indice}] => ${elemento}`);
});

/* Da: 

	Array(5,10,15,20,25,30) =>  [0] => 5
	Array(5,10,15,20,25,30) =>  [1] => 10
	Array(5,10,15,20,25,30) =>  [2] => 15
	Array(5,10,15,20,25,30) =>  [3] => 20
	Array(5,10,15,20,25,30) =>  [4] => 25
	Array(5,10,15,20,25,30) =>  [5] => 30 
*/

// ----------------------------- //
// ------ metodo (filter) ------ //
// ----------------------------- //

// El metodo (filter) retorna un nuevo arreglo solo con los indices que cumplan con la condicion.
let nuevoArray = arrNumbers.filter((elemento, indice) => {
	/* Si la condicion se cumple, el elemento se retorna, de lo contrario se omite y se continua con 
	el siguiente elemento. */
	return (elemento >== 15);
});

/* Da: 
	[0] => 15
	[1] => 20
	[2] => 25
	[3] => 30
*/

// ------------------------------ //
// ------ metodo (flatMap) ------ //
// ------------------------------ //

// Esta es una forma de filtrar y mapear.
[1, 2, 3, 4, 5, 6]
	.filter(n => n % 2 === 0)
	.map(n => n * 2);
	// [2, 6, 10]

// Esta es otra forma de mapear y filtrar.
[1, 2, 3, 4, 5, 6]
	.map(n => n % 2 === 0 ? false : n * 2)
	.filter(n => n !== false);
	// [2, 6, 10]

// El metodo (flatMap) es una mezcla entre el metodo (map) y (filter).
[1, 2, 3, 4, 5, 6]
	.flatMap(n => n % 2 === 0 ? [] : n * 2);
	// [2, 6, 10]

// ----------------------------- //
// ------ metodo (reduce) ------ //
// ----------------------------- //

/* El metodo (reduce) recibe dos parametros: 
	--- El callback que recibira los iteradores.
	--- El valor inicial para el (accumulador).'
*/

// Metodo (reduce).
let suma = arrNumbers.reduce((suma, elemento, indice, arrayCompleto) => {
	// La variable (suma) representa el (acumulador).
	return (suma += elemento);
});

// Significa que el acumulador es un numero.
arrNumbers.reduce((accumulador) => callback(), 10);

// El (accumulador) es un (array).
arrNumbers.reduce(accumulador => callback(), []);

/* Da: 

	Array(1) =>  [10] => 5
	Array(2) =>  [15] => 15
	Array(3) =>  [20] => 30
	Array(4) =>  [25] => 50
	Array(5) =>  [30] => 75

	Resultado retornado: (105).
*/

// -------------------------------- //
// ------ metodo (findIndex) ------ //
// -------------------------------- //

// (findIndex), mapea los datos y solo devuelve el (indice) del elemento coincidente.
const indexAnimal = animals.findIndex(animal => {
	return animal === 'elephant';
});

indexAnimal; // 10

// --------------------------- //
// ------ metodo (find) ------ //
// --------------------------- //

// (find) devuelve el elemento coincidente.
const foundAnimal = animals.find(animal => {
	return animal === 'elephant';
});

foundAnimal; // 'elephant'

// ------------------------------ //
// ------ metodo (entries) ------ //
// ------------------------------ //

// El metodo (entries) devuelve un objeto (Iterator).
let iterator = arrNumbers.entries();

while(!iterator.next().done){
	// Devuelve (false) si todavia quedan indices a iterar.
	iterator.next().done;

	// Devuelve un arreglo con el [indice, valor].
	iterator.next().value
}

// --------------------------- //
// ------ metodo (keys) ------ //
// --------------------------- //

/* El metodo (keys) devuelve los 'indices', pero es 
necesario iterarlos para poder verlos. */
let keys = arrNumbers.keys();

for(let key of keys){
	console.log(key);
}

// ----------------------------- //
// ------ metodo (values) ------ //
// ----------------------------- //

/* El metodo (values) devuelve los valores del array, pero es 
necesario iterarlos para poder verlos. */
let values = arrNumbers.values();

for(let value of values){
	console.log(value);
}