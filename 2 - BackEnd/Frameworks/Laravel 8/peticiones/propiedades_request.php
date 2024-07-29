<?php


######### --- --- --- Archivo (App/Http/Controllers/UsuarioController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function show(Request $request){

        // ---------------------------------- //
        // ------ El metodo (validate) ------ //
        // ---------------------------------- //

        // El metodo (validate) recibe los campos a validar y opcionalmente los mensajes de error de los campos.
        $request -> validate([
            "title" => "required"
        ], [
            "title.required" => "El titulo es obligatorio"
        ]);

        // ----------------------------- //
        // ------ Obtener (datos) ------ //
        // ----------------------------- //

        // Devuelve un array asosiativo con los (name) de los campos y sus valores. ["name" => "value"].
        $request -> all();

        // Comprueba si viene un campo definido.
        $request -> has("title");

        // Devuelve un array con los campos especificados.
        $request -> only("title")
        $request -> only("title", "name", "content");
        $request -> only(["title"])
        $request -> only(["title", "name", "content"]);

        // Devuelve un array sin los campos especificados.
        $request -> except("title")
        $request -> except("title", "name", "content");
        $request -> except(["title"])
        $request -> except(["title", "name", "content"]);

        // El metodo (query) retorna el valor del input "title", de no recibirse retorna "null".
        $request -> query('title', 'null');

        // Recupera las variables de la URL: 
        //      --- https://www.example.com?var=value
        $request -> query("var"); // "value"

        // Extrae el valor de un campo en especifico, y NO puede modificarse.
        $request -> input("title");
        // Extrae el valor de un campo en especifico, y puede modificarse.
        $request -> title;

        // Agrega un nuevo campo al (request).
        $request -> request -> add([
            "name" => "value"
        ]);

        // Cambia el valor de un (input).
        $request["name"] = "nuevo valor";
        $request -> merge([
            "name" => "nuevo valor"
        ]);

        // ------------------------------- //
        // ------ Datos de la (url) ------ //
        // ------------------------------- //

        // Devuelve la ruta de la peticion.
        $request -> path();

        // Devuelve un booleano si coincide con el tipo de metodo.
        $request -> isMethod("post");
    }
}