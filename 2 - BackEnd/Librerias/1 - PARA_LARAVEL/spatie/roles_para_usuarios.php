<?php

/* ##########=================================########## */
/* ######===--- Asignar un rol a un usuario ---===###### */
/* ##########=================================########## */

######### --- --- --- Archivo (database/seeders/UserSeeder.php) --- --- --- #########

namespace Database\Seeders;
# Hacemos uso del modelo (User).
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	// Creamos un usuario.
        User::create([
            'name' => "Brandon",
            'email' => "brandon@gmail.com",
            'password' => bcrypt("12345678")
        ]) -> assignRole('Admin'); // Le asignamos un rol.
    }
}

/* ##########===============================########## */
/* ######===--- Mandar a llamar al seeder ---===###### */
/* ##########===============================########## */

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
        $this -> call(UserSeeder::class);
    }
}