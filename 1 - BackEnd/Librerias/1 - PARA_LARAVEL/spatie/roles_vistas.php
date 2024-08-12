<?php

/* ##########====================########## */
/* ######===--- Crear permisos ---===###### */
/* ##########====================########## */

######### --- --- --- Archivo (database/seeders/RoleSeeder.php) --- --- --- #########

namespace Database\Seeders;
use Illuminate\Database\Seeder;

# Hacemos uso de los modelos de spatie.
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	// Creamos dos roles.
    	$admin = Role::create(['name' => 'Admin']);
        $usuario = Role::create(['name' => 'usuario']);

        // Creamos tres permisos.
        $permisoUserCreate = Permission::create([
            'name' => 'users.delete', 
            'description' => 'Eliminar usuarios'
        ]) -> syncRoles([$admin]);

        $permisoUserEdit = Permission::create([
            'name' => 'users.edit', 
            'description' => 'Editar usuarios'
        ]) -> assignRole($admin);

        $permisoUserIndex = Permission::create([
            'name' => 'users.index', 
            'description' => 'Lista de usuaios'
        ]) -> syncRoles([$admin, $usuario]);

        /* Cada (permiso) tiene asignada una ruta en su campo (name), 
        esa sera la ruta a verificar para saber si el usuario tiene 
        permiso o no. */

    }
}

/* ##########=======================########## */
/* ######===--- Ejecutar permisos ---===###### */
/* ##########=======================########## */

######### --- --- --- Archivo (database/seeders/DatabaseSeeder.php) --- --- --- #########

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this -> call(RoleSeeder::class);
    }
}

/* ##########==========================########## */
/* ######===--- Implementar permisos ---===###### */
/* ##########==========================########## */

/* Ya que tenemos varios permisos, podriamos ahora podemos implementarlos de 
la siguiente manera: 
	--- En la misma vista los usuarios veran la lista de usuarios.
	--- En la misma los administradores tendran botones para manipular los usuarios. */

######### --- --- --- Archivo (resources/views/misPaginas.blade.php) --- --- --- ######### ?>

@extends('plantillas.plantilla')

@section('title_page'.'Usuarios')

@section('content')

	<x-header></x-header>
	<x-content>
		<livewire:table-component/>

		<section>
			<h3 class="text-3xl my-3 text-center">Lista de usuarios</h3>
			<div class="py-4 px-6 rounded-full shadow-lg bg-white">
				@if($users -> count())
					<dl>
						<dt>Todos los usuarios</dt>
						<dd>
							<ul>
								<!-- Aqui preguntamos si el usuario tiene permiso de acceder a la ruta 
								(users.index) de acuerdo al permiso que se le haya asignado. 

								Si no tiene permiso, entonces no se ejecuta todo el bloque de adentro. -->
								@can(users.index)
									@foreach($users as $user)
										<li class="block my-2 px-3 text-center text-bold">
											<strong>Nombre: </strong><span><?= $user -> name ?></span>
										</li>
										<li class="block my-2 px-3 text-center text-bold">
											<strong>Edad: </strong><span><?= $user -> age ?></span>
										</li>
										<li class="block my-2 px-3 text-center text-bold">
											<strong>Correo: </strong><span><?= $user -> email ?></span>
										</li>
										<!-- Se verifica si el usuario tiene permiso de acceder 
										a la ruta (users.edit). -->
										@can('users.edit')
											<li>
												<a href="<?= route('users.edit', $user) ?>" class="btn-blue">Editar usuario</a>
											</li>
										@endcan
										<!-- Se verifica si el usuario tiene permiso de acceder 
										a la ruta (users.destroy). -->
										@can('users.destroy')
											<li>
												<a href="<?= route('users.destroy', $user) ?>" class="btn-red">Eliminar usuario</a>
											</li>
										@endcan
									@endforeach
								@endcan
							</ul>
						</dd>
					</dl>
				@else
					<x-alert background="red">
						<span>No hay notas que mostrar</span>
					</x-alert>
				@endif
			</div>
		</section>
	</x-content>
@endsection