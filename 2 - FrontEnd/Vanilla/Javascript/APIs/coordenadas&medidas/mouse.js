
document.getElementById("idElement").addEventListener("mousemove", event => {

	/* ##########=================================########## */
	/* ######===--- En relacion a un (elemento) ---===###### */
	/* ##########=================================########## */

	// Indica la coordenada (X) en la que se encuentra el mouse dentro del (elemento, [event.target]).
	// A su vez dentro del (viewport).
	event.clientX;
	// Para navegadores modernos basados en (Chromium).
	event.x;

	// Indica la coordenada (Y) en la que se encuentra el mouse dentro del elemento.
	// En el (viewport)
	event.clientY;
	// Para navegadores modernos basados en (Chromium).
	event.y;

	/* NOTA: Cuando nos referimos (dentro del elemento), nos referimos a su contenido total: 
		--- (content, margin, padding).
		--- Medido en (pixeles). */
	event.target.getBoundingClientRect().width;
	event.target.getBoundingClientRect().height;

	/* ##########=========================================########## */
	/* ######===--- En relacion al (documento completo) ---===###### */
	/* ##########=========================================########## */

	// Devuelve la posicion en (X) del mouse en relacion al (documento HTML completo).
	event.pageX;

	// Devuelve la posicion en (Y) del mouse en relacion al (documento HTML completo).
	event.pageY;

	/* ##########=================================########## */
	/* ######===--- En relacion a la (pantalla) ---===###### */
	/* ##########=================================########## */

	// Devuelve la posicion en (X) del mouse en relacion a la (pantalla del dispositivo).
	event.screenX; // px

	// Devuelve la posicion en (Y) del mouse en relacion a la (pantalla del dispositivo).
	event.screenY; // px
});