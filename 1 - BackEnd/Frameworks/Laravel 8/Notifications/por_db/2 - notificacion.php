<?php

/* ##########================================########## */
/* ######===--- Clase de la (notificacion) ---===###### */
/* ##########================================########## */

######### --- --- --- Archivo (app/Notifications/PostNotification.php) --- --- --- #########

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

// Mandamos a llamar el modelo (Post).
use App\Models\Post;

class PostNotification extends Notification
{
    use Queueable;

    # Recibimos los datos para la notificacion.
    public function __construct(Post $post)
    {
    	$this->post = $post;
    }

    # La via es (database).
    public function via($notifiable)
    {
        return ['database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage) -> line("");
    }

    # Estos son los datos que se van a guardar en el campo (data) de la tabla (notifications).
    public function toArray($notifiable)
    {
    	// Estos son los datos que se van a guardar.
        return [
        	"post_id" => $this->post -> id, 
        	"title" => $this->post -> title, 
        	"description" => "El usuario {$this->post->user()->names} publico algo"
        ];
    }
}

/* ##########=========================########## */
/* ######===--- Enviar notificacion ---===###### */
/* ##########=========================########## */

######### --- --- --- Archivo (app/Http/Controllers/PostController.php) --- --- --- #########

namespace App\Http\Controllers;
use Illuminate\Http\Request;

// Importamos nuestra propia clase.
use App\Notifications\PostNotification;

use App\Models\User;
use App\Models\Post;

class PostController extends Controller
{
	public function store(Request $request)
	{
		$post = Post::create($request -> all());
		$user = auth()->user();

		/* Coloca los datos del objeto que creo la notificacion: 
			--- notifiable_type => App\Models\User.
			--- notifiable_id => El 'id' del usuario. */
		$user -> notify(
			new PostNotification($post) // Mandamos parametros en caso de tenerlos.
		);

		/* Podriamos mandale notificaciones a todos los demas usuarios exceptuando 
		al usuario actual. */
		User::all() 
			-> except($post -> user_id) 
			-> each(function(User $user) use ($post){
				$user -> notify(new PostNotification($post));
			});

		// Trae todas las notificaciones del usuario, (por la relacion polimorfica por defecto).
		$user -> notifications();

		// Puede borrar todas las notificaciones relacionadas con el usuario.
		$user -> notifications() -> delete();

		// Por medio de la asignacion masiva, marca todas las notificaciones como leidas por la relacion.
		$user -> unreadNotifications() -> update([
			'read_at' => now()
		]);

		// Podemos recorrer las notficaciones.
		foreach($user->unreadNotifications as $notification){
			// ...
		}

		// Marca una notificacion como leida.
		$user->unreadNotifications[0] -> markAsRead();
	}
}