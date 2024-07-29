### =================================== ###
###### ===--- Crear un (Mail) ---=== ######
### =================================== ###

<!-- Para crear un mail introducimos el siguiente comando. -->

```bat
	php artisan make:mail NombreMailable
```

###### --- --- --- --- --- --- {proyecto}/app/Mail/NombreMailable.php --- --- --- --- --- --- ######

```php
	namespace App\Mail;

	use Illuminate\Bus\Queueable;
	use Illuminate\Contracts\Queue\ShouldQueue;
	use Illuminate\Mail\Mailable;
	use Illuminate\Queue\SerializesModels;

	class ContactoMailable extends Mailable
	{
	    use Queueable, SerializesModels;

	    public function __construct()
	    {
	    	// ...
	    }

	    // Esta es la vista del (mail), la que se enviara.
	    public function build()
	    {
	        return $this->view('view.name');
	    }
	}
```