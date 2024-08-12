<?php

# La funcion (routeIs) comprueba si el usuario actualmete se encuentra en una ruta.

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
	# Debemos recibir el objeto (request) que viene desde un formulario.
    public function store(Request $request){
    	return view('misPaginas.index') -> with('peticion', $request);
    }
}

######### --- --- --- Archivo (resources/views/misPaginas/index.blade.php) --- --- --- ######### ?>

<x-layout-home>

	<header>
		<ul>
			<!-- El objeto ($request) contiene el metodo (routeIs). -->
			<?= $request -> routeIs("usuarios.usuarios") ?>

			<!-- Pero podemos obtener el objeto por medio de la funcion (request). -->
			<?= request() -> routeIs("usuarios.usuarios") ?>
		</ul>

		<ul>
			<li>
				<a 
					class="<?php ($request -> routeIs('usuarios.index')) ? 'active' : ''; ?>" 
					href="{{ route('usuarios.index') }}" class="{{ $class }}">Inicio</a>
			</li>
			<li>
				<a 
					class="<?php (request() -> routeIs('usuarios.categorias')) ? 'active' : ''; ?>" 
					href="{{ route('usuarios.categorias') }}">Categorias</a>
			</li>
			<li>
				<a 
					class="<?php ($request -> routeIs('usuarios.usuarios')) ? 'active' : ''; ?>" 
					href="{{ route('usuarios.usuarios') }}">Usuarios</a>
			</li>
		</ul>
	</header>

</x-layout-home>