"use strict";

/* ##########==========########## */
/* ######===--- Info ---===###### */
/* ##########==========########## */

// Extrae la informacion del navegador.
const navegador = navigator.userAgent; // string

// Aqui podriamos extraer la version de JavaScript como tal.

let version = navigator.userAgent;

if (/Chrome\//.test(userAgent)) {
    version = userAgent.match(/Chrome\/(\d+)/)[1];
} else if (/Firefox\//.test(userAgent)) {
    version = userAgent.match(/Firefox\/(\d+)/)[1];
} else if (/Edge\//.test(userAgent)) {
    version = userAgent.match(/Edge\/(\d+)/)[1];
}

parseInt(version); // Version de JS.