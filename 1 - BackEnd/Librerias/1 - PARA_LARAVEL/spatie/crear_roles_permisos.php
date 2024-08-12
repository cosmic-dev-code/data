<?php

/* ##########=================########## */
/* ######===--- Crear roles ---===###### */
/* ##########=================########## */

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
        $blogger = Role::create(['name' => 'Blogger']);

        // Creamos tres permisos.
        $permisoUserCreate = Permission::create([
            'name' => 'users.create', 
            'description' => 'Crear usuarios'
        ]) -> syncRoles([$admin]);

        $permisoUserEdit = Permission::create([
            'name' => 'users.edit', 
            'description' => 'Editar usuarios'
        ]) -> assignRole($admin);

        $permisoUserIndex = Permission::create([
            'name' => 'users.index', 
            'description' => 'Lista de usuaios'
        ]) -> syncRoles([$admin, $blogger]);

        /* Cada permiso tiene asignada una ruta en su campo (name), y tiene una 
        descripcion del campo que tienen asignado en el campo (description).

        El campo (description) es un campo que nosotros manualmente debemos crear 
        en la tabla (permissions) de (spatie). */

        /* El administrador tiene asignado los tres permisos, (syncRoles). */
        /* El blogger tiene asignado el ultimo permiso, (syncRoles). */
    }
}

/* ##########====================########## */
/* ######===--- Ejecutar roles ---===###### */
/* ##########====================########## */

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