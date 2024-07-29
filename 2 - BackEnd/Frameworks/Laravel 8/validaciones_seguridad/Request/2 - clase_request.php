<?php

/* ##########=======================########## */
/* ######===--- Validacion normal ---===###### */
/* ##########=======================########## */

######### --- --- --- Archivo (app\Http\Controllers\UsuarioController.php) --- --- --- ######### */

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller{
	public function registrar_usuario(Request $request){

		/* Si todos los datos pasan la validacion, entonces las siguientes lineas de codigo se ejecutan. */

		$request -> validate([
			"nombre" => "required",
			"apellido" => "required",
			"edad" => "required|max:2",
			"password" => "required|min:6",
			"password_1" => "required|min:6",
			"mail" => "required:min:3|max:30"
		],[
			/* Podemos cambiar los mensajes directamente. */
			'nombre.required' => 'El campo nombre es requerido.',
			'edad.required' => 'La edad es requerida.',
			'edad.max' => 'La edad debe contener al menos 2 caracteres.'
		]);

		$usuario = Curso::create($request -> all());
	}
}

/* ##########========================########## */
/* ######===--- Creando un request ---===###### */
/* ##########========================########## */

######### --- --- --- Archivo (app\Http\Requests\UsuarioRequest.php) --- --- --- ######### */

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class UsuarioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
    	// Colocamos que el usuario pueda acceder a la peticion.
        return true;
    }

    /**
     * Aqui es donde vamos a validar cada uno de los campos del objeto (request), 
     * el cual recordemos que almacena cada campo de la tabla.
     */
    public function rules()
    {
        return [
			"nombre" => "required",
			"apellido" => "required",
			"edad" => "required|max:2",
			"password" => "required|min:6",
			"password_1" => "required|min:6",
			"mail" => "required:min:3|max:30"
        ];
    }

    /* Podemos cambiar los nombres de los atributos 'name' al mostrarse algun error de parte de la 
    validacion en el formulario. */
    public function attributes(){
        return [
            "nombre" => "nombre de este curso",
            "apellido" => "de la categoria"
        ];
    }

    /* Aqui cambiamos los mensajes de error de cada campo, si cambiamos el nombre de un campo, (name), 
    entonces podemos utilizar ese nombre. */
    public function messages(){
        return [
            "edad.required" => "No debe dejar el numero sin definir.",
            "nombre.max" => "El nombre debe tener menos de 10 caracteres."
        ];
    }
}

/* ##########================================########## */
/* ######===--- Mandar a llamar un request ---===###### */
/* ##########================================########## */

######### --- --- --- Archivo (app\Http\Controllers\UsuarioController.php) --- --- --- ######### */

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

# Acemos uso de nuestra clase (request).
use App\Http\Requests\UsuarioRequest;

class UsuarioController extends Controller{

	/* ($request), se instancia como un objeto de la clase (UsuarioRequest) y de manera automotica valida los 
	campos, de no ser correctos reedirecciona. */
	public function registrar_usuario(UsuarioRequest $request){

		// De pasar las reglas de validacion continua todo normal.

		$usuario = Curso::create($request -> all());
	}
}