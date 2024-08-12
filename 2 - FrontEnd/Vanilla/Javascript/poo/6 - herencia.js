/* ##########================########## */
/* ######===--- Clase base ---===###### */
/* ##########================########## */

// La clase base es la clase que se utilizará para convertirla en aquella clase padre de las demás clases.
class User{

	/* La clase tiene sus propias propiedades. */
	nombre = "Brandon";
	edad = 21;
	
	/* La clase tiene sus propios métodos. */
	getInfo = function(){
		console.log
		("El nombre es: "+this.nombre+" y la edad es: "+this.edad);
	};
}

/* ##########=========================================########## */
/* ######===--- Clase que se extiende de otra clase ---===###### */
/* ##########=========================================########## */

// Creamos una clase llamada Gato.
class Gato{
	// Propiedades...
	nombre = "Cual sea";
	raza = "Alemán";
	color = "Amarillo";
	
	// Métodos...
	maullar = () => {
		console.log("Maullando...");
	};
	
	correr = () => {
		console.log("Corriendo a velocidad de: 1km/h");
	};
}

// Creamos una clase llamada (Tigre) que toma todas las propiedades y métodos de la clase (Gato).
class Tigre extends Gato{
	size = "6m"; // Nueva propiedad.
	
	/* Sobreescribimos el método ya que la clase padre 
	también tiene el mismo método, por lo cual el mismo 
	método en ambas clases hace diferentes cosas. */
	correr(){
		console.log("Corriendo a velocidad de: 3km/h");
	};
}

// Instanciamos los objetos y mandamos a llamar sus métodos.

let felino = new Gato();
felino.correr();

let felino1 = new Tigre();
felino1.correr();

/* ##########===========================########## */
/* ######===--- El método constructor ---===###### */
/* ##########===========================########## */

// Tenemos nuestra primera clase.
class Auto{
	constructor(color = "Negro", costo = 0.000){
		this.color = color;
		this.costo = costo;
	}

	mostrarDatos(){
		console.log(
			`===--- Auto: \n--- Color: ${this.color} con un costo de: ${this.costo}`
		);
	}
}

/* La clase (Toyota) adquiere todas las propiedades y metodos de la primera, 
pero ademas tiene dos propiedades mas y un metodo mas. */
class Toyota extends Auto{
	// Propiedades privadas.
	#marca = "Toyota";
	#fechaDeLanzamiento = "20 / Octubre / 2001";

	mostrarDatosEspecificos(){
		console.log(
			`Marca: ${this.#marca} su lanzamiento fue ${this.#fechaDeLanzamiento}`
		);
	}
}

// Instanciamos ambos objetos de ambas clases.
const auto = new Auto("Rojo", 30000);
const auto1 = new Toyota("Blanco", 40000);

// Imprimimos el metodo perteneciente a la primera clase.
auto.mostrarDatos();

// Imprimimos los metodos de ambas clases del objeto instanciado de la clase (Toyota).
auto1.mostrarDatos();
auto1.mostrarDatosEspecificos();

/* ##########=========================########## */
/* ######===--- Constructor (padre) ---===###### */
/* ##########=========================########## */

class User{
	/* La clase tiene sus propias propiedades. */
	nombre = "";
	edad = 0;

	/* Las propiedades pertenecientes a la calse reciben 
	sus valores por medio del método constructor. */
	constructor(nombre = "Brandon", edad = 21){
		this.nombre = nombre;
		this.edad = edad;
	};
	
	getInfo = function(){
		console.log("El nombre es: "+this.nombre+" y la edad es: "+this.edad);
	};
}

let usuario = new User();
usuario.getInfo();

class Admin extends User{
	#nuevaPropiedad = null;

	constructor(nombre = "Brandon", edad = 21, nueva = null){
		/* La función (super) permite inicializar primero el método constructor padre antes que el método 
		constructor hijo.

		Al método constructor hijo le pasamos los parámetros que recibe el padre, entonces al método padre 
		lo mandamos llamar y le pasamos por parámetro las variables. */
		super(nombre, edad);
		this.#nuevaPropiedad = nueva;
	}
}

let usuario = new Admin();

// Mandamos a llamar un método perteneciente a la clase padre que también su clase hija hereda.
usuario.getInfo();

/* ##########==========================================########## */
/* ######===--- Sobre escribir metodos y propiedades ---===###### */
/* ##########==========================================########## */

class Perro{
	// Propiedades.
	tipo = "Perro";
	color = "Cafe";
	edad = 10;
	tipoDeAlimento = "Carnivoro";

	// Metodo.
	mostrarDatos(){
		console.log(
			`${this.tipo} es de color ${this.color} con una edad de ${this.edad} solo ${this.tipoDeAlimento}`
		);
	};
}

class Pajaro extends Perro{
	// Sobreescribimos algunas propiedades ya existentes.
	tipo = "Pajaro";
	edad = 3;
	tipoDeAlimento = "Herviboro";

	// Sobreescribimos el metodo ya existente.
	mostrarDatos = function(){
		console.log(
			`El ${this.tipo} es de color ${this.color} con edad de ${this.edad} solo es de tipo ${this.tipoDeAlimento}`
		);
	};
}

const perro = new Perro(), pajaro = new Pajaro();

// Ambos objetos utilizan el mismo metodo, pero no actuan igual, pues uno fue sobre escrito.

perro.mostrarDatos();
pajaro.mostrarDatos();