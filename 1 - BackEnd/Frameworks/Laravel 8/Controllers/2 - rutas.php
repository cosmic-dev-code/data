<?php

/* ##########=========================########## */
/* ######===--- Utilizar en (rutas) ---===###### */
/* ##########=========================########## */

// Digamos que tenemos un controlador llamado (UsuarioController).

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    // El metodo se invoca cuando se manda a llamar la clase.
    public function __invoke()
    {
        // Retorna una vista.
        return view("usuarios.todos");
    }
}

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

// Importamos el controlador.
use App\Http\Controllers\UsuarioController;

// Hacemos uso de nuestra clase colocando su ruta la cual contiene la propiedad estatica (class).
// El metodo magico (__invoke) se invoca y se retorna la vista para esta ruta.
Route::get('usuarios/todos', UsuarioController::class);

/* ##########==============================########## */
/* ######===--- Controlador (multirutas) ---===###### */
/* ##########==============================########## */

######### --- --- --- Archivo (App/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UsuarioController extends Controller{

    // Nuestro controlador retorna multiples vistas.

    public function index{
        return "
            <div>
                <h1>Bienvenido a nuestra pagina de cursos.</h1>
                <p>Estamos muy contentos de tenerlo aqui.</p>
            </div>
        ";
    }

    public function todos()
    {
        return view("usuarios.todos");
    }

    public function correo()
    {
        return <<< HTML 
            <section>
                <div>
                    <h1>Envie un correo ahora</h1>
                </div>
                <div>
                    <!-- ... -->
                </div>
            </section>
        HTML;
    }
}

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsuarioController;

Route::get('/', HomeController::class);

// Utilizamos el controlador y cada uno de sus metodos segun los datos que este retorna.
/* Hacemos uso de: 
        --- ["url del controlador", "metodo que retorna para la vista"]. */

Route::get("usuarios/index", [UsuarioController::class, "index"]);
Route::get("usuarios/todos", [UsuarioController::class, "todos"]);
Route::get("usuarios/correo", [UsuarioController::class, "correo"]);

/* Forma antigua: 

    --- Route::get('/', 'HomeController');

    --- Route::get('cursos', 'Curso_Controller@cursos'); */

/* ##########=================########## */
/* ######===--- Pasar datos ---===###### */
/* ##########=================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/', function(){ return view('welcome'); });

/* Como en las rutas normales, colocamos el nombre del parametro a recibir, (por ejemplo "id").
    --- /usuarios/show/39

   Tambien podemos pasar parametros de forma personalizada, (sin definir en la ruta).
    --- /usuarios/show/39?title=mi@20titulo */

Route::get('/usuarios/show/{id}', [UsuarioController::class, 'show']);

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    // El metodo (show) recibe el parametro definido en la ruta y obligatorio llamado "id".
    // Tambien recible al objeto (Request) para extraer el parametro personalizado.
    public function show($id, Request $peticion){

        $titulo = $request -> query("title", "null");

        if($peticion -> id){
            return view("usuarios.show") -> with("id", $peticion -> id);
        }else{
            return view("usuarios.show") -> with("id", 0);
        }
    }
}