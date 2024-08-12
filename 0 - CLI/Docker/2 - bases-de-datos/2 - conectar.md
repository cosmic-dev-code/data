### ====================================== ###
###### ===--- Conectar con la DB ---=== ######
### ====================================== ###

# Configuraciones.

```js
	var mysql = require('mysql');

	var conexion = mysql.createConnection({
		// Maquina (IP) a la cual conectarse, (mi computadora).
		host: "localhost", 
		// Puerto de mi computadora que conecta con el puerto (3000) del contenedor.
		port: 3001, 
		// Por defecto el usuario fue root.
		user: "root", 
		// El password que le dimos a la base de datos.
		password: "mi-pass", 
		// El nombre que le dimos a la base de datos.
		database: "mi_db"
	});
```

# Hacer uso de la base de datos.

```js
	conexion.connect(error => {
		if(error) console.error("Error al conectar: ", error); return void 0;

		conexion.query("SELECT * FROM `users`;", (errorRequest, resultRequest, fields) => {
			if(errorRequest) throw errorRequest;

			// ...
		});
	});
```