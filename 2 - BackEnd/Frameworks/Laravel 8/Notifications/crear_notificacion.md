### ======================================== ###
###### ===--- Crear (notificacion) ---=== ######
### ======================================== ###

<!-- Para crear una (notificacion) debemos ejecutar el siguiente comando:  -->

```bat
	php artisan make:notification NombreNotification
```

###### --- --- --- --- --- --- {proyecto}/app/Notifications/NombreNotification.php --- --- --- --- --- --- ######

```php
	namespace App\Notifications;

	use Illuminate\Bus\Queueable;
	use Illuminate\Contracts\Queue\ShouldQueue;
	use Illuminate\Notifications\Messages\MailMessage;
	use Illuminate\Notifications\Notification;

	class BuyNotification extends Notification
	{
	    use Queueable;

	    /**
	     * Cuando se crea una nueva instancia de la notificacion.
	     * Aqui es donde se reciben datos para pasar a la 
	     * notificacion.
	     *
	     * @return void
	     */
	    public function __construct()
	    {
	        //
	    }

	    /**
	     * Tipo de canal por el cual se enviara la notificacion.
	     *
	     * @param  mixed  $notifiable
	     * @return array
	     */
	    public function via($notifiable)
	    {
	        return ['mail'];
	    }

	    /**
	     * Aqui se ejecutan los metodos necesarios para modificar la plantilla y 
	     * contenido de la notificacion.
	     *
	     * @param  mixed  $notifiable
	     * @return \Illuminate\Notifications\Messages\MailMessage
	     */
	    public function toMail($notifiable)
	    {
	        return (new MailMessage)
	                    ->line('The introduction to the notification.')
	                    ->action('Notification Action', url('/'))
	                    ->line('Thank you for using our application!');
	    }

	    /**
	     * Pasamos los datos que queramos guardar en la notificacion para posteriormente utilizarlos.
	     *
	     * @param  mixed  $notifiable
	     * @return array
	     */
	    public function toArray($notifiable)
	    {
	        return [
	            //
	        ];
	    }
	}
```