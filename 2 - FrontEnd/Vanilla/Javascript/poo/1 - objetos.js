"use strict";

/* ##########=======================########## */
/* ######===--- Objeto individual ---===###### */
/* ##########=======================########## */

// Creacion de un objeto.
let usuario = {
	nombre: "Brandon", 
	edad: 22
};

// Creacion de un objeto por medio de la clase (Object).
let usuario = new Object({
	nombre: "Brandon", 
	edad: 22
});

// --------------------- //
// ------ Metodos ------ //
// --------------------- //

var info = {
	metodoUno(){
		// Esta es la forma de declarar un metodo.
	}, 
	metodoDos: function(){
		// Asignando una funcion, (propiedad como metodo).
	}, 
	metodoTres: () => {
		// Asignando una duncion flecha, (propiedad como metodo).
	}
}

// Los metodos pueden mandarse a llamar.
info.metodoUno();
info.metodoDos();
info.metodoTres();

/* ##########=========================########## */
/* ######===--- Nombres (dinamicos) ---===###### */
/* ##########=========================########## */

// Los nombres dinamicos tiene la misma sintaxis que nombrar una variable.

let usuario = {
	nombre: "Brandon", 
	edad: 22
}

// Acceder a las porpiedades del objeto (usuario).
usuario.nombre;
usuario.edad;

/* ##########=========================########## */
/* ######===--- Nombres (literales) ---===###### */
/* ##########=========================########## */

/* Los nombres literales en las propiedades de los objetos, permiten colocar nombres 
que en un objeto "normal" no serian validos. */

let usuario = {
	"Nombre completo": "Brandon Anthony", 
	"edad-nacimiento": 1999, 
	metodo(){
		// ...
	}, 
	"#metodo $valido"(){
		// ...
	}
}

// Acceder a las propiedades.

usuario["Nombre completo"]; // "Brandon Anthony"
usuario["edad-nacimiento"]; // 1999
usuario["#metodo $valido"]();

// --------------------------- //
// ------ Crear objetos ------ //
// --------------------------- //

// Propiedad a crear.
let propiedad = "nombres";

var usuario = {
	// Aqui se imprime el valor de la variable (propiedad) colocando asi como propiedad la cadena "nombres".
	[propiedad]: "Brandon Anthony", // "nombres": "Brandon Anthony"
	edad: 22
};

// Acceder al valor de la propiedad "nombres".

usuario.nombres; // "Brandon Anthony"
usuario["nombres"]; // "Brandon Anthony"

/* ##########=========================########## */
/* ######===--- Obtener propiedades ---===###### */
/* ##########=========================########## */

// Obtener el valor de la propiedad.
let nombre = usuario.nombre;

// Se puede acceder como array asosiativo.
let nombre = usuario["nombre"];

// Exactamente igual para obtener el valor de una propiedad, (desestructurando el objeto).
let { nombre } = usuario;

// Obtener mas de una propiedad.
let { nombre, edad } = usuario;

// Simplificacion.
let { edad: resultado } = usuario; // resultado = usuario.edad;

/* ##########=================########## */
/* ######===--- Referencias ---===###### */
/* ##########=================########## */

/* -------------------------------------- */
/* ------ Referencia a propiedades ------ */
/* -------------------------------------- */

let usuario = {
	nombre: "Brandon",
	edad: 22, 
	info: function(){
		// Las referencias pueden hacerse desde el mismo objeto utilizando (this) o (nombre del objeto).
		return (`
			<div>
				<p>${usuario.nombre}</p>
				<p>${this.edad}</p>
			</div>
		`);
	}
};

/**
 * Referencias externas de propiedades.
 */

// Tenemos un objeto.
const usuario = {
	direccion: {
		calle: "Del Agabe", 
		numero: "22BC", 
		colonia: "Urbi Villas Del Prado"
	}, 
	activo: true
}

// Puede tener la complicacion de que (direccion) apunte como referencia a (usuario.direccion).
// Por lo que pueda modificarse al modificar una.
let direccion = usuario.direccion;

/* ------------------------------- */
/* ------ Copia superficial ------ */
/* ------------------------------- */

// Esto crea una (copia superficial) sin que (direccion) apunte a (usuario.direccion).
// Esta forma es mas segura.
let direccion = { ...usuario.direccion };