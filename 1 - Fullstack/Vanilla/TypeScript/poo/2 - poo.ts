"use strict";

/* ##########=============########## */
/* ######===--- Métodos ---===###### */
/* ##########=============########## */

// Creamos una clase.
class Usuario
{
	// De esta forma puede declararse un metodo.
	saludar():void{
		// ...
	}

	// Tambien puede declararse un metodo de esta manera.
	saludarDos = function():void{
		// ...
	}

	// Las funciones flecha tambien son validas.
	arrowFunc = ():void => {
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

class Messages{

	/**
	 * @Metodos de la instancia de esta clase.
	 */

	protected messageSuccess:Function = ():void => {
		// ...
	};

	private msgError:Function = function(sendController?:Controller):void{
		// ...
	};

	public get = (msg:string):string => ("Mensaje: " + msg);

	/**
	 * @Llamar a los metodos pertenecientes a la instancia de esta clase.
	 */

	// Este metodo manda a llamar a otros metodos.
	public superGet(msg?:string):[string]{
		// Utiliza de referencia, (this).
		this.msgError(msg);
		this.messageSuccess();

		return [
			this.get(msg)
		];
	}
}

// Se instancia un nuevo objeto recibiendose como (Messages), (aunque no es necesario especificarlo).
const messages:Messages = new Messages() as Messages;

messages.superGet("Hola");

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

class User{
	// Propiedades.
	private names:string = "Brandon";
	private age:number = 22;

	// Metodo que devuelve las propiedades.
	public getData:Function = function():[string, string]{
		return [
			this.names, 
			this.age.toString()
		];
	};
}

const user:User = new User();

// Utilizando el metodo.
user.getData();

// ------------------------------- //
// ------ Tipado (opcional) ------ //
// ------------------------------- //

class Params
{
	// Indica que puede ser (null), o (undefined), o (null).
	public name:string|void|null;

	// El operador (?) indica que este es un parametro opcional, es decir, (puede recibirse o no).
	public getParams(param?:boolean):void{
		if(param === undefined){
			// El parametro no se recibio.
		}else{
			// El parametro se recibio.
		}
	}

	// Indicar un retorno de algo o nada.
	public getName():string|void{
		return undefined;
	}
}

// ------------------------- //
// ------ Union types ------ //
// ------------------------- //

class Usuario
{
	// Podemos indicar un tipado dinamico, quiza una propiedad pueda ser una u otra cosa.
	public propiedad:string|int = 50;

	// Tambien aplica para los metodos, pueden devolver una u otra cosa.
	public retornar():string|null|array
	{
		return null;
	}
}

/* ##########========================########## */
/* ######===--- Método constructor ---===###### */
/* ##########========================########## */

class User{

	// Declaramos las propiedades sin valor.
	private names:string = null;
	private surnames:string = null;
	private age:number = null;

	/* El metodo (constructor) proporciona valores a cada una de las 
	propiedades propias de la clase. */
	public constructor(names:string, surnames:string, age:number){
		this.names = names;
		this.surnames = surnames;
		this.age = age;
	}

	public getInfo():{complete:string, age:number}{
		return {
			complete: (this.names + " " + this.surnames), 
			age: this.age
		};
	}

}

const user:User = new User("Brandon Anthony", "Olivares Amador", 22) as User;
user.getInfo() as {complete:string, age:number};

// ---------------------------------------------- //
// ------ (Property constructor promotion) ------ //
// ---------------------------------------------- //

class Usuario
{
	/**
	 * El constructor puede abreviarse de la siguiente manera.
	 */

	/* Propiedades que se declaran.
		--- private nombre:string = "Brandon";
		--- private age:number = 22; */

	// La: (Declaracion), (Parametros) y (Especificacion) se abrevian en los parametros del constructor.
    public constructor(private nombre:string = "Brandon", private age:number = 22){
    	// this.nombre = nombre;
    	// this.age = age;
    }

    /**
     * Podemos hacer uso de las propiedades.
     */
    public getData = function():[string, string]{
        return [
            this.nombre, 
            this.age.toString()
        ];
    }
}

const usuario:Usuario = new Usuario();

// Uso del metodo normal.
usuario.getData();

/* ##########=============================########## */
/* ######===--- Modificadores de acceso ---===###### */
/* ##########=============================########## */

class User
{
	// (private), permite el acceso al miembro de la clase desde sí misma, pero no de las clases que hereden.
	private propiedadPrivada:string;
	private metodoPrivado():void{}

	// (public), permite el acceso al miembro de la clase desde cualquier lugar.
	public propiedadPublica:string;
	public metodoPublico():void{}

	// (protected), permite el acceso al miembro de la clase desde sí misma y cualquier clase que lo herede.
	protected propiedadProtegida:string;
	protected metodoProtegido():void{}

	// (Por defecto), se indican con el modificador de acceso (public).
	propiedad:string;
	metodo():void{}
}

/* ##########==========================================########## */
/* ######===--- Objetos con objetos como propiedades ---===###### */
/* ##########==========================================########## */

/**
 * Clase con un objeto de tipo (Info).
 */
class Info{
	public names:string = null;
	public surnames:string = null;
	public age:number = null;

	public constructor(names:string, surnames:string, age:number){
		this.names = names;
		this.surnames = surnames;
		this.age = age;
	}
}

/**
 * Clase con un objeto de tipo (User).
 */
class User{
	// La propiedad es de tipo (Info).
	public info:Info = null

	// Se instancia el objeto en el constructor.
	public constructor(names:string, surnames:string, age:number6){
		this.info = new Info(names, surnames, age);
	}

	// Puede utilizarse la propiedad de tipo (Info).
	public getInfo():{complete:string, age:number}{
		return {
			complete: (this.info.names + " " + this.info.surnames), 
			age: this.info.age
		};
	}

}

const user:User = new User("Brandon Anthony", "Olivares Amador", 22);

// Puede extraerse la propiedad de tipo (Info).
let info:Info = user.info;

/* ##########=============================########## */
/* ######===--- Métodos getter y setter ---===###### */
/* ##########=============================########## */

class Usuario
{
    private _nombre:string;
    public constructor(nombre:string){
        this._nombre = nombre;
    }
    
    // Los métodos (getter) se utilizan para extraer los valores pertenecientes a las propiedades.
    public getNombre = function():string{
        return this._nombre;
    };
    
    // Los métodos (setter) se utilizan para modificar los valores pertenecientes a las propiedades.
    public setNombre(nombre:string):void{
        this._nombre = nombre;
    };
}

let usuario:Usuario = new Usuario("Anthony");

// Uso de los metodos.
usuario.getNombre() as string;
usuario.setNombre("Brandon") as null;

// -------------------------------------- //
// ------ Utilizando (get) y (set) ------ //
// -------------------------------------- //

class Usuario
{
	public constructor(private _nombre:string){}

	// (getter) -> metodo -> (nombre).
	public get nombre():string{
		return this._nombre;
	}

	// (setter) -> metodo -> (nombre).
	public set nombre(nombre:string):void{
		this._nombre = nombre;
	}
}

let usuario:Usuario = new Usuario("Anthony");

// Ahora los metodos funcionan como una (propiedad).
usuario.nombre as string;
usuario.nombre = "Brandon";

// ---------------------------------- //
// ------ Propiedad (readonly) ------ //
// ---------------------------------- //

/**
 * Una propiedad declarada como (readonly) indica que dicha propiedad solo puede obtener un valor: 
 * 	--- (Desde su declaracion e inicializacion).
 * 	--- (En el constructor).
 * 
 * Estas propiedades (no permiten modificar su valor despues de eso), lo que significa que podemos 
 * colocarlas como (publicas) garantizando su integridad.
 */

class Usuario
{
	// Recibe su valor aqui.
	public readonly nombre:string = "Brandon";
	// Recibe su valor en el constructor.
	public readonly age:number;

    public constructor(age:number = 18, nombre:string = "Brandon"){
    	this.age = age;

    	// Esto tambien es posible.
    	this.nombre = nombre;
    }

    // NOTA: Esto da un (error), ya que no puede modificarse el valor de una propiedad (readonly).
    private Modificar():void{
        this.nombre = "Texto modificado.";
    }
}

// Recibiendo los valores para las (readonly).
let prueba:Usuario = new Usuario();

prueba.nombre; // "Brandon"

// (ERROR): La propiedad no puede modificarse.
prueba.nombre = "Anthony";

/* ##########=======================########## */
/* ######===--- Métodos estáticos ---===###### */
/* ##########=======================########## */

class Operaciones
{
	// La palabra reservada (static) declara un metodo (estatico).

	public static suma = function(num:number = 0, num1:number = 0):number{
		return (num+num1);
	};
	
	public static resta = (num:number = 0, num1:number = 0):number => {
		return (num-num1);
	};
	
	public static multiplicar = function(num:number = 0, num1:number = 0):number{
		return (num-num1);
	};
	
	public static dividir = (num:number = 0, num1:number = 0):number => {
		return (num-num1);
	};
}

let resultado:number = 0;

// Los metodos estaticos son metodos pertenecientes a la clase.
// NOTA: Las instancias no heredan los metodos estaticos.
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
	public static message(message:string = ""):void{
		window.alert("Mensaje: " + message);
	}

	/**
	 * Estos metodos estaticos mandan a llamar al primer metodo estatico haciendo uso de: 
	 * 	--- La clase (Usuario).
	 * 	--- La palabra reservada (this).
	 */

	private static public errMessage:Function = function(message:string = ""):void{
		this.message("Error " + message);
	}

	private static public sucMessage:Function = function(message:string = ""):void{
		Usuario.message("Success: " + message);
	}

	public static allMessage(message:string = ""):void{
		this.errMessage(message);
		this.sucMessage(message);
	}
}

// Uso de los metodos estaticos.
Usuario.message("Hola") as null;
Usuario.allMessage("Hola") as null;