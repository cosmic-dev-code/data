
/* ##########=====================================########## */
/* ######===--- Atributos del objeto (function) ---===###### */
/* ##########=====================================########## */

/* Accedemos al prototipo de la clase (Function), en el prototipo podemos ver todas las propiedades 
y métodos del constructor. */
Function.__proto__;

function suma(){}

// Devuelve el nombre de la función.
suma.name; // "suma"

// Convierte toda la funcion en una cadena.
suma.toString(); // "function suma(){}"

/* Cuando se manda a invocar una funcion, automaticamente se invoca su metodo (call), el metodo (call) 
recibe por parametros: 
	--- El objeto que se va a tomar como referencia.
	--- Los demas parametros son los parametros pertenecientes a la funcion. */

/* --- PARA MAS INFORMACION POR FAVOR CONSULTAR EL DOCUMENTO (metodoCall.js) */
suma.call();