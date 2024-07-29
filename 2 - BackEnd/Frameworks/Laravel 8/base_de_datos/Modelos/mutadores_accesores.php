<?php 

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    /* (Mutadores): Cuando el registro sea creado, el atributo (names) convertira las letras en minusculas, 
    guardando de esa manera el registro. */

    public function setNamesAttribute($value)
    {
        $this -> attributes['names'] = strtolower($value);
    }

    /* (Accesores): Cuando el registro sea traido, el atributo (names) convertira las letras de cada palabra 
    en mayuscula, trayendo asi el registro, mas no lo guarda en la base de datos de esa manera. */

    public function getNameAttribute($value)
    {
        return ucwords($value)
    }
}

/* ##########==========================########## */
/* ######===--- La clase (Attribute) ---===###### */
/* ##########==========================########## */

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = "users";

    // Mayusculas.

    protected function name():attribute
    {
        return new Attribute(
            // Podemos definir una funcion (normal).
            set: function($value){
                return strtolower($value);
            },
            // Podemos definir una funcion (flecha).
            set: fn($value) => strtolower($value)
        );
    }

    // Minusculas.

    protected function name():attribute
    {
        return new Attribute(
            // Podemos definir una funcion (normal).
            get: function($value){
                return ucwords($value);
            },
            // Podemos definir una funcion (flecha).
            get: fn($value) => ucwords($value)
        );
    }

    // ---------------------------- //
    // ------ Implementacion ------ //
    // ---------------------------- //

    // Funciones normales.

    protected function name():attribute
    {
        return new Attribute(
            set: function($value){
                return strtolower($value);
            },
            get: function($value){
                return ucwords($value);
            }
        );
    }

    // Funciones flecha.

    protected function name():attribute
    {
        return new Attribute(
            set: fn($value) => strtolower($value),
            get: fn($value) => ucwords($value)
        );
    }
}