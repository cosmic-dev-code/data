const video = document.getElementsByTagName("video");

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

// (url) del video.
video.src = "videos/video.mp4";

// Devuelve la (url) actual del elemento reproduciéndose.
video.currentSrc; // string

// Obtiene o establece si se debe cargar el video antes de comenzar a reproducirlo.
video.preload = false

// Establece si el video debe reproducirse automáticamente.
video.autoplay = false;

// Establece si el video debe repetirse al llegar al final.
video.loop = false;

/* Establece si los controles se habilitan o no, 
(controles para manipular el video). */
video.controls = true;

// Establece una imagen en el video antes de reproducirse.
video.poster = "images/poster.png";

// Establece el ancho y alto del video.
video.width = 500;
video.height = 500;

// Obtiene un objeto que muestra las partes que ae han reproducido.
video.played; // TimeRanges

// Obtiene o establece si el video ha llegado a su final.
video.ended = false;

// Establece la velocidad del video.
video.playbackRate = 1; // (Esta es la velocidad por defecto).
video.playbackRate = 1.75
video.playbackRate = 2

// Obtiene la duración del video.
video.duration; // 159.066667

/* ##########=============########## */
/* ######===--- Métodos ---===###### */
/* ##########=============########## */

//Comienza la reproducción.
video.play();

// Pausa el video.
video.pause();

// Recarga el video.
video.load();

// Devuelve si el navegador puede soportar el tipo de video especificado.
video.canPlayType('video/mp4');
/* Puede devolver: 
    --- ("probably"), hay probabilidad de que el navegador pueda reproducir el video.
    --- ("maybe"), hay probabilidad de que el navegador no pueda reproducir el video.
    --- ("indica"), el navegador no puede reproducir el video. */