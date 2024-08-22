
<!-- Creamos un controlador para procesar los pagos. -->

```bat
	php artisan make:controller PaymentController
```

###### --- --- --- --- --- --- {proyecto}/.env --- --- --- --- --- --- ######

<!-- Guardamos las credenciales de PayPal en nuestro archivo .env para una mayor seguridad. -->

<!-- NOTA: Las credenciales se guardan aqui porque al subir nuestro repositorio a una plataforma como GitHub, 
el unico archivo confidencial es el (.env), es perfecto para guardar credenciales sin que nadie mas 
acceda a ellas. -->

```bat
	PAYPAL_CLIENT_ID=AbuENkEg7IQatwuoJRxD20SlgPxkoJZxjsG-sfyqjHy_4bS1EcPfpi99RhG19ltGPeu1TXgn_25rzMl0
	PAYPAL_SECRET=ECaczw60FKrRufQlnYwRNGm0kkmnURFPaX5Ua1a1Reym4Z3Qu-oDk_1sNnPBaoLsohQp98vuh5lczXzg
	PAYPAL_CURRENCY=MXN
	PAYPAL_MODE=sandbox
```

###### --- --- --- --- --- --- {proyecto}/route/web.php --- --- --- --- --- --- ######

<!-- Creamos una ruta para procesar la orden en el controlador. -->

```php
	use Illuminate\Support\Facades\Route;
	use App\Http\Controllers\PaymentController;

	Route::get("paypal/process/{order_id}/{product_id}", [PaymentController::class, "process"]) 
		-> name("payment.process");
```

###### --- --- --- --- --- --- {proyecto}/resources/views/payment.blade.php --- --- --- --- --- --- ######

```html
	<x-base-layout>
		<article class="card">
			<h2 class="title">Pagar producto</h2>
			<div class="paypal-content">

				<!-- Credenciales en nuestro archivo (.env) -->
				<script src="https://www.paypal.com/sdk/js?client-id={{ env('PAYPAL_CLIENT_ID') }}&currency={{ env('PAYPAL_CURRENCY') }}" type="text/javascript"></script>

				<div id="idPayPalButtons"></div>

				<!-- Damos los valores al objeto global (__user__) para acceder a el desde el archivo (global.js). -->
				<script type="text/javascript">
					window.__user__ = new Object({
						names: "{{ auth() -> user() -> names }}", 
						surnames: "{{ auth() -> user() -> surnames }}"
						address: "{{ auth() -> user() -> address }}", 
						postalCode: "{{ auth() -> user() -> postal_code }}", 
						contryCode: "{{ auth() -> user() -> contry_code }}", 
						productID: "{{ $product -> id }}"
					});
				</script>
				<script src="js/global.js" type="text/javascript"></script>
			</div>
		</article>
	</x-base-layout>
```

###### --- --- --- --- --- --- {proyecto}/resources/views/global.js --- --- --- --- --- --- ######

```js
	// Manejamos PayPal desde aqui para una mayor seguridad.
	(function(){
		paypal.Buttons({
			color: "blue", 
			shape: "pill", 
			label: "paypal", 
			layout: "vertical", 

			env: 'production', 
			business: "teamprocesscontroljob@gmail.com", 

			createOrder: function(data, actions) {
				return actions.order.create({
					// Los datos del usuario exraidos desde el objeto (__user__) desde (PHP).
					player: {
						email_address: window.__user__.address, 
						name: {
							given_name: window.__user__.names, 
							surname: window.__user__.surnames
						}, 
						address: {
							postal_code: window.__user__.postalCode, 
							contry_code: window.__user__.contryCode
						}
					}, 
					application_context: {
						shipping_preference: "NO_SHIPPING"
					}, 
					// Precio del producto.
					purchase_units: [{
						amount: {
							"currency_code": "MXN", 
							"value": 100
						}, 
						description: "Membresía"
					}]
				});
			}, 

			onApprove: function(data, actions){
				/* Se envian los parametros requeridos, la (orden) del producto y el (id) del producto para validar 
				que los datos sean correctos, (el producto por el que se paga) y (el producto de la orden). */
				return fetch(`/paypal/process/${data.orderID}/${window.__user__.productID}`)
					.then(result => result.json())
					.then(orderData => {
						if(orderData.success){
							document.querySelector(".overlay-paypal").classList.remove("active");
							document.querySelector(".container-paypal").classList.remove("active");
							Swal.fire({
								title: 'Pago exitoso',
								text: orderData.message,
								icon: 'success',
								showCancelButton: false,
								confirmButtonText: 'De acuerdo'
							}).then((result) => {
								if (result.isConfirmed) // Se redirecciona al usuario o activa un servicio...
							});
						}else{
							MessageBox.show("Algo salio mal", orderData.message);
						}
				});
			}, 
			onError: (error) => console.error("PayPal => ", error);
		}).render(".paypal-buttons-container");
	}());
```

###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/PaymentController.php --- --- --- --- --- --- ######

```php
	namespace App\Http\Controllers;

	use Illuminate\Http\Request;
	use GuzzleHttp\Client;

	// Modelo para registrar el pago del usuario.
	use App\Models\Payment;
	// Modelo para traer el producto a cobrar.
	use App\Models\Product;

	class PaymentController extends Controller
	{
		// Claves para reutilizar en todo el controlador.
	    private $client;
	    private $client_id;
	    private $secret;

	    public function __construct()
	    {
	    	/* Damos los valores desde el inicio para utilizar en todo el controlador sin necesidad 
	    	de volver a dar los valores. */

	        $this->client = new Client([
	            "base_uri" => "https://api-m.sandbox.paypal.com"
	        ]);

	        $this->client_id = env("PAYPAL_CLIENT_ID");
	        $this->secret = env("PAYPAL_SECRET");
	    }

	    // Metodo que devuelve el (token) para autenticarnos frente a PayPal para hacer peticiones.
	    public function get_access_token()
	    {
	        $response = $this->client -> request("POST", "/v1/oauth2/token", [
	            "headers" => [
	                "Accept" => "application/json", 
	                "Content-Type" => "application/x-www-form-urlencoded"
	            ], 
	            "body" => "grant_type=client_credentials", 
	            "auth" => [$this->client_id, $this->secret, "basic"]
	        ]);

	        $data = json_decode($response -> getBody(), true);

	        return $data["access_token"];
	    }

	    public function process($order_id, $product_id)
	    {

	    	$product = Product::find($product_id);

	    	if($product !== null){

		    	// Recibimos el (id) de la orden y hacemos la peticion.
		        $response = $this->client -> request("GET", "/v2/checkout/orders/" . $order_id, [
		            "headers" => [
		                "Accept" => "application/json", 
		                "Authorization" => "Bearer {$this -> get_access_token()}"
		            ]
		        ]);

		        // Deserializamos los datos.
		        $data = json_decode($response -> getBody(), true);

		        // Se realizan un par de validaciones.
		        if($data["status"] === "APPROVED"){
		        	if($product -> price === (float) $data["purchase_units"][0]["amount"]["value"]){
			        	
			        	// Registramos el pago en la base de datos.
			            $payment = Payment::create([
			                "user_id" => auth() -> id(), 
			                // Orden de compra, por si en un futuro queremos contactar a PayPal.
			                "order_id" => $order_id, 
			                "type" => "paypal", 
			                "amount" => $data["purchase_units"][0]["amount"]["value"], 
			                "currency" => $data["purchase_units"][0]["amount"]["currency_code"]
			            ]);

			            /**
			             * Se activa algun servicio o se envia algun producto.
			             * ...
			             */

			            return json_encode([
			            	"success" => true, 
			            	"message" => "Su pago ha sido procesado con éxito"
			            ]);
		        	}

		            return json_encode([
		            	"success" => flase, 
		            	"message" => "La transaccion es sospechosa, el precio del producto no coincide"
		            ]);
		        }

		        return json_encode([
		        	"success" => false, 
		        	"message" => "El pago no pudo realizarse, puede que sea por datos incorrectos o falta de fondos"
		        ]);
	    	}

	    	return json_encode([
	        	"success" => false, 
	        	"message" => "El producto que intenta comprar no existe"
	        ]);
	    }
	}
```