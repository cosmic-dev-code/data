/* ##########==============================########## */
/* ######===--- Movimiento y dimensiones ---===###### */
/* ##########==============================########## */

let url = window.open("https\\:youtube.com");

//Minimiza la pantalla de la nueva pestaña relativamente.
/* 
	function seNesecitaServidor(trueFalse){
		Se necesita hacerlo desde un servidor para probarlo.
		Desde el navegador no se puede hacer, el navegador no 
		lo permite.
		
		let Opción = trueFalse ? 
		"Todavía se sigue usando mucho." : "Casi no se usa.";
	}
*/
url.resizeBy(Px en X, px en Y);

// Minimiza la pantalla de la nueva pestaña.
//seNesecitaServidor(true);
url.resizeTo(Px en X, px en Y);

//Mueve la ventana de la nueva pestaña relativamente.
//seNesecitaServidor(false);
url.moveTo(Px en X, px en Y);

//Mueve la ventana de la pestaña.
//seNesecitaServidor(false);
url.moveBy(Px en X, px en Y);

function windowVisible(metodo){
	// Nos dice si es visible o no.
	window[metodo].true;
}

//Objetos barprop de window.
windowVisible(locationbar);
windowVisible(menubar);
windowVisible(personalbar);
windowVisible(scrollbars);
windowVisible(statusbar);
windowVisible(toolbar);