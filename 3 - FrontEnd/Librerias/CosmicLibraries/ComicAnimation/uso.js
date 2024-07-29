"use strict";

/* ##########================########## */
/* ######===--- Instancias ---===###### */
/* ##########================########## */

/* Instanciamos un objeto de tipo (CosmicAnimation), recibe por parametros: 
	--- El selector de nuestro elemento.
	--- El nombre de nuestra animacion. */
const cosmicDiv = new CosmicAnimation('#idDiv', 'div-animation');

// Se asigna nombre de animacion al azar.
const cosmicDiv = new CosmicAnimation('#idDiv');

/* Creacion rapida de objetos (cosmic): 
	--- Los selectores de los elementos.
	--- Los nombres de sus animaciones. */
const arrElementsCosmic = new CosmicAnimation(
	['#idDiv', '.div', 'div'], 
	['animacion-1', 'animacion-2', 'animacion-3']
);

// El tercer elemento tendra un nombre de animacion automatico.
const arrElementsCosmic = new CosmicAnimation(
	['#idDiv', '.div', 'div'], 
	['animacion-1', 'animacion-2']
);

// Nombres de animaciones automaticos.
const arrElementsCosmic = new CosmicAnimation(['#idDiv', '.div', 'div']);

// Podemos recorrer los elementos y utilizar cada uno de ellos.
arrElementsCosmic.forEach(elementCosmic => {
	console.log(elementCosmic);
});

/* ##########=============================########## */
/* ######===--- Ajustes de la animacion ---===###### */
/* ##########=============================########## */

// Instanciamos un objeto de tipo (CosmicAnimation).
const cosmicDiv = new CosmicAnimation('#idDiv');

/* Colocamos: (Ajustes predeterminados).
	--- Nombre de la animacion para este elemento.
	--- Tardado de la animacion.
	--- Tiempo de duracion.
	--- Cuantas veces se repetira.
	--- Direccion de la animacion, (normal, reversa, alternado, etc).
	--- Tipo de funcionalidad, (sueve, rapido, igual, etc).
	--- Cambios, (guardar cambios o no). */
cosmicDiv.animation = {
	name: 'name',
	delay: 0,
	duration: 1500,
	iterationCount: 1,
	direction: 'normal',
	timingFunction: 'linear',
	fillMode: 'forwards'
};

/* El objeto (observeViewport) tiene dos propiedades: 
	--- (enabled), define si el objeto tomara la animacion solo cuando se 
	encuentre dentro del (viewport), es decir, la parte visible de la 
	pagina del usuario.
	--- (infinite), define si la animacion se repetira solo una vez o indefinidamente. */
cosmicDiv.observeViewport = {
	enabled: false,
	infinite: false
};

/* ##########===========================================########## */
/* ######===--- Crear animaciones de (inicio) y (fin) ---===###### */
/* ##########===========================================########## */

/* Los metodos reciben dos parametros: 
	--- El valor con el que va a iniciar el elemento en la animacion.
	--- El valor con el que va a terminar el elemento en la animacion. */

// Propiedades normales.
cosmicDiv.width(0, 200); // Ancho.
cosmicDiv.height(0, 200); // Alto.
cosmicDiv.color('red', 'blue'); // Color de texto.
cosmicDiv.bgColor('yellow', 'green'); // Color de fondo.
cosmicDiv.padding(0, 30); // Relleno.
cosmicDiv.margin(0, 30); // Margen.

// Propiedades que transforman.
cosmicDiv.rotate(0, 360); // Rotacion
cosmicDiv.translateX(0, 300); // Trasladar en el eje (X).
cosmicDiv.translateY(0, 300); // Trasladar en el eje (Y).
cosmicDiv.opacity(0, 1); // Opacidad.
cosmicDiv.scale(0, 1); // Escala.

