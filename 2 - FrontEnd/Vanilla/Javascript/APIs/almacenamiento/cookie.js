
/* ##########=============########## */
/* ######===--- Cookies ---===###### */
/* ##########=============########## */

/* ADVERTENCIA: --- NECESITA UN SERVIDOR ---

Las cookies son utilizadas para transmitir y guardar informacion. */

/* Extraemos todas las cookies que existan. */
let cookies = document.cookie;

/* ##########======================########## */
/* ######===--- Crear una cookie ---===###### */
/* ##########======================########## */

/* De esta manera hemos creado una cookie, la cookie caduca hasta que el usuario abandone la sesion. */
document.cookie = "nombreDeLaCookie=Valor";

/* Cookie que dura solo durante la sesion. */
document.cookie = "usuario=Brandon";

/* ##########===============================########## */
/* ######===--- Crear una cookie completa ---===###### */
/* ##########===============================########## */

/* De esta manera creamos una cookie completa, todos sus valores al ser (seteados) y al finalizar 
deben tener al final un (;) siempre y cuando se vaya a colocar otro nuevo valor.

Los valores que recibe son los siguientes:  	
	--- Nombre de la cookie y su valor.
	--- Palabra reservada (expires) y el valor en formato UTC el cual indica cuando va a expirar la cookie.
	--- La ruta del archivo en donde estara disponible la cookie, en este caso en todo el sitio web.
	--- El tiempo en (segundos) en el que la cookie va a expirar. */
document.cookie = `
	nombre=valor;
	expires=Tue Jul 13 2021 19:44:14 UTC;
	path=/;
	age=1000
`;

/* NOTA: Las palabras reservadas son eso, (reservadas), y no se pueden cambiar, (expires, path y age) 
son estrictamente necesarias. */

/* ##########==========================########## */
/* ######===--- Modificar una cookie ---===###### */
/* ##########==========================########## */


/* Solo se edita el valor de la cookie escribiendo el mismo nombre de la cookie que se desea editar, (los demas 
valores: expires, path y age, no se pueden editar). */
document.cookie = "usuario=nuevoValor";

/* ##########=========================########## */
/* ######===--- Eliminar una cookie ---===###### */
/* ##########=========================########## */

/* No importa cual valor se le ponga a la cookie, lo importante es poner el nombre de la cookie y con 
la palabra reservada (max-age) a (0) podemos borrar la cookie. */
document.cookie = "usuario=0;max-age=0";

/* ##########==================================================########## */
/* ######===--- Manipulacion de cookies atraves de funciones ---===###### */
/* ##########==================================================########## */

/* Funcion para convertir segundos en una fecha (UTC). */
let nuevaFechaUTC = function(dias){

	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias*(1000*60*60*24));

	return fecha.toUTCString();
};

/* Una funcion para crear una cookie. */
let crearCookie = (nombre, dias) => {

	let expires = nuevaFechaUTC(dias);
	document.cookie = `${nombre};expires=${expires}`;

	return false;
};

/* Funcion para buscar una cookie y retornar su valor. */
let obtenerCookie = function(nombreDeLaCookie){
	let cookies = document.cookie;
	cookies = cookies.split(";");

	for(let i in cookies){
		let cookie = cookies[i].trim();
		if(cookie.startsWith(nombreDeLaCookie)){
			return cookie.split("=")[1];
		}
	}

	return "No existe ninguna cookie con ese nombre.";
};

/* Funcion para eliminar una cookie. */
let eliminarCookie = function(nombreDeLaCookie){
	document.cookie = `${nombreDeLaCookie}=0;max-age=0`;

	return false;
};

/* Funcion para modificar una cookie. */
let setCookie = (nombreDeLaCookie, nuevoValor) => {
	document.cookie = nombreDeLaCookie+"="+nuevoValor;

	return 0;
};