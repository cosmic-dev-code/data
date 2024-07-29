"use strict";

const btn = document.getElementsByTagName("input")[0];

/* ##########==================================########## */
/* ######===--- Instanciar objeto de lectura ---===###### */
/* ##########==================================########## */

/* Instanciamos el objeto que contendra los ajustes del habla, recibe por parametro: 
	--- El texto a leer. */
var speech = new SpeechSynthesisUtterance();
var speech = new SpeechSynthesisUtterance("Hola mundo");

btn.onclick = function(event){

	const textarea = document.getElementsByTagName("textarea")[0];

	/* ##########========================########## */
	/* ######===--- Ajustes de lectura ---===###### */
	/* ##########========================########## */

	// Le damos el texto a leer.
	speech.text = textarea.value

	/* Recibe por valor: 
		(0), Para no oirse.
		(1), Para oirse. */
	speech.volume = 1;

	/* Modifica el tono de la voz, recibe por valor: 
		(0), Un tono mas grave.
		(1), Un tono normal.
		(2), Un tono mas agudo. */
	speech.pitch = 0;

	// Determina el lenguaje en que leera el texto.
	speech.lang = "es-MX";

	/* Modifica la velocidad, recibe por valor: 
		--- (0), hace que lea lento, (no existe un valor menor a cero para esta propiedad).
		--- (1), lee a velocidad normal.
		--- (2 o superior), lee cada vez mas rapido segun el valor numerico. */
	speech.rate = 1;

	// Le asignamos alguna voz disponible. (Requiere accion de parte del usuario).
	speech.voice = speechSynthesis.getVoices()[0];

	/* ##########========================########## */
	/* ######===--- Eventos de lectura ---===###### */
	/* ##########========================########## */

	speech.onstart = event => {
		// Cuando comienza a leer.
	};

	speech.onerror = event => {
		// Cuando ocurre algun error.
	};

	speech.onpause = event => {
		// Cuando el texto es pausado.
	};

	speech.onresume = event => {
		// Cuando el texto deja de pausarse.
	};

	speech.onend = event => {
		// Al finalizar la lectura.
	};

	/* ##########=========================########## */
	/* ######===--- Opciones de lectura ---===###### */
	/* ##########=========================########## */

	// Es necesario que el usuario accione un evento para ejecutar el "habla".

	/* El metodo (speak) lee un texto, recibe por parametro: 
		--- El objeto con los ajustes y el texto que se ha de leer. */
	speechSynthesis.speak(speech);

	// Pausa la lectura.
	speechSynthesis.pause();

	// Continua la lectura.
	speechSynthesis.resume();

	// Cancela la lectura, (no importa si se ejecuta el metodo [resume]).
	speechSynthesis.cancel();

	// Devuelve todas las voces disponibles en el dispositivo.
	speechSynthesis.getVoices();

	// Determina por un valor booleano si el sintetizador esta en pausa.
	speechSynthesis.paused;

	// Determina por un valor booleano si el sintetizador esta hablando.
	speechSynthesis.speaking;
};