const track = document.getElementsByTagName("track")[0];

/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

// (url) del archivo VTT que contiene la información de la pista.
track.src = "captions.vtt";

/* El modo de visualización, puede ser: 
    --- "disabled", "hidden" o "showing". */
track.mode = "showing";

// Indica si la pista es la predeterminada cuando el video inicia.
track.default = true;

/* Indica el estado de la pista, puede ser: 
    --- "loading", "loaded" o "failed". */
track.readyState;

// Devuelve una referencia a un objeto de error, (si la pista no consiguió cargar).
track.error;

// Especifica el idioma de la pista.
track.srclang = "en";

// Describe el contenido de la pista.
track.label = "English subtitles";

/* Representa el tipo de pista, como puede ser: 
    --- "subtitles", subtitulos.
    --- "captions", subtitulos con información adicional.
    --- "descriptions", descripción de audio.
    --- "chapters", capítulos.
    --- "metadata", metadatos. */
track.kind = "subtitles";

track.addEventListener("load", (event) => {
    // Cuando el track carga.
});

track.addEventListener("error", (event) => {
    // Cuando el track no carga o ocurre algún error.
});

// Remueve un escuchador de evento.
track.removeEventListener("exit");

// Dispara un evento.
track.dispatchEvent(new Event("load"));

/* ##########===========================########## */
/* ######===--- Agregar track externo ---===###### */
/* ##########===========================########## */

const track = document.createElement("track");

// Se hacen los ajustes.
track.kind = "captions";
track.label = "English Captions";
track.srclang = "en";
track.src = "captions.vtt";
track.default = true;

// Se agrega el track al video.
video.appendChild(track);

////// --- --- --- --- --- --- captions.vtt --- --- --- --- --- --- //////

// MIME: "text/vtt"
// Este es el contenido del archivo:
/*
    WEBVTT

    00:00:20.000 --> 00:00:23.000
    Hello, this is a subtitle.

    00:00:25.000 --> 00:00:28.000
    And this is another one.
*/
