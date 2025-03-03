<?php

/* ##########==================########## */
/* ######===--- QueryBuilder ---===###### */
/* ##########==================########## */

/**
 * (QueryBuilder), se utiliza para construir consultas y despues ejecutarlas.
 * Todas las consutas de laravel son este tipo de dato.
 */

$query = User::where('active', true);   // QueryBuilder<User[]>

// Si hay registros.
if($query -> exists())
{
    // Ahora si se ejecuta el (query).
    $user = $query -> first();          // User
}

// ------------------------- //
// ------ Condiciones ------ //
// ------------------------- //

/**
 * Bajo ciertas condiciones, vamos construyendo el (query).
 */

$query = User::where('active', true);

// Primera condicion.
if (...) {
    $query -> where('id', 20);
    $query -> where('names', 'Brandon');
}

// Segunda condicion.
if (...) {
    $query -> where('admin', true)
           -> where('account_id', 90);
}

// Ahora ejecutamos.
$users = $query -> get();       // User[]