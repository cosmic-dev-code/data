
### ====================================== ###
###### ===--- ¿Que es un modelo? ---=== ######
### ====================================== ###

Los modelos son clases que permiten manipular los datos de las tablas en la base de datos.
Cada tabla debe tener un modelo correspondiente.

Los modelos siguen una convención: 
    --- Si una tabla se llama "cursos", el modelo debe llamarse "Curso".

### =================================== ###
###### ===--- Crear un modelo ---=== ######
### =================================== ###

Para crear un nuevo modelo deberemos ejecutar el siguiente comando: 

```bat
    php artisan make:model Tabla
```

La convencion en Laravel es: 

```sh
    # Tablas.
        usuarios
        correos
        tablas
    # Modelos
        Usuario
        Correo
        Tabla
```

###### --- --- --- --- --- --- {proyecto}/app/Models/Tabla.php --- --- --- --- --- --- ######

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    /* Este es nuestro modelo perteneciente a la tabla (tablas) de la base de datos. */
    class Tabla extends Model
    {
        use HasFactory;
    }
```

### ================================================ ###
###### ===--- Forzar modelo para una tabla ---=== ######
### ================================================ ###

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Tabla extends Model
    {
        use HasFactory;

        // Forza al modelo a apuntar a una tabla especifica.
        protected $table = "tablas";
    }
```

### ======================================================= ###
###### ===--- Relacion 1:1 (hasOne) y (belongsTo) ---=== ######
### ======================================================= ###

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        use HasFactory;

        protected $table = "users";

        /**
         * Este metodo trae el registro relacionado a este modelo (1:1).
         */
        public function profile(){

            /**
             * Forma manual de extraer la relacion.
             */
            $profile = Profile::where('user_id', $this -> id) -> first();

            /* (hasOne), ofrece traer el registro mediante la relacion (1:1): 
                    --- Ruta de la tabla relacionada a esta.
                    --- Llave foranea de esta tabla a la otra.
                    --- ID de la otra tabla al que apunta esta llave foranea.*/
            $profile = $this -> hasOne('App\Models\Profile', 'user_id', 'id');
            // shorthand.
            $profile = $this -> hasOne(App\Models\Profile::class);

            // Retorna registro relacionado.
            return $profile;
        }
    }
```

# NOTA: Por convencion el metodo a la relacion debe ser (profile) en singular.

# -------------------------------- #
# ------ Modelo relacionado ------ #
# -------------------------------- #

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Profile extends Model
    {
        use HasFactory;
        protected $table = "profiles";

        /**
         * Este metodo trae el registro relacionado a este modelo (1:1).
         */
        public function user(){

            /**
             * Forma manual de extraer la relacion.
             */
            $user = User::find($this -> user_id);

            /**
             * (belongsTo), hace lo mismo que (hasOne) pero a la inversa.
             */
            $user = $this -> belongsTo('App\Models\User', 'user_id', 'id');
            $user = $this -> belongsTo(App\Models\User::class);

            return $user
        }
    }
```

# NOTA: Por convencion el metodo a la relacion debe ser (user) en singular.

# ----------------------- #
# ------ Consultas ------ #
# ----------------------- #

```php
    /**
     * Una consulta.
     */

    $user = User::find(10);
    $profile = Profile::find(10);

    // Podemos acceder a las relaciones.
    $user -> profile -> description;
    $profile -> user -> names;

    /**
     * Varias consultas.
     */

    // Podemos extraer los registros y cada uno con su relacion.
    $users = User::with("profile") -> get();
    $profiles = Profile::with("user") -> get();
```

### ======================================================== ###
###### ===--- Relacion 1:N (hasMany) y (belongsTo) ---=== ######
### ======================================================== ###

