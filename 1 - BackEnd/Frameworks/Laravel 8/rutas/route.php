<?php

/* ##########==========================########## */
/* ######===--- (route) con redirect ---===###### */
/* ##########==========================########## */

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class Nuevo_Controller extends Controller
{
	// (redirect), tiene un objeto que contiene el metodo (route).
	// El metodo (route) se utiliza para refererse a rutas con nombre.

    public function ruta_con_nombre(){

    	# Podemos devolver la ruta por medio del 'name' de la ruta en el archivo (web.php).
    	return redirect() -> route('name.iniciar');

    }

    public function ruta_con_variable($id_usuario){

    	/* Por segundo parametro enviamos una variable para la 'url'. */
    	return redirect() -> route('name.actualizar', $id_usuario);

    }
}

/* ##########=========================########## */
/* ######===--- Rutas en las vistas ---===###### */
/* ##########=========================########## */

######### --- --- --- Archivo (resources/views/usuarios/iniciar_sesion.blade.php) --- --- --- #########
?>

@extends('plantilla')

@section('contenido')
	<div>
		<!-- Proporciona la 'url' con nombre. -->

		<a href="{{ route('name.actualizar', $usuario) }}">Ir a actualizar</a>

		<form action="{{ route('usuario.actualizar', $usuario) }}">
			<!-- Para envios de metodos (put, post y delete). -->
		</form>

	</div>
@endsection

<!-- ##########======================########## -->
<!-- ######===--- Rutas en enlaces ---===###### -->
<!-- ##########======================########## -->

<?php

######### --- --- --- Archivo (rosources/views/bienvenida.blade.php) --- --- --- #########

/* Ahora vayamos a una de nuestras paginas en donde tengamos dos enlaces: 

	--- Uno de ellos apuntara a la pagina de registro: (usuario/registrarse).
	--- El otro apuntara a la pagina de inicio de sesion: (usuario/iniciar). */

?>

@extends('mis_plantillas.plantilla')
@section('titulo_pagina', "Bienvenid@")

<!-- Dentro de los enlaces, en su atributo (href) automaticamente apuntan a la ruta solo por su 'alias' 
dentro de la funcion (route). -->

@section("contenido")
	<aside class="sidebar">
		<div>
			<h3>Ya tienes cuenta?</h3>
		</div>
		<div>
			<div>
				<div><span>Registrate aqui</span></div>
				<a href="{{route('usuario.registro')}}">Registrarse</a>
			</div>
			<div>
				<div><span>Inicia session aqui</span></div>
				<a href="<?= route('usuario.iniciar') ?>"></a>
			</div>
		</div>
	</aside>
@endsection