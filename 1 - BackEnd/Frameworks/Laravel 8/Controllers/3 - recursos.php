<?php

/* ##########=============================########## */
/* ######===--- Controlador de recursos ---===###### */
/* ##########=============================########## */

###### --- --- --- --- --- --- app/Http/Controllers/NombreController.php --- --- --- --- --- --- ######

# Suponiendo que tenemos creado nuestro controlador de recursos.
# (Laravel) por convencion suele llamar a sus metodos de (CRUD) con los nombres de 
# (index, create, store, show, edit, update, destroy).

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Usuario;

class UsuarioController extends Controller
{
    /**
     * Este metodo despliega una lista de los recursos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("usuarios.index", [
            "usuarios" => Usuario::all()
        ]);
    }

    /**
     * Muestra el formulario de la creacion de un nuevo recurso.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("usuarios.create");
    }

    /**
     * Almacena un recurso recien creado en el almacenamiento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Logica de creacion de un nuevo recurso.

        return redirect() -> route("usuarios.edit", [
            "usuario" => $request -> nombre
        ]);
    }

    /**
     * Muestra un recurso especifico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view("usuarios.show", [
            "usuario" => Usuario::find($id)
        ]);
    }

    /**
     * Muestra el formulario para editar un recurso especifico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view("usuarios.edit", [
            "usuario" => Usuario::find($id)
        ]);
    }

    /**
     * Actualiza el recurso especifico en el almacenamiento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Logica de actualizacion de un recurso.

        return redirect() -> route("usuarios.edit", [
            "usuario" => Usuario::find($id)
        ]);
    }

    /**
     * Elimina el recurso especifico del almacenamiento.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Logica para la destruccion de un recurso.

        return redirect() -> route("usuarios.index") -> with("message", "Usuario eliminado");
    }
}

/* ##########=============================########## */
/* ######===--- Rutas para los recursos ---===###### */
/* ##########=============================########## */

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;

/* De esta manera se definen cada una de las rutas por defecto para cada uno de los 
metodos del controlador. */
Route::resource('users', UsuarioController::class) -> names('users');

/* Las rutas que se van a seguir son las siguientes: 

    --- Metodo (index)

         Todos los usuarios.
         -> GED|HEAD = Nombre de la ruta -> http://127.0.0.1:8000/(users) = users.index
    
    --- Metodo (create)

        Formulario de creacion.
         -> GED|HEAD = Nombre de la ruta -> http://127.0.0.1:8000/(users/create) = users.create
    
    --- Metodo (store)

         Creacion.
         -> POST = Nombre de la ruta -> http://127.0.0.1:8000/(users) = users.store
    
    --- Metodo (show)

         Un usuario.
         -> GED|HEAD = Nombre de la ruta -> http://127.0.0.1:8000/(users/{user}) = users.show
    
    --- Metodo (edit)

         Formulario de edicion.
         -> GED|HEAD = Nombre de la ruta -> http://127.0.0.1:8000/(users/{user}/edit) = users.edit
    
    --- Metodo (update)

         Edicion.
         -> PUT|PATC = Nombre de la ruta -> http://127.0.0.1:8000/(users/{user}) = users.update
    
    --- Metodo (destroy)

         Eliminar.
         -> DELETE = Nombre de la ruta -> http://127.0.0.1:8000/(users/{user}) = users.destroy */

/* ##########==================================########## */
/* ######===--- Controlador (CRUD) con datos ---===###### */
/* ##########==================================########## */

/* */

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\{User, OtroModelo, YOtroModelo};

class UsuarioController extends Controller
{
    # Metodo que nos retorna la vista para mostrar todos los usurios. Ruta (get).
    public function index()
    {
        $usuarios = Usuario::all();
        return view('users.index', compact('usuarios'));
    }

    # Metodo que nos retorna la vista para crear un nuevo usuario. Ruta (get).
    public function create()
    {
        return view('users.create');
    }

    # Metodo que crea un nuevo usuario. Ruta (post) y metodo (POST).
    public function store(Request $request)
    {
        $request -> validate(array(
            'names' => 'required',
            'surnames' => 'required',
            'correo' => 'required|unique:usuarios'
        ));

        $usuario = Usuario::create($request -> all());

        return redirect() -> route('users.edit', $usuario) -> with('info', 'Usuario creado.');
    }

    # Metodo que nos retorna una vista que muestra un solo 'usuario'. Ruta (get).
    public function show(Usuario $usuario)
    {
        return view('users.show', compact('usuario'));
    }

    # Metodo que nos retorna una vista con un usuario para editarlo. Ruta (get).
    public function edit(Usuario $usuario)
    {
        return view('users.edit', compact('usuario'));
    }

    # Metodo que actualiza un usuario. Ruta (put) y metodo (POST).
    public function update(Request $request, Usuario $usuario)
    {
        $request -> validate(array(
            'names' => 'required',
            'surnames' => 'required',
            'correo' => 'required|unique:usuarios'
        ));

        $usuario -> update($request -> all());

        return redirect() -> route('users.edit', $usuario) -> with('info', 'Usuario actualizado.');
    }

    # Metodo que elimina un usuario. Ruta (delete) y metodo (POST).
    public function destroy(Usuario $usuario)
    {
        $usuario -> delete();

        return redirect() -> route('users.index') -> with('info', 'Usuario borrado.');;
    }
}

/* ##########====================================########## */
/* ######===--- Excepcionar metodos (recursos) ---===###### */
/* ##########====================================########## */

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;

/* El metodo (except) hace que un metodo de los (recursos) sea ignorado, por lo que podemos 
borrar ese metodo de nuestro controlador. */
Route::resource('users', UsuarioController::class) -> except('show') -> names('admin.posts');

/* El metodo (only) especifica los metodos que no se van a ignorar, por lo que los metodos (create) y (show) 
quedan ignorados, asi que podemos borrarlos del controlador. */
Route::resource('users', UsuarioController::class) -> only(['index', 'edit', 'update']) -> names('admin.users');