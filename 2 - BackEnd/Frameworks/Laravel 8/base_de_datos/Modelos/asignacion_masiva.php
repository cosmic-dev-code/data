<?php

/* ##########=======================########## */
/* ######===--- Asignacion masiva ---===###### */
/* ##########=======================########## */

/* La asignacion masiva es la que nos viene a ayudar con la asignacion multiple sin la 
necesidad de crear el objeto y tratar cada uno de sus datos. */

######### --- --- --- Archivo (app/Models/Usuario.php) --- --- --- #########

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    # Hay dos formas de hacerlo.

    // Creamos un array con todos los campos que van a recibir valor.
    protected $fillable = array("nombre", "apellido", "edad", "correo");

    // Creamos un array con todos los campos que no van a recibir un valor.
    protected $guarded = [];

    /* Al final cada una de las opciones son lo mismo pero a la inversa, si embargo esto lo exige (Laravel) por motivos 
    de seguridad, para que el usuario no envie datos adulterados al ser asignados al objeto (usuario) y este se guarde 
    en la base de datos. */
}

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller{

	/* Ejemplo de registros de manera simple. */

	/* ##########=====================########## */
	/* ######===--- Registro normal ---===###### */
	/* ##########=====================########## */

	public function registrarse(Request $request){

		// Instanciamos un objeto y modificamos cada propiedad, luego gurdamos.

		$usuario = new Usuario();
		$usuario -> nombre = $request -> name;
		$usuario -> apellido = $request -> surnames;
		$usuario -> edad = $request -> age;
		$usuario -> correo = $request -> mail;
		$usuario -> password = $request -> password;
		$usuario -> save();

		return redirect() -> route("iniciar_sesion", $usuario -> id);
	}

	/* ##########===================================########## */
	/* ######===--- Registro de asignacion masiva ---===###### */
	/* ##########===================================########## */

	public function registrarse_1(Request $request){

		// Ahora omitimos la instancia y el metodo (save), todo se guarda de manera automatica segun cada campo.
		$usuario = Curso::create([
            "nombre" => $request -> name,
            "apellido" => $request -> surnames,
            "edad" => $request -> edad,
            "correo" => $request -> mail,
            "password" => $request -> password
		]);

		return redirect() -> route("iniciar_sesion", $usuario);
	}

	public function registrarse_2(Request $request){

		/* Esto lo optimiza aun mas, ya que cada campo enviado en el (request) debe coincidir con los 
		nombres de los campo de la tabla Usuario, asi se da los valores omitiendo la instancia. */
		$usuario = Usuario::create($request -> all());

		return redirect() -> route("iniciar_sesion", $usuario);
	}
}

/* ##########======================================########## */
/* ######===--- Actualizar con asignacion masiva ---===###### */
/* ##########======================================########## */

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller{

	public function actualizarUsuario($id_usuario, Request $request){
		
		$usuario = Usuario::find($id_usuario);

		// Ahora se actualizan por medio del metodo (update) omitiendo asi el (save).
		$usuario -> update([
            "nombre" => $request -> name,
            "apellido" => $request -> surnames,
            "edad" => $request -> edad,
            "correo" => $request -> mail,
            "password" => $request -> password
		]);

		return redirect() -> route("iniciar_sesion", $usuario);
	}

	public function actualizarUsuario(Usuario $usuario, Request $request){

		/* Recibimos al usuario como una instancia del modelo (Usuario), por lo que ya no es necesario 
		buscarlo (Usuario::find). */
		
		/* (request -> all()) actualiza todos los campos, recordemos que los campos del (request) deben ser 
		los mismos que los de la tabla (Usuario). */
		return redirect() -> route("iniciar_sesion", $usuario -> update($request -> all()));
	}
}