<!-- Un usuario puede tener muchos videos. -->

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        use HasFactory;

        protected $table = "users";

        /**
         * Relacion (1:N).
         */
        public function videos(){
            // Recupera la coleccion de los 'videos' de la tabla (videos).
            // Se utiliza para obtener los datos de una relacion de (1:N).
            return $this -> hasMany('App\Models\Video');
        }
    }
```

# NOTA: Por convencion en una relacion (N), se nombra el metodo en plural, ejemplo (videos).

# -------------------------- #
# ------ A la inversa ------ #
# -------------------------- #

```php
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Video extends Model
    {
        use HasFactory;

        /**
         * Relacion (1:N) inversa.
         */
        public function user(){
            return $this -> belongsTo('App\Models\User');
        }
    }
```

# ----------------------- #
# ------ Consultas ------ #
# ----------------------- #

```php
    /**
     * Una consulta.
     */

    $user = User::find(1);
    $video = Video::find(10);

    // Podemos acceder a las relaciones.
    $user -> videos; // Video[]
    $user -> videos() -> where('created_at', '>', '2025-01-01') -> get();

    $video -> user;

    /**
     * Varias consultas.
     */

    // Podemos extraer los registros y cada uno con su relacion o relaciones.
    $users = User::with('videos') -> get();
    $videos = Video::with('user') -> get();
```

### ================================================ ###
###### ===--- Relacion N:N (belongsToMany) ---=== ######
### ================================================ ###

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        use HasFactory;

        protected $table = "users";

        /**
         * Relacion (N:N).
         */
        public function roles(){
            // Extrae todos los roles donde se encuentra el "id" de este usuario.
            return $this -> belongsToMany(App\Models\User::class);

            // Puedes (personalizar) la tabla intermedia.
            return $this -> belongsToMany(App\Models\User::class, "custom_role_user_table");
        }

    }
```

# -------------------------- #
# ------ A la inversa ------ #
# -------------------------- #

```php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Role extends Model
    {
        use HasFactory;

        /**
         * Relacion (N:N).
         */
        public function users(){
            // Extrae todos los usuarios que tengan este rol.
            return $this -> belongsToMany(App\Models\Role::class)
                        // Si la tabla intermedia tiene (timestamps).
                         -> withTimestamps();
        }
    }
```

# ----------------------- #
# ------ Consultas ------ #
# ----------------------- #

```php
    /**
     * Una consulta.
     */

    $user = User::find(1);
    $role = Role::find(2);

    // Podemos acceder a las relaciones.
    $user -> roles;
    $user -> roles() -> where('status', 'active') -> get();

    $role -> users;

    /**
     * Varias consultas.
     */

    // Podemos extraer los registros y cada uno con su relacion o relaciones.
    $users = User::with('roles') -> get();
    $roles = Role::with('users') -> get();
```

# -------------------------------- #
# ------ Metodos especiales ------ #
# -------------------------------- #

```php
    /* Las relaciones de (N:N) utilizan los metodos (attach) y (detach): 
            --- (attach): Agrega registros a la tabla intermedia.
            --- (detach): Agrega registros a la tabla intermedia.
    */

    # Relacionamos al usuario con el (primer) rol.
    $user -> roles() -> attach(1);
    # Relacionamos al usuario con el (tercer) rol. (Puede ser en forma de "array").
    $user -> roles() -> attach([3]);
    # Relacionamos al usuario con los roles (1, 5 y 9).
    $user -> roles() -> attach([1, 5, 9]);

    # Eliminamos la relacion del usuario con el (primer) rol.
    $user -> roles() -> detach(1);
    # Eliminamos la relacion del usuario con el (tercer) rol.
    $user -> roles() -> detach([3]);
    # Eliminamos la relacion del usuario con los roles (1, 5 y 9).
    $user -> roles() -> detach([1, 5, 9]);
    # Elimina todas las relaciones.
    $user -> roles() -> detach();
    # Sincroniza las relaciones, asegura que solo los elementos del array estén relacionados con el modelo.
    $user -> roles() -> sync([1]);
```