// Agregamos una propiedad en caso de no tenerla.
cosmicDiv.addProperty(
	'border: 2px solid #000;', 
	'border: 6px solid blue;'
);
cosmicDiv.addProperty(
	'text-align: left;', 
	'text-align: right;'
);
cosmicDiv.addProperty(
	'overflow: hidden;', 
	'overflow: auto;'
);

/**
 * Este es el metodo mas importante, es el que ejecuta la animacion.
 * Crea la animacion con las propiedades.
 */
cosmicDiv.execute();

/* ##########================================########## */
/* ######===--- Crear animaciones de (5/5) ---===###### */
/* ##########================================########## */

/*
	--- La animacion se maneja de la siguiente forma (5/5):
		0%{ transform: scale(0); background-color: red; border: 3px solid #000; }

		25%{ transform: scale(0.3); background-color: blue; border: 3px solid darkred; }

		50%{ transform: scale(0.3); background-color: blue; border: 3px solid darkred; }

		75%{ transform: scale(0.4); background-color: blue; border: 3px solid darkred; }

		100%{ transform: scale(0.5); background-color: red; border: 3px solid #000; }
*/

// Algunos ajustes para la animacion.
cosmicDiv.animation.name = "AnimacionPulsacion";
cosmicDiv.animation.duration = 3000;
cosmicDiv.animation.iterationCount = Infinity;

// Figura.
cosmicDiv.figure.circle();

// Manejamos la escala en distintos puntos de la animacion.
cosmicDiv.scale(0, '1/5');
cosmicDiv.scale(0.3, '2/5');
cosmicDiv.scale(0.3, '3/5');
cosmicDiv.scale(0.4, '4/5');
cosmicDiv.scale(0.5, '5/5');

// Manejamos el color de fondo en distintos puntos de la animacion.
cosmicDiv.bgColor('red', '1/5');
cosmicDiv.bgColor('blue', '2/5');
cosmicDiv.bgColor('blue', '3/5');
cosmicDiv.bgColor('blue', '4/5');
cosmicDiv.bgColor('red', '5/5');

// Manejamos el borde en distintos puntos de la animacion.
cosmicDiv.addProperty("border: 3px solid #000;", "1/5");
cosmicDiv.addProperty("border: 3px solid darkred;", "2/5");
cosmicDiv.addProperty("border: 3px solid darkred;", "3/5");
cosmicDiv.addProperty("border: 3px solid darkred;", "4/5");
cosmicDiv.addProperty("border: 3px solid #000;", "5/5");

// Ejecutamos la animacion.
cosmicDiv.execute();

// -------------------------- //
// ------ Acortamiento ------ //
// -------------------------- //

// Algunos ajustes para la animacion.
cosmicDiv.animation.name = "AnimacionPulsacion";
cosmicDiv.animation.duration = 3000;
cosmicDiv.animation.iterationCount = Infinity;

// Figura.
cosmicDiv.figure.circle();

/* Podemos manejar las mismas propiedades para varias etapas de 
la animacion, tan solo pasando por parametros: 
	--- La propiedad que se desea aplicar.
	--- Un array con todas las etapas a las que se va a aplicar 
	un las propiedades. */

cosmicDiv.scale(0, '1/5');
cosmicDiv.scale(0.3, ['2/5', '3/5']);
cosmicDiv.scale(0.4, '4/5');
cosmicDiv.scale(0.5, '5/5');

cosmicDiv.bgColor('red', ['1/5', '5/5']);
cosmicDiv.bgColor('blue', ['2/5', '3/5', '4/5']);

cosmicDiv.addProperty("border: 3px solid #000;", ["1/5", "5/5"]);
cosmicDiv.addProperty("border: 3px solid darkred;", ["2/5", "3/5", "4/5"]);

// Ejecutamos la animacion.
cosmicDiv.execute();

/* ##########================================########## */
/* ######===--- Crear animaciones de (3/3) ---===###### */
/* ##########================================########## */

/*
	@keyframes circle-move{
		0%{ background-color: blue; opacity: 0; }

		50%{ background-color: blue; opacity: 0.5; }

		100%{ background-color: red; opacity: 1; }
	}
*/

