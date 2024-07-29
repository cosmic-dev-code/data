"use strict";

/* ##########====================================########## */
/* ######===--- Forma antigua de crear objetos ---===###### */
/* ##########====================================########## */

function Usuario(nombre = "Ningun nombre"){
	// Propiedad.
	this.nombre = nombre;
	
	// Saludo.
	this.saludo = () => {
		console.log(`Hola ${this.nombre}`);
	}
}

// Hacemos las instancias.
let usuario = new Usuario("Brandon");
let usuario1 = new Usuario("Anthony");

usuario.saludo();
usuario1.saludo();

/* ##########========================########## */
/* ######===--- Metodo constructor ---===###### */
/* ##########========================########## */

var User = function(){

	// El metodo constructor es el que define las propiedades.
	var User = function(names = "", surnames = "", age = 0){
		this.names = names;
		this.surnames = surnames;
		this.age = age;
	};

	// Agregamos un metodo en el prototipo de la clase User.
    User.prototype.info = function(){
        return (`
        	<section>
        		<div>
        			<b></b><span>${this.names + this.surnames} y edad de: ${this.age}</span>
        		</div>
        	</section>
        `);
    };

    // Retornamos la clase User.
    return User;
};

const user = new User("Brandon", "Anthony", 22);

user.info();

/* ##########==================================########## */
/* ######===--- Metodos y atributos privados ---===###### */
/* ##########==================================########## */

/* Tenemos la clase (User). */
var User = function(names = "", surnames = "", age = 0){
	/* Esta es una variable que solo es accesible dentro de esta funcion, por lo que podriamos decir que es 
	un atributo privado. */
	var password = null;
	
	// Propiedades que obtienen su valor mediante los parametros de la funcion, (metodo constructor).
	this.names = names;
	this.surnames = surnames;
	this.age = age;
	
	// Metodo que muestra las propiedades del objeto, (incluyendo la variable (password)).
	this.showInfo = () => {
		console.log(`
			El usuario ${this.names} ${this.surnames}.
			Tiene una edad de: ${this.age}.
			Password: ${password}.
		`);
	};
	
	// Metodo que le da un valor a la variable (password), la cual solo existe dentro de esta funcion.
	this.setPass = (pass = 0) => {
		if(typeof pass === "number") password = pass;
		else console.log("El password debe ser un número.");
	};
};

// Agrega otro metodo mas a la clase.
User.prototype.getPass = function(){
	return (this.names+" && "+this.surnames);
};

// Agrega un metodo (global) a todas las funciones.
User.__proto__.show = function(){
	console.log("Show");
};

User.show();

// Hacemos una instancia.
const user = new User(
	"Brandon Anthony", 
	"Olivares Amador", 
	22
);

// Mostramos las propiedades.
user.showInfo();

// Le damos un valor a la propiedad privada (password).
user.setPass(19992019);

// Volvemos a mostrar las propiedades.
user.showInfo();

console.info(
	user.getPass()
);

/* ##########===========================================########## */
/* ######===--- Agregar metodos y metodos (estaticos) ---===###### */
/* ##########===========================================########## */

/* Tenemos la clase (User). */
var User = function(names = "", surnames = "", age = 0){
	// Propiedad privada.
	var password = null;
	// Propiedades publicas.
	this.names = names;
	this.surnames = surnames;
	this.age = age;
	
	// Metodo publico.
	this.showInfo = () => {
		console.log(`
			El usuario ${this.names} ${this.surnames}.
			Tiene una edad de: ${this.age}.
			Password: ${password}.
		`);
	};
	// Metodo publico.
	this.setPass = (pass = 0) => {
		if(typeof pass === "number") password = pass;
		else console.log("El password debe ser un número.");
	};
};

// Al prototipo de la clase (User) le agregamos un nuevo metodo.
User.prototype.fullName = function(){
	/* Este metodo puede hacer uso de las propiedades y metodos (publicos) de 
	la clase, pero no puede utilizar los metodos y propiedades (privadas). */
	return (this.names+" && "+this.surnames);
};

// Podemos agregar un metodo (estatico) haciendo uso del prototipo principal, el de la (funcion).
User.__proto__.show = function(){
	console.log("Show");
};

// Metodo estatico.
User.show();

// Hacemos una instancia.
const user = new User(
	"Brandon Anthony", 
	"Olivares Amador", 
	22
);

// Mostramos las propiedades.
user.showInfo();
// Le damos un valor a lapropiedad privada (password).
user.setPass(19992019);
// Volvemos a mostrar las propiedades.
user.showInfo();

// Metodo publico agregado al objeto.
console.info(
	user.fullName()
);

/* ##########=======================########## */
/* ######===--- Definir una clase ---===###### */
/* ##########=======================########## */

/**
 * @class User
 */
var User = (function(){

	// Esto no funciona.
	this.name = "";
	this.surname = "";
	this.age = 0;
    
    // Esta es la clase (User).
    function User(name = "Ninguno", surname = "Ningun apellido", age = 0) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    
    // Le agregamos un metodo a su prototipo.
    User.prototype.info = function () {
        return (`
        	<section>
        		<div>
        			<b></b><span></span>
        		</div>
        	</section>
        `);
    };

    // Retornamos la clase (User).
    return User;
}());

// Instanciamos un objeto de la clase (User).
let user = new User();
let user1 = new User("Brandon", "Olivares", 22);