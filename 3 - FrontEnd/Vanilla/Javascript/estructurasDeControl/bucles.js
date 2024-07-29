
/* ##########=================########## */
/* ######===--- Bucle (for) ---===###### */
/* ##########=================########## */

// El for de toda la vida.
for(let i = 0; i <= 10; i++){
	console.log(i);
}

// --------------------------------- //
// ------ For (in) y for (of) ------ //
// --------------------------------- //

let collection = document.getElementsByTagName("li");

// Recorre y guardan el elemento del array u objeto.
for(let li of collection){
	console.log(li);
}

// Recorre y guardan el índice del elemento del array u objeto.
for(let i in collection){
	console.log(li[i]);
}

// ---------------------------------- //
// ------ (break) y (continue) ------ //
// ---------------------------------- //

// --- Break --- //

for(let i = 0; i < 10; i++){
	// Finaliza el bucle.
	if(i >= 3) break;
}

// --- Continue --- //

for(let i = 0; i <= 10; i++){

	// Se salta los numeros divisibles en cada iteracion.
	if(i % 2) continue;
}

// ---------------------------------------- //
// ------ Nombre para para los (for) ------ //
// ---------------------------------------- //

var arrNombres0 = ["Cosmic", "Dark", "Brand"];
var arrNombres = ["Brandon", "Anthony", "Olivares", arrNombres0];

// Se le da un nombre al primer (for).
forNombres: 
for(let nombre of arrNombres){
	if(nombre == "Olivares"){
		console.log(nombre);

		for(nombreDos of arrNombres0){
			// ...
		}

		// Finaliza el primer (for) refiriendose a su nombre asignado.
		break forNombres;
	}else{
		console.log(nombre);
	}
}

/* ##########===================########## */
/* ######===--- Bucle (while) ---===###### */
/* ##########===================########## */

let numero = 0;

while(numero != 5){
	// Mientras (numero) no sea 5.
	numero = window.prompt("Ingresa un numero");
}

/* ##########======================########## */
/* ######===--- Bucle (do while) ---===###### */
/* ##########======================########## */

// Hacer y luego validar.

let numero = 30;

do{
	// ...

	numero--;

}while(numero > 0);