### ==================================== ###
###### ===--- Clase del (mail) ---=== ######
### ==================================== ###

# Una vez hecho lo anterior, debemos crear una nueva clase (mail) para poder enviar nuestros correos.

###### --- --- --- --- --- --- {proyecto}/app/Mail/ContactoMailable.php --- --- --- --- --- --- ######

```php
    namespace App\Mail;

    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class ContactoMailable extends Mailable
    {
        use Queueable, SerializesModels;

        // Propiedad que almacenara los datos del mail a enviar.
        public $arrContacto;

        // Recibimos los datos para el mail.
        public function __construct($contacto = array())
        {
            $this -> arrContacto = $contacto;
        }

        // Vista del mail la cual tendra acceso a los datos.
        public function build()
        {
            return $this->view('mails.contacto');
        }
    }
```

###### --- --- --- --- --- --- {proyecto}/resources/views/mails/contacto.php --- --- --- --- --- --- ######

<!-- Aqui tenemos la vista que retorna el metodo (build) de la clase (ContactoMailable). -->

```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta charset="utf-8">
            <!-- Titulo de la pagina del correo. -->
            <title>Contacto</title>
        </head>
        <body>
            <!-- Podemos colocar la informacion. -->
            <h1>Correo</h1>
            <p>Bienvenido usuario a nuestro sitio web, estamos muy contentos de ello.</p>
            
            <!-- Recordemos que enviamos una propiedad llamada (arrContacto) el cual tiene 
            los datos que se enviaron por medio del formulario, es un 'array'. -->
            <p>
                <strong>Nombre: </strong><?php echo $contacto['nombre']; ?>
            </p>
            <p>
                <strong>Correo: </strong><?= $contacto['correo'] ?>
            </p>
            <p>
                <strong>Mensaje: </strong>{{$contacto['mensaje']}}
            </p>
        </body>
    </html>
```

### ==================================== ###
###### ===--- Mandar un (mail) ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/app/Http/Controllers/ContactoController.php --- --- --- --- --- --- #####

```php
    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    /**
     * Importamos las clases que necesitamos.
     */
    use App\Mail\ContactoMailable;
    use Illuminate\Support\Facades\Mail;

    class ContactoController extends Controller
    {
        public function show()
        {
            return view('contacto.contactar');
        }

        public function store(Request $request){
            $request -> validate([
                "nombre" => "required",
                "correo" => "required|email",
                "mensaje" => "required"
            ]);

            /* Instanciamos un nuevo mail de la clase que creamos y pasamos los datos que 
            requiere el constructor. */
            $mail = new ContactoMailable($request -> all());

            // Enviamos el correo a por ejemplo: ("brandon@gmail.com").
            Mail::to('brandon@gmail.com') -> send($mail);

            return back() -> with('send_message', 'Correo enviado.');
        }
    }
```