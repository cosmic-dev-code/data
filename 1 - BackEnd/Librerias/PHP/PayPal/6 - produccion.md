### ================================================ ###
###### ===--- Crear cuenta de (aplicacion) ---=== ######
### ================================================ ###

Accedemos a: 
	--- https://developer.paypal.com/

<!-- Cambiamos del modo (sandbox) al modo (live) para entrar en produccion.

Luego tenemos que crear una aplicacion.

Al dar 'click' a la aplicacion, nos dara la siguiente informacion: -->

En la seccion __(Apps & Credentials)__. Dentro de __(Default Application)__.

# Credenciales de prueba.

*	--- App Name: [](Nombre_De_La_Aplicacion).
*	--- Client ID: [](AQ6VtIkFYsdVTqSLNomPpmXkNbIWJTwiPLJcPmNGj8mOAqbOAoXKqwxO66UHS5ItwX6AR4Xc_WTXBc0r).
*	--- Secret Password: [](EBQ5X4CYn7hsYYX_2pQCbpn_1lJMBQ08lQ9Ym_mw60Gr22xdmdDiv3v7s61SUXCe52ZRwhCueiwpXepX).

### ================================== ###
###### ===--- (Credenciales) ---=== ######
### ================================== ###

<!-- Cambios las crdenciales de (prueba) a las de (produccion). -->

```php
	// Debemos colocar las credenciales en (produccion) proporcionadas por PayPal.
	$client_id = "AQ6VtIkFYsdVTqSLNomPpmXkNbIWJTwiPLJcPmNGj8mOAqbOAoXKqwxO66UHS5ItwX6AR4Xc_WTXBc0r";
	$secret = "EBQ5X4CYn7hsYYX_2pQCbpn_1lJMBQ08lQ9Ym_mw60Gr22xdmdDiv3v7s61SUXCe52ZRwhCueiwpXepX";
```

<!-- Cambiamos la (URL) base. -->

```php
	// Cambiar de (https://api-m.sandbox.paypal.com).
	$fetch = new Client(["base_uri" => "https://api-m.sandbox.paypal.com"]);

	// A (https://api.paypal.com).
	$fetch = new Client(["base_uri" => "https://api.paypal.com"]);
```

<!-- Cambiamos el (token) de acceso sigue siendo el mismo. -->

```php
	$response = $fetch -> request("POST", "/v1/oauth2/token", $request_settings);
```

<!-- Con esto es suficiente para operar en un ambiente de produccion. -->