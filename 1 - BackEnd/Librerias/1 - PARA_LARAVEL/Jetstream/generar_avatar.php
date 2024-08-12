<?php

/* ##########==================================########## */
/* ######===--- Crear metodos en el (modelo) ---===###### */
/* ##########==================================########## */

######### --- --- --- Archivo (app/Models/User.php) --- --- --- #########

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Profile;
use App\Models\Post;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'profile_photo_url',
    ];

    # Con esto generamos un avatar automaticamente.
    public function getAvatarAttribute(){
        $email = md5($this -> email);
        return ("https://s.gravatar.com/avatar/$email");
    }

    # Con este metodo solo retornamos el extracto de la descripcion.
    public function getExtractAttribute(){
        $extract = substr($this -> descripcion_personal, 0, 30);
        
        return ($extract . "...");
    }

    # En este campo devolvemos el nombre completo.
    public function getNombre_completoAttribute(){
        return (
            $this -> nombre." ".$this -> apellido
        );
    }

    public function similar(){
        /* Trae todos los usuarios donde el campo (post_id) coincida 
        con el (post_id). */
        return $this -> where('post_id', $this -> post_id) 
            -> with('user') 
            -> take(3) 
            -> get();
    }
}

/* ##########=============================================########## */
/* ######===--- Extrar todos los registros del (modelo) ---===###### */
/* ##########=============================================########## */

######### --- --- --- Archivo (app/Http/Livewire/UserComponent.php) --- --- --- #########

namespace App\Http\Livewire;
use Livewire\Component;

// Hacemos uso del modelo (User).
use App\Models\User;

class UserComponent extends Component
{
    public function render()
    {
        # Extraemos a todos los usuarios y los mandamos a la vista bajo el nombre de la variable (usuarios).
        return view('livewire.user-component') -> with('usuarios', Usuario::all());
    }   
}

/* ##########=================================================########## */
/* ######===--- Utilizar los metodos creados en el (modelo) ---===###### */
/* ##########=================================================########## */

######### --- --- --- Archivo (resources/views/livewire/user-component.php) --- --- --- ######### ?>

<section class="my-3 p-3 bg-white">
    <div class="mb-2">
        @foreach($usuarios as $usuario)
            <!-- Accedemos a la propiedad (avatar) que definimos en el modelo (User). -->
            <img src="{{ $usuario -> avatar }}" class="h-10 w-10 rounded-full m-6">
        @endforeach
    </div>
    <section class="p-2 w-1/2 mx-auto rounded-lg shadow-md">
        @foreach($usuarios as $usuario)
            <div>
                <h2 class="text-lg mb-2">Usuario: {{ $usuario -> nombre }}</h2>
                <span class="block my-1">Correo: {!! $usuario -> correo !!}</span>
                <!-- Mandamos a llamar a los otros dos metodos. -->
                <span class="block my-1">Extracto: <?= $usuario -> extract ?></span>
                <span class="block my-1">Nombre completo: <?php $usuario -> nombre_completo ?></span>
            </div>
        @endforeach
    </section>
</section>