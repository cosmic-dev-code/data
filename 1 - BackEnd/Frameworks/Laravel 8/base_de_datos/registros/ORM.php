<?php

/* ##########================================########## */
/* ######===--- Insertar un nuevo registro ---===###### */
/* ##########================================########## */

# Importamos el modelo que queremos utilizar.
use App\Models\Usuario;

# Creamos un objeto de la clase (nombre_modelo).
$usuario = new Usuario();

/* Comenzamos a definir las propiedades que lleva en nuestra tabla. */
$usuario -> nombre = "Brandon";
$usuario -> apellido = "Olivares";
$usuario -> edad = 21;

/* El registro no tiene ninguna otra propiedad mas que las que definimos, 
dado que no tiene un 'id' definido este objeto se insertara como 
un nuevo registro. */
$usuario -> save();

dd($usuario);
/*
  Imprimimos el objeto {
      #3440
      nombre: "Brandon",
      apellido: "Olivares",
      edad: 21,
      updated_at: "2021-08-29 01:57:39",
      created_at: "2021-08-29 01:57:39",
      id: 1
  } 
*/

/* ##########============================########## */
/* ######===--- Actualizar un registro ---===###### */
/* ##########============================########## */

/* Para actualizar el registro unicamente debemos cambiar 
el valor de la propiedad que queremos actualizar y 
volver a salvar. */

$usuario -> nombre = "Brandon Anthony";
$usuario -> apellido = "Olivares Amador";
$usuario -> edad = 20;

/* Dado que el objeto antes no tenia un 'id' y en este 
caso ahora lo tiene, el registro en lugar de 
insertarse ahora se actualizara. */
$usuario -> save();

/* ##########==========================########## */
/* ######===--- Eliminar un registro ---===###### */
/* ##########==========================########## */

# El registro se elimina.
$usuario -> delete();

# Trunca toda la tabla.
Curso::truncate();

# Borra todos los registros.
Curso::all() -> delete();

/* ##########=====================########## */
/* ######===--- Traer registros ---===###### */
/* ##########=====================########## */

// -------------------------- //
// ------ Extraer todo ------ //
// -------------------------- //

# Traer rodos los registros de la tabla.
Curso::all(); // Curso[]

// Extraer todos los registros por el 'id' de forma (descendente) o (ascendente).
Curso::orderBy('id', 'desc')->get();
Curso::orderBy('id', 'asc')->get();

// NOTA: (latest) por defecto ordena por 'created_at'.

// Extrae todos los registros y los ordena por 'id' de manera (descendente) o (ascendente).
Curso::all() -> latest('id');
Curso::all() -> oldest('id');

// NOTA: (sortBy) ordena en memoria, no en la base de datos, y no es eficiente 
// para grandes volúmenes de datos.

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

// --------------------- //
// ------ Filtros ------ //
// --------------------- //

# Solo trae 10 registros.
Curso::all() -> take(10); // Curso[]

# Solo trae los registros que tengan una (edad) de 20.
Curso::where('edad', 20) -> get(); // Curso[]

# Trae todos los registros que coincidan con la (condicion) bajo el (orden).
Curso::where('edad', 20) -> orderBy('id', 'desc') -> get(); // Curso[]

# Utilizando (LIKE) en una consulta SQL.
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

# Traemos los datos solo si el 'id' es: 
Curso::where('id', '>', 9) -> get();   // Mayor > 9.
Curso::where('id', '>=', 9) -> get();  // Mayor Igual >= 9.
Curso::where('id', '<', 9) -> get();   // Menor < 9.
Curso::where('id', '<=', 9) -> get();  // Menor Igual <= 9.
Curso::where('id', '=', 9) -> get();   // Igual == 9.
Curso::where('id', '<>', 9) -> get();  // Diferente != 9.
Curso::where('id', '!=', 9) -> get();  // Diferente != 9.

// (WHERE) y (AND), utilizando un arreglo.
Curso::where([
    ['nombre', 'like', '%Brandon%'], 
    // Comportamiento implicito (=).
    ['activo', 1], 
    ['categoria', 'Matemáticas']
]) -> get();

// -------------------- //
// ------ Select ------ //
// -------------------- //

# Trae todos los (nombres) y los (correos).
Curso::select('nombre', 'correo') -> get(); // Curso[]

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

// ------------------------ //
// ------ Inner Join ------ //
// ------------------------ //

// De (Curso) a (categorias).
// Si (cursos.categoria_id = categorias.id).
Curso::join('categorias', 'cursos.categoria_id', '=', 'categorias.id')
    // Selecciona (todo de cursos) y (nombre de categorias)
    ->select('cursos.*', 'categorias.nombre as categoria_nombre') // nombre === categoria_nombre
    ->get();

// ---------------------- //
// ------ Replicar ------ //
// ---------------------- //

// Extraer registro.
$curso = Curso::find(10); // Curso

// Replicar registro a un objeto nuevo.
$curso_clon = $curso -> replicate();

// Podemos modificarlo y guardarlo en la base de datos.
$curso_clon -> save();

// ------------------------ //
// ------ Paginacion ------ //
// ------------------------ //

/* Esto devuelve un array con todos los registros (paginados de 3 en tres). */
$cursos = Curso::where('correo', 'like', '%gmail%') -> paginate(3);

// Proporciona los links de la paginacion.
$cursos -> links();

/* ##########=========================########## */
/* ######===--- Convertir registros ---===###### */
/* ##########=========================########## */

// Convierte a un (array asosiativo).
$curso -> toArray();

// Solo convierte ciertas propiedades a un (array asosiativo).
$curso -> only(["id", "name", "description"]);

// Convierte a un objeto JSON.
$curso -> toJson();

// Convierte el array a un objeto.
$curso_object = (object) $curso -> toArray();

// Convierte el array a una coleccion.
$collection = collect(
    $curso -> toArray()
);