<?php

/* ##########=========================########## */
/* ######===--- Modificar plantilla ---===###### */
/* ##########=========================########## */

######### --- --- --- Archivo (app/Notifications/UserNotification.php) --- --- --- #########

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserNotification extends Notification
{
    use Queueable;

    # Recibimos los datos para nuestra notificacion.
    public function __construct($user, string $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    # La via es (mail).
    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        /**
         * Metodos para modificar la plantilla por defecto.
         */
        return (new MailMessage)

			// Quien lo envia.
			-> from("brandon@gmail.com", "Brandon Anthony")

			// Asunto.
			-> subject("Tienes una nueva publicacion") 

			// Saludo inicial.
			-> greeting("Hola amigo!") 

			// Proporciona un hipervinculo en forma de boton con un enlace.
			-> action('Notification Action', url('/')) 
			
			// Cambia la apariencia del boton del correo.
			-> success() 
			-> error()

			// Agrega una nueva linea al correo.
			-> line("Nueva linea") 

			// Agrega varias lineas al mismo tiempo.
			-> lines([
				"Linea #0", 
				"Linea #1", 
				"Linea #2"
			]) 

			// Saludo final.
			-> salutation("Queremos decirte que tienes un nuevo mensaje") 

			// Nombre del correo.
			-> mailer("Nueva publicacion");

        /**
         * Podemos utilizar las propiedades de esta clase, (las que se recibieron por parametro).
         */
        return (new MailMessage) 
            -> line(
                "{$this->user->names} modificaste tu password a: {$this->password}"
            );
    }

    public function toArray($notifiable)
    {
        return [];
    }
}

/* ##########=========================########## */
/* ######===--- Enviar notificacion ---===###### */
/* ##########=========================########## */

// Imporamos la clase (Notification).
use Illuminate\Support\Facades\Notification;

// Importamos nuestra propia clase.
use App\Notifications\UserNotification;

$user = \App\Models\User::find(10);

// ------------------------------------- //
// ------ La clase (Notificacion) ------ //
// ------------------------------------- //

// Varios usuarios pueden enviar una notificacion.
Notification::send(
	// Enviar datos al constructor, (si los tiene).
	$users, new UserNotification("123")
);

// ------------------------------ //
// ------ Por un (usuario) ------ //
// ------------------------------ //

/**
 * NOTA: Aqui el campo debe llamarse (email), por convencion de la tabla, ya que la 
 * notificacion toma ese campo de la tabla.
 * 
 * Toma el campo (email) y le manda la notificacion a ese (email) que tomo, el correo 
 * que envia la notificacion es el configurado en el archivo (env). */
$user -> notify(
	// Enviar datos al constructor, (si los tiene).
	new UserNotification($user, "123")
);