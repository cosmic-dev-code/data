<?php

/* ##########==========================########## */
/* ######===--- ¿Qué es un observer? ---===###### */
/* ##########==========================########## */

/* Los observers se encargan de (observar) a un modelo en particular, observa cada una 
de las (etapas de vida de un modelo). */

/* ##########=======================########## */
/* ######===--- Utilizar observer ---===###### */
/* ##########=======================########## */

namespace App\Observers;
use App\Models\Usuario;

class UsuarioObserver
{
    /**
     * NOTA: Esto se mandara a llamar automaticamente.
     */

    /**
     * Metodo que se ejecuta antes de (crear) un usuario.
     * 
     *  --- $usuario = new Usuario();
     * 
     */
    public function creating(Usuario $usuario)
    {
        // Por ejemplo, si el usuario es creado desde consola.
        if(!\App::runningInConsole()){
            $usuario -> id = auth() -> user() -> id;
        }
    }

    /**
     * Metodo que se ejecuta antes de (borrar) un usuario.
     * 
     *  --- $usuario -> delete();
     * 
     */
    public function deleted(Usuario $usuario)
    {
        // Por ejemplo, deshacemos los archivos relacionados con el usuario.
        if($post -> image){
            Storage::delete($post -> image -> url);
        }
    }
}