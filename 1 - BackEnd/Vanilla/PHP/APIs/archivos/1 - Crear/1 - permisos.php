<?php

/* ##########======================########## */
/* ######===--- Tipo de Apertura ---===###### */
/* ##########======================########## */

/**
 * Tipos de formas para abrir un archivo y aplicar acciones.
 */

/*
	(r): Abre un archivo de solo lectura.
		--- Abre en Lectura.
		--- Puntero al principio.

	(w): Abre un archivo de solo escritura.
		--- Abre en Escritura.
		--- Borra el contenido, (si ya existe).
		--- Crea un nuevo archivo, (si no existe).
		--- Puntero al principio.

	(a): Abre un archivo de solo escritura.
		--- Abre en Escritura.
		--- Conserva contenido.
		--- Crea un nuevo archivo, (si no existe).
		--- Puntero al final.

	(x): Crea un nuevo archivo solo para escritura.
		--- Crea en escritura.
		--- Devuelve FALSE, (si el archivo ya existe).

	(r+): Abre un archivo.
		--- Abre en (Lectura/Escritura), (Debe existir).
		--- Puntero al principio.

	(w+): Abre un archivo.
		--- Abre en (Lectura/Escritura).
		--- Borra contenido, (si ya existe).
		--- Crea un nuevo archivo, (si no existe).
		--- Puntero al principio.
		--- Escribe y Lee, (pero no Sobrescribe).

	(a+): Abre un archivo.
		--- Abre en (Lectura/Escritura).
		--- Conserva contenido.
		--- Crea un nuevo archivo, (si no existe).
		--- Puntero al final.

	(x+): Crea un archivo.
		--- Crea un archivo (Lectura/Escritura).
		--- Devuelve FALSE, (si el archivo ya existe).
*/

/* ##########=======================########## */
/* ######===--- Tipos de permisos ---===###### */
/* ##########=======================########## */

/**
 * Tipos de permisos que se establecen a (archivos) y (carpetas).
 */

/**
 * El formato es de tres digitos.
 * 		--- Propietario.
 * 		--- El grupo.
 * 		--- Los otros usuarios.
 * 
 * [0755, 0777, 0700] = (Lectura, Escritura, Ejecución).
 */

/* Tipo de Archivos: 
	--- (7): Lectura, escritura y ejecución (rwx).
	--- (6): Lectura y escritura (rw-).
	--- (5): Lectura y ejecución (r-x).
	--- (4): Solo lectura (r--).
	--- (0): Ningún permiso (---).
*/