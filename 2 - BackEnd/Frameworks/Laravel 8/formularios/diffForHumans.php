<?php

/* ##########=========================########## */
/* ######===--- Componente de clase ---===###### */
/* ##########=========================########## */

/* La funcion (diffForHumans) permite transformar una tipo de fecha en una lectura 
que nosotros podamos entender. */

######### --- --- --- Archivo (app/Views/Components/Usuarios.php) --- --- --- #########

namespace App\View\Components;
use Illuminate\View\Component;

use App\Models\User;

class Usuarios extends Component
{

    public function __construct()
    {
        // ...
    }

    public function render()
    {
    	# Adquirimos todos los usuarios y los mandamos a la vista.
    	$users = User::all();
        return view('components.usuarios', ['usuarios' => $users]);
    }
}

/* ##########======================================########## */
/* ######===--- Utilizar funcion (diffForHumans) ---===###### */
/* ##########======================================########## */

######### --- --- --- Archivo (resources/views/components/usuarios.blade.php) --- --- --- ######### ?>

<div class="container bg-{{ $color }}-{{ $opacy }}">
    <section>
    	<h3>Lista de usuarios</h3>
    	@foreach($usuarios as $usuario)
    		<div class="my-2">
    			<ol class="p-3">
    				<li class="text-sm">Edad: {{ $usuario -> age }}</li>
    				<li class="text-sm">Mail: {{ $usuario -> mail }}</li>

    				<!-- Convertimos la fecha en un formato entendible para los seres humanos. -->
    				<li class="text-sm">Creacion del usuario: {{ $usuario -> create_at -> diffForHumans() }}</li>

    			</ol>
    		</div>
    	@endforeach
    </section>
</div>