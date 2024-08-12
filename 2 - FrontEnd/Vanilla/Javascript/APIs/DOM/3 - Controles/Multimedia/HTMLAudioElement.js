/* ##########===========================########## */
/* ######===--- Propiedades y métodos ---===###### */
/* ##########===========================########## */

const audio = document.getElementsByTagName("audio")[0];

// Indica la (url) del audio.
audio.src = "audios/audio.wav";

// Devuelve el tiempo actual de reproducción, (en segundos).
audio.currentTime;

// Devuelve la duración (en segundos).
audio.duration;

// Espifica el volumen, (entre 0 y 1).
audio.volume = 1;
audio.volume = 0.6;
audio.volume = 0;

// Indica si la reproducción está en pausa.
audio.paused;

// Si la reproducción ha finalizado.
audio.ended;

// Inicia la reproducción.
audio.play();

// Pausa el audio.
audio.pause();

// Carga el audio en memoria.
audio.load();

audio.addEventListener("play", event => {
  // Cuando inicia la reproducción.
});

audio.addEventListener("pause", event => {
  // Cuando se pausa la reproducción.
});

// Elimina un escuchador de evento.
audio.removeEventListener("play");