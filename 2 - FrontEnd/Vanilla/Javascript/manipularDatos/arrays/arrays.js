
/* ##########============================########## */
/* ######===--- Declarar e inicializar ---===###### */
/* ##########============================########## */

// ------------------------- //
// ------ Declaracion ------ //
// ------------------------- //

// Array vacio.
let array = new Array();
let array1 = Array();
let array2 = [];
let array3 = Array([]);

// ---------------------------- //
// ------ Inicializacion ------ //
// ---------------------------- //

// Elementos de un solo tipo.
let array = new Array("Uno", "Dos", "Tres");

// Elementos de tipos diferentes.
let array1 = new Array("Uno", false, 55, [5, "Uno"]);

/* ##########====================########## */
/* ######===--- Unidimensional ---===###### */
/* ##########====================########## */

let array = new Array("Brandon", "Anthony");

// Recorre cada elemento del arreglo.
for(let i = 0; i < array.length; i++){
    // Elemento.
    array[i];
}

// Esta es otra forma de recorrer arreglos.
array.forEach(elemento => {
    // ...
});

/* ##########=====================########## */
/* ######===--- Bidimensionales ---===###### */
/* ##########=====================########## */

let array = [
	new Array("Brandon", "Anthony"), 
	new Array("Olivares", "Amador")
];

for(let i = 0; i < array.length; i++){
	array[i].forEach(valor => {
		// ...
	});
}

/* ##########======================########## */
/* ######===--- Tridimensionales ---===###### */
/* ##########======================########## */

let array = [
    [ new Array(22.35223, 3.325245) ],
    [ new Array(0, 3.3) ],
    [ new Array(341.134314, 1) ]
];

/**
 * Forma clasica.
 */
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
        for(let k = 0; k < array[i][j].length; k++){
        	console.log(
        		array[i][j][k]
        	);
        }
    }
}

/**
 * Obtener los indices directamente. (for in).
 */
for(let i in array){
    for(let j in array[i]){
        for(let k in array[i][j]){
        	console.log(
                array[i][j][k]
            );
        }
    }
}

/**
 * Obtener los valores directamente. (for of).
 */
for(let arrUno of array){
	for(let arrDos of arrUno){
		for(let item of arrDos){
			console.log(
                item
            );
		}
	}
}