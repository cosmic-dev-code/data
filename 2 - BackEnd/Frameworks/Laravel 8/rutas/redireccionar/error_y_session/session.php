<?php

######### --- --- --- Archivo (app/Http/Controllers/UserController.php) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UserController extends Controller{
	
	public function validar(Request $request){

		// Esta es una manera de crear un mensaje de sesion.
		session() -> flash("mensaje", "Este es el mensaje");

		// Asi podemos crear los mensajes de sesion.
		return redirect() -> with("mensaje", "Este es el mensaje");
	}
}

######### --- --- --- Archivo (resources/views/usuarios/registrarse.blade.php) --- --- --- ######### ?>
<?php
	// Permite saber si la sesion tiene un mensaje en especifico.
	session() -> has("mensaje");

	// Obtenemos la informacion.
	$informacion = session("mensaje");
?>

<!-- Podemos utilizar plantillas de blade. -->

@if(session() -> has("mensaje"))

	<p>{{ session("mensaje") }}</p>

@endif