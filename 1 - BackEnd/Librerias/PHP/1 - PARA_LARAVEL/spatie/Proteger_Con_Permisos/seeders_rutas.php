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

        $permisoHome = Permission::create([
        	'name' => 'admin.home',
        	'description' => 'Pagina de administradores'
        ]) -> assignRole($admin);

        $permisoUsuario = Permission::create([
        	'name' => 'users.index',
        	'description' => 'Pagina de administradores'
        ]) -> syncRoles([$admin, $blogger]);
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
    public function run()
    {
        $this -> call(RoleSeeder::class);
    }
}

/* ##########====================########## */
/* ######===--- Proteger rutas ---===###### */
/* ##########====================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\UserController;

/* En este caso la ruta (admin.home) verifica a traves de un (middleware) que el usuario tenga el permiso 
de acceder a la ruta. Para esto se escribe (can:ruta_a_verificar).

Si el usuario no tiene un rol con el permiso para acceder a esta ruta, entonces no se le permitira. */
Route::get('', [HomeController::class, 'index']) -> middleware('can:admin.home') -> name('admin.home');