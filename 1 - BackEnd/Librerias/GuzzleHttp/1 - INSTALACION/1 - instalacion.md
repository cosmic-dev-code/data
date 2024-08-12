### ======================== ###
###### ===--- NOTA ---=== ######
### ======================== ###

GuzzleHttp es gratuito y no existe un limite para realizar peticiones utilizando esta API.

Sin embargo hay que considerar que el servidor al cual se realizan las peticiones puede tener 
un limite de peticiones para los scripts.

### ============================================== ###
###### ===--- Instalacion por (composer) ---=== ######
### ============================================== ###

<!-- Instalamos GuzzleHttp via composer. -->

```bat
	composer require guzzlehttp/guzzle
```

Con esto se descargara una carpeta llamada [](vendor), mandamos a llamar al archivo [](autoload.php) el cual tiene todo el 
codigo que hace funcionar (GuzzleHttp).

```php
	require 'vendor/autoload.php';

	// Resto de codigo aqui.
```

<!-- Listo, es todo lo que tienes que hacer para instalar (GuzzleHttp). -->