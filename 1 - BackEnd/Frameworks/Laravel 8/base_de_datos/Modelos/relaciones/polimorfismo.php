<?php

/* ##########================================########## */
/* ######===--- Relacion 1:1 (Polimorfica) ---===###### */
/* ##########================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/* Este es el modelo que tiene una (polimorfica). */

class Image extends Model
{
    protected $guarded = [];
    use HasFactory;

    # Creamos un metodo dentro del modelo de la tabla (polimorfica).
    public function imageable(){
        /* Devolvemos el metodo polimorfico, (la relacion depende de 
        los otros modelos). */
        return $this -> morphTo();
    }
}

# --------------------------------------------------------------- #
# ------ Relacion (1:1) polimorfica desde el modelo (User) ------ #
# --------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    # Relacion (1:1) polimorfica.
    public function image(){
        /* Debemos especificar no solo elmodelo al cual queremos enlazar la 
        la relacion (polimorfica), sino tambien el metodo dentro dentro 
        de ese modelo que hara el enlace polimorfico, en este caso 
        de eso se encarga el metodo (imageable) en el modelo 
        (Image). */
        return $this -> morphOne('App\Models\Image', 'imageable');
    }

}

# --------------------------------------------------------------- #
# ------ Relacion (1:1) polimorfica desde el modelo (Post) ------ #
# --------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/* Esta es nuestro otro modelo que enlaza su tabla a la tabla 
del modelo (polimorfico Image). */

class Post extends Model
{
    use HasFactory;

    // Relacion (1:1) polimorfica.
    public function image(){
        /* Hacemos el enlace polimorfico especificando por sus dos parametros 
        la ruta del modelo con la tabla (polimorfica) y el metodo 
        perteneciente a ese modelo encargado de hacer 
        la conexion polimorfica. */
        return $this -> morphOne('App\Models\Image', 'imageable');
    }
}

# ---------------------------------- #
# ------ Utilizar los metodos ------ #
# ---------------------------------- #

    /* Los metodos pueden ser utilizados de la siguiente manera. */

    use App\Models\Image;

    Image::create([
        'url' => 'Url 1',
        'imageable_id' => 1,
        'imageable_type' => 'App\Models\User'
    ]);

    $user -> image() -> create(['url' => 'Url 1']);

/* ##########================================########## */
/* ######===--- Relacion 1:N (Polimorfica) ---===###### */
/* ##########================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    /* Imaginemos que queremos relacionar esta tabla de comentarios con una relacion de (1:N) 
    ya que queremos que un usuario pueda realizar varias comentarios y varios comentarios 
    le pertenezcan a un usuario.

    Ademas esta tabla podra adquirir los valores ya sea de la tabla (Post) y (Video), 
    esto porque la relacion que tendra esta tabla con las otras, sera una relacion 
    de (1:N) polimorfica. */

    # Relacion (1:N) inversa.
    public function user(){
        $this -> belongsTo('App\Models\User');
    }

    # Metodo que nos va a permitir el polimorfismo.
    public function commentable(){
        return $this -> morphTo();
    }
}

# --------------------------------------------------- #
# ------ Relacion (1:N) desde el modelo (User) ------ #
# --------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    # Relacion (1:N).
    public function comments(){
        $this -> hasMany('App\Models\Comment');
    }

}

# --------------------------------------------------------------- #
# ------ Relacion (1:N) polimorfica desde el modelo (Post) ------ #
# --------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // Relacion (1:N) polimorfica.
    public function comments(){
        /* Recupera todos los datos relacionados con este (Post) de la tabla (comments). */
        return $this -> morphMany('App\Models\Comment', 'commentable');
    }

}

# ---------------------------------------------------------------- #
# ------ Relacion (1:N) polimorfica desde el modelo (Video) ------ #
# ---------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    // Relacion (1:N) polimorfica.
    public function comments(){
        /* Funciona bajo los mismos principios que el modelo (Post) en cuanto a su metodo (comments). */
        return $this -> morphMany('App\Models\Comment', 'commentable');
    }
}

/* ##########================================########## */
/* ######===--- Relacion N:N (Polimorfica) ---===###### */
/* ##########================================########## */

# --------------------------------------------------------------- #
# ------ Relacion (N:N) polimorfica desde el modelo (Post) ------ #
# --------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    # Relacion (N:N) polimorfica.
    public function posts(){
        /* Indicamos que queremos extraer los (tags) de la tabla (tags), por lo que el 
        metodo (morphToMany) recibe los dos siguientes parametros: 
            --- El modelo el cual hace referencia a la tabla (tags).
            --- En el segundo parametro colocamos en singular el nombre de la tabla 
            (polimorfica), en este caso (taggable) ya que Eloquent, encontrara 
            la referencia a la tabla (taggables). */
        return $this -> morphToMany('App\Models\Tag', 'taggable');
    }

}

# ---------------------------------------------------------------- #
# ------ Relacion (N:N) polimorfica desde el modelo (Video) ------ #
# ---------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    # Relacion (N:N) polimorfica.
    public function posts(){
        /* Es exactamente igual que el modelo (POST). */
        return $this -> morphToMany('App\Models\Tag', 'taggable');
    }
}

# ---------------------------------------------------------------- #
# ------ Relacion (N:N) polimorfica desde el modelo (Video) ------ #
# ---------------------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    // Relacion (N:N) polimorfica inversa.

    /* Indicamos que queremos extraer los (videos) de la tabla (videos), y los (posts) de 
    la tabla (posts) por lo que el metodo (morphedByMany) recibe los dos siguientes parametros: 
        --- El modelo el cual hace referencia a la tabla (posts o videos).
        --- En el segundo parametro colocamos en singular el nombre de la tabla 
        (polimorfica), en este caso (taggable) ya que Eloquent, encontrara 
        la referencia a la tabla (taggables). */

    public function videos(){
        return $this -> morphedByMany('App\Models\Video', 'taggable');
    }

    public function posts(){
        return $this -> morphedByMany('App\Models\Post', 'taggable');
    }
}