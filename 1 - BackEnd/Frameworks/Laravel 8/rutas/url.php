<?php

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

// Tenemos una (ruta con nombre) que apunta a una ruta relativa (/usuarios).
Route::get('/usuarios', function(){
	// ...
}) -> name('usuarios.index');

######### --- --- --- Archivo (resources/views/welcome.blade.php) --- --- --- #########

?>

<x-base-layout>
	
	<div>
	    <!-- Uso de (url) para una ruta relativa, (no rutas con nombre).
	    		--- http://tu-sitio.com/dashboard -->
	    <a href="<?= url('/usuarios') ?>">
	        Enlace usando url()
	    </a>

	    <!-- Uso de (route) para una ruta con nombre, (aunque puede utilizar tambien rutas relativas, 
	    no es su proposito).
	    	--- http://tu-sitio.com/dashboard -->
	    <a href="<?= route('usuarios.index') ?>">
	        Enlace usando route()
	    </a>
	</div>

</x-base-layout>