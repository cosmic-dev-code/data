"use strict";

/* ##########=============########## */
/* ######===--- Métodos ---===###### */
/* ##########=============########## */

// Creamos una clase.
class Usuario
{
	// De esta forma puede declararse un metodo.
	saludar(){
		// ...
	}

	// Tambien puede declararse un metodo de esta manera.
	saludarDos = function(){
		// ...
	}

	// Las funciones flecha tambien son validas.
	arrowFunc = () => {
		// ...
	};
}

// Instanciamos un objeto. 
let usuario = new Usuario();

// Los metodos pueden invocarse.
usuario.saludar();
usuario.saludarDos();
usuario.arrowFunc();

// ------------------------------------------------ //
// ------ Metodos que llaman a otros metodos ------ //
// ------------------------------------------------ //

class Usuario
{
	
	saludar = function(){
		/* Para llamar a un método perteneciente dentro de la misma clase es necesario utilizar 
		la palabra reservada (this). */
		this.miNombre();
	};
	
	// Método al ser llamado para retornar una cadena de texto.
	miNombre = () => {
		return "Brandon";
	};
}

// Instanciamos un objeto 
let usuario = new Usuario();

// Mandamos a llamar al método.
usuario.saludar();

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

class Usuario
{
	// Propiedad la cual se crea de forma privada.
	nombre = "Brandon";

	// Método público.
	saludar(){
		console.log("Hola");
	}
	
	// Método el cual manda a llamar la variable privada.
	decirNombre = function(){
		console.log("Yo soy "+this.nombre);
	};
}

// Instanciamos un objeto.
let usuario = new Usuario();

// Mandamos a llamar sus métodos.
usuario.saludar();
usuario.decirNombre();

// Esta es una manera de obtener una propiedad.
let nombre = usuario.nombre;

// Esta es otra manera de obtener una propiedad, a esta manera se le conoce como (destructurar objeto).
let { nombre } = usuario;

/* ##########========================########## */
/* ######===--- Método constructor ---===###### */
/* ##########========================########## */

class Usuario
{
	// Podriamos declarar las propiedades desde aqui o desde el constructor.
	nombre = "";

	/* Las propiedades dentro del método constructor tomarán como valor las variables de los parámetros, 
	dichos parámetros ya tienen valores por defecto. */
	constructor(nombre = "Brandon", apellido = "Olivares", edad = 21)
	{
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}
	
	saludo = function(){
		console.log(
			"Yo soy "+this.nombre+" " + this.apellido + " y mi edad es: "+this.edad
		);
	};
}

// Adquiere los valores que tiene por defecto 
// en el parámetro el constructor.
let usuario = new Usuario(),
// Le damos propiedades.
	usuario1 = new Usuario("Anthony", "Amador", 19);

usuario.saludo();
usuario1.saludo();

/* ##########=============================########## */
/* ######===--- Modificadores de acceso ---===###### */
/* ##########=============================########## */

class Usuario
{
	// (private/#), permite el acceso al miembro de la clase desde sí misma, pero no de las clases que hereden.
	#propiedadPrivada = 55;
	#metodoPrivado = function(){};

	// (public), permite el acceso al miembro de la clase desde cualquier lugar.
	propiedadPublica = 80;
	metodoPublico(){};	
}

/* ##########==========================================########## */
/* ######===--- Objetos con objetos como propiedades ---===###### */
/* ##########==========================================########## */

/**
 * Primera clase a anidar.
 */
class Info{
	constructor(id, active, name){
		this.id = id;
		this.active = active;
		this.name = name;
	}

	getInfo = function(){
		// ...
	};
}

/**
 * Segunda clase contenedora.
 */
class Usuario
{
	// Es es la propiedad publica que tendra el valor del objeto.
	info = null;

	constructor(info = null){
		this.info = info;
	}
}

// La instancia recibe el objeto.
var usuario = new Usuario(
	new Info(1, true, "Brandon")
);

// Ejecutamos el metodo de la propiedad (info).
usuario.info.getInfo();

/* ##########=============================########## */
/* ######===--- Métodos getter y setter ---===###### */
/* ##########=============================########## */

class Usuario
{
	nombre;
	
	constructor(nombre = "Brandon"){
		this.nombre = nombre;
	}
	
	// (getter), se utilizan para extraer los valores pertenecientes a las propiedades.
	getNombre = function(){
		return this.nombre;
	};
	
	// (setter), se utilizan para modificar los valores pertenecientes a las propiedades.
	setNombre(nombre){
		this.nombre = nombre;
	};	
}

let usuario = new Usuario();

// Nuevo valor para la propiedad nombre.
usuario.setNombre("Anthony");
usuario.getNombre(); // "Anthony"

// --------------------------- //
// ------ (get) y (set) ------ //
// --------------------------- //

class User
{
	_nombre; _edad;

	constructor(nombre = "Brandon", edad = 21){
		this._nombre = nombre;
		this._edad = edad;
	}

	// Propiedad (setter).
	set nombre(nombre){
		this._nombre = nombre;
	}

	// Propiedad (getter).
	get nombre(){
		return this._nombre;
	}

	// NOTA: Notese que los metodos utilizan el mismo nombre llamado (nombre).
}

let user = new User();

// Ahora los metodos funcionan como atributos.

user.nombre = "Anthony";
user.nombre; // "Anthony"

/* ##########=======================########## */
/* ######===--- Métodos estáticos ---===###### */
/* ##########=======================########## */

class Operaciones
{
	// La palabra reservada (static) permite crear metodos estaticos que son llamados desde la clase.

	static suma = function(num = 0, num1 = 0){
		return (num+num1);
	};
	
	static resta = (num = 0, num1 = 0) => {
		return (num-num1);
	};
	
	static multiplicar = function(num = 0, num1 = 0){
		return (num-num1);
	};
	
	static dividir = (num = 0, num1 = 0) => {
		return (num-num1);
	};
}

let resultado = 0;

// Los métodos estáticos permiten ser llamados desde la clase sin tener la necesidad de instanciar un objeto.
resultado = Operaciones.suma(5,5);
resultado = Operaciones.resta(5,5);
resultado = Operaciones.multiplicar(5,5);
resultado = Operaciones.dividir(5,5);

// -------------------------------------------------- //
// ------ Metodos estaticos que llaman a otros ------ //
// -------------------------------------------------- //

class Usuario
{
	// Metodo estatico.
	static message(message = ""){
		window.alert("Mensaje: " + message);
	}

	/**
	 * Estos metodos estaticos mandan a llamar al primer metodo estatico haciendo uso de: 
	 * 	--- La clase (Usuario).
	 * 	--- La palabra reservada (this).
	 */

	static errMessage = function(message = ""){
		this.message("Error " + message);
	}

	static sucMessage = function(message = ""){
		Usuario.message("Success: " + message);
	}
}

// Uso de los metodos estaticos.
Usuario.message("Hola");
Usuario.errMessage("Un error");
Usuario.sucMessage("Todo bien");