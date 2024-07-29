/* ##########=======================########## */
/* ######===--- La clase (Object) ---===###### */
/* ##########=======================########## */

// --------------------------- //
// ------ Crear objetos ------ //
// --------------------------- //

// Creamos un objeto.
const objeto = {};

const objeto = new Object();

const objeto = new Object({});

// ----------------------------- //
// ------ Metodo (assign) ------ //
// ----------------------------- //

/**
 * Mezclar objetos en uno solo.
 */

const usuario = {
	nombre: "Brandon", 
	edad: 22
}

const perfil = {
	fotografia: "url", 
	likes: 10
}

/* El metodo (assign) se utiliza para mezclar dos objetos y retornar uno nuevo, recibe: 
	--- El objeto al cual se agregaran los datos.
	--- El objeto del cual se recibiran los datos. */
const completo = Object.assign(usuario, perfil);

completo.nombre;
completo.likes;

/**
 * Objetos con propiedades o metodos similares.
 */

// En este caso ambas propiedades contienen la propiedad (edad).
const usuario = Object.assign(
	{
		nombre: "Brandon", 
		// Esta propiedad se reemplaza por la nueva.
		edad: 20
	}, 
	{
		edad: 22
	}
);

usuario.nombre; // "Brandon"
usuario.edad; // 22

// ---------------------------------- //
// ------ Buscar una propiedad ------ //
// ---------------------------------- //

// Comprueba si el objeto tiene un metodo o propiedad.
Object.hasOwn(objeto, "nombre"); // true

// Verificar desde el objeto.
objeto.hasOwnProperty("nombre"); // true

// Esta es otra manera de verificar si existe una propiedad.
('nombre' in objeto) // true

// Esta es otra manera.
(objeto.apellidos) // undefined

// --------------------------------- //
// ------ Definir propiedades ------ //
// --------------------------------- //

/**
 * Definir solo una propiedad.
 */

/* El metodo (defineProperty) define una propiedad del objeto, recibe los siguientes parametros: 
	--- El objeto al cual se le va a agregar la propiedad.
	--- El nombre de la propiedad.
	--- Un objeto con los ajustes de la propiedad. */ 
Object.defineProperty(objeto, "nombre", {
	// Valor de la propiedad.
	value: "Brandon", 
	// Define si la propiedad se puede editar.
	writeable: false
});

/**
 * Definir mas de una propiedad.
 */

/* El metodo (defineProperties) define varias propiedades de un objeto recibe los siguientes parametros: 
	--- El objeto al cual se le van a agregar las propiedades.
	--- Objeto de objetos de las propiedades: 
		--- Nombre de la propiedad.
			--- Valor de la propiedad.
			--- Indicar si la propiedad se puede editar. */
Object.defineProperties(objeto, {
	"nombres": {
		value: "Brandon Anthony", 
		writeable: true
	},
	"apellidos": {
		value: "Olivares Amador",
		writeable: true
	},
	"informacion": {
		value: () => {
			console.info(`Nombre completo: ${this.nombres} ${this.apellidos}`);
		},
		writeable: false
	}
});

// --------------------------------- //
// ------ Obtener propiedades ------ //
// --------------------------------- //

// (getOwnPropertyDescriptor) devuelve la propiedad con sus caracteristicas.
const propiedadNombre = Object.getOwnPropertyDescriptor(usuario, "nombre");

propiedadNombre
	.configurable; // true
	.enumerable; // true
	.writeable; // true
	.value; // "Brandon"

/**
 * Obtener solo el valor de la propiedad.
 */

let nombre = Object.getOwnPropertyDescriptor(usuario, "nombre").value;

let { nombre } = usuario;

let nombre = usuario["nombre"];

let nombre = usuario.nombre;

// ----------------------------------------- //
// ------ Manipulacion de propiedades ------ //
// ----------------------------------------- //

/* El metodo (preventExtensions) no permite que el objeto pueda tener nuevas propiedades o métodos, 
es decir, (nuevas extensiones). */
Object.preventExtensions(objeto);

// Eliminar propiedades de un objeto.
delete objeto.nombre;

/* ##########===========================########## */
/* ######===--- De (objeto) a (array) ---===###### */
/* ##########===========================########## */

// Objeto de objetos.
let usuarios = {
	usuario0: {name: "Brandon", age: 19, active: true},
	usuario1: {name: "Anthony", age: 20, active: true},
	usuario2: {name: "Olivares", age: 21, active: false},
	usuario3: {name: "Amador", age: 22, active: true}
};

// El metodo (values) retorna un arreglo con cada uno de los valores de las propiedades del objeto que recibe.
Object.values(usuarios).forEach(usuario => {
	usuario.name;
	usuario.age;
	usuario.active;
});

// Los objetos tambien pueden iterarse en bucles como el (for).
for(let propiedad in usuarios){
	// Valor de la propiedad.
	usuario[propiedad];
}

// ----------------------------------------------------------------------------------------- //

// Obtener un arreglo con los (nombres de las propiedades).
let propiedades = Object.keys(objeto);

// Obtener un arreglo con los (valores de las propiedades).
let valores = Object.values(object);

for(let propiedad in propiedades){

	propiedades[propiedad]; // "usuario0"

	valores[propiedad]; // "object".

}