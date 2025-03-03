<?php

/* ##########======================########## */
/* ######===--- Buscar registros ---===###### */
/* ##########======================########## */

# Verifica si existen usuarios con este filtro.
User::where('active', true) -> exists();

/* ##########=======================########## */
/* ######===--- Extraer registros ---===###### */
/* ##########=======================########## */

// ------------------ //
// ------ Todo ------ //
// ------------------ //

# Traer rodos los registros de la tabla.
Curso::all(); // Curso[]

// Selecciona todos los registros (unicos) basandose en las columnas de la tabla.
Curso::all() -> distinct() -> get(); // Curso[]

// Extraer todos los registros por el 'id' de forma (descendente) o (ascendente).
Curso::orderBy('id', 'desc') -> get(); // Curso[]
Curso::orderBy('id', 'asc') -> get();

# Solo trae 10 registros.
Curso::all() -> take(10); // Curso[]

/**
 * NOTA: (latest) por defecto ordena por "created_at".
 */

// Extrae todos los registros y los ordena por 'id' de manera (descendente) o (ascendente).
Curso::all() -> latest('id');
Curso::all() -> oldest('id');

/**
 * NOTA: (sortBy) ordena en memoria, no en la base de datos, y no es eficiente 
 * para grandes volúmenes de datos.
 */

// Extrae todos los registros y los ordena por 'id' de manera (ascendente).
Curso::all() -> sortBy('id');

// ------------------------- //
// ------ Un registro ------ //
// ------------------------- //

// Extrae el primer registro.
Curso::all() -> first(); // Curso

// Extrae el segundo registro.
Curso::all() -> latest(); // Curso

# Trae el dato donde su campo (id) sea igual a 10.
Curso::find(10); // Curso

# Maneja el error si no se encuentra el curso con id 10.
try {
    Curso::findOrFail(10);
} catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
    // ...
}

/* ##########=============########## */
/* ######===--- Filtros ---===###### */
/* ##########=============########## */

// ---------------------------------------- //
// ------ Metodo (where) y (orWhere) ------ //
// ---------------------------------------- //

# Solo trae los registros que tengan una (edad) de 20.
Curso::where('edad', 20) -> get(); // Curso[]

# Trae todos los registros que coincidan con la (condicion) bajo el (orden).
Curso::where('edad', 20) -> orderBy('id', 'desc') -> get(); // Curso[]

# Utilizar (LIKE) en la consulta.
Curso::where('nombre', 'like', '%Brandon%') -> get(); // Curso[]

# Podemos concatenar mas (WHERE) utilizando (AND).
Curso::where('nombre', 'like', '%Brandon%')
    ->where('activo', 1)
    ->where('categoria', 'Matemáticas')
    ->get();

# Podemos concatenar con un (OR).
Curso::where('nombre', 'like', '%Brandon%')
    ->orWhere('categoria', 'Matemáticas')
    ->get();

# Traemos los datos solo si el "id" es: 
$curso = Curso::where('id', '>', 9) -> get();	// --- Mayor que 9.
$curso = Curso::where('id', '>=', 9) -> get();	// --- Mayor o igual a 9.
$curso = Curso::where('id', '<', 9) -> get();	// --- Menor a 9.
$curso = Curso::where('id', '<=', 9) -> get();	// --- Menor o igual a 9.
$curso = Curso::where('id', '=', 9) -> get();	// --- igual a 9.
$curso = Curso::where('id', '<>', 9) -> get();	// --- diferente a 9.
$curso = Curso::where('id', '!=', 9) -> get();	// --- diferente a 9.

// (WHERE) y (AND), utilizando un arreglo.
Curso::where([
    ['nombre', 'like', '%Brandon%'], 
    // Comportamiento implicito (=).
    ['activo', 1], 
    ['categoria', 'Matemáticas']
]) -> get();


// ------------------------------ //
// ------ Metodo (whereIn) ------ //
// ------------------------------ //

// Extrae los registros cuyo "id" coincida con el arreglo.
Producto::whereIn('id', [131, 70, 33]) -> get();

// Se pueden pasar los valores coincidentes con el tipo de dato de la columna.
Usuario::whereIn('role', ["admin", "editor", "moderator"]) -> get();

/* ##########=================########## */
/* ######===--- Seleccionar ---===###### */
/* ##########=================########## */

// ----------------------------- //
// ------ Metodo (select) ------ //
// ----------------------------- //

/**
 * Se utiliza para realizar selecciones sencillas.
 * Se limita a solo (columnas y alias).
 */

# Trae todos los (nombres) y los (correos).
Curso::select('nombre', 'correo') -> get(); // Curso[]

// Trae todos los registros (unicos) tomando en cuenta las columnas seleccionadas.
Curso::select('columna1', 'columna2') -> distinct() -> get();

# Trae el (correo) y la (edad) solo si el (where) se cumple.
Curso::select('correo, edad') -> where('correo', 'brandon@gmail.com') -> get(); // Curso[]
Curso::select('correo, edad') -> where([
    ['correo', 'brandon@gmail.com'], 
    ['activo', 1]
]) -> get();

// Podemos traer los datos bajo un (alias).
Curso::select('name as nombre', 'correo as mail') -> get(); // Curso[]

// Selecciona el (id) solo si se cumple el (where) y trae (1).
Curso::select('id') -> where('correo', 'brandon@gmail.com') -> take(1) -> get();

// Podemos comparar de manera explicita, (=).
Curso::select(['correo', 'edad'])
    ->where([
        ['correo', '=', 'brandon@gmail.com'], 
        ['activo', '=', 1]
    ])
    ->get();

// -------------------------------- //
// ------ Metodo (selectRaw) ------ //
// -------------------------------- //

/**
 * Se utiliza para realizar selecciones mas complejas, como funciones.
 * No se limita a solo (columnas y alias).
 */

// Selecciona todo de la tabla.
User::selectRaw("*") -> first();

// Selecciona varias columnas de la tabla.
User::selectRaw("nombre, correo, edad") -> first();

// Selecciona todo mas una nueva columna adicional.
User::where('active', true) 
    -> selectRaw('*, 80 as adicional') 
    -> first();

// Podemos utilizar selecciones mas (complejas).
Curso::selectRaw('COUNT(*) as total');