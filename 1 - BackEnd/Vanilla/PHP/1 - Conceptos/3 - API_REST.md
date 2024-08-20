### ============================ ###
###### ===--- API REST ---=== ######
### ============================ ###

Primero establecemos las configuraciones pertinentes.

###### --- --- --- --- --- --- config.php --- --- --- --- --- --- ######

Configuramos la API funcion [](header).

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

Ahora implementamos.

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
		    	UPDATE `users` SET `name`='{$params['name']}' WHERE `id`={$params['id']}
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

### ===================================== ###
###### ===--- Codigos de estado ---=== ######
### ===================================== ###

Los diferentes codigos de estado que podemos recibir son los siguientes.

```php
	http_response_code( (int) $codigo );
```

# 1xx Informational
*   [](100_Continue): El cliente puede continuar con su solicitud.
*	[](101_Switching_Protocols): El servidor acepta cambiar el protocolo según lo solicitado por el cliente.
# 2xx Success
*	[](200_OK): La solicitud ha sido exitosa.
*	[](201_Created): La solicitud ha sido exitosa y se ha creado un nuevo recurso.
*	[](202_Accepted): La solicitud ha sido aceptada para procesamiento, pero no ha sido completada.
*	[](204_No_Content): La solicitud ha sido exitosa, pero no hay contenido para enviar en la respuesta.
# 3xx Redirection
*	[](301_Moved_Permanently): El recurso solicitado ha sido movido permanentemente a una nueva URI.
*	[](302_Found): El recurso solicitado reside temporalmente en una URI diferente.
*	[](304_Not_Modified): El recurso no ha sido modificado desde la última solicitud.
# 4xx Client Error
*	[](400_Bad_Request): La solicitud no puede ser procesada debido a un error del cliente (por ejemplo, datos inválidos).
*	[](401_Unauthorized): La solicitud requiere autenticación del usuario.
*	[](403_Forbidden): El servidor entiende la solicitud, pero se niega a autorizarla.
*	[](404_Not_Found): El recurso solicitado no ha sido encontrado.
*	[](405_Method_Not Allowed): El método de solicitud no es compatible con el recurso solicitado.
*	[](409_Conflict): La solicitud no puede ser procesada debido a un conflicto con el estado actual del recurso.
*	[](429_Too_Many_Requests): El cliente ha enviado demasiadas solicitudes en un periodo de tiempo dado.
# 5xx Server Error
*	[](500_Internal_Server_Error): El servidor encontró una condición inesperada que le impidió completar la solicitud.
*	[](501_Not_Implemented): El servidor no reconoce el método de solicitud o no tiene la capacidad para completarlo.
*	[](502_Bad_Gateway): El servidor recibió una respuesta inválida de un servidor de respaldo al tratar de completar la solicitud.
*	[](503_Service_Unavailable): El servidor no está disponible actualmente (por ejemplo, por sobrecarga o mantenimiento).
*	[](504_Gateway_Timeout): El servidor no pudo obtener una respuesta a tiempo de un servidor de respaldo.