/* ##########============########## */
/* ######===--- Tracks ---===###### */
/* ##########============########## */

// Video.
const video = document.getElementsByTagName("video")[0];

// Creamos un (track.)
const track = video.addTextTrack("subtitles", "Español", "es");

/* ----------------------------------- */
/* ------ Propiedades y métodos ------ */
/* ----------------------------------- */

// Remueve una secuencia del track.
track.removeCue(cue);

/* Representa el tipo de pista, como puede ser: 
    --- (subtitles), subtitulos.
    --- (captions), subtitulos con información adicional.
    --- (descriptions), descripción de audio.
    --- (chapters), capítulos.
    --- (metadata), metadatos. */
track.kind = "subtitles";

// Describe el contenido de la pista.
track.label = "English subtitles";

// El lenguaje de la pista.
track.language = "en";

/* ------------------------------ */
/* ------ todos los tracks ------ */
/* ------------------------------ */

// la propiedad (texttracks) devuelve todos los (tracks).
for (let i = 0; i <= video.textTracks.length; i++) {
    let track = video.textTracks[i];
}

/* ---------------------------- */
/* ------ Eliminar track ------ */
/* ---------------------------- */

// Remueve un track del arreglo de tracks del video.
video.textTracks.removeTrack(track);

/* ---------------------------------- */
/* ------ Los objetos (VTTCue) ------ */
/* ---------------------------------- */

// Agrega un nuevo (cue) a la pista.
track.addCue(new VTTCue(0, 5, "Hello world"));

// La propiedad (cues) extrae todos los (cue).
for (let i = 0; i < track.cues; i++) {
    let cue = track.cues[i];
}

// (activeCues) devuelve todos los (cues) que están reproduciéndose en el track.
for (let i = 0; i < track.activeCues; i++) {
    let cue = track.activeCues[i];
}

// Extraer todos los (cues) activos de todos los tracks.
for (let i = 0; i < video.textTracks.length; i++) {
    let track = video.textTracks[i];
    for (let j = 0; j < track.activeCues.length; j++) {
        let activeCues = track.activeCues[j];
    }
}

/* ##########=========================########## */
/* ######===--- Trabajar con pistas ---===###### */
/* ##########=========================########## */

/* Puede agregar un texto adicional al video, recibe: 
  --- ("title") o ("subtitles"), establece si el texto será un título o subtítulo.
  --- Idioma del texto a agregar.
  --- Idioma del título o subtítulo. */
let trackUno = video.addTextTrack("subtitles", "English subtitles", "es");

// creamos un (cue) con su tiempo de entrada, de salida y el texto a mostrar.
let cue = new VTTCue(0, 5, "Hello world");

// Agrega la (cue) al track que tiene los ajustes del idioma.
trackUno.addCue(cue);

/**
 * Agregar más de una (cue) a un track.
 *
 * Agreguemos más de una secuencia de subtitulos al video.
 *
 */

// Crear un track.
const track = video.addTextTrack("subtitles", "Español", "es");

// Agregar una (cue) después del final de la otra.
let subtitleOne = new VTTCue(0, 5, "Hola, ¿cómo estás?"),
    subtitleTwo = new VTTCue(6, 10, "Bien, ¿y tú?");

// Agregar secuencias al track.
track.addCue(subtitleOne);
track.addCue(subtitleTwo);
