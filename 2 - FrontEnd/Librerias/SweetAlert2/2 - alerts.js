
/* ##########===================########## */
/* ######===--- Alerta normal ---===###### */
/* ##########===================########## */

// Alerta normal con un contenido. (Contiene -> Boton de cerrado).
Swal.fire('Contenido de la alerta');

/* ##########======================########## */
/* ######===--- Alerta con icono ---===###### */
/* ##########======================########## */

/* Aqui, el metodo (fire) recibe tres parametros: 
	--- Titulo de la alerta.
	--- Contenido de la alerta.
	--- Icono de la alerta, (
			(success) => palomita,
			(error) => tachita,
			(info) => icono de admiracion,
			(question) => signo de pregunta,
			(warning) => signo de admiracion invertido
		).
(Contiene -> Boton de cerrado). */
Swal.fire(
	"Titulo de mi alerta",
	"Contenido de mi alerta",
	"success" // Icono de la alerta.
);

// Podemos omitir parametros.
Swal.fire("Titulo de mi alerta", "", "success");
Swal.fire("", "Contenido de mi alerta", "success");

/* ##########========================########## */
/* ######===--- Pocicion de alerta ---===###### */
/* ##########========================########## */

/* Aqui, el metodo (fire) recibe un objeto como parametro: 
	--- La posicion donde aparecera la alerta, (
			(top-start) => esquina superior izquierda,
			(top-center) => centro de la pantalla,
			(top-end) => esquina superior derecha,
			(bottom-start) => esquina inferior izquierda,
			(bottom-start) => centro de la pantalla,
			(bottom-start) => esquina inferior derecha,
		).
	--- Tipo de icono de la alerta.
	--- Contenido de la alerta.
	--- Habilitar el boton de cierre o no.
	--- Tiempo que durara la alerta antes de que se quite sola. */
Swal.fire({
	position: 'top-end',
	icon: 'success',
	title: 'Contenido de la alerta',
	showConfirmButton: false,
	timer: 1500
});

/* ##########============================########## */
/* ######===--- Alerta de confirmacion ---===###### */
/* ##########============================########## */

Swal.fire({
	title: 'Titulo de la alerta',
	text: "Contenido de la alerta",
	icon: 'question'

	showCancelButton: true, // Habilitar el boton para cancelar.

	confirmButtonColor: '#3085d6', // Color del boton de (confirmacion).
	cancelButtonColor: '#d33', // Color del boton de (cancelacion).

	cancelButtonText: 'Cancelar' // Texto del boton de (cancelacion).
	confirmButtonText: 'Confirmar' // Texto del boton de (confirmacion).
}).then((result) => {
	/* Recibimos la respuesta para saber si el usuario confirmo o no, 
	si confirmo, entonces mandamos otra alerta. */
	if(result.isConfirmed) {
		Swal.fire('Ha confirmado', '', 'info');
	}
});

/* ##########=============================########## */
/* ######===--- Alerta chica con tiempo ---===###### */
/* ##########=============================########## */

// Creamos la ventana con sus ajustes.
const Toast = Swal.mixin({
	// Habilita el mensaje chico.
	toast: true, 
	// La posicion del mensaje.
	position: 'top-end', 
	// Habilita el boton de confirmacion para cerrar el mensaje.
	showConfirmButton: false, 
	// El tiempo que tardara en cerrarse el mensaje.
	timer: 3000, 
	// Habilita la barra de progreso para cerrar el mensaje.
	timerProgressBar: true, 
	// Eventos cuando el mouse se coloca por encima del mensaje.
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	}
});

// Disparamos el mensaje.
Toast.fire({
	icon: 'success',
	title: 'Se suscribio correctamente'
});

/* ##########=====================########## */
/* ######===--- Alerta de carga ---===###### */
/* ##########=====================########## */

// Dispara una alerta de carga.
// NOTA: Se cierra hasta disparar otra alerta.
Swal.showLoading();

/**
 * Alerta de carga con (mensaje) y (tiempo limite para cerrarla).
 */

swal({
	// Mensaje adjunto con la alerta de carga.
	title: 'Cargando...',
	// Desabilita las acciones para cerrar la alerta, (forza al usuario a esperar que el tiempo termine).
	allowEscapeKey: false,
	allowOutsideClick: false,
	// Tiempo en que se cerrara la alerta de carga.
	timer: 2000,
	// Dispara la alerta de carga.
	onOpen: () => {
		swal.showLoading();
	}
}).then(() => {}, (dismiss) => {
	// Si fue cerrado porque el tiempo se acabo.
	if (dismiss === 'timer') {
		// Dispara otra alerta.
		swal({ 
			title: 'Finished!',
			type: 'success',
			timer: 2000,
			showConfirmButton: false
		})
	}
});

/* ##########===========================########## */
/* ######===--- Mensaje auto cerrable ---===###### */
/* ##########===========================########## */

let timerInterval;
Swal.fire({
	// (Titulo) y (contenido).
	title: 'Una alerta', 
	html: 'La alerta cerrara en <b></b> milisegundos.', 
	// El tiempo que tardara en cerrarse el mensaje.
	timer: 2000, 
	// Habilita la barra de progreso para cerrar el mensaje.
	timerProgressBar: true, 
	// Para cerrar la ventana.
	didOpen: () => {
		// El mensaje se ejecuta.
		Swal.showLoading();

		// Extraemos el elemento del cuerpo del mensaje.
		const elementoB = Swal.getHtmlContainer().querySelector('b');

		/* Hasta que el tiempo termine es cuando se cerrara el mensaje, se estara restando a 
		(2000) por cada (100) milisegundos. */

		timerInterval = setInterval(() => {
			// En el elemento se mostrara el tiempo que transcurre.
			elementoB.textContent = Swal.getTimerLeft();
		}, 100);
	}, 
	// Cuando el mensaje se cierra finaliza el intervalo.
	willClose: () => {
		clearInterval(timerInterval)
	}
}).then((result) => {
	// Cuando el mensaje cierra podemos ejecutar otra accion.
	if(result.dismiss === Swal.DismissReason.timer){
		// El mensaje ha cerrado.
	}
});