<?php

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsuarioController;

// Para actualizar campos debemos utilizar el metodo (put).
Route::put("misPaginas/actualizado/{id_usuario}", [UsuarioController::class, "update"]) -> name('usuarios.update');

######### --- --- --- Archivo (app/Http/Controllers/UsuarioController) --- --- --- #########

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller{

	/* Recibimos los datos del (request). */
    public function update($id_usuario, Request $request){

    	/* Recibimos el 'id' del usuario y extraemos al usuario. */
        $usuario = Usuario::find($id_usuario);

        # Cambiamos los datos.
        $usuario -> nombre = $request -> nombre;
        $usuario -> apellido = $request -> categoria;
        $usuario -> edad = $request -> numero;
        $usuario -> correo = "null";

        # Actualizamos el registro.
        $result = (int) $usuario -> save();

        if($result === 1){
            return redirect() -> route('cursos.index');
        }
    }

}

######### --- --- --- Archivo (resources/views/misPaginas/actualizar.blade.php) --- --- --- #########

?>

@extends('plantillas.plantilla')

@section('title', "Modificar curso")

@section('content')
    <h3>Actualizar sus curso {{$usuario -> nombre}}</h3>

    <!-- Colocamos la ruta y el parametro que recibe, (el id del usuario a modificar). -->
    <form action="{{route('usuarios.update', $usuario)}}" method="POST" autocomplete="on">
        @csrf

        <!-- Esta directiva es necesaria para indicarle a laravel que (put) sera el metodo que utilizaremos en las rutas. -->
        @method('put')

        <fieldset>
        	<!-- Ponemos todos los datos del usuario. -->
            <legend>Datos del curso {{$usuario -> nombre}}</legend>
            <center>
                <div>
                    <label for="idNombre">Nuevo nombre del usuario: </label>
                    <input type="text" name="nombre" placeholder="Nombre" id="idNombre" value="{{$usuario -> nombre}}">
                </div>
                <div>
                    <label for="idApellido">Nuevo apellido del usuario: </label>
                    <input type="text" name="categoria" placeholder="Categoria" id="idApellido" value="{{$usuario -> apellido}}">
                </div>
                <div>
                    <label for="idEdad">Nueva edad del usuario: </label>
                    <input type="number" name="numero" placeholder="Numero" id="idEdad" value="{{$usuario -> edad}}">
                </div>
            </center>
        </fieldset>
        <div>
            <input type="submit" value="Modificar curso">
        </div>
    </form>
@endsection