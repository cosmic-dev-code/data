<?php

/* Para poder eliminar un registro es necesario utilizar el 
metodo (delete), en este caso dentro de nuestro archivo 
(web.php). */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsuarioController;

/* Creamos una ruta por la cual recibiremos el 'id' del registro que queremos eliminar 
por medio de la 'url'. */
Route::delete('usuarios/eliminar/{usuario}', [UsuarioController::class, "destroy"]) -> name('usuarios.destroy');

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function destroy(Usuario $usuario){

    	// El usuario se elimina.
    	$usuario -> delete();

    	return redirect() -> route('usuarios.despedida');
    }
}

######### --- --- --- Archivo (resources/view/mis_paginas/eliminar.blade.php) --- --- --- #########
?>

@extends('plantillas.plantilla')
@section('titulo_pagina', "Eliminar mi cuenta")

@section('contenido')
	<section>
		<article>
			<h3>Hola {{$usuario -> nombre}}</h3>
		</article>
		<div>
			<center>
				<form action="{{route('usuarios.destroy', $usuario)}}" method="POST" autocomplete="off">
					@csrf
					<!-- Colocamos el token para dar de alta nuestro formulario. -->
					@method('delete')
					<!-- Le indicamos el metodo que estamos utilizando en el archivo (web.php). -->
					<input type="submit" value="Eliminar mi cuenta">
				</form>
			</center>
		</div>
	</section>
@endsection

@section('footer')
	<small>Estas en (eliminar mi cuenta)</small>
@endsection