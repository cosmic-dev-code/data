/* ##########=============================########## */
/* ######===--- Desestructurando objeto ---===###### */
/* ##########=============================########## */

/* -------------------------------- */
/* ------ (desestructurando) ------ */
/* -------------------------------- */

let usuario = {
	nombre: "", 
	// Una propiedad que tambien es un objeto con sus propios metodos y propiedades.
	info: {
		propiedad: "", 
		metodo(){
			// ...
		}
	}
};

/**
 * Destructurando el objeto
 */
let { info } = usuario;

info.propiedad;
info.metodo();

/**
 * Obtener mas de una propiedad.
 */
let { nombre, info } = usuario;

/**
 * Obtener un valor especifico.
 */
let { info: informacion } = usuario; // informacion = usuario.info;

informacion.propiedad;
informacion.metodo();

/* ------------------------- */
/* ------ (funciones) ------ */
/* ------------------------- */

/**
 * Desectructurando en (funciones).
 * 
 * Podemos desectructurar un objeto accediendo a sus propiedades desde los parametros de una 
 * funcion para ahorrar tiempo.
 */

// La forma normal.
function obtener(objeto = {}){
	let nombre = objeto.nombre;
}

/**
 * Desestructurando.
 */

// Esta es la manera de declarar la variable (nombre) que recibe la propiedad (nombre).
function obtener({ nombre: nombre }){}

// Ya que la variable declarada y la propiedad se llaman igual, (puede abreviarse).
function obtener({ nombre }){}

/**
 * Uso de ambas funciones.
 */
obtener({
	nombre: "Brandon"
});

/* ##########==========================########## */
/* ######===--- (funcion de fabrica) ---===###### */
/* ##########==========================########## */

// ------------------------------- //
// ------ Creacion (normal) ------ //
// ------------------------------- //

// La funcion recibe unos datos como parametro.
function crearUsuario(nombre, edad){

	// Se retorna un objeto con esos datos como propiedades.
	return {
		nombre: nombre, 
		edad: edad, 
		info: function(){
			// ...
		}
	};
}

// ----------------------------------- //
// ------ Creacion de (fabrica) ------ //
// ----------------------------------- //

function fabricaUsuario(nombre, edad){
	// Las propiedades se nombran y se asignan de manera automatica.
	return {
		nombre, edad, 
		info(){
			// ...
		}
	};
}