// Instanciamos un objeto de tipo (CosmicAnimation).
const cosmicDiv = new CosmicAnimation("#idOne");

// Ajustes.
cosmicDiv.animation = {
	name: 'circle-move',
	delay: 0,
	duration: 3000,
	iterationCount: 'infinite',
	direction: 'alternate',
	timingFunction: 'linear',
	fillMode: 'forwards'
};

// Manejamos los tercios.
cosmicDiv.opacity(0, "1/3");
cosmicDiv.opacity(0.5, "2/3");
cosmicDiv.opacity(1, "3/3");

cosmicDiv.bgColor("blue", ["1/3", "2/3"]);
cosmicDiv.bgColor("red", "3/3");

// Ejecutamos la animacion.
cosmicDiv.execute();

/* ##########================================########## */
/* ######===--- Crear animaciones de (9/9) ---===###### */
/* ##########================================########## */

/*
	@keyframes circle-move{
		0%{ transform: translateX(0px); opacity: 0; }

		12.5%{ transform: translateX(0px); opacity: 0; }

		25%{ transform: translateX(100px); opacity: 0.3; }

		37.5%{ transform: translateX(100px); opacity: 0.3; }

		50%{ transform: translateX(200px); opacity: 0.6; }

		62.5%{ transform: translateX(200px); opacity: 0.6; }

		75%{ transform: translateX(300px); opacity: 0.8; }

		87.5%{ transform: translateX(400px); opacity: 1; }

		100%{ transform: translateX(400px); opacity: 1; }
	}
*/

// Instanciamos un objeto de tipo (CosmicAnimation).
const cosmicDiv = new CosmicAnimation("#idOne");

// Ajustes.
cosmicDiv.animation = {
	name: 'circle-move',
	delay: 0,
	duration: 3000,
	iterationCount: 'infinite',
	direction: 'alternate',
	timingFunction: 'linear',
	fillMode: 'forwards'
};

// Manejamos los novenos.
cosmicDiv.opacity(0, ['1/9', '2/9']);
cosmicDiv.opacity(0.3, ['3/9', '4/9']);
cosmicDiv.opacity(0.6, ['5/9', '6/9']);
cosmicDiv.opacity(0.8, '7/9');
cosmicDiv.opacity(1, ['8/9', '9/9']);

cosmicDiv.translateX(100, ['1/9', '2/9', '3/9']);
cosmicDiv.translateX(200, ['4/9', '5/9', '6/9']);
cosmicDiv.translateX(300, ['7/9', '8/9', '9/9']);

// Ejecutamos la animacion.
cosmicDiv.execute();

/* ##########===============================########## */
/* ######===--- Animaciones prefabricadas ---===###### */
/* ##########===============================########## */

const cosmicDiv = new CosmicAnimation("#idOne");

// Aparece hacia la derecha desde fuera de la pantalla.
cosmicDiv.fromWindowTo("right", 2000, 0);
// Aparece hacia la izquierda desde fuera de la pantalla.
cosmicDiv.fromWindowTo("left", 2000, 0);

// Solo aparece desde una difuminacion.
cosmicDiv.appear(1300, 0);
// Aparece desde una difuminacion hacia la direccion especificada.
cosmicDiv.appearTo("top", 1300, 0);
cosmicDiv.appearTo("right", 1300, 0);
cosmicDiv.appearTo("bottom", 1300, 0);
cosmicDiv.appearTo("left", 1300, 0);

// Solo desaparece.
cosmicDiv.fadeOut(1300, 0);
// Desaparece hacia una difuminacion hacia la direccion especificada.
cosmicDiv.fadeOutTo("top", 1300, 0);
cosmicDiv.fadeOutTo("right", 1300, 0);
cosmicDiv.fadeOutTo("bottom", 1300, 0);
cosmicDiv.fadeOutTo("left", 1300, 0);

/* El elemento aparece de arriba hacia abajo, y tras un momento se vuelve a ocultar. */
cosmicDiv.appearAndFadeOut(1300, 0);

/* Desaparecen las letras de un texto una por una, recibe por parametros: 
	--- espaciado en pixeles de los espacios del texto.
	--- Tiempo en el que cada letra desaparece. */
cosmicDiv.fadeOutLetters(6, 100);

/* Desaperece el texto del elemento letra por letra hacia una direccion especificada. */
cosmicDiv.fadeOutLettersTo("top", 6, 100);
cosmicDiv.fadeOutLettersTo("right", 6, 100);
cosmicDiv.fadeOutLettersTo("bottom", 6, 100);
cosmicDiv.fadeOutLettersTo("left", 6, 100);

// Desaparece el texto letra por letra a direcciones al azar: ["top", "right", "bottom", "left", "center"].
cosmicDiv.fadeOutLettersRandom(6, 100);

// Incremente desde una escala minima hasta su escala normal.
cosmicDiv.increment(2000, 0);

// Incremente desde una escala minima hasta su escala normal y al final da un pulso.
cosmicDiv.incrementPulse(2000, 0);

// Viene un circulo pequeño desde arriba y deja un cuadrado.
cosmicDiv.circleTo('top', 2500, 3000);
// Viene un circulo pequeño desde abajo y deja un cuadrado.
cosmicDiv.circleTo('bottom', 2500, 3000);

// Da un pulso.
cosmicDiv.pulse(1000, 0);

// Alpita indefinidamente incrementando y decrementando poco su escala.
cosmicDiv.palpite(3000, 0);

/* ##########===========================================########## */
/* ######===--- Al (terminar) y (reiniciar) animacion ---===###### */
/* ##########===========================================########## */

// -------------------------------- //
// ------ Metodo (terminate) ------ //
// -------------------------------- //

// Instanciamos un objeto.
const cosmicDiv = new CosmicAnimation("#idOne");

// El tiempo sera (x2) ya que la animacion se repetira dos veces.
cosmicDiv.animation.iterationCount = 2;

// Hacemos uso de una animacion prefabricada.
cosmicDiv.spiralTo("right");

// Ejecutamos la animacion.
cosmicDiv.execute();

/* El metodo (terminate) se ejecuta solo cuando la animacion finaliza, 
recebe por parametro: 
	--- Un callback que definira lo que se va a hacer. */
cosmicDiv.terminate(function(){
	console.info("La animacion ha terminado");
});

// -------------------------------------- //
// ------ Metodo (deleteAnimation) ------ //
// -------------------------------------- //

const cosmicDiv = new CosmicAnimation("#idOne");

cosmicDiv.animation.iterationCount = 2;

cosmicDiv.spiralTo("right");

cosmicDiv.execute();

// Al terminar la animacion.
cosmicDiv.terminate(function(){
	
	// Se reinicia la animacion por completo.
	cosmicDiv.deleteAnimation();

	// Colocamos nueva animacion y ejecutamos de nuevo.
	cosmicDiv.spiralTo("left");
	cosmicDiv.execute();

});

// -------------------------------- //
// ------ Animacion multiple ------ //
// -------------------------------- //

const cosmicDiv = new CosmicAnimation("#idOne");

cosmicDiv.animation.iterationCount = 2;

cosmicDiv.spiralTo("right");

cosmicDiv.execute();

// Al terminar la animacion.
cosmicDiv.terminate(function(){
	
	// Primera animacion.
	cosmicDiv.deleteAnimation().spiralTo("left").execute();

	cosmicDiv.terminate(() => {
		// Segunda animacion.
		cosmicDiv.deleteAnimation().increment().execute();

		cosmicDiv.terminate(() => {
			// Tercera animacion.
			cosmicDiv.deleteAnimation().incrementPulse().execute();

			cosmicDiv.terminate(function(){
				console.info("Las animaciones han terminado.");
			});		
		});
	});

});