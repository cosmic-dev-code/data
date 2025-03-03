
### ============================================== ###
###### ===--- Relacion 1:1 (Polimorfica) ---=== ######
### ============================================== ###

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Image extends Model
    {
        protected $guarded = [];
        use HasFactory;

        /**
         * Relacion polimorfica: La imagen puede pertenecer a varios modelos (User, Post, etc.)
         */
        public function imageable(){
            // Relación polimórfica, (depende de otros modelos).
            return $this -> morphTo();
        }
    }
```

# --------------------------------------- #
# ------ A la inversa desde (User) ------ #
# --------------------------------------- #

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        use HasFactory;

        protected $table = "users";

        /**
         * Relacion (1:1) polimorfica.
         * Un usuario puede tener una imagen asociada.
         */
        public function image(){
            // Relación polimórfica (uno a uno).
            return $this -> morphOne('App\Models\Image', 'imageable');
        }

    }
```

# --------------------------------------- #
# ------ A la inversa desde (Post) ------ #
# --------------------------------------- #

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Post extends Model
    {
        use HasFactory;

        /**
         * Relacion (1:1) polimorfica.
         * Un post puede tener una imagen asociada.
         */
        public function image(){
            // Relación polimórfica (uno a uno).
            return $this -> morphOne('App\Models\Image', 'imageable');
        }
    }
```

# ----------------------- #
# ------ Consultas ------ #
# ----------------------- #

```php

    /**
     * Relacionar.
     */

    // Crear una imagen asociada a un usuario.
    $image = Image::create([
        'url' => 'https://example.com/image.jpg',
        'imageable_id' => 1,                        // ID del usuario
        'imageable_type' => 'App\Models\User',      // Tipo de modelo
    ]);

    // Crear una imagen asociada a un post.
    $image = Image::create([
        'url' => 'https://example.com/image.jpg',
        'imageable_id' => 1,                        // ID del post
        'imageable_type' => 'App\Models\Post',      // Tipo de modelo
    ]);

    // Alternativamente, si ya tienes una instancia de usuario o post, puedes usar el método polimórfico directamente:
    $user->image()->create(['url' => 'https://example.com/image.jpg']);
    $post->image()->create(['url' => 'https://example.com/image.jpg']);

    /**
     * Consultas.
     */

    $post = Post::find(1);
    $user = User::find(1);

    // Obtiene la imagen asociada.
    $user -> image;
    $post -> image;

    // Traer registros con la relacion en cada registro.
    User::with('image') -> get();
    Post::with('image') -> get();
```

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