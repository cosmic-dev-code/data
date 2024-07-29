/* ##########====================########## */
/* ######===--- Tipos de datos ---===###### */
/* ##########====================########## */

// Datos numericos.
var numero = 54353;
var numero = 324235.435345;
// Dato numerico de tipo (infinito).
var infinity = Infinity;

// Dato de tipo string.
var string = "Brandon Anthony";
var string = 'Brandon Anthony';

// Arrays.
var array = [10, 20, 30];
var array = ["Hola", "Brandon", "Anthony", [6,7,8]];
var array = [10, false, "Brandon"];
var array = Array("Hola", "mundo", true);
var array = new Array("Hola", "mundo", true);

// Booleanos.
var bool = true;
var bool = false;

// Dato nulo, (sin valor).
var nulo = null;
var nulo;

// Variable no definida, (inexistente).
var noDeclarada = undefined;
var noDeclarada = (void 0);

// Dato ilogico.
var resultado = "cadena" * 50;
var resultado = NaN;

// Funciones anonimas.
var funcion_anonima = function(){}
var funcion_anonima = () => {};
var funcion_anonima = new Function(``);

// Clase anonima.
var ClaseAnonima = class{
	constructor();
};

// Una clase.
class NombreDeClase{
	constructor(){}
}

// Datos de tipo objeto.
var objeto = {
	nombre: "Brandon",
	edad: 21,
	informacion(){}
};
var objeto = {}; // Objeto vacio.
var objeto = new Clase();
var objeto = new Object({});

// Constantes.
const miConst = 25;
const miConst = "Brandon Anthony";
const miConst = true;