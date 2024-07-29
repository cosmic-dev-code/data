"use strict";
/*
    NOTA: 
        --- (Clase abstracta): es una clase restringida que no se puede usar para crear objetos 
        	(para acceder a ella, se debe heredar de otra clase).
        --- (Método abstracto): solo se puede usar en una clase abstracta y no tiene cuerpo. 
        	El cuerpo lo proporciona la clase derivada (heredada de).
*/

/* ##########=====================================########## */
/* ######===--- Desarrollar una clase abstracta ---===###### */
/* ##########=====================================########## */

/* La palabra reservada (abstract) permite crear el prototipo de una clase o metodo y desarrollarlo 
en otra parte. */
abstract class User
{

	public abstract setName(name:string):void;
	public abstract getName():string;
	// Metodo normal.
	public showMessage(message:string):string{
		return message;
	}
}

// La clase (Usuario) desarrolla la clase abstracta (User).
class Usuario extends User{
	
	private name:string = null;

	public constructor(name:string){
		super();
		this.name = name;
	}

	/* Los metodos abstractos aqui son desarrollados. */

	public setName(name:string):void{
		this.name = name;
	}

	public getName():string{
		return this.name;
	}
}

var user:Usuario = new Usuario("Brandon");

user.setName("Anthony");
user.getName();

/* ##########================================================########## */
/* ######===--- Metodo (constructor) en la clase abstracta ---===###### */
/* ##########================================================########## */

abstract class User
{   
    public constructor(protected nombre:string, protected edad:number, protected ciudad:string){}

    // Se heredan los metodos abstractos.
	public abstract saludar():string;
	public abstract setName(newName:string):void;
}

class Usuario extends User
{
	// Desarrollamos los metodos abstractos.
	public saludar = function():string{
		return (this.nombre + " de la ciudad: " + this.ciudad);
	};

	public setName(newName:string):void{
		this.nombre = newName;
	}
}

const usuario:Usuario = new Usuario("Brandon", 22, "Tijuana");

/* ##########===================================================########## */
/* ######===--- Metodo (constructor) en la clase desarrollada ---===###### */
/* ##########===================================================########## */

abstract class Auto
{
	// Se heredan todas las propiedades.
	protected pais:string = "Ninguno";
	public costo:number = 0.000;
	protected motor:number;

	public abstract mostrarDatos():void;
	public abstract mostrarDatosEspecificos():void;
}

class Toyota extends Auto
{
	protected marca:string;
	protected fechaSalida:string;

	public constructor(pais:string, costo:number, motor:number, marca:string, fecha:string){
		// Necesario.
		super();
		// Propiedades heredadas.
		this.pais = pais;
		this.costo = costo;
		this.motor = motor;

		// Propiedades propias.
		this.marca = marca;
		this.fechaSalida = fecha;
	}

	// Desarrollamos los metodos oabstractos.

	public mostrarDatos():void{
		console.log(
			this.pais, this.costo, 
			this.motor
		);
	}

	public mostrarDatosEspecificos():void{
		console.log(
			this.marca, 
			this.fechaSalida
		);
	}
}

var auto:Toyota = new Toyota("Estados Unidos", 500000, 3, "Toyota", "17/Sep/2003");

auto.mostrarDatos();
auto.mostrarDatosEspecificos();

/* ##########==========================================########## */
/* ######===--- Metodo (constructor) en ambas clases ---===###### */
/* ##########==========================================########## */

abstract class Usuario
{
	protected nombre:string;
	protected edad:number;
	protected readonly mail:string;

	// Metodo constructor a heredar.
	public constructor(nombre:string, edad:number, mail:string){
		this.nombre = nombre;
		this.edad = edad;
		this.mail = mail;
	}

	public mostrarDatos():void{
		console.log(
			this.nombre, 
			this.edad, 
			this.mail
		);
	}

	abstract getName():string;
}

class User extends Usuario
{
	private num:number = null;

	public constructor(nombre:string, edad:number, mail:string, num?:number){
		// Metodo constructor padre.
		super(nombre, edad, mail);

		// Propiedad propia de esta clase.
		this.num = num;
	}

	public getName = function():string{
		return this.nombre;
	}
}

const user:User = new User("Brandon", 22, "brandon@gmail.com") as User;

user.mostrarDatos();
user.getName();