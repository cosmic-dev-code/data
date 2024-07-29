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

/* El registro no tiene ninguna otra propiedad mas que las que definimos, dado que no tiene un 'id' 
definido este objeto se insertara como un nuevo registro. */
$usuario -> save();

dd($usuario);
/* Imprimimos el objeto {
  #3440
  nombre: "Brandon",
  apellido: "Olivares",
  edad: 21,
  updated_at: "2021-08-29 01:57:39",
  created_at: "2021-08-29 01:57:39",
  id: 1,
} */

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

/* ##########=====================########## */
/* ######===--- Traer registros ---===###### */
/* ##########=====================########## */

# Acemos uso de la tabla (Curso).
use App\Models\Curso;

# Trunca la tabla.
Curso::truncate();

# Borra todos los registros.
Curso::all() -> delete();

# Traer rodos los registros de la tabla.
$cursos = Curso::all(); // Curso[]

/* Ordena los registros en este caso por el 'id' de forma (ascendente). */
// Curso[]
$cursos = Curso::all() -> latest('id');
$cursos = Curso::all() -> sortBy('id');
$cursos = Curso::orderBy("id", "asc") -> get();

/* Ordena los registros en este caso por el 'id' de forma (descendente). */
// Curso[]
$cursos = Curso::all() -> oldest('id');
$cursos = Curso::all() -> sortByDesc('id');
$cursos = Curso::orderBy("id", "desc") -> get();

# De todos los registros solo trae el primer registro.
$primer_curso = Curso::all() -> first(); // Curso

# De todos los registros solo trae el ultimo registro.
$ultimo_curso = Curso::all() -> latest(); // Curso

# Trae el primer registro que coincida con la condicion.
$cursos_edad = Curso::where('edad', 20) -> first(); // Curso

# Trae el ultimo registro que coincida con la condicion.
$cursos_edad = Curso::where('edad', 20) -> latest(); // Curso

# Solo trae 10 registros.
$cursos = Curso::all() -> take(10); // Curso[]

# Solo trae los registros que tengan una (edad) de 20.
$cursos_edad = Curso::where('edad', 20) -> get(); // Curso[]

# Trae todos los registros que coincidan con la condicion ordenados ascendentemente por su 'id'.
$cursos = Curso::where('edad', 20) -> orderBy('id', 'desc') -> get(); // Curso[]

# Trae los registros que contengan en su campo (nombre) la palabra (Brandon).
$curso = Curso::where('nombre', 'like', '%Brandon%') -> get(); // Curso[]

/* Traemos los datos solo si el 'id' es: 
    --- Mayor que 9.
    --- Mayor o igual a 9.
    --- Menor a 9.
    --- Menor o igual a 9.
    --- igual a 9.
    --- diferente a 9.
    --- diferente a 9. */
// Curso[]
$curso = Curso::where('id', '>', 9) -> get();
$curso = Curso::where('id', '>=', 9) -> get();
$curso = Curso::where('id', '<', 9) -> get();
$curso = Curso::where('id', '<=', 9) -> get();
$curso = Curso::where('id', '=', 9) -> get();
$curso = Curso::where('id', '<>', 9) -> get();
$curso = Curso::where('id', '!=', 9) -> get();

/* Trae todos los 'nombres' y los 'correos'. */
$curso = Curso::select('nombre', 'correo') -> get(); // Curso[]

/* Trae el correo y la edad solo si el correo es correspondiente a (brandon@gmail.com). */
$curso = Curso::select('correo, edad') -> where('correo', 'brandon@gmail.com') -> get(); // Curso[]

/* Podemos traer los datos bajo un 'alias'. */
$curso = Curso::select('nombre as nombre', 'correo as mail') -> get(); // Curso[]

/* Trae el dato donde su campo (id) sea igual a 10. */
$curso = Curso::find(10); // Curso[]

$id = Curso::select('id') -> where('correo', 'brandon@gmail.com') -> take(1) -> get();
$curso = Curso::find($id); // Curso[]

/* Trae el dato donde su campo (id) sea igual a 10, pero en caso de que no 
se encuentre el 'id', entonces da un error (404). */
$curso = Curso::findOrFail(10); // Curso

/* Esto devuelve un array con todos los registros 'paginados de 3 en tres', 
por lo que no se mostraran todos en la vista. (Aqui ya no es necesario 
utilizar el metodo 'get'). */
$cursos = Curso::where('correo', 'like', '%gmail%') -> paginate(3);
// Proporciona los links de la paginacion.
$cursos -> links();

/* Podemos replicar un registro haciendo uso del metodo (replicate). */
$curso = Curso::find(10); // Curso
$curso_clon = $curso -> replicate();
$curso_clon -> save();

/* ##########=========================########## */
/* ######===--- Convertir registros ---===###### */
/* ##########=========================########## */

// Convierte todas las propiedades del objeto en un (array asosiativo).
$curso -> toArray();

// Convierte todas propiedades especificas del objeto en un (array asosiativo).
$curso -> only(["id", "name", "description"]);

// Convierte el array a un objeto.
$curso_object = (object) $curso -> toArray();

// Convierte el array a una coleccion.
$collection = collect($curso -> toArray());