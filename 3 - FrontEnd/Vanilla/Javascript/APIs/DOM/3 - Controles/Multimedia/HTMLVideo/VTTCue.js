/* ##########============########## */
/* ######===--- VTTCue ---===###### */
/* ##########============########## */

/* Representa una entrada individual en un archivo de subtítulos WebVTT. 
Puede crearse un archivo individual con varios de estos.

Los VTTCue son agregados a las pistas. */

/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

/* Para construir una pista de subtítulo pasamos: 
  --- Tiempo dónde se mostrará la (cue).
  --- Tiempo dónde desaparecerá la (cue)
  --- El texto a mostrar. */
let cue = new VTTCue(0, 5, "Hello world");

// Espefica el tiempo de entrada en el video, (en segundos).
cue.startTime = 0;

// Espefica el tiempo de salida en el video, (en segundos).
cue.endTime = 0;

// Contiene el texto de entrada.
cue.text = "Hello world";

// Especifica un identificador único para la entrada.
cue.id = 3;

// Indica si el video sebe pausarse cuando (salga) este (cue).
cue.pauseOnExit = true;

// Devuelve el texto de la entrada como un fragmento HTML.
cue.getCueAsHTML();

cue.addEventListener("enter", event => {
  // Cuando el (cue) entra a la cinta.
});

cue.addEventListener("exit", event => {
  // Cuando el (cue) sale a la cinta.
});

// Remueve un escuchador de evento.
cue.removeEventListener("exit");