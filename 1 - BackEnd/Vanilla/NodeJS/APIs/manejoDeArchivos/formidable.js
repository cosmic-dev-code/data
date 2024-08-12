"use strict";

// Creamos los objetos.
var http = require('http'), 
	formidable = require('formidable'), // El objeto (formidable).
	fs = require('fs');
// Creamos el objeto (IncomingForm).
const form = new formidable.IncomingForm();

http.createServer(function(request, result){
	result.writeHead(200, {'Content-Type': 'text/html'});

	// Verificamos la (url).
	if(request.url === '/file_upload'){

		/* NOTA: Si la (url) es (file_upload) entonces ya hemos subido un 
		archivo, por lo que debemos leer dichos archivos. */

		/* El metodo (parse) recibe los siguientes parametros: 
			--- La peticion del servidor la cual contiene los (archivos).
			--- Una funcion que recibe tres parametros: 
				--- Un error en caso de que lo haya.
				--- La informacion de los archivos.
				--- Los archivos. */
		form.parse(request, (error, fields, files) => {

			// Devuelve la fecha de la ultima modificacion del archivo.
			files.filetoupload.lastModifiedDate;

			// Devuelve la ruta del archivo.
			files.filetoupload.filepath;

			// Devuelve el nombre nuevo que se le asignara al archivo, (sin la extension).
			files.filetoupload.newFilename;

			// Devuelve el nombre del archivo con su (extension).
			files.filetoupload.originalFilename;

			// Devuelve el tipo de archivo, (image/png, image/jpg, etc).
			files.filetoupload.mimetype;

			// Devuelve el tamaño del archivo.
			files.filetoupload.size;

			let rutaImagen = files.filetoupload.filepath;
			let rutaNuevaImagen = ('C:/Users/Brandon/Desktop/Node JS/' + files.filetoupload.originalFilename);

			/* Cremos el archivo si no existe, de lo contrario lo reemplazamos. */
			fs.rename(rutaImagen, rutaNuevaImagen, errorRename => {
				if(errorRename) throw errorRename;

				result.write('Archivo movido de lugar.');
				result.end();
			});
		});
	
	}else{

		/* Si la (url) no es (file_upload) entonces no hemos subido ningun archivo, por 
		lo que debemos crear el formulario para subirlo.

		El formulario debe accionar a (file_upload). */

		result.write(`
			<form action="file_upload" method="post" enctype="multipart/form-data">
				<center>
					<input type="file" name="filetoupload">
					<br><br>
					<input type="submit">
				</center>
			</form>
		`);
		result.end();
	}
}).listen(8080);