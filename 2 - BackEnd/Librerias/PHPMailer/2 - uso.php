<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

/* Ahora instanciamos un objeto (PHPMailer). */
$PHPMailer = new PHPMailer();

# Colocamos (try) y (catch) para atrapar los errores.
try
{
    // Aqui colocamos los ajustes del (servidor).
    $PHPMailer -> isSMTP();
    $PHPMailer -> SMTPDebug = 0;
    // Host del servidor.
    $PHPMailer -> Host = 'smtp.gmail.com';
    // Activar si el servidor es (SMTP).
    $PHPMailer -> SMTPAuth = true;
    // Correo que enviara los mensajes.
    $PHPMailer -> Username = "ejemplo@gmail.com";
    // Password del correo, (para dar autorizacion).
    $PHPMailer -> Password = "passwordDeMiCorreo";
    // Del servidor.
    $PHPMailer -> SMTPSecure = 'tls';
    // Puerto del servidor.
    $PHPMailer -> Port = 587;

    # Direcciones.
    // De donde se envia el correo.
    $PHPMailer -> setFrom("ejemplo@gmail.com", "Lol");
    // Direccion del correo.
    $PHPMailer -> addAddress("ejemplo@gmail.com", 'Prueba Mail');

    // Contenido del correo.
    $PHPMailer -> isHTML(true);
    // Titulo del correo.
    $PHPMailer -> Subject = ("Titulo de mi correo");
    /* Podemos enviar una imagen en nuestro correo, recibe el metodo por parametros: 
    	--- La direccion de la (imagen). 
    	--- Un pseudo nombre para la imagen. */
    $PHPMailer -> AddEmbeddedImage('images/imagen.png', 'imagenAdjunta');
    /* Aqui colocamos el cuerpo del correo, en la propiedad (src) de la etiqueta (img) colocamos la palabra reservada 
    (cid:) y el pseudo nombre de la (imagen) que hemos (adjuntado). */
    $PHPMailer->Body    = ("
    	<div>
    		<h1>Este es el cuerpo de mi (mensaje/correo)</h1>
    		<picture>
    			<img src=\"cid:imagenAdjunta\" width=\"100\" height=\"100\" title=\"Esta es una imagen adjunta\"/>
    		</picture>
    	</div>
    ");
    /* Si el servidor utiliza un servicio (SMTP), podemos habilitar o desabilitar ciertos ajustes. */
    $PHPMailer -> SMTPOptions = array(
    	'ssl' => [
    		'verify_peer' => false,
    		'veryfy_peer_name' => false,
    		'allow_self-signed' => true
    	]
    );

    # Enviamos el correo.
    $PHPMailer -> send();
}
catch(Exception $error)
{
	# Si hay algun error entonces lo obtenemos y lo imprimimos.
	printf("Hubo un error al enviar el correo: %s", $PHPMailer -> ErrorInfo);
}