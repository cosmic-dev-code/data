
### ============================== ###
###### ===--- Inner Join ---=== ######
### ============================== ###

```php
    /**
     * De (Curso) a (categorias).
     *      --- "cursos.categoria_id = categorias.id".
     */
    Curso::join('categorias', 'cursos.categoria_id', '=', 'categorias.id')
        // Selecciona (todo de cursos) y (nombre de categorias)
        ->select('cursos.*', 'categorias.nombre as categoria_nombre') 
        // Obtener los registros.
        ->get();
```

### ============================ ###
###### ===--- Callback ---=== ######
### ============================ ###

# ----------------- #
# ------ SQL ------ #
# ----------------- #

```sql
    # Selecciona todo de (patients) y le suma (groups).
    SELECT DISTINCT * FROM `patients` JOIN `groups` 

    # Compara la llave foranea de (patients) con el (id) 1.
    ON `patients`.`group_id` = `groups`.`id`

    # Solo el primer grupo y pacientes activos.
    WHERE `groups`.`id` = 1 AND `patients`.`active` = true;
```

# ------------------------ #
# ------ InnerJoins ------ #
# ------------------------ #

```php
    $group_id = 1;

    /**
     * Consulta utilizando un callback para hacer un join con la tabla "groups".
     */
    $patients = Patient::where(function ($query) use ($group_id) {

        // Hacemos un join entre 'patients' y 'groups'
        $query -> join('groups', 'patients.group_id', '=', 'groups.id') 
            
            // Filtramos por el grupo específico
            -> where('groups.id', $group_id) 

            // Filtramos por pacientes activos
            -> where('patients.active', true);
    });

    $patients 
        -> distinct() 
        // Ejecuta la consulta y obtiene los resultados.
        -> get();
```

### =============================== ###
###### ===--- Condiciones ---=== ######
### =============================== ###

# ------------------------------- #
# ------ Metodo (whereHas) ------ #
# ------------------------------- #

```sql
    # Traer comentarios relacionados al Post.
    SELECT DISTINCT * FROM `posts` JOIN `comments` 
    ON `comments`.`post_id` = `posts`.`id`

    # Solo comentarios con mas de (10 palabras).
    WHERE (
        LENGTH(`comments`.`comment`) - 
        # Excluyendo los espacios para validar solo palabras.
        LENGTH(REPLACE(`comments`.`comment`, ' ', '')) + 1
    ) > 10;
```

```php
    /**
     * (whereHas), permite incluir condiciones dentro de una relacion utilizando los atributos.
     */
    $posts = Post::whereHas('comments', function($query){
        // La condicion va aqui.
        $query->whereRaw('LENGTH(comment) - LENGTH(REPLACE(comment, " ", "")) + 1 > 10');
    });

    // Obtener los registros que cumplan con la condicion.
    $posts -> get();
```

# --------------------------------- #
# ------ Metodo (orWhereHas) ------ #
# --------------------------------- #

```sql
    SELECT DISTINCT `posts`.*
    FROM `posts`
    JOIN `comments` ON `comments`.`post_id` = `posts`.`id`
    WHERE `comments`.`is_approved` = true

       OR `comments`.`is_spam` = true;
```

```php
    // Primera condicion de la relacion.
    $posts = Post::whereHas('comments', function($query) {
        $query -> where('is_approved', true);
    });

    // Si la primera condicion no se cumple, filtra por esta.
    $posts -> orWhereHas('comments', function($query) {
        $query -> where('is_spam', true);
    });

    $posts -> get(); // Post[]
```