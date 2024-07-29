<?php

/* Imaginemos que tenemos un controlador el cual se manda a llamar desde las rutas. */

######### --- --- --- Archivo (app/Http/Controllers/CursoController.php) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Curso; # Libreria necesaria para utilizar la clase (Curso).
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index(){

    	/* Obtenemos todos los datos. */
    	$todos_los_cursos = Curso::all();

    	/* Obtenemos todos los datos de manera paginada. */
    	$todos_los_cursos = Curso::paginate();

    	/* Le mandamos los datos a la vista, (la pagina cursos de la carpet 'curso'). */
    	return view('curso.cursos', compact('todos_los_cursos'));
    }
}

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CursoController; # Nuestro controlador.

Route::get('/', function(){
    return view('welcome');
});

Route::get('/cursos', [CursoController::class, 'index']);

?>

<!-- ######### --- --- --- Archivo (resources/views/curso/cursos.blade.php) --- --- --- ######### -->

@extends('plantillas.plantilla')
@section('title', "Cursos gratis")

@section('content')
	<hgroup>
		<h1>Cursos</h1>
		<h3>Bienvenido a nuestra pagina de cursos</h3>
		<pre>
			<!-- Podemos utilizar los registros que vinieron del controlador, ($all_cursos). -->
			@foreach($all_cursos as $curso)
				<ul>
					<li>{{$curso -> nombre}}</li>
					<li>{{$curso -> apellido}}</li>
					<li>{{$curso -> edad}}</li>
				</ul>
			@endforeach

			<!-- En caso de traer los registros de manera paginada, mostramos los links. -->
			{{$all_cursos -> links()}}
		</pre>
	</hgroup>
@endsection
