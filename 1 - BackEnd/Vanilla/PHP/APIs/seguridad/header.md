### ======================================= ###
###### ===--- Caracteres no ASCII ---=== ######
### ======================================= ###

# (charset=UTF-8), los caracteres especiales no ASCII se manejan correctamente.

```php
	header("charset=UTF-8");
```

### ========================================== ###
###### ===--- Respuesta del servidor ---=== ######
### ========================================== ###

[](Content-Type), establece el tipo de respuesta que enviara al (cliente). 
Notificandole el tipo de respuesta que va a recibir.

# (text/html), Texto HTML.
	
```php
	header("Content-Type: text/html; charset=UTF-8");

	echo <<<HTML
		<html>
			<body>
				<h1>Hola Mundo</h1>
			</body>
		</html>
	HTML;
```

# (text/plain), Texto plano.

```php
	header("Content-Type: text/plain; charset=UTF-8");

	echo "Esto es un texto plano.";
```

# (application/xml), Texto XML.

```php
	header("Content-Type: application/xml; charset=UTF-8");

	echo <<<XML
		<?xml version='1.0' encoding='UTF-8'?>
		<root>
			<message>Esto es XML</message>
		</root>
	XML;
```

# (application/json), Un objeto JSON.

```php
	header("Content-Type: application/json; charset=UTF-8");

	echo json_encode(["mensaje" => "Esto es JSON"]);
```

# (application/javascript), codigo JavaScript.

```php
	header("Content-Type: application/javascript; charset=UTF-8");

	echo "console.log('Esto es JavaScript');";
```

# (application/x-www-form-urlencoded), un formulario.

```php
	header("Content-Type: application/x-www-form-urlencoded");

	echo "campo1=valor1&campo2=valor2";
```

### ========================================== ###
###### ===--- Responder con archivos ---=== ######
### ========================================== ###

# (text/csv), archivo Excel.

```php
	header("Content-Type: text/csv; charset=UTF-8");
	header("Content-Disposition: attachment; filename=data.csv");

	echo "columna1,columna2\nvalor1,valor2";
```

# (application/pdf), un PDF.

```php
	header("Content-Type: application/pdf");

	header("Content-Disposition: attachment; filename=documento.pdf");

	// Aquí normalmente se usaría una librería para generar el PDF y enviar su contenido
```

### ==================================== ###
###### ===--- Encabezados CORS ---=== ######
### ==================================== ###

1. Controlar acceso a los recursos del servidor.

```php
	# Permite que cualquier (dominio) pueda acceder a los recursos del servidor.
	header("Access-Control-Allow-Origin: *");

	# Podemos especificar un sitio web como tal.
	header("Access-Control-Allow-Origin: https://example.com");
```

2. Permitir solo se acepten ciertos metodos.

```php
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
```

3. Encabezados se pueden utilizar en una solicitud.

```php
	# Se aceptan (Content-Type), (Authorization).
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
```

4. Indica si las credenciales (como cookies o encabezados de autenticación) se pueden incluir en las solicitudes.

```php
	header("Access-Control-Allow-Credentials: true");
```

### ======================= ###
###### ===--- URL ---=== ######
### ======================= ###


```php
	# (location): Recibe la nueva URL de la pagina.
	header("location: http://www.example.com/");

	# Refresca la pagina en (3) segundos.
	header("Refresh:3");
```