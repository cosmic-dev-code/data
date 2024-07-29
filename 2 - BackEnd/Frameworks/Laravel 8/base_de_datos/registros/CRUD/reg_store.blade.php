<?php

######## --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/', function(){
	return view('welcome') -> name('usuarios.bienvenida');
});

/* Para crear un un registro es necesario utilizar el metodo (post), */
Route::post('verificar/registro', [UsuarioController::class, "store"]) -> name('usuarios.store');

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller{
	// Recibimos el objeto (request) con todos los datos.
	public function store(Request $request){
		

		$usuario = new Usuario();

		$usuario -> nombre = $request -> nombre;
		$usuario -> apellido = $request -> apellido;
		$usuario -> edad = $request -> edad;
		$usuario -> mail = $request -> mail;
		$usuario -> password = $request -> password;

		// Hacemos el registro.
		$result = (int) $usuario -> save();

		/* Validamos si el dato se registro correctamente. */
		if($result === 1){
			return redirect() -> route("verificar/mostrar_usuarios");
		}else{
			return dd($result);
		}
	}
}

######### --- --- --- Archivo (resources/views/misPaginas/registrarse.blade.php) --- --- --- #########
?>

@extends('plantillas.plantilla')

@section('title_page', "Formulario de registro")
@section('title')
	<h3>Registrarse</h3>
@endsection

@section('contenido')

	<!-- Colocamos como (action) el nombre de nuestra ruta. -->
	<form action="<?= route('usuarios.store'); ?>" method="POST" autocomplete="on">
		
		<!-- (csrf), por proteccion lo necesitamos, de lo contrario laravel reedirecciona a un error (404). -->
		@csrf

		<!-- Aqui no es necesario especificar el metodo (@method), aunque se puede hacer y no dara error. -->

		<fieldset>
			<legend>Datos personales</legend>
			<div>
				<label for="idNombre">Ingrese su nombre: </label>
				<input type="text" name="nombre" placeholder="Nombre" id="idNombre">
			</div>
			<label>
				<span>Ingrese su apellido: </span>
				<input type="text" name="apellido" placeholder="Apellido">
			</label>
			<div>
				<label for="idEdad">Ingrense su edad: </label>
				<input type="text" name="edad" placeholder="Edad" id="idEdad">
			</div>
		</fieldset>
		<fieldset>
			<legend>Datos de cuenta</legend>
			<div>
				<label for="idMail">Ingrese su correo: </label>
				<input type="email" name="correo" placeholder="Correo">
			</div>
			<label>
				<span>Ingrese su contraseña: </span>
				<input type="password" name="password" placeholder="Contraseña">
			</label>
			<div>
				<label for="idPassword1">Repita su contraseña: </label>
				<input type="password_1" name="password_1" placeholder="Repetir contraseña">
			</div>
		</fieldset>
		<div>
			<center>
				<input type="submit" value="Registrarse">
			</center>
		</div>
	</form>
@endsection