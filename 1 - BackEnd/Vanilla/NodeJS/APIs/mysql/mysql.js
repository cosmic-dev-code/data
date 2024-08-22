"use strict";

// Requerimos el objeto encargado de la conexion y demas.
var mysql = require('mysql');

/* ##########=================================================########## */
/* ######===--- Conexion con el servidor y la base de datos ---===###### */
/* ##########=================================================########## */

// Creamos la conexion con el servidor.
var con = mysql.createConnection({
	host: "localhost", 
	user: "root", 
	password: "tu_password", 
	database: "my_database", 
	// (Opcional), podemos indicar el puerto.
	port: 3000
});

// Ejecutamos la conexion.
con.connect((error, result) => {

	/* Si el parametro del (error) no es nulo, etonces tenemos un 
	error, de lo contrario, podemos hacer consultas. */

	if(error) console.error("Error al conectar con el servidor: ", error);
	else{
		console.log("Conectado con el servidor: ", result);
	}

});

/* ##########==================================########## */
/* ######===--- Consultas a la base de datos ---===###### */
/* ##########==================================########## */

// Hacemos la conexion a la base de datos.
var con = mysql.createConnection({
	host: "localhost", 
	user: "root", 
	password: "tu_password"
});

/* Ejecutamos la conexion la cual recibe por parametro: 
	--- Una funcion con dos parametros: 
		--- El error de la ejecucion, (en caso de que haya uno).
		--- La informacion de la ejecucion. */
con.connect((error, result) => {

	if(error) throw error;

	// Consulta (sql).
	let query = (`CREATE TABLE \`users\`(
		\`id_user\` UNSIGNED INTEGET AUTO_INCREMENT NOT NOL, 
		\`names\` VARCHAR(255) NOT NULL, 
		\`surnames\` VARCHAR(255) NOT NULL, 
		\`age\` UNSIGNED INT(2) NOT NULL, 
		\`description\` TEXT NOT NULL COMMENT 'Es una descripcion'
	);`);

	/* El metodo (query) recibe dos parametros: 
		--- La consulta (sql).
		--- Una funcion que recibe por parametros: 
			--- El error de la consulta, (en caso de que haya avisto un error).
			--- El resultado de la consulta.
			--- La informacion de la consulta. */
	con.query(query, (errorRequest, resultRequest, fields) => {

		if(errorRequest) throw errorRequest;

		console.log("Consulta hecha correctamente.");
	});

});

/* ##########========================########## */
/* ######===--- Descomprimir datos ---===###### */
/* ##########========================########## */

// Ejecutamos la conexion.
con.connect((error, result) => {

	if(error) throw error;

	// Hacemos una consulta (sql) para extraer los datos.
	con.query("SELECT * FROM `tabla`;", (errorRequest, resultRequest, fields) => {

		if(errorRequest) throw errorRequest;

		// Un (array) de (objetos) con la informacion de cada registro.
		console.log(resultRequest);

		/* El resultado de la consulta, nos devuelve un (array) de (objetos), cada (objeto representa un registro) 
		de la tabla de la base de datos. */
		resultRequest.forEach(row => {
			console.log("Nombre: "+row.names);
			console.log("Apellidos: "+row.surnames);
			console.log("Edad: "+row.age);
		});

	});

});