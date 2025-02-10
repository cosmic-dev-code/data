<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class UserController extends Controller {
	
	public function store(Request $request){

		# Retorna si tenemos el parametro del archivo o no.
		$request -> hasFile("archivo");

		# Obtenemos la imagen.
		$file = $request -> file('archivo');

		// Metodos del objeto ($file).

		# Muestra el nombre del archivo.
		$file -> getClientOriginalName()

		# Muestra la extension del archivo.
		$file -> getClientOriginalExtension();

		# Muestra la verdadera ruta del archivo.
		$file -> getRealPath();

		/*  Muestra la dimension del archivo en (Bytes).
				--- Bytes: Valor inicial.
				--- Bytes / 1024: KB.
				--- KB / 1024: MB.
				--- MB / 1024: GB.
		*/
		$file -> getSize();

		# Muestra tipo de (mime) del archivo.
		$file -> getMimeType();

		// Devuelve la ruta completa del archivo.
		$file -> path();

		// Devuelve la extension del archivo.
		$file -> extension();

		/* El metodo (move) mueve un archivo, recibe los siguientes parametros: 
			--- La ruta a la cual el archivo se va a mover.
			--- El nombre que se le asignara al archivo.  */
		$file -> move(
			public_path("imagenes/"),
			$file -> getClientOriginalName()
		);

		return view('uploadfile');
	}
}

######### --- --- --- Archivo (resources/views/image.blade.php) --- --- --- ######### ?>

<form action="/user/prfile/image" method="GET">
	@csrf
	<div>
		<!-- Este es el archivo que se envia por el atributo (name) -->
		<input type="file" name="archivo">
	</div>
</form>