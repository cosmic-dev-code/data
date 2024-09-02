### ==================================== ###
###### ===--- API Enrutamiento ---=== ######
### ==================================== ###

Por convencion, para crear las API REST estan se encuentran dentro de un directorio llamado [](api).
El cual alberca las APIs que utilizaremos como servidor.

Estas APIs pueden ejecutar tareas como conectarse a bases de datos, y demas.
Por convencion la carpeta se llama [](api) y los archivos que responden son [](route.js).

	./src
	----------------------------------------------- ( /api ): Primer nivel de nuestra API.
		./api
			route.js === Respuesta.
	----------------------------------------------- ( /api/hola ): Segundo nivel de nuestra API.
			./hola
				route.js === Respuesta.

Asi es como se maneja el [](Enrutamiento) de nuestras APIs.

# NOTA: Cabe decir que todos los archivos (js) y (ts) dentro del directorio (api) son archivos 
# completamente Node JS.