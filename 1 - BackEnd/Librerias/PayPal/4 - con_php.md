### =================================== ###
###### ===--- Por (seguridad) ---=== ######
### =================================== ###

Nada impide hacer la pasarela de pagos utilizando solo el cliente. Sin embargo para una mayor seguridad es 
mejor enviar el 'id' de la orden al servidor y procesar el pago en el servidor.

Esto se hace porque en la mayoria de los casos cuando se paga algo, el servidor debe realizar una accion, 
entonces si se procesa el pago en el cliente y luego se envia una orden al servidor: 
*	--- No hay manera de validar un token del pago efectuado.
*	--- El cliente manualmente puede enviar la peticion.
*	--- El servidor no tiene manera de saber si el pago se efectuo.

# Por eso el pago se procesa en el servidor.

### ======================================================= ###
###### ===--- Implemetar PayPal en el (Front-End) ---=== ######
### ======================================================= ###

<!-- Primero debemos importar (PayPal) con las (credenciales) y colocamos el elemento contenedor de los botones. -->

###### --- --- --- --- --- --- {proyecto}/index.html --- --- --- --- --- --- ######

```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			
			<!-- Enlazamos el (script) para utilizar (PayPal), debemos tomar en cuenta lo siguiente en el CDN: 
					--- (client-id): El 'id' de nuestra cuenta (bussiness) de aplicacion.
					--- (currency): Especificamos el tipo de moneda que vamos a utilizar. -->
			<script src="https://www.paypal.com/sdk/js?client-id=AWkJ4F94nvdDU-ORgu5A9l_V6JX6AaQa0rLxGlG-BR9tBYLfyUuxQ49hNO4AtrEWMl0crW_83odEw-gV&currency=MXN" type="text/javascript"></script>

			<script src="index.js" type="text/javascript"></script>

			<title>PayPal</title>
		</head>
		<body>
			<section>
				<article>
					<!-- Aqui estaran los botones de (PayPal). -->
					<div id="idPayPalContainer"></div>
				</article>
			</section>
		</body>
	</html>
```

###### --- --- --- --- --- --- {proyecto}/index.js --- --- --- --- --- --- ######

```javascript
	paypal.Buttons({

		/**
		 * Establecemos las opciones de orden.
		 */
		createOrder(data, actions){
			return actions.order.create({
				// Configuracion del pago.
				purchase_units: [{
					amount: {
						"currency_code": "MXN", 
						"value": 100
					}, 
					description: "Descripcion"
				}]
			});
		}, 

		/**
		 * Cuando el cliente ha aprovado el pago.
		 */
		onApprove(data, actions){
			// Mandamos el 'id' de la orden al servidor para procesar el pago en el servidor, (por seguridad).
			return fetch("server.php?order_id=" + data.orderID + "&product_id=" + productID)
				// Recibimos la respuesta del servidor.
				.then(result => result.json())
				.then(response => {
					if(response === "successfull"){
						// Pago realizado con exito.
					}else{
						// El pago ha fallado.
					}
				});
		}
	}).render("#idPayPalContainer");
```

###### --- --- --- --- --- --- {proyecto}/server.php --- --- --- --- --- --- ######

### =============================================================== ###
###### ===--- Establecer (credenciales) y recibir (token) ---=== ######
### =============================================================== ###

```php
	use GuzzleHttp\Client;

	// Credenciales de la cuenta de (Bussiness).
	$client_id = "AW9GeNS-UxdPveXZPvsCDa4V-tKIT7n2QPK2Dl_3wRLZpOPaMKY5tMk2HqhEnT0Gh4eU8sw-oNNJtYjc";
	$secret = "EP7pqEqCsZoUrHDbwic9CEFJLJphP8FYjzg78LgggzfEPf_0nkgXK-MYXZ2HmCC-YNeAgQx08_Xk210k";

	// Objeto para realizar peticiones.
	$fetch = new Client(["base_uri" => "https://api-m.sandbox.paypal.com"]);

	/**
	 * Cada vez que necesitamos hacer una peticion a PayPal, es necesario enviarle el token, 
	 * entonces creamos una funcion para no hacer la peticion una y otra vez.
	 */

	function get_access_token(){
		/* Hacemos una peticion a la ruta (/v1/oauth2/token) para recibir el (token) desde los servidores de PayPal, 
		(es como recibir una credencial que utilizaremos en las peticiones para procesar pagos. */
        $response = $fetch -> request("POST", "/v1/oauth2/token", [
            "headers" => [
                "Accept" => "application/json", 
                "Content-Type" => "application/x-www-form-urlencoded"
            ], 

            /**
             * Especificamos que queremos recibir las credenciales.
             */
            // ALTERNATIVA (0): Preferible al enviar JSON, XML u otros formatos personalizados.
            "body" => "grant_type=client_credentials", 
            // ALTERNATIVA (1): Es mas claro y permite enviar mas campos de formulario en el cuerpo de la solucitud.
			"form_params" => [
            	"grant_type" => "client_credentials",
        	],


            // Mandamos las claves proporcionadas por PayPal para recibir el token.
            "auth" => [$client_id, $secret, "basic"]
        ]);

        $data = json_decode($response -> getBody(), true);

        if(isset($data["access_token"])){
        	// Este es el token para hacer las peticiones.
        	return $data["access_token"];
        }else{
        	return null;
        }
	};
```

### ================================= ###
###### ===--- Procesar pago ---=== ######
### ================================= ###

```php
	if(isset($_GET['order_id'])){

		# Se recibe la orden del cliente.
		$order_id = $_GET['order_id'];
		# Obtenemos el (token) de acceso.
        $access_token = get_access_token();

        // En la ruta (/v2/checkout/orders/) procesamos el pago mandando el (id) de la orden.
        $order = $fetch -> request("GET", "/v2/checkout/orders/" . $order_id, [
            "headers" => [
                "Accept" => "application/json", 
                // Colocamos el (token) que nos authoriza a realizar procesos.
                "Authorization" => "Bearer {$access_token}"
            ]
        ]);

        /* Obtenemos la respuesta que literalmente es el objeto (details) que se recibia en el cliente 
        y lo deserializamos. */
        $details = json_decode($order -> getBody(), true);

        if($details["status"] === "APPROVED"){

        	// Obtener precio del (producto) y de la (transaccion).
        	$product = Database::get("products", $_GET['product_id']);
        	$price = (float) $details["purchase_units"][0]["amount"]["value"];

        	if(!is_null($product) && $product !== null){
	        	// Podemos hacer una validacion para verificar que el precio del producto no ha sido alterado.
	        	if($product -> price === $price){
	        		printf("successfull");
	        	}else{
	        		printf("La transaccion es sospechosa.");
	        	}
        	}else{
        		printf("El producto no existe");
        	}
        }else{
        	printf("La orden no ha sido aprovada");
        }

        printf("error");
	}
```