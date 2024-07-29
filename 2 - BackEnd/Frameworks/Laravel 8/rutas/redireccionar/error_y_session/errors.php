<?php

######### --- --- --- Archivo (app/Http/Controllers/FormulariosController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class FormulariosController extends Controller{
	
	public function validar(Request $request){
		
		// Al validar los campos enviados pueden haber errores.
		$request -> validate();

		// Reedireccionamos atras con algunos errores, (al origen de la peticion).
		return back() -> withErrors([
			"names" => "Los nombres no son validos"
		]);

		// Podemos reedireccionar a otra pagina con errores.

		return redirect("/ruta") -> withErrors([
			"names" => "Los nombres no son validos"
		]);

		return redirect() -> route("route.name") -> withErrors([
			"names" => "Los nombres no son validos"
		]);
	}
}

######### --- --- --- Archivo (resources/views/usuarios/registrarse.blade.php) --- --- --- ######### ?>

@extends('mis_plantillas.plantilla')

@section('titulo_de_pagina', "Registrarse")


@section('contenido')
	
	<?php
		// Retorna la cantidad de errores.
		count($errors);

		// Retorna un booleano que confirma si hay errores.
		$errors -> any();

		// Retorna un array asosiativo con los errores, ["error" => "informacion"].
		$errors -> all();

		// Retorna un booleano que confirma si hay un error especifico.
		$errors -> has("names");

		// Retorna la informacion del primer error coincidente con el nombre.
		$errors -> first("names");

		// Retorna la informacion de un error especifico.
		$errors -> get("names");
	?>

	<!-- Podemos utilizar plantillas de blade. -->

	@if(count($errors) > 0)

		<!-- Funciona exactamente igual que el metodo (has) y (get). -->
		@error("names")
			<?= $message ?>
		@enderror

	@endif

@endsection