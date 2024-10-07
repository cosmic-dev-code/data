<?php

/* Laravel utiliza muchas carpetas con bastantes tipos de ficheros dentro de ellas, 
la carpeta (routes) tiene un archivo llamado (web.php), en este fichero es 
donde se manejan las rutas del sitio web. */

/* ##########======================########## */
/* ######===--- Ruta por defecto ---===###### */
/* ##########======================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

// Importa la clase (Route) para crear rutas.
use Illuminate\Support\Facades\Route;

/* La clase (Route) tiene un metodo estatico llamado (get) el cual recibe por parametro:
	--- La ruta que queremos agregar.
	--- Una funcion con la logica cuando la ruta sea visitada por el usuario. */
Route::get('/', function(){

	// Aqui se retorna una vista.
    return view('welcome');
});

// ------------------------------ //
// ------ Crear nueva ruta ------ //
// ------------------------------ //

// Cuando el usuario ingrese a la (url) '/cursos'.
Route::get('/cursos', function(){
	$content = "
		<h1>Bienvenido a la pagina de <strong>cursos</strong></h1>
		<div>
			<p>Gracias por visitar nuestra pagina de cursos.</p>
		</div>
	";

	return $content; // La pagina mostrara el contenido.
});

/* ##########===========================########## */
/* ######===--- Parametros con nombre ---===###### */
/* ##########===========================########## */

/* Las rutas pueden recibir parametros, (de una manera convencional).
   	--- /cursos/laravel
*/
// NOTA: Estos parametros son obligatorios cuando los defines en una ruta.

// Declaramos una ruta de tipo (string).
Route::get('/cursos/{el_curso}', function(string $el_curso)){
	$content = "
		<h1>Bienvenido al curso $el_curso</h1>
		<div>
			<p>Disfrute del contenido de nuestro curso gratuito.</p>
		</div>
	";

	return $content;
}

/**
 * Podemos pasar mas de un parametro.
 * 
 * NOTA: Por (convencion) el nombre del parametro en la ruta lleva el mismo 
 * que el que se recibe la funcion.
 */

Route::get('/cursos/{curso}/{seccion}', function(string $curso, string $seccion){
	$content = "
		<h1>Bienvenido a la seccion $seccion del curso $curso</h1>
		<div>
			<p>Esta seccion llamada $seccion tiene contenido gratuito y de 
			calidad.</p>
		</div>
	";

	return $content;
});

/* ##########===========================########## */
/* ######===--- Parametros opcionales ---===###### */
/* ##########===========================########## */

// Los parametros opcionales se indican dentro de {} y al final el signo (?).
// La funcion anonima tambien recibe la variable como opcional.

Route::get('/cursos/{el_curso}/{seccion?}', function(string $el_curso, string $seccion = "Ninguna"){
	$content = "
		<div>
			<p>Este es el curso de {$el_curso} completamente gratuito.</p>
			<p>Secciones del curso: <strong>{$seccion}</strong></p>
		</div>
	";

	return $content;
});

Route::get('/cursos/{el_curso}/{seccion?}', function(string $el_curso, string $seccion = null){

	# Podemos colocar la logica que queramos dentro de la funcion anonima.

	if($seccion === null){
		define($content, "
			<div>
				<p>Bienvenido al curso de <b>{$el_curso}</b></p>
			</div>
		");

		return $content;
	}else{
		define($content, "
			<h1>Bienvenido al la seccion {$seccion} del curso {$el_curso}</h1>
			<div>
				<p>En esta seccion {$seccion} aprenderas 
				muchas cosas acerca de {$el_curso}.</p>
			</div>
		");

		return $content;
	}
});

/* ##########=============########## */
/* ######===--- Queries ---===###### */
/* ##########=============########## */

// Importamos a la clase (Request) para tener disponible al objeto que puede extraer parametros personalizados.
use Illuminate\Http\Request;

# Tenemos una ruta.
Route::get('/cursos/information', function(Request $request){

	// ($request) Es el objeto que contiene los parametros personalizados.

	/**
	 * El usuario hace una peticion como esta.
	 * 
	 * 	URL /cursos/information?name=product&id=9
	 * 		@param name
	 * 		@param id
	 * 
	 */

	// El metodo (query) extrae los parametros de la URL.
	$name = $request -> query("name");
	$id = (int) $request -> query("id");
});