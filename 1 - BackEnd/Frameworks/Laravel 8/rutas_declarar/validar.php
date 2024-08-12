<?php

/* ##########===============================########## */
/* ######===--- Validar desde las (rutas) ---===###### */
/* ##########===============================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

# Podemos importarnos al (request) el cual es el encargado de validar los parametros de la (url).
use Illuminate\Http\Request;

// La informacion de la (url) se instancia en el parametro como un objeto (Request).
Route::get('/usuarios/create', function(Request $request){

	/* El metodo (validate) recibe dos parametros: 
		--- Un arreglo con los campos de la url y sus validaciones.
		--- Un arreglo opcional con los mensajes de error para cada validacion. */

	$request -> validate([
		"nombre" => "required", 
		"edad" => ["required", "numeric"]
	], [
		"nombre.required" => "El nombre no puede estar vacio", 
		"edad.required" => "Debe introducir su edad", 
		"edad.numeric" => "La edad debe ser un numero"
	]);

	// Si los campos no pasan la validacion (entonces retorna al origen del [request] con los mensajes de error).
	// Si los campos pasan la validacion (todo este codigo se ejecuta.)
});

/* EL EJEMPLO: 

	--- http://127.0.0.1:8000/usuarios/create?nombre=Brandon&edad=27
	
Donde los parametros a validar son: 
	--- "nombre" => "Brandon"
	--- "edad" => "27" */