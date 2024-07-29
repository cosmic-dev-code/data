
/* ##########=======================================########## */
/* ######===--- Declarar e inicializar un 'array' ---===###### */
/* ##########=======================================########## */

// Un arreglo que solo permite textos.
var arrAnimales:string[] = [
	"Perro", "Gato", "Pollo", "Perico", "Serpiente", "Escorpión"
];

// Ani permite cualquier valor.
let arrVarios:any = ["Perro", true, 3,];
var arrPersona:any = [
	["Brandon", 21], ["Anthony", 19]
];

// Especificamos cada tipo del campo del arreglo.
let array:[string, number, boolean] = ["Texto", 52, true];

/**
 * Haciendo uso de la clase (Array).
 */

let array:null[] = new Array(); // Otra forma de crear un array.

// Array simple.
let arrAnimales:string[] = new Array(
	"Perro", "Gato", "Pollo", "Perico", "Serpiente", "Escorpión"
);

// Array dentro de arrays por medio de la clase Array.
let arrPersona:any[] = new Array(
	["Brandon", 21], ["Anthony", 19]
);

// ------------------- //
// ------ Nodos ------ //
// ------------------- //

const $arrDivs:NodeListOf<Element> = document.querySelectorAll('div');

$arrDivs.forEach((element:HTMLElement, index:number) => {
	console.log("Elemento ["+index+"] => ", element);
});

// ----------------------------------- //
// ------ La palabra (readonly) ------ //
// ----------------------------------- //

// La palabra (readonly) indica que se trata de una variable (constante).
const arr:readonly[number | string] = [52, "Hola"];

// La (readonly) solo es utilizada para arreglos.
const arreglo:readonly string[] = ["Hola", "Mundo"];

/* ##########============================########## */
/* ######===--- Arrays bidimensionales ---===###### */
/* ##########============================########## */

// Un array que contiene arrays de tipo 'string'.
let array:string[][] = [
	["Brandon", "Anthony"]
];

let array:string[][] = [
	["Brandon", "Anthony"],
	["Olivares", "Amador"]
];

let array:string[][] = [
	["Brandon", "Anthony"],
	["Olivares"]
];

for(let arr:string[] of array){
	arr.forEach(function(element:string){
		console.log(element);
	});
}

// Array con dos arrays anidados, uno es de tipo 'string' y el otro 'number'.
let array:[string[], number[]] = [
	["Brandon", "Anthony", "Olivares", "Amador"],
	[19, 20, 21, 22]
];

/* El valor que se adquiere puede ser 'string' o 'number'. */
array.forEach((subArray:string[]|number[]) => {

	subArray.forEach(function(element:string|number){

		if(typeof(element) === "string") console.log("Texto => "+element);
		else console.log("Numero => "+element);

	});

});

/* ##########=============================########## */
/* ######===--- Arrays tridimensionales ---===###### */
/* ##########=============================########## */

let threeArray:[string[][], number[][]] = [
	[
		["Brandon", "Anthony", "Olivares", "Amador"]
	],
	[
		[19, 20, 21, 22]
	]
];

for(let i:number = 0; i < threeArray.length; i++){
	let twoArray:string[][]|number[][] = threeArray[i];

	for(let j:number in twoArray){
		for(let oneArray of twoArray){
			oneArray.forEach((element:string|number) => {
				console.log(element);
			});
		}
	}
}

for(let i:number = 0; i < threeArray.length; i++){
	let twoArray:string[][]|number[][] = threeArray[i];

	for(let j:number in twoArray){
		for(let element of twoArray[j]){
			console.log(element);
		}
	}
}