<?php

/* ##########=============================================########## */
/* ######===--- Insertar datos en el (seeder) principal ---===###### */
/* ##########=============================================########## */

/* Para insertar registros en la tabla de la base de datos, es necesario hacer lo 
siguiente: Debemos ir al siguiente directorio: 

######### --- --- --- Archivo (database/seeders/DatabaseSeeder.php) --- --- --- ######### */

/* Este es el archivo principal en donde tendremos los registros a insertar. */

namespace Database\Seeders;

use Illuminate\Database\Seeder;

# Hacemos uso del modelo que creamos.
use App\Models\Curso;

class DatabaseSeeder extends Seeder
{
    /**
     * Aqui podemos colocar cuantos datos de prueba queremos.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $usuario = new Curso();

        $usuario -> nombre = "Cosmic";
        $usuario -> apellido = "Cosmico";
        $usuario -> edad = 19;

        $usuario -> save();
    }
}

/* ##########=======================================########## */
/* ######===--- Crear un seeder y mandar a llamar ---===###### */
/* ##########=======================================########## */

######### --- --- --- Archivo (database/seeders/Nombre_Del_Seeder_A_Crear) --- --- --- ######### */

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\curso;

class Curso_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Aqui colocamos todos los registros que queramos. */
        $usuario = new curso();

        $usuario -> nombre = "Cosmic";
        $usuario -> apellido = "Cosmico";
        $usuario -> edad = 19;

        $usuario -> save();

        $usuario_1 = new curso();

        $usuario_1 -> nombre = "Brandon";
        $usuario_1 -> apellido = "Olivares";
        $usuario_1 -> edad = 20;

        $usuario_1 -> save();
    }
}

######### --- --- --- Archivo (database/seeders/DatabaseSeeder.php) --- --- --- ######### */

# Mandamos a llamar a nuestro seeder.

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* Para mandar a llamar el seeder que acabamos de crear, acemos uso del metodo (call) extendido 
        de la clase (Seeder).

        Dentro del parametro colocamos el nombre del seeder que acabamos de crear y 
        acemos uso de su propiedad (class). */
        $this -> call(Curso_Seeder::class);
    }
}