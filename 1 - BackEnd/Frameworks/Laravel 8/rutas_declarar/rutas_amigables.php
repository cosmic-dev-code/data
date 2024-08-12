<?php

/* ##########====================================########## */
/* ######===--- ¿Que son las 'urls' amigables? ---===###### */
/* ##########====================================########## */

/* Cuando las rutas reciben parametros, (variables), pueden verse asi.

	--- http://localhost/miSitioWeb/public/cursos/curso/98/editar

/* El (98) es la variable por parametro, representa el 'id' de un registro, pero podriamos ver que se vea mas estetico.

    --- http://localhost/pruebaLaravel/public/cursos/curso/javascript-desde-0/editar
*/

/* ##########===========================########## */
/* ######===--- Modificar el (modelo) ---===###### */
/* ##########===========================########## */

######### --- --- --- Archivo (app/Models/Usuario.php) --- --- --- ######### */

# Para esto debemos agregar un campo nuevo a la tabla que se desea modificar.

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = "cursos";

    /* El metodo (getRouteKey) se extiende de (Model) y se encarga de la conversion de un 'id' a objeto, 
    tal como se suele hacer en los parametros de los metodos del controlador o de a funcion (route).

		--- Ejemplo:

		public function registrarse(Usuario $id_usuario){
            // ...
        }

		route('mi_ruta', $usuario); */

    public function getRouteKey()
    {
        return 'slug';
    }
}

/* ##########==============================########## */
/* ######===--- Modificar la (migracion) ---===###### */
/* ##########==============================########## */

######### --- --- --- Archivo (database/migrations/2021_08_29_013238_cursos.php) --- --- --- #########

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Cursos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("cursos", function(Blueprint $table){
            $table -> id();
            $table -> string("nombre", 30);

            // El campo 'slug' almacenara el nombre de la ruta amigable.
            $table -> string('slug', 255);

            $table -> string("apellido", 255);
            $table -> integer("edad");
            $table -> timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("cursos");
    }
}

/* ##########============================########## */
/* ######===--- Modificar el (factory) ---===###### */
/* ##########============================########## */

######### --- --- --- Archivo (database/factories/UsuarioFactory.php) --- --- --- #########

namespace Database\Factories;

use App\Models\Curso;
use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Support\Str; # Clase necesaria para crear la 'url' amigable.

class cursoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Curso::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
    	# Creamos una oracion fuera del 'return'.
        $name = $this -> faker -> sentence();

        return [

        	/* Al campo 'nombre' y al campo 'slug' les damos ese nombre para que tengan el mismo.
        	
        	El metodo estatico (slug) perteneciente a la clase (Str) convierte un texto en minusculas y 
            reemplaza los espacios por guiones. */

            "nombre" => $name,
            "slug" => Str::slug($name, "-"),
            "apellido" => $this -> faker -> sentence(),
            "edad" => $this -> faker -> randomElement([20, 19, 21]),
            "correo" => $this -> faker -> paragraph()
        ];
    }
}

/* ##########===========================########## */
/* ######===--- Modificar las (rutas) ---===###### */
/* ##########===========================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CursoController;
use App\Models\Curso;

Route::get('/', function(){
    return view('welcome');
});

// Colocamos el subfijo (:slug) a la variable que esperamos recibir.
Route::get('curso/{curso:slug}', function(Curso $curso){

    /* Todo funciona igual. */

    // Este es el "slug" que creamos.
    $slug = $curso -> slug;

    return view('cursos.show', array(
        'curso' => $curso
    ));
});

# Ahora las "urls" en lugar de mostrar el (id) de (Curso) mostrara el (slug).