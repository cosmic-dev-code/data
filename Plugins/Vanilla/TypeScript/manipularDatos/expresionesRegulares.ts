/*
Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro */

//Expresión global para validar un nombre.
let expresion:RegExp = /^[a-zA-Z]+$/g,
		//Validación solo para números.
		expresion1:RegExp = /^\d+$/g,
		//Validación para correos.
		expresion2:RegExp = /^\w+@[a-zA-Z]+\.[a-zA-Z]+$/;

// La clase de expresion regular.
let expression:RegExp = new RegExp("^\\w+@[a-zA-Z]+\\.[a-zA-Z]+$");
expression.test("brandon@gmail.com"); // Da: true.

let nombre = window.prompt("Ingrese su nombre");

/*if(!expresion.test(nombre)){
	window.alert("El dato ingresado no es un nombre");
}*/

if(!expresion2.test(nombre)){
	window.alert("El dato ingresado no es un correo electrónico");
}
