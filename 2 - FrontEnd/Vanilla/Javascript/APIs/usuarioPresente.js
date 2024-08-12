"use strict";

/* ##########===============================########## */
/* ######===--- Usuario en la pagina o no ---===###### */
/* ##########===============================########## */

/* El evento 'visibilitychange' permite saber si el usuario ha habandonado la pagina o no. 
Por medio del metodo (visibilitychange) podemos saberlo. */
addEventListener("visibilitychange", (e) => {
		// Si el usuario esta en la pagina.
	if(e.target.visibilityState == "visible"){
		window.alert("Te encuentras en la pagina.");
	}else{
		window.alert("Has regresado a la pagina.");
	}
});

// -------------------------------------------------------------------------------------- //

window.addEventListener("visibilitychange", (e) => {
		// Si el usuario esta en la pagina.
	if(e.target.visibilityState == "visible"){
		window.alert("Te encuentras en la pagina.");
	}else{
		window.alert("Has regresado a la pagina.");
	}
});