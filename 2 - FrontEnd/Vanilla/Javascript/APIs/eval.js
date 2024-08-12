"use strict";

/* La función eval() en JavaScript es una función integrada que toma una cadena como argumento y la interpreta como código 
JavaScript. Esto significa que eval() ejecuta dinámicamente el código JavaScript pasado como una cadena en 
tiempo de ejecución. */

/* ##########==========================########## */
/* ######===--- Operando con numeros ---===###### */
/* ##########==========================########## */

eval("5 + 5"); // 10

eval("5 + 10 * (5 * 5)"); // 255

eval("(5 * 5) + (5 * 5)"); // 50

// --------------------------------- //
// ------ Api's de Javascript ------ //
// --------------------------------- //

// Da un resultado aleatorio.
eval(`
	(Math.round(Math.random()*50)) + 
	(Math.round(Math.random()*50))
`);

// ---------------------------- //
// ------ Codigo externo ------ //
// ---------------------------- //

let x = 50;
let y = 40;
let z = 80;

// La funcion (eval) puede utilizar variables y elementos (Javascript) del mismo documento.
let result = eval("(x + x) - (y + y * (y / x))"); // 28

// Es como si hicieramos esto.
let result = (x + x) - (y + y * (y / x)); // 28

/* ##########=================================########## */
/* ######===--- Declaraciones de Javascript ---===###### */
/* ##########=================================########## */

// Declaramos dos variables.
eval("var num_0 = 50, num_1 = 60;");

// Declaramos una variable donde se guarda la suma.
eval("var result = (num_0 + num_1);");

// Imprimimos el resultado en consola.
eval("console.log(\"La suma es: \"+result);"); // "La suma es: 110"

// ----------------------------------------- //
// ------ Error al declarar con (led) ------ //
// ----------------------------------------- //

// NOTA: Al declarar las variables con (led), son indetectables.
eval("let num_0 = 50, num_1 = 60;");

// Aqui dara un error ya que la variable (num_0) no esta declarada.
eval("let result = (num_0 + num_1);");
eval("console.log(\"La suma es: \"+result);");

// ----------------------------- //
// ------ Array y objetos ------ //
// ----------------------------- //

eval("[5, true, \"Hola\"]"); // Da: [5, true, "Hola"].

eval("var obj = {nombres: 'Brandon Anthony', apellidos: 'Olivares Amador', edad: 22};");
/*
	Da: {
		nombres: 'Brandon Anthony',
		apellidos: 'Olivares Amador',
		edad: 22
	}
*/

eval("var arr = [Math.round(Math.random()*100), [100, 50, 30], {numbre: \"Brandon\", apellido: \"Olivares\", edad: 22}];");
/*
	Da: {
		27,
		[100, 50, 30],
		{
			numbre: "Brandon", 
			apellido: "Olivares", 
			edad: 22
		}
	}
*/

/* ##########===============########## */
/* ######===--- Funciones ---===###### */
/* ##########===============########## */

// ------------------------------------------------- //
// ------ Funcion dentro de la funcion (eval) ------ //
// ------------------------------------------------- //

// La cadena de texto pasara a convertirse en codigo (Javascript).
eval(`
	function divStyles(){
		try{
			for(let div of document.getElementsByTagName('div')){
				div.style.backgroundColor = ("#ccc");
				div.style.border = ("2px solid #000");
				div.style.borderRadius = ("10px");
			}

			return true;
		}catch(error){
			return error;
		}
	}
`);

let result = divStyles(); // Da: true.

// --------------------------------------------------------------- //

// El codigo dentro de la cadena de texto se convierte en codigo (Javascript).
eval(`
	var potencial = new Function('num = 0', 'potencia = 0', \`
		if(potencia <= 0){
			return (num * num);
		}else{
			let i = 0;
			let pot = num;
			do{
				pot = (pot * num);
				i++;
			}while(i < potencia);

			return pot;
		}
	\`);
`);

// Podemos mandar a llamar la funcion.
potencial(5); // Da: 25.
potencial(5, 1); // Da: 25.
potencial(2, 2); // Da: 125.

// ------------------------------------------------ //
// ------ Funcion fuera de la funcion (eval) ------ //
// ------------------------------------------------ //

// Tenemos una funcion declarada en nuestro documento (Javascript).
function imprimirArray(arr = []){
	arr.forEach((element, index) => {
		console.info(index+" => "+element);
	});

	return true;
}

/* La funcion (eval) tiene la capacidad de utilizar codigo (Javascript) existente 
en nuestro documento. */
eval(`
	imprimirArray([
		"Brandon",
		"Anthony",
		"Olivares",
		"Amador",
		22,
		"Programador",
		true
	]);
`);

/* Da: 
	--- 0 => Brandon
	--- 1 => Anthony
	--- 2 => Olivares
	--- 3 => Amador
	--- 4 => 22
	--- 5 => Programador
	--- 6 => true
*/

/* ##########============########## */
/* ######===--- Clases ---===###### */
/* ##########============########## */

// ------------------------------------------------------ //
// ------ Clases con la palabra reservada (class)  ------ //
// ------------------------------------------------------ //

/* Creamos una clase, pero la clase solo es accesible dentro de la funcion 
(eval), por lo que instanciamos un objeto para tener todos los 
beneficios que brinda el constructor. */
eval(`
	class Person
	{
		name = "";
		surname = "";
		age = 0;

		constructor(name = "", surname = "", age = 0)
		{
			this.name = name;
			this.surname = surname;
			this.age = age;
		}

		info(){
			console.log(\`
				El usuario \${this.name} \${this.surname} tiene una edad de: \${this.age}
			\`);

			return true;
		}

		set name(name = ""){
			this.name = name;
		}

		get name(){
			return this.name;
		}
	}

	// Aqui se instancia el objeto.
	var person = new Person("Brandon", "Olivares", 22);
`);

person.info(); // Da: true.
/*
	Salida: "El usuario Brandon Olivares tiene una edad de: 22".
*/
person.name; // Da: "Brandon".
person.surname; // Da: "Olivares".
person.age; // Da: 22.

// ------------------------------------- //
// ------ Clases con (funciones)  ------ //
// ------------------------------------- //

/* Creamos una clase haciendo uso de la palabra reservada (function), 
de esta manera la clase ya sera accesible fuera de 
la funcion (eval). */
eval(`
	function Person(name = "", surname = "", age = 0)
	{
		this.construct = function(){
			this.name = name;
			this.surname = surname;
			this.age = age;
		};

		this.name = "";
		this.surname = "";
		this.age = 0;
		this.construct();

		this.info = function(){
			console.log(\`
				El usuario \${this.name} \${this.surname} tiene una edad de: \${this.age}
			\`);

			return true;
		};
	}
`);

// Ahora podemos intanciar objetos de la clase (Person).
const person = new Person("Brandon", "Olivares", 22);
const person0 = new Person("Anthony", "Amador", 20);
const person1 = new Person("Cosmic", "Cosmico", 19);

person.info(); // Da: true.
/*
	Salida: "El usuario Brandon Olivares tiene una edad de: 22".
*/
person.name; // Da: "Brandon".
person.surname; // Da: "Olivares".
person.age; // Da: 22.