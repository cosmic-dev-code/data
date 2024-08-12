/* ##########=======================########## */
/* ######===--- Objeto individual ---===###### */
/* ##########=======================########## */

// Se especifica el tipado del objeto con: {name:string, age:number}
// Especificando cada tipado de las propiedades del objeto.
let objeto:{name:string, age:number} = {
	name: "Brandon", 
	age: 22
}

objeto.name; // string
objeto.age; // number

// ------------------------------------ //
// ------ Definir cada propiedad ------ //
// ------------------------------------ //

// Definimos cada una de las propiedades.
let obj:{
	names:string, 
	age:number, 
	info: {
		status:boolean, 
		url:string, 
		with:boolean
	}, 
	getInfo():[
		string, 
		number, 
		{
			status:boolean, 
			url:string, 
			with:boolean
		}
	]
};

// Asignamos al objeto.
obj = {
	names: "Brandon", 
	age: 22, 
	info: {
		status: true, 
		url: "http", 
		with: false
	}, 
	getInfo(){
		return [this.names, this.age, this.info];
	}
};

// ------------------------------- //
// ------ Utilizar interfaz ------ //
// ------------------------------- //

// Para definir el tipado de un objeto mas grande es necesario desarrollar una interfaz.

// La interfaz dictamina todo el tipado de las propiedades y metodos del objeto.
interface Account{
	id:number;
	name:string;
	active:boolean;
	info(option:string):string;
	connect():boolean;
	"to-unset#Account"(option:boolean, time:number):void;
}

// Definimos el objeto de la interfaz.
const miCuenta:Account = {
    id: 123,
    name: "Juan",
    active: true,
    info(option: string):string{
    	// ...
    },
    connect():boolean{
        // ...
    },
    "to-unset#Account"(option: boolean, time: number):void{
    	// ...
    }
};


miCuenta["to-unset#Account"](true, 10); // void

const info:Function = miCuenta.info; // Function