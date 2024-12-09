<?php

/* ##########================================########## */
/* ######===--- Controlador del formulario ---===###### */
/* ##########================================########## */

######### --- --- --- Archivo (app/Http/Controllers/FormulariosController.php) --- --- --- #########

# Creamos un controlar el cual se encargara de administrar los datos enviados desde el formulario.

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class FormulariosController extends Controller{

	public function validar(Request $request){

		/**
		 * Tipos de validaciones de un (request).
		 */

		/* Por medio del metodo (validate) es como 
		validamos los datos. */
		$request -> validate([
			# Indica que el campo es requerido.
			"nombre" => "required", 
			# Numero maximo de caracteres.
			"nombre" => "max:10", 
			# Numero minimo de caracteres.
			"nombre" => "min:3", 
			# El campo debe ser un numero.
			"edad" => "numeric", 
			# El campo debe ser un correo.
			"correo" => "email", 
			# El campo debe ser un booleano.
			"activo" => "bool", 
			# Campo opcional, (significa que puede ser nulo).
			"descripcion" => "nullable", 
			# Si la validacion encuentra un dato inconsistente, la validacion se detiene. */
			"password" => "bail", 
			# Verifica que el campo 'correo' sea unico en la tabla (emails). */
			"correo" => "unique:emails", 
			# Verifica un numero celular, (MX).
			"telefono" => "regex:/^(\+?52)?(1)?\d{10}$/"
			# Archivo de imagen.
			"file" => "image", 
			# Valida una fecha.
			"fecha" => "date",
			"fecha" => "date_format:Y-m-d",  
			# Valida (datetime-local), fecha y hora.
			"fecha_hora" => "date_format:Y-m-d\TH:i", 
			# Valida un JSON.
			"json" => "json"
		],[
			# Podemos cambiar los mensajes directamente.
			'nombre.required' => 'El campo nombre es requerido.',
			'edad.numeric' => 'Debe ingresar una edad valida.',
			'correo.email' => 'El correo no es valido.'
		]);

		/**
		 * Multiples validaciones.
		 */

		// Validar por (string).
		$request -> validate([
			"nombre" => "required",
			"apellido" => "required",
			"edad" => "required|max:2",
			"password" => "required|min:6",
			"password_1" => "required|min:6",
			"mail" => "required:min:3|max:30"
		]);

		// Validar por (array).
		$request -> validate([
			"nombre" => ["required"],
			"apellido" => ["required"],
			"edad" => ["required", "max:2"],
			"password" => ["required", "min:6"],
			"password_1" => ["required", "min:6"],
			"mail" => ["required", "min:3", "max:30"]
		]);

		// ...
	}
}