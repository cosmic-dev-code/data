<?php

/* ##########==========================================########## */
/* ######===--- Try Catch y lanzar excepciones throw ---===###### */
/* ##########==========================================########## */

// ------------------------------ //
// ------ Excepcion normal ------ //
// ------------------------------ //

try{

    // La palabra reservada (throw) permite lanzar excepciones.
	throw "Variable: $hola";

// Aqui se atrapa el error.
}catch(Throwable $error){
    // El error se recibe.

    printf("%s", $error);
}finally{
    // Bloque final de ejecucion.
}

// -------------------------------- //
// ------ Objeto (Exception) ------ //
// -------------------------------- //

try
{
    // Se puede crear una instancia (Exception) y lanzarla.
    throw new Exception("Mensaje");
}
catch(Exception $error){
    // El objeto lanzado posee el metodo (getMessage) que devuelve el mensaje.
    printf("%s", $error -> getMessage())
}finally{
    // ...
}

// --------------------------------- //
// ------ Crear propio tipado ------ //
// --------------------------------- //

# Nuestra clase de Expecion personalizada.
class NoDivideException extends Exception{};

try
{
    // Se lanza una excepcion de tipo (NoDivideException).
    if(10 / 2 !== 5) return new NoDivideException("Mensaje");
}
catch(NoDivideException $noDivisible){
    // Se recibe la excepcion.

    $noDivisible -> getMessage();
}

// ---------------------------------------- //
// ------ Recibir varias excepciones ------ //
// ---------------------------------------- //

try{

    /* Se envian las excepciones. */

    if(){
        throw "Mensaje";
    }

    if(){
        return new Exception("Mensaje")
    }

    if(){
        return new NoDivideException("Mensaje");
    }

/**
 * PHP permite recibir numerosas excepciones.
 */
}catch(Throwable $throw){
    // ...
}catch(Exception $exception){
    // ...
}catch(NoDivideException $noDivisible){
    // ...
}