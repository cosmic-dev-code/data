<?php

/* ##########===========================########## */
/* ######===--- Crear ruta (resource) ---===###### */
/* ##########===========================########## */

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use Illuminate\Support\Facades\Route;
# Nuestro controlador.
use App\Http\Controllers\UserController;

/* No podemos protejer todas las rutas de este archivo utilizando el metodo 
(middlewere), ya que ese metodo protege todas las rutas bajo una sola. */
Route::resource('users', UsuarioController::class) -> only(['index', 'edit', 'update']) -> names('users');

/* ##########===========================================########## */
/* ######===--- Proteger rutas desde el (controlador) ---===###### */
/* ##########===========================================########## */

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;

// Implemetar Spatie.
use Spatie\Permission\Models\Role;

class UserController extends Controller
{

    public function __construct(){
    	/* Protejemos el metodo (index) utilizando el metodo (middleware). 
    		(can:ruta_a_validar). */
        $this -> middleware('can:users.index') -> only('index');
        // Protejemos dos metodos utilizando el metodo (middleware) bajo la ruta (users.edit).
        $this -> middleware('can:users.edit') -> only('edit', 'update');
    }

    public function index()
    {
        return view('users.index');
    }

    public function edit(User $user)
    {
        $roles = Role::all();
        return view('users.edit', [
            'user' => $user,
            'roles' => $roles
        ]);
    }

    public function update(Request $request, User $user)
    {
        $user -> roles() -> sync($request -> roles);

        return redirect() -> route('users.edit', $user) -> with('info', 'Se asigno el rol.');
    }
}