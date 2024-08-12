"use strict";

// Representa el JavaScript normal, (sin tipado), puede ser cualquier valor.
var cualquierValor = 60;
var cualquiera:any = 60;
var cualquier:any = [new Headers()];

// Antes de asignar a algun otro, (debe hacerse una comprobacion del mismo).
var desconocido:unknown = 50;

// Tenemos los strings.
let nombre:string = "Brandon";
let letra:string = 'h';

// Datos numericos.
let num:number = 50;
let decimal:number = 25.5007;

// Numero entero muy grande.
let grande:bigint = 100n;

// Datos booleanos.
let activo:boolean = true;
let resultado:boolean = (10 > 5);

// Dato nulo, (sin valor).
var nulo:null = null;
var nulo;

// Variable no definida, (inexistente).
var noDeclarada:undefined = undefined;
var noDeclarada:undefined = (void 0);

// Arreglos.
var array:number[] = [10, 15, 20];
var arrayComplejo:string[][] = [
	["Uno"], ["Dos"], ["Tres"]
]
// Arreglos complejos.
var varios:[string, number] = ["Brandon", 22];
var muchos:[string[], [Usuario, Usuario[]]] = [
	["Brandon", "Anthony"], 
	[
		new Usuario, 
		[new Usuario(), new Usuario()]
	]
];

// Objetos e instancias.
var usuario:{name:string, age:number} = {
	name: "Brandon", 
	age: 22
};
var usuario:Usuario = new Usuario();

// Funciones.
var funcionAnonima:Function = function(){};

// Sin devolucion.
function funcion():void{}
var funcion = function():void{};


// Dato de tipo (simbolo).
var simbolo:symbol = Symbol("foo");