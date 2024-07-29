<?php

######### --- --- --- Archivo (app/Http/Controllers/HashController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\User;

# Importamos la clase (Hash).
use Illuminate\Support\Facades\Hash;

class HashController extends Controller
{
	public function encriptar()
	{
		/* La clase (Hash) se encarga de encriptar strings y comparar. */

		// Recibe una cadena de texto y la retorna encriptada.
		Hash::make("Brandon");

		// La opcion de (rondas) manipula el factor de trabajo de (Bcrypt), (si se esta trabajando con el).
		Hash::make("Brandon", [
			"rounds" => 12
		]);

		// Devuelve un booleano comparando ambos passwords, para esto (pass que se quiere comprobar y pass encriptado).
		Hash::check("password", $password_encriptado); // bool

		// Recibe una cadena de texto y la retorna encriptada.
		bcrypt("Hola mundo");
	}

	/**
	 * Verificar actualizacion de Hashing.
	 */

	public function needsRehash(Request $request)
	{
		// Suponiendo que tienes el usuario autenticado.
		$user = Auth::user();

		// Verificar la contraseña.
		if (Hash::check($plainPassword, $user->password)) {

			// La contraseña es correcta.

			// Pasa que muchas veces la seguridad interna de (Hash) se actualiza, por ende 
			// puede ocurrir que necesite otros parametros y no los mismos.
			// Esto pasa por seguridad.

			// Validamos si hay una actualizacion en el (Hash).
			if (Hash::needsRehash($user->password)) {
				// Rehashear la contraseña y actualizarla en la base de datos con la nueva seguridad.
				$user->password = Hash::make($plainPassword);
				$user->save();
			}

			// Proceder con la autenticación o las operaciones necesarias.
		} else {
			// La contraseña es incorrecta.
		}
	}
}