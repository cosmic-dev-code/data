### ======================== ###
###### ===--- NOTA ---=== ######
### ======================== ###

PHPMailer es gratuito y no existe un limite para enviar correos utilizando esta API.

Puedes enviar correos de forma masiva y no tiene costo ya que es de codigo abierto.

Sin embargo hay que considerar que el servidor [](SMTP) puede tener limites en cuanto al numero de envio 
de correos electronicos o puede estar sujeto a costos.

### ======================================================== ###
###### ===--- Instalacion por (CDN) - (Descargado) ---=== ######
### ======================================================== ###

<!-- Ya que tenemos PHPMailer descargado dentro de nuestro directorio, podemos importarlo 
directamente a nuestro documento PHP. -->

```php
	// Importamos primero los (namespaces).
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	// Despues importamos los archivos de (PHPMailer).
	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';
```

### ============================================== ###
###### ===--- Instalacion por (composer) ---=== ######
### ============================================== ###

<!-- Instalamos via (composer). -->

```bat
	composer require phpmailer/phpmailer
```

```php
	// Importamos primero los (namespaces).
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	// Despues importamos los archivos de (PHPMailer).
	require 'path/to/PHPMailer/src/Exception.php';
	require 'path/to/PHPMailer/src/PHPMailer.php';
	require 'path/to/PHPMailer/src/SMTP.php';
```