<?php

######### --- --- --- Archivo (app/Http/Controllers/HashController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\User;

// Importamos la clase (Hash).
use Illuminate\Support\Facades\Hash;

class HashController extends Controller
{
	public function encriptar(User $user)
	{
		// Tambien se resuelve con Hash, pero siempre utiliza el algoritmo (Bcrypt).
		// NOTA: No es configurable como (Hash).
		$pass_bcryp = bcrypt("mi-password");

		// Comparamos utilizando Hash.
		Hash::check("mi-password", $pass_bcryp); // bool

		// Tambien lo podemos guardar en un campo de password, como Hash.
		$user->password = $pass_bcryp;
		$user->save();
	}
}