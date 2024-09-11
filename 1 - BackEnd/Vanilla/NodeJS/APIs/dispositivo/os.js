"use strict";

// El modulo (os) nos permite obtener informacion del sistema operativo.
var os = require("os");

// ------------------------------- //
// ------ Sistema operativo ------ //
// ------------------------------- //

// Nombre del sistema operativo.
os.type(); // "Windows_NT"

// Plataforma del sistema operativo.
os.platform(); // "win32"

// Nombre del host del sistema.
os.hostname(); // "DESKTOP-11E8T47"

// Version del sistema operativo.
os.release(); // "10.0.19"

// Arquitectura.
os.arch(); // "x64"

// Devuelve las CPUs/core.
os.cpus(); // [{}, {}, {}, {}, {}, {}, {}, {}]

// Devuelve en segundos cuanto tiempo lleva el ordenador encendido, (en actividad);
os.uptime(); // 630926.125
// Obtenemos las horas.
os.uptime() / 60;

// --------------------- //
// ------ Memoria ------ //
// --------------------- //

// Cantidad de memoria libre en (bytes).
os.freemem(); // 3130908672

// Cantidad total de memoria en (bytes).
os.totalmem(); // 8465772544
// Total en megas.
os.totalmem() / 1024 / 1024;

// ---------------------------- //
// ------ Path y usuario ------ //
// ---------------------------- //

// Informacion sobre el usuario.
os.userInfo(); // {}
os.userInfo().username; // "Brandon"
// Informacion sobre un usuario especifico.
os.userInfo({ username: "Brandon" }); // {}

// Devuelve el directorio actual.
os.homedir(); // "C:\\Users\\Brandon"

// Devuelve el directorio temporal del sistema.
os.tmpdir(); // "C:\\Users\\Brandon\\AppData\\Local\\Temp"

// Devuelve el delimitador del sistema operativo.
// NOTA: Necesario para saber que delimitador usar al escribir cadenas de texto, (en Windows, Mac, Linux, etc).
os.EOL; // "\r\n"