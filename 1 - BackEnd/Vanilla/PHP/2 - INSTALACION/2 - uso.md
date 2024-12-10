### ================================ ###
###### ===--- Ejecutar PHP ---=== ######
### ================================ ###

<!-- Podemos ejecutar un archivo PHP por medio del CLI. -->

###### --- --- --- --- --- --- {proyecto}/index.php --- --- --- --- --- --- ######

<!-- Corremos un archivo PHP. -->

```php
	printf("Hello world");
```

<!-- Ejecutamos el archivo -->

```bat
	php index.php
```

# ------------------------ #
# ------ Parametros ------ #
# ------------------------ #

<!-- Podemos pasar parametros al archivo PHP. -->

```php

	// Verifica la longitud de los parametros pasados al archivo.
	if($argc > 1){

		// Imprime el arreglo de argumentos pasados al archivo.
		print_r($argv);

		// El argumento (0) siempre contendra el (nombre) del script ejecutandose.
		// NOTA: Los demas argumentos son los parametros pasados al script.
		$filename = $argv[0];
	}

```

<!-- Ejecutamos el archivo -->

```bat
	: Pasamos parametros: (parametro_1) y (parametro_2), cuantos queramos.
	php index.php parametro_1 parametro_2
```

### ========================================== ###
###### ===--- Servidor de Desarrollo ---=== ######
### ========================================== ###

<!-- Imagina que tienes una carpeta y dentro de ella un script PHP. -->

###### --- --- --- --- --- --- {proyecto}/index.php --- --- --- --- --- --- ######

```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Mi archivo PHP</title>
		</head>
		<body>
			<!-- ... -->
		</body>
	</html>
```

<!-- Ahora iniciamos el servidor dentro de esta carpeta, lo cual hara que todos 
los scripts de esta carpeta sean accesibles. -->

<!-- Puedes controlar el acceso de los scripts y recursos con (Nginx) o (Apache) -->

```bat
	: Iniciamos el servidor de desarrollo dentro de esta carpeta.
	php -S localhost:8000
```

Navega entre los archivos dentro de tu proyecto: 
	- [](http://localhost:8000/index.php)