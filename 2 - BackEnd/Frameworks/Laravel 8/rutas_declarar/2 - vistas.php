<?php

/* ##########=====================================########## */
/* ######===--- La pagina que viene por defecto ---===###### */
/* ##########=====================================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

/* Las "vistas" son las pagunas web que queremos mostrar, las "vistas" normalmente se encuentran en 
(resources/views/), una ruta puede mostrar una vista retornandola. */

Route::get('/', function(){

	// (resorces/views/welcome.php).
	return view('welcome');
});

// Puede retornar una vista de manera directa.
Route::view('/', 'welcome');

/* ##########============================########## */
/* ######===--- Crear nuestras paginas ---===###### */
/* ##########============================########## */

// Creamos dentro de la carpeta (resorces/views) nuestras propias paginas PHP.
// Cada ruta retorna nuestra pagina.

Route::get('/contacto', function(){
	// (resorces/views/contacto.php).
	return view('contacto');
});

// Aqui las carpetas se especifican por (carpeta.archivo).

Route::get('/usuarios', function(){
	// (resorces/views/usuarios/principal.php).
	return view('usuarios.principal');
});

/* ##########============================########## */
/* ######===--- (vistas) y (variables) ---===###### */
/* ##########============================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

// Creamos nuestra propia vista.

Route::get("/usuarios/todos", function(){

	// (resorces/views/usuarios/todos.php).
	return view("usuarios.todos", [
		/* Por segundo parametro del metodo (view), recibe un array asosiativo con la 
		informacion que puede utilizar la vista. */
		"informacion" => "Esta es una cadena de texto", 
		"mas_info" => array(
			"uno" => 1, 
			"dos" => 2, 
			"tres" => 3
		)
	]);
});

Route::get("/usuarios/todos", function(){
	// Esta es otra mansera de acerlo cuando se quire pasar un solo valor.
	return view("usuarios.todos") -> with("informacion", "Esta es una cadena de texto");
});

######### --- --- --- Archivo (resorces/views/usuarios/todos.php) --- --- --- ######### ?>

<!-- En nuestra vista podemos hacer uso de las variables pasados como array asosiativo. -->
<!-- Incluso pueden pasarse datos mas complejos como (objetos). -->

<section>
	<div>
		<h1><?= $informacion ?></h1>
	</div>
	<div>
		<p>Los numeros son: </p>
		<ol>
			<li><?= $mas_info["uno"] ?></li>
			<li><?= $mas_info["dos"] ?></li>
			<li><?= $mas_info["tres"] ?></li>
		</ol>
	</div>
</section>