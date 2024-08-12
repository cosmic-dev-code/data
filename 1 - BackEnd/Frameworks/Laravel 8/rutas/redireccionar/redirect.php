<?php

/* ##########======================########## */
/* ######===--- Redirect y route ---===###### */
/* ##########======================########## */

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Http\Controllers\AdminController;

class Nuevo_Controller extends Controller
{
    public function iniciar(){

		// ------------------- //
		// ------ Rutas ------ //
		// ------------------- //

    	// Redirecciona a una ruta en especifico.
    	return redirect('usuarios/index');
    	return redirect() -> to('usuarios/index');

    	// Podemos utilizar el metodo (route).
    	return redirect() -> route('usuarios.index');

		// -------------------- //
		// ------ Action ------ //
		// -------------------- //

    	// Redirecciona ejecutando un codigo especifico.
    	return redirect() -> action([AdminController::class, "index"]);

    	// Redirecciona ejecutando un codigo y pase de parametros para el metodo a ejecutar.
    	return redirect() -> action(
    		[AdminController::class, "index"], 
    		['id' => 1]
    	);

		// ------------------------- //
		// ------ Informacion ------ //
		// ------------------------- //

    	// (with) guarda un mensaje en (session) con su informacion.
    	return redirect("usuarios/create") -> with('estado', 'Perfil actualizado');

    	// Redirecciona con errores y su informacion en ($errors).
    	return redirect('usuarios/create') -> withErrors([
    		"primer" => "Primer error", 
    		"segundo" => "Segundo error"
    	]);

		// ------------------ //
		// ------ back ------ //
		// ------------------ //

    	// Retorna a la 'url' de origen.
    	return redirect() -> back();
    	return back();

    	// Puede enviarse informacion.
    	return redirect() -> back() -> with("estado", "Perfil actualizado");
    	return redirect() -> back() -> withErrors([
    		"primer" => "Primer error", 
    		"segundo" => "Segundo error"
    	]);
    }
}