<?php

/* ##########============================########## */
/* ######===--- Utilizar un middleware ---===###### */
/* ##########============================########## */

######### --- --- --- Archivo (app/Http/Middleware/VerificarEdad.php) --- --- --- #########

/* Ahora modificamos nuestro archivo (middleware). */

namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;

class VerificarEdad
{
    public function handle(Request $request, Closure $next)
    {
        // Validamos, si el dato de la peticion cumple con las condiciones.

        if($request -> edad >= 18){
            // Continua la peticion a la ruta de destino.
            return $next($request);
        }else{
            // Redirecciona a otra ruta.
            return redirect('no-autorize');
        }

        /**
         * NOTA: Siempre debes devolver una reedireccion o $next() o redirect().
         */
    }
}

# acceder?edad=15 === "No es mayor de edad."
# acceder?edad=18 === "Eres mayor de edad".

######### --- --- --- Archivo (routes/web.php) --- --- --- #########

# Dado que los (middleware) trabajan con peticiones (http) debemos crear una nueva ruta y acceder a ella.
# Creamos una ruta la cual utiliza el (middleware) que acabamos de crear por medio del metodo (middleware).

Route::get('acceder', function(){

	return "Eres mayor de edad.";

}) -> middleware('edad');


Route::get('acceder', function(){

    // ...

# Utiliza mas de un (middleware).
}) -> middleware(['uno', 'dos', 'tres']);


/* Creamos una ruta para cuando falle la verificacion. */
Route::get('no-autorize', function(){
    return 'No es mayor de edad.';
});

/* ##########==============================########## */
/* ######===--- Base de datos y comparar ---===###### */
/* ##########==============================########## */

######### --- --- --- Archivo (app/Http/Middleware/VerificarEdad.php) --- --- --- #########

namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;

class VerificarEdad
{
    public function handle(Request $request, Closure $next)
    {
        if(auth() -> user()){
            if(auth() -> user() -> email === "brandonanthonyolivaresamador@gmail.com"){
                return $next($request);
            }
        }

        return redirect('no-autorize');
    }
}