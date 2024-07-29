<?php

/* ##########========================########## */
/* ######===--- ¿Que es un modelo? ---===###### */
/* ##########========================########## */

/* Los modelos son aquellas clases que nos van a permitir manipular los datos 
de nuestra tabla, cada tabla que tengamos en la base de datos debera 
tener (modelo). Los modelos pueden seguir una convencion, es decir, 
si la tabla en nuestra base de datos se llama: (cursos), entonces 
el modelo que deberemos crear para esa tabla debera llamarse 
(Curso).

/* ##########=====================########## */
/* ######===--- Crear un modelo ---===###### */
/* ##########=====================########## */

/* Imaginemos que tenemos una tabla en la base de datos llamada (usuarios), 
quiero crear un modelo para que a raiz de ese modelo yo pueda crear las 
migraciones y demas cosas para manipular los registros de mi tabla.

Para crear un nuevo modelo deberemos ejecutar el siguiente comando: 

	--- Comando -> php artisan make:model Tabla

De este modo se ha creado el modelo, sin embargo cabe recalcar que la 
convencion que (Laravel) sigue para reconocer que modelo le 
pertenece a que tabla es la de los nombres en plural y en 
singular, es decir: 
	--- Nombre de la tabla -> Nombre del modelo.

	--- usuarios -> Usuario.
	--- correos -> Correo.
	--- tablas -> Tabla.

Lo anterior visto es la convencion que sigue Laravel para saber 
que modelo le pertenece a que tabla de la base de datos. */

######### --- --- --- Archivo (app/Models/Tabla.php) --- --- --- #########

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/* Este es nuestro modelo perteneciente a la tabla (tablas) de la base de datos. */
class Tabla extends Model
{
    use HasFactory;
}

/* ##########=====================================########## */
/* ######===--- Forzar un modelo para una tabla ---===###### */
/* ##########=====================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tabla extends Model
{
    use HasFactory;

    /* Podriamos especificar cual tabla va a administrar el modelo, 
    entonces esto ignoraria la convencion de (plural y singular), 
    pero por mas facilidad es mejor utilizar la convencion. */
    protected $table = "tablas";
}

/* ##########=========================================########## */
/* ######===--- Relacion 1:1 (hasOne) y (belongsTo) ---===###### */
/* ##########=========================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    # Creamos un metodo.
    public function traer_perfil(){

    	/* Traemos el primer registro solo si su llave foranea (user_id) es 
    	igual al 'id' de nuestro objeto. */
        $profile = Perfil::where('user_id', $this -> id) -> first();

        /* (hasOne) = Relacion(1:1), otra manera de hacer lo anterior utilizando menos codigo, es 
        utilizar el metodo (hasOne), el cual recibe los siguientes parametros:

            --- La ubicacion de la clase a la cual buscara en su tabla la coincidencia de la llave foranea, 
                (si solo se le da este parametro, tendra la llave primaria como 'id' y buscara la llave 
                foranea como 'user_id').
            --- Recibe el nombre de la llave foranea en caso de no llamarse (user_id).
            --- Recibe el nombre de la llave primaria en caso de no llamarse (id).
        --------------------------------------------------------------------------------------------
        Se utiliza para obtener los datos de una relacion (1:1). */
        $profile = $this -> hasOne('App\Models\Perfil', 'user_id', 'id');

        /* Tambien podemos utilizar la clase como tal, para poder utilizar esta forma 
        es necesario tener importada la clase: 
            --- use App\Models\Perfil; */
        $profile = $this -> hasOne(Perfil::class);

        return $profile;
    }
}

# ------------------------------------------------- #
# ------ Podemos hacer lo mismo a la inversa ------ #
# ------------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;
    protected $table = "perfiles";

   	# Creamos un metodo.
    public function traer_usuario(){
        /* Traemos el primer registro que coincida de la tabla (User) solo si su 
        'id' coincide con nuestra llave foranea (user_id). */
        $user = User::find($this -> user_id);

        /* Funciona bajo los mismos principios que el metodo (hasOne), pero ahora con la 
        clase (User). */
        $user = $this -> belongsTo('App\Models\User', 'user_id', 'id');
        $user = $this -> belongsTo(User::class);

        return $this -> belongsTo('App\Models\User');
    }
}

/* ##########==========================================########## */
/* ######===--- Relacion 1:N (hasMany) y (belongsTo) ---===###### */
/* ##########==========================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    // Relacion (1:N).
    public function videos(){
        /* Recupera la coleccion de los 'videos' de la tabla (videos), recibe 
        por parametros: 
            --- Funciona bajo los mismos principios que (hasOne).
        -------------------------------------------------------------------------------------------- 
        Se utiliza para obtener los datos de una relacion de (1:N). */
        return $this -> hasMany('App\Models\Video');
    }
}

# ------------------------------------------------- #
# ------ Podemos hacer lo mismo a la inversa ------ #
# ------------------------------------------------- #

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    # Relacion (1:N) inversa.
    public function user(){
        return $this -> belongsTo('App\Models\User');
    }
}

/* ##########==================================########## */
/* ######===--- Relacion N:N (belongsToMany) ---===###### */
/* ##########==================================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    # Relacion (N:N).
    public function roles(){
        /* Extrae todos los roles donde se encuentra el 'id' de este usuario. */
        return $this -> belongsToMany('App\Models\Role');
    }

}

# ------------------------------------------- #
# ------ Hacemos lo mismo a la inversa ------ #
# ------------------------------------------- #

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    # Relacion (N:N).
    public function users(){
        /* Extrae todos los usuarios que tengan este rol. */
        return $this -> belongsToMany('App\Models\User');
    }
}

# -------------------------------------------- #
# ------ Metodos para la relacion (N:N) ------ #
# -------------------------------------------- #

    use App\Models\User;
    
    /* Cuando se trata de relaciones de (N:N) se utilizan los metodos 
    (attach) y (detach) para agregar o quitar registros de la tabla 
    intermedia la cual hace posible la relacion (N:N). */

    # Relacionamos al usuario con el primer rol.
    $user -> roles() -> attach(1);
    # Relacionamos al usuario con el tercer rol. (Puede ser en forma de 'array').
    $user -> roles() -> attach([3]);
    /* Relacionamos al usuario con los roles (1, 5 y 9).  */
    $user -> roles() -> attach([1, 5, 9]);

    # Eliminamos la relacion del usuario con el primer rol.
    $user -> roles() -> detach(1);
    # Eliminamos la relacion del usuario con el tercer rol.
    $user -> roles() -> detach([3]);
    /* Eliminamos la relacion del usuario con los roles (1, 5 y 9). */
    $user -> roles() -> detach([1, 5, 9]);
    # (Attach) crea un nuevo registro.
    $user -> roles() -> sync([1]);