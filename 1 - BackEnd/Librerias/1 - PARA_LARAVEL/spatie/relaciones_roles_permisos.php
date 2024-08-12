<?php

/* Recordemos que en una relacion de (N:N) relacionabamos de la siguiente manera 
dos registros en una tabla intermedia. */

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
    	/* Creamos dos roles. */
       	$admin = Role::create(['name' => 'Admin']);
        $blogger = Role::create(['name' => 'Blogger']);

        /* Creamos 3 diferentes permisos, cada uno con sus respectivas rutas y 
        una descripcion para saber de que trata cada permiso. */
        $permission_create = Permission::create([
            'name' => 'admin.users.create', 
            'description' => 'Crear usuarios'
        ]);

        $permission_index = Permission::create([
            'name' => 'admin.users.index', 
            'description' => 'Lista de usuaios'
        ]);

        $permission_edit = Permission::create([
            'name' => 'admin.users.edit', 
            'description' => 'Editar usuarios'
        ]);

        /* ##########=========================########## */
        /* ######===--- Relaciones normales ---===###### */
        /* ##########=========================########## */

        /* El primer rol tiene los primeros 3 permisos, (colocamos el 'id' de los permisos 
    	que queremos relacionar en la relacion (N:N) con roles). */
        $admin -> permissions() -> attach([1, 2, 2]);

        # El segundo rol solo tiene el segundo permiso.
        $blogger -> permissions() -> attach(2);

        # De igual manera podemos eliminar las relaciones.
        $admin -> permissions() -> detach([1, 2]);
        $blogger -> permissions() -> detach(2);
        $admin -> permissions() -> detach();

        # Elimina todas las relaciones existentes y deja solo las dos seleccionadas.
        $role -> permissions() -> sync([1, 2]);

        /* ##########===========================########## */
        /* ######===--- Relaciones con spatie ---===###### */
        /* ##########===========================########## */

        /* Forma de relacion 1:1. */
        $admin -> givePermissionTo($permission_create);
        $permission_create -> assignRole($admin);

        /* Forma de relacion N:N. */
        $admin -> syncPermissions([$permission_create]);
        $permission_create -> syncRoles([$admin]);

        ######### --- --- --- Hacer uso de esos metodos --- --- --- #########

        $permission_create = Permission::create([
            'name' => 'admin.users.create', 
            'description' => 'Crear usuarios'
        ]) -> syncRoles([$admin]);

        $permission_index = Permission::create([
            'name' => 'admin.users.index', 
            'description' => 'Lista de usuaios'
        ]) -> syncRoles([$admin, $blogger]);

        $permission_edit = Permission::create([
            'name' => 'admin.users.edit', 
            'description' => 'Editar usuarios'
        ]) -> assignRole($admin);

    }
}