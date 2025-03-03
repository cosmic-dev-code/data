<?php

/* ##########====================########## */
/* ######===--- Nuevo registro ---===###### */
/* ##########====================########## */

// Importamos el modelo que queremos utilizar.
use App\Models\Usuario;

// Creamos un objeto de la clase (nombre_modelo).
$usuario = new Usuario();

// Comenzamos a definir las propiedades que lleva en nuestra tabla.
$usuario -> nombre = "Brandon";
$usuario -> apellido = "Olivares";
$usuario -> edad = 21;

// El registro se guarda en la base de datos.
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

/* ##########=========================########## */
/* ######===--- Actualizar registro ---===###### */
/* ##########=========================########## */

// Extraer registro.
$usuario = Usuario::find($mi_id);

// Cambiamos los datos de este registro.
$usuario -> nombre = "Brandon Anthony";
$usuario -> apellido = "Olivares Amador";
$usuario -> edad = 20;

// Gurdamos el registro.
$usuario -> save();

/* ##########=======================########## */
/* ######===--- Eliminar registro ---===###### */
/* ##########=======================########## */

# El registro se elimina.
$usuario -> delete();

# Trunca toda la tabla.
Curso::truncate();

# Borra todos los registros.
Curso::all() -> delete();

/* ##########=============########## */
/* ######===--- Metodos ---===###### */
/* ##########=============########## */

/**
 * Los registros que devuelve Laravel contienen metodos.
 */

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

// -------------------------- //
// ------ Conversiones ------ //
// -------------------------- //

// Convierte a un (array asosiativo).
$curso -> toArray();

// Solo convierte ciertas propiedades a un (array asosiativo).
$curso -> only(["id", "name", "description"]);

// Convierte a un objeto JSON.
$curso -> toJson();

// Convierte el array a un objeto.
$curso_object = (object) $curso -> toArray();

// Convierte el array a una coleccion.
$collection = collect( $curso -> toArray() );