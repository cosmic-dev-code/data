<?php

/* ##########===========================########## */
/* ######===--- Validar un formulario ---===###### */
/* ##########===========================########## */

######### --- --- --- Archivo (app/Http/Controllers/FormulariosController.php) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class FormulariosController extends Controller{
	
	// Recibimos todos los campos y sus valores desde un formulario.
	public function validar(Request $request){

		// Validamos cada uno de los valores de los campos.
		$request -> validate([
			"nombre" => "required", 
			"apellido" => "required", 
			"edad" => "required|max:2", 
			"password" => "required|min:6",
			"password_1" => "required|min:6",
			"mail" => "required:min:3|max:30"
		],[
			/* Podemos cambiar los mensajes directamente. */
			'nombre.required' => 'El campo nombre es requerido.',
			'edad.required' => 'La edad es requerida.',
			'edad.max' => 'La edad debe contener al menos 2 caracteres.'
		]);
	}
}

######### --- --- --- Archivo (resources/views/usuarios/registrarse.blade.php) --- --- --- #########

/* Ahora necesitamos una pagina con un formulario que apute hacia la ruta que acabamos 
de crear, la cual esta bajo el alias 'registrarse'. */

?>

@extends('mis_plantillas.plantilla')

@section('titulo_de_pagina', "Registrarse")

@section('contenido')
	<!-- El atributo (action) apunto al 'alias' de la ruta a la cual se van a enviar los datos. -->
	<form action="<?= route('registrarse') ?>" action="POST" autocomplete="on">
		@csrf
		<h1>Formulario de registro</h1>
		<fieldset>
			<legend>Datos personales</legend>
			<div>
				<label for="idNombre">Ingrese su(s) nombre(s): </label>
				<input type="text" name="nombre" placeholder="Nombre(s)" id="idNombre" value="<?= old('nombre', "Ninguno") ?>">
				<!-- Cuando el usuario ingresa algo erroneo de acuerdo a la validacion que se hizo, (Laravel) 
				retorna al mismo formulario con el mensaje de (error): 
					--- @error(name), Recibe por parametro el atributo 'name' del input el cual fue invalido. -->
				@error('nombre')
					<div>
						<!-- Imprimimos el mensaje retornado de error. -->
						<small><?= $message ?></small>
					</div>
				@enderror
			</div>
			<div>
				<label for="idApellidos">Ingrese su(s) apellido(s): </label>
				<input type="text" name="apellido" id="idApellidos" value="<?= old('apellido', "Ninguno") ?>">
				@error('apellido')
					<div>
						<small><?= $message ?></small>
					</div>
				@enderror
			</div>
			<div>
				<label for="idEdad">Ingrese su edad: </label>
				<input type="number" name="edad" placeholder="Edad" id="idEdad" value="{{old('edad', 0)}}">
				@error('edad')
					<div>
						<small><?php print $message; ?></small>
					</div>
				@enderror
			</div>
		</fieldset>
		<fieldset>
			<legend>Datos de cuenta</legend>
			<div>
				<label for="idPassword">Ingrese su contraseña: </label>
				<input type="password" name="password" placeholder="Contraseña" 
				id="idPassword" value="<?php old('password', ""); ?>">
				@error('password')
					<div>
						<small><?= $message ?></small>
					</div>
				@enderror
			</div>
			<div>
				<label for="idPassword1">Repita su contraseña: </label>
				<input type="password" name="password_1" placeholder="Repita su contraseña" 
				id="idPassword1" value="{{old('password_1', '')}}">
				@error('password_1')
					<div>
						<small>{{$message}}</small>
					</div>
				@enderror
			</div>
			<div>
				<label>
					<span>Ingrese su correo: </span>
					<input type="email" name="mail" placeholder="Correo" 
					required="Se requiere su correo" value="{{old('mail', '')}}">
					@error('mail')
						<div>
							<small><?php echo $message; ?></small>
						</div>
					@enderror
				</label>
			</div>
			<div>
				<center>
					<input type="submit" value="Enviar los datos">2
				</center>
			</div>
		</fieldset>
	</form>
@endsection