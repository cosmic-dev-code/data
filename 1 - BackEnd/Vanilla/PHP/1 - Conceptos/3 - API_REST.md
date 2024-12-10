### ============================ ###
###### ===--- API REST ---=== ######
### ============================ ###

<!-- Primero establecemos las configuraciones pertinentes. -->

###### --- --- --- --- --- --- config.php --- --- --- --- --- --- ######

<!-- Configuramos la API funcion (header). -->

```php
	# Indicamos el tipo de contenido a renderizar en el navegador.
	header("Content-Type: application/json; charset=UTF-8");

	# Acceso a los recursos.
	header("Access-Control-Allow-Origin: *");

	# Tipos de peticiones permitidas.
	header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

	# Encabezados permitidos.
	header("Access-Control-Allow-Headers: Content-Type");
```

###### --- --- --- --- --- --- index.php --- --- --- --- --- --- ######

```php
	# Para hacer peticiones en la base de datos.
	include 'db.php';
	# Incluir las configuraciones de la API.
	include 'config.php';

	# Cuando se hace una peticion al servidor, observamos por que metodo fue realizada.

	$method = $_SERVER['REQUEST_METHOD'];

	switch($method){
		/**
		 * Metodo para Conocer tipo de peticiones.
		 */
		case "OPTIONS": 
		    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
		    header("Access-Control-Allow-Headers: Content-Type, Authorization");
		    response("", 204); // 204 No Content
		    break;
		/**
		 * Metodo para extraer datos.
		 */
		case 'GET':
		    global $conn;

		    $result = $conn->query("SELECT * FROM `users`");

		    if($result->num_rows > 0){
		        $items = [];

		        while ($row = $result->fetch_assoc()) $items[] = $row;

		        response($items, 200); // 200 OK
		    }else{
		        response([], 200); // 200 OK
		    }
			break;
		/**
		 * Crear datos.
		 */
		case "POST": 
		    global $conn;
		    $params = get_params();

		    if(isset($params["name"])){

			    $result = $conn -> query("
			    	INSERT INTO `users`(`names`) VALUES ('{$params['name']}')
			    ");

			    if ($result === TRUE) response("Recurso creado", 201); // 201 CREATED
			    else response("ERROR: ".$conn -> error, 500); // 500 Internal Server Error
		    }else{
		    	response("ERROR: Se requiren parametros.", 400); // 400 Bad Request
		    }
			break;
		/**
		 * Actualizar datos.
		 */
		case "PUT": 
			method_put();
			break;
		case "PATCH": 
			method_put();
			break;
		/**
		 * Eliminar datos.
		 */
		case "DELETE": 
		    global $conn;
		    $params = get_params();

		    if(isset($params["id"])){
			    $result = $conn -> query("DELETE FROM `users` WHERE id={$params['id']}");

			    if ($result === TRUE) response("Recurso eliminado", 200); // 200 OK
			    else response("ERROR: ".$conn -> error, 500); // 500 Internal Server Error
		    }else{
		    	response("ERROR: Se requiren parametros.", 400); // 400 Bad Request
		    }
			break;
		/**
		 * Cuando el metodo no es encontrado.
		 */
		default:
			response("El servidor no soporta el metodo (${$method}).", 405); // 405 Metodo no soportado.
			break;
	}

	function method_put(){
	    global $conn;
	    $params = get_params();

	    if(isset($params["name"])){

		    $result = $conn -> query("
		    	UPDATE `users` SET `name`='{$params['name']}' WHERE `id`= {$params['id']}
		    ");

		    if ($result === TRUE) response("Recurso actualizado", 200); // 200 OK
		    else response("ERROR: ".$conn -> error, 500); // 500 Internal Server Error
	    }else{
	    	response("ERROR: Se requiren parametros.", 400); // 400 Bad Request
	    }
	}

	function get_params():array{
		return json_decode(
			file_get_contents("php://input"), 
			true
		);
	}

	function response(string $message, int $code_status):void{
		// Establecemos el codigo de estado de parte del servidor.
		http_response_code($code_status);

		// Respondemos.
		if(is_array($message)) echo json_encode($message);
		else echo json_encode(["message" => $message]);
	}

	$conn -> close();
```