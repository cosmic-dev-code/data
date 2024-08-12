/* ##########================########## */
/* ######===--- Clase base ---===###### */
/* ##########================########## */

// Digamos que esta es la clase base.
class User{

	// La clase tiene sus propias propiedades.
	private nombre:string = "Brandon";
	private edad:number = 21;
	
	// La clase tiene sus propios métodos.
	public getInfo = function():void{
		console.log("El nombre es: "+this.nombre+" y la edad es: "+this.edad);
	};
}

let usuario:User = new User();

usuario.getInfo();

/* ##########=========================================########## */
/* ######===--- Clase que se extiende de otra clase ---===###### */
/* ##########=========================================########## */

// Creamos una clase llamada Gato.
class Gato
{
	/* Las propiedades y metodos (public) y (protected) son los que se pueden heredar. */
	protected nombre:string = "Cual sea";
	protected raza:string = "Alemán";
	protected color:string = "Amarillo";
	
	public maullar = ():void => {
		console.log("Maullando...");
	};
	
	public correr = ():void => {
		console.log("Corriendo a velocidad de: 1km/h");
	};
}


/* Ahora (Tigre) heredo todas las propiedades y metodos de (Gato). */
class Tigre extends Gato
{
	private size:string = "6m";

	// Sobreescribimos el metodo.
	public correr = ():void => {
		console.log("Corriendo a velocidad de: 3km/h");
	};
}

// Instanciamos los objetos y mandamos a llamar sus métodos.
let felino:Gato = new Gato() as Gato;
felino.correr();
let felino1:Tigre = new Tigre() as Tigre;
felino1.correr();

/* ##########===========================########## */
/* ######===--- El método constructor ---===###### */
/* ##########===========================########## */

// Primera clase con (constructor).
class Auto
{
	public constructor(protected color:string = "Negro", protected costo:number = 0.000){
		this.color = color;
		this.costo = costo;
	}

	public mostrarDatos():void{
		console.log(
			`===--- Auto: \n--- Color: ${this.color} con un costo de: ${this.costo}`
		);
	}
}

// Segunda clase que hereda el metodo (constructor).
class Toyota extends Auto
{
	// El metodo (constructor) se heredo con todas las propiedades y metodos.

	private marca:string = "Toyota";
	private fechaDeLanzamiento:string = "20 / Octubre / 2001";

	mostrarDatosEspecificos():void{
		console.log(
			`Marca: ${this.marca} su lanzamiento fue ${this.fechaDeLanzamiento}`
		);
	}
}

const auto = new Auto("Rojo", 30000);
const auto1 = new Toyota("Blanco", 40000);

auto.mostrarDatos() as null;

auto1.mostrarDatos();
auto1.mostrarDatosEspecificos();

/* ##########=========================########## */
/* ######===--- Constructor (padre) ---===###### */
/* ##########=========================########## */

// --------------------------------------- //
// ------ Palabra necesaria (super) ------ //
// --------------------------------------- //

class Person
{
	// Propiedades a heredar.
    protected name:string;
    protected age:number;
}

class User extends Person
{
    public constructor(name:string, age:number){
    	// Aunque no haya un metodo constructor padre, es necesario mandar a llamar al (super).
        super();
        
        // Damos los valores a las propiedades heredadas.
        this.name = name;
        this.age = age;
    }
}

// --------------------------------------- //
// ------ Palabra reservada (super) ------ //
// --------------------------------------- //

class User{

	protected nombre:string = "";
	protected edad:number = 0;

	constructor(nombre:string, edad:number){
		this.nombre = nombre;
		this.edad = edad;
	};
	
	public getInfo:Function = function():void{
		console.log(
			"El nombre es: "+this.nombre+" y la edad es: "+this.edad
		);
	};
}

// Cuando se extiende una clase de otra, siempre es necesario llamar al (super) en el metodo (constructor).
class Admin extends User{

	private nuevaPropiedad:any = null;

	constructor(nombre:string, edad:number, nueva:any){
		// (super) es la forma de heredar el constructor de la clase extendida.
		super(nombre, edad);
		// Ahora solo damos valor a la porpiedad perteneciente a esta clase.
		this.nuevaPropiedad = nueva;
	}
}

let usuario:Admin = new Admin("Brandon", 22, true) as Admin;

usuario.getInfo() as null;

/* ##########=========================================########## */
/* ######===--- Sobreescribir metodos y propiedades ---===###### */
/* ##########=========================================########## */

class Perro
{
	protected tipo:string = "Perro";
	protected color:string = "Cafe";
	protected edad:number = 10;
	protected tipoDeAlimento:string = "Carnivoro";

	public mostrarDatos():void{
		console.log(
			`${this.tipo} es de color ${this.color} con una edad de ${this.edad} solo ${this.tipoDeAlimento}`
		);
	};
}

class Pajaro extends Perro{

	/* Las propiedades y el meotdo (mostrarDatos) ya los habiamos heredado, pero al reedefinirlos aqui, 
	los hemos sobreescrito. */
	protected tipo:string = "Pajaro";
	protected edad:number = 3;
	// (override) puede indicar que se sobreescribe el metodo o propiedad.
	protected override tipoDeAlimento:string = "Herviboro";

	public override mostrarDatos = function():void{
		console.log(
			`El ${this.tipo} es de color ${this.color} con edad de ${this.edad} solo es de tipo ${this.tipoDeAlimento}`
		);
	};
}

const perro:Perro = new Perro(),
	  pajaro:Pajaro = new Pajaro();

perro.mostrarDatos();
pajaro.mostrarDatos() as null;