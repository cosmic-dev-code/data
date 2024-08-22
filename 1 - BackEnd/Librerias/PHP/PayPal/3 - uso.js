/* ##########==========########## */
/* ######===--- NOTA ---===###### */
/* ##########==========########## */

/* NOTA: Para crear una nueva (orden) debemos: 
	--- Dar 'click' en el boton de (PayPal).
	--- Ingresar el correo de prueba (Personal).
	--- Ingresar el password del correo de prueba (Personal). 
	--- Efectuar la transaccion.
*/

/* ##########================########## */
/* ######===--- Renderizar ---===###### */
/* ##########================########## */

/* Renderizamos los botones de (PayPal) en el elemento seleccionado (.paypal-buttons-container).

Inyecta en el codigo dos botones: 
	--- Uno para (PayPal).
	--- Otro para (targeta de credito). */
paypal.Buttons().render(".paypal-buttons-container");

/* ##########===========================########## */
/* ######===--- Botones y renderizado ---===###### */
/* ##########===========================########## */

// ---------------------------------------- //
// ------ Renderizar algunos botones ------ //
// ---------------------------------------- //

// Configuramos los botones que queremos implementar.
var buttons = [
	// Esto representa el botón de PayPal estándar.
	paypal.FUNDING.PAYPAL, 
	// Este botón permite a los usuarios pagar utilizando Venmo, una plataforma de pagos propiedad de PayPal.
	paypal.FUNDING.VENMO, 
	// Este botón está relacionado con las opciones de financiamiento que ofrece PayPal a los compradores.
	paypal.FUNDING.PAYLATER, 
	// Este botón se refiere a la opción de financiamiento de crédito ofrecida por PayPal.
	paypal.FUNDING.CREDIT, 
	// Este botón permite a los usuarios pagar con tarjetas de crédito o débito a través de PayPal.
	paypal.FUNDING.CARD
];

buttons.forEach(button => {
	// Se agrega cada boton a las opciones de pago de PayPal, (fundingSource).
	var btnPayPal = paypal.Buttons({
		fundingSource: button
	});

	// Se verifica si el botón está disponible por PayPal, de estarlo se renderiza.
	if(btnPayPal.isEligible()){
		btnPayPal.render(".paypal-buttons-container");
	}
});

// ------------------------------------- //
// ------ Opciones de renderizado ------ //
// ------------------------------------- //

// Ajustes de PayPal.
paypal.Buttons({
	// ESPECIFICA SOLO UN BOTON, (En este caso solo PayPal).
	fundingSource: paypal.FUNDING.PAYPAL, 
	// ESPECIFICA SOLO UN BOTON, (En este caso solo la tarjeta de credito)
	fundingSource: paypal.FUNDING.CARD, 

	// Ajustes para los botones.
	style: {
		// "blue", define el color del boton (PayPay) a (azul).
		// "gold", define el color del boton (PayPal) a (dorado).
		color: "blue", 
		// "pill", bordes redondeados en los dos botones.
		// "rect", bordes sin redondear.
		shape: "pill", 
		// "pay", indica que el boton dira: pagar con PayPal.
		// "paypal", indica que el boton dira: PayPal.
		label: "pay", 
		// "horizontal", solo muestra el boton de (PayPal).
		// "vertical", muestra ambos botones.
		layout: "horizontal"
	}
}).render(".paypal-buttons-container");

/* ##########=============########## */
/* ######===--- Metodos ---===###### */
/* ##########=============########## */

paypal.Buttons({

	// ----------------------------- //
	// ------ Crear una orden ------ //
	// ----------------------------- //

	// Preparar para transacciones.

	createOrder: function(data, actions) {
		return actions.order.create({
			// (player) representa al usuario que quiere hacer la transaccion.
			// SI YA TIENES LOS DATOS DEL USUARIO PORQUE ESTA AUTENTICADO PUEDES COLOCARLOS.
			player: {
				email_address: "brandon@gmail.com", 
				name: {
					given_name: "Brandon Anthony", 
					surname: "Olivares Amador"
				}, 
				address: {
					// Direccion de (calle) y (numero de casa).
					address_line_1: "Musterstrasse 18", 
					// (Departamento), (suit) o cualquier informacion adicional.
					address_line_1: "Test", 
					// (Region), (provincia) o (estado).
					admin_area_1: "", 
					// (Ciudad) o (condado).
					admin_area_2: "Wien", 
					postal_code: "22170", 
					// Tipo de moneda.
					contry_code: "MXN"
				}
			}, 
			// Si quieres implemetar una direccion de envio o no.
			application_context: {
				/* Las opciones son: 
					--- (NO_SHIPPING): No se necesita una direccion de envio.
						--- DESHABILITA LOS CAMPOS DE LLENADO DE DIRECCION.
					--- (SET_PROVIDED_ADDRESS): El cliente ingresa una direccion de envio, (no es obligatorio).
					--- (GET_FROM_FILE): Utiliza la direccion almacenada del cliente, (si la tenerla). */
				shipping_preference: "NO_SHIPPING"
			}, 
			// Precio y descripcion del producto.
			purchase_units: [{
				// Monto.
				amount: {
					"currency_code": "MXN", 
					"value": 100
				}, 
				description: "Descripcion del producto"
			}]
		});
	}, 

	// ---------------------------------- //
	// ------ Transaccion aprobada ------ //
	// ---------------------------------- //

	// Cuando el usuario aprueba la transaccion.

	onApprove: function(data, actions){

		/* Devuelve el 'id' de la orden, (Importate), porque este es el identificador de la compra, 
		por si en un futuro el usuario necesita reclamar. */
		data.orderID;
		// El usuario que hace la orden.
		data.payerID;
		// "paypal"
		data.paymentSource;


		// Capturamos la (orden).
		actions.order.capture().then(details => {
			
			// Detalles de la transaccion.

			// Datos de la transaccion.
			details
				// Fecha y hora en que se creo la transaccion.
				.create_time; // "2022-10-15T03:27:16Z".
				.id; // "64A19363KR5737922".
				/* Indica la intencion de la transaccion: 
					--- (CAPTURE): Intención de capturar inmediatamente el pago, (se deduce el dinero de la cuenta del cliente de inmediato).
					--- (AUTHORIZE): El dinero no se captura de inmediato, sino despues, (hasta que el producto ya ha sido recibido). */
				.intent; // "CAPTURE".
				/* Indica el estado de la transaccion: 
					--- (PENDING): La transaccion esta pendiente por problemas externos como: Problemas con PayPal, la cuenta del cliente, etc.
					--- (COMPLETED): Los fondos fueron transferidos con exito.
					--- (DECLINED): La transaccion fue rechazada, puede ser por fondos insuficientes.
					--- (VOIDED): Puedes cancelar la (AUTHORIZE) del cliente, por lo que los fondos no se capturan.
					--- (REFUNDED): Cuando emites un reembolso al cliente.
					--- (PARTIALLY_REFUNDED): Cuando emites un reembolso parcial al cliente. */
				.status; // "COMPLETED".
				// Fecha y hora en que se actualizo la transaccion.
				.update_time; // "2022-10-15T03:27:40Z".
				
			// Links de la transaccion.
			details
				.links[0].href; // "https://api.sandbox.paypal.com/v2/checkout/orders/64A19363KR5737922".
				.links[0].method; // "GET".
				.links[0].rel; // "self".

			// Datos del usuario.
			details.player
				.address
					.country_code; // "MXN".

			details
				.email_address; // "brandon@gmail.com".
			details
				.player_id;
			details
				.name
					.given_name; // "Brandon".
					.surname; // "Olivares".

			// Datos del monto.
			details.purchase_units;
				.amount
					.currency_code; // "MXN".
					.value; // "100.00".
		});
	}, 

	/**
	 * Cuando la compra es cancelada, (no la transaccion).
	 */
	onCancel: function(data){
		// Este es el 'id' de esta compra, por si el usuario quiere reclamar, (es importante).
		data.orderID;
	}, 

	/**
	 * Muestra un mensaje si llega a haber un error.
	 */
	onError(error){
		/* Ocurre cuando el usuario ingresa un dato incorrecto en un input, o cuando no se 
		pudo efectuar la transaccion. */
		console.log(`Hubo un error: ${error}`);
	}

}).render("#paypal-button-container");