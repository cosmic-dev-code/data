/* ##########======================########## */
/* ######===--- Clases genericas ---===###### */
/* ##########======================########## */

// Las clases genericas en TypeScript se utilizan para trabajar con diferente tipado de datos.

/* Esto hace que la clase sea más flexible y reutilizable, ya que puede trabajar con diferentes 
tipos de datos sin necesidad de crear una clase separada para cada tipo.

NOTA: Funciona para garantizar la integridad de los datos. */

/* ##########=============########## */
/* ######===--- Ejemplo ---===###### */
/* ##########=============########## */

// -------------------------- //
// ------ Clase normal ------ //
// -------------------------- //

class Obtener{
	// Propiedad (any), lo que significa que recibe cualquier dato.
	public constructor(private elementos:any[]){}

	// Los datos pueden manipularse recibiendo un (any).

	public agregar(elemento:any):void{
		this.elementos.push(elemento);
	}

	public eliminar(elemento:any):void{
		let num:number = elementos.indexOf(elemento);
		this.elementos.splice(num, 1);
	}

	public obtener(index:number):any{
		return this.elementos.at(index);
	}

	public clear(){
		this.elementos = [];
	}
}

// Recibe un arreglo de numeros.
const numeros:Obtener = new Obtener([10, 55, 60]);

// Recibe un arreglo de strings.
const palabras:Obtener = new Obtener(["Uno", "Dos", "Tres"]);

/**
 * Problema.
 * 
 * Los datos pueden corromperse porque todos los elementos son (any), 
 * por lo que puede recibirse cualquier tipado.
 */

const palabras:Obtener = new Obtener([10, "Dos", true]);

// Podriamos agregar cualquier dato, por lo que la (integridad de los datos se pone en riesgo).
palabras.agregar({
	name: "Brandon"
});

// ---------------------------- //
// ------ Clase generica ------ //
// ---------------------------- //

// <T> Marca un tipado dinamico que se asigna al instanciar la clase.
// (Podriamos decir que esta es una plantilla).
class Obtener<T>{

	// Tenemos una pripiedad de arreglo de tipo: Dinamico.
	public constructor(private elementos:T[]){}

	// (T), representa el tipado que se asignara a la clase al instanciarse.

	public agregar(elemento:T):void{
		this.elementos.push(elemento);
	}

	public eliminar(elemento:T):void{
		let num:number = elementos.indexOf(elemento);
		this.elementos.splice(num, 1);
	}

	public obtener(index:number):T{
		return this.elementos.at(index);
	}

	public clear(){
		this.elementos = [];
	}
}

// Asignamos el tipado a la clase (Obtener) al instanciarla, se hace entre <Tipado>

// (numeros) contiene la clase (Obtener) que solo maneja el tipado (number).
// T = number.
const numeros:Obtener<number> = new Obtener<number>([10, 55, 60]);

// (palabras) contiene la clase (Obtener) que solo maneja el tipado (string).
// T = string.
const palabras:Obtener<string> = new Obtener<string>(["Uno", "Dos", "Tres"]);

// ERROR: Solo maneja (string).
palabras.agregar(true);

// --------------------------- //
// ------ Otros tipados ------ //
// --------------------------- //

// Las clases genericas pueden recibir todo tipo de tipado para trabajar.

interface Usuario{
	names:string;
	surnames:string;
	age:number;
}

// La clase (Obtener), trabjara internamente con el tipado (Usuario).
// T = Usuario.
const usuarios:Obtener<Usuario> = new Obtener<Usuario>([
	{
		names: "Brandon", 
		surnames: "Olivares", 
		age: 22
	}, 
	{
		names: "Anthony", 
		surnames: "Amador", 
		age: 20
	}
]);

/* ##########================########## */
/* ######===--- Peticiones ---===###### */
/* ##########================########## */

// ------------------------------------- //
// ------ Devolucion de una (API) ------ //
// ------------------------------------- //

// Imaginemos que queremos hacer una peticion a una api que devuelve un arreglo de objetos.

// Los objetos tienen esta estructura.
interface Usuario{
	names:string;
	surnames:string;
	age:number;
	active:boolean;
	email:string;
	image:{empty:boolean, src:string, type:string}
}

// ---------------------------- //
// ------ Clase generica ------ //
// ---------------------------- //

// Dado que (fetch) no devuelve un tipado como tal, sino que puede hacerse algo como.

(async function(){
	const data:Usuario[] = await response.json();
}());

// Debemos hacer uso de una clase generica que pueda manejar un tipado.

class Api<T> {
    private readonly baseUrl:string;

    constructor(baseUrl:string){
        this.baseUrl = baseUrl;
    }

    // Por otra parte (TResponse), representa un tipado de una respuesta dinamica, (como T). 
    async get<TResponse>():Promise<TResponse> {
        const response = await fetch(this.baseUrl);

        // (T) = (El tipado que se asigne al instanciarse).
        const data:T = await response.json();
        
        return data as TResponse;
    }
}

// ---------------------------------- //
// ------ Haciendo la peticion ------ //
// ---------------------------------- //

// Se realiza la instancia con el tipado (Usuario[]) para (T).
const api = new Api<Usuario[]>('https://jsonplaceholder.typicode.com/users');

// Asignar tipado a (TResponse) del metodo.
api.get<Usuario[]>().then(function(usuarios:Usuario[]){
	// ...
});