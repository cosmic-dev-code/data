// Accedemos al historial.
window.history;

// Retrocede a la pestaña aterior.
window.history.back();

// Avanza a la siguiente pestaña.
window.history.forward();

// Tamaño del historial.
window.history.length;

/* Este método recorre el historial. 
	--- (-1), va hacia la página anterior.
	--- (0), es para recargar la página.
	--- (1), va hacia la siguiente página. 
		--- Todo esto depende de cuántos elementos tengamos en el historial, 
			lo cual se puede saber con (length). --- */
window.history.go(0);

window.history.pushState(
	// Objeto que se va a guardar en la nueva 'url'.
	{
		nombre: "Brandon"
	}, 
	"", // Titulo de la 'url'.
	"Nueva_url" // Nueva 'url'.
);

window.addEventListener("popstate", (e) => {
	// Muestra el objeto guardado en la nueva 'url' que agregamos.
	console.log(e.state);
});

/* Funciona de igual manera que el (pushState), la diferencia es que (replaceState) no deja nuevas 
entradas en el historial, (registro). */
window.history.replaceState(
	{
		nombre: "Brandon"
	},
	"",
	"Nueva_url"
);