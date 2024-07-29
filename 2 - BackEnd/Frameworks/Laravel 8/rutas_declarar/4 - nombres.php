<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/', function(){
    return view('welcome');
});

// El metodo (name) le da un nombre a una ruta, en este caso como si se tratara de un 'alias'.

// De esta manera es mas facil referirnos a la ruta por su (nombre) que por su (ruta).

Route::get('usuarios', [UsuarioController::class, 'index']) -> name('usuarios.index');
Route::get('usuarios/create', [UsuarioController::class, 'create']) -> name('usuarios.create');
Route::get('usuarios/{usuario}/edit', [UsuarioController::class, 'edit']) -> name('usuarios.edit');

######### --- --- --- Archivo (resources/views/misPaginas/index.blade.php) --- --- --- ######### ?>

<header>
	<div>
		<!-- Ruta normal. -->
		<a href="usuarios/create">Crear nuevo usuario</a>

		<!-- Nos referimos a la ruta por su 'alias'. -->
		<a href="<?= route('usuarios.create') ?>">Crear nuevo usuario</a>
	</div>
</header>

<main>
	<section>
		@foreach($usuario as $usuarios)
			<dl>
				<dt>Usuario {!! $usuario -> name !!}</dt>
				<dd><b>Nombre: </b>{!! $usuario -> name !!}</dd>
				<dd><b>Edad: </b>{!! $usuario -> age !!}</dd>
				<dd><b>Correo: </b>{!! $usuario -> email !!}</dd>
				<div>
					<!-- Colocamos el 'alias' de la ruta. -->
					<a href="<?= route('usuarios.edit', $usuario) ?>">Editar usuario</a>
				</div>
			</dl>
		@endforeach
	</section>
</main>