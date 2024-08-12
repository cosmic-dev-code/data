<?php

######### --- --- --- Archivo (database/migrations/2019_12_14_000001_Usuarios.php) --- --- --- ######### */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Usuarios extends Migration
{
    public function up()
  	{
        Schema::create('Usuarios', function(Blueprint $tabla){
        	/* AUTO_INCREMENT UNSIGNED. */
            $tabla -> id();
            
            /* Id autoincrementable de tipo (numero grande). */
            $tabla -> bigIncrements();
            
            /* Dato de tipo unico. */
            $tabla -> id() -> unique();
            
            /* Sin signo, grande y entero. */
            $tabla -> unsignedBigInteger("category_id");

            // Convierte un campo de la tabla en una llave primaria.
            $tabla -> primary("category_id");
            
            /* Crea un campo llamado (perfil_id) el cual es una llave foranea 
            que hace referencia al campo (id) de la tabla (perfiles). */
            $tabla -> foreign('perfil_id') -> references('id') -> on('perfiles');

            /* Indicamos que cuando este registro sea borrado, entonces su referencia 
            tambien sera borrada, recibe dos tipos de parametro.
                --- (cascade), su 'id' de referencia sera borrada.
                --- (set null), dejara como dato (null) su campo 'id' de referencia. */
            $tabla -> foreign('perfil_id') 
                -> references('id') 
                -> on('perfiles') 
                -> onDelete('cascade');
        	
            $tabla -> foreign('perfil_id') 
                -> references('id') 
                -> on('perfiles') 
                -> onDelete('cascade')
                // Permte cambiar la llave foranea si el 'id' de la referecia cambia.
                -> onUpdate('cascade');

            /* CHAR(100) */
            $tabla -> char("nombre", 100);
        	
            /* DOUBLE con una precisión (el total de dígitos) 
            y escala de dígitos decimales. */
            $tabla -> decimal("precio", 8, 2);
        	
            /* FLOAT con una precisión (el total de dígitos) 
            y escala de dígitos decimales. */
            $tabla -> float("precio", 8, 2);
        	
            /* Tipo de valor (INTEGER). */
            $tabla -> integer("edad");

            /* Tipo de valor (TINYINT). */
            $tabla -> boolean("habilitado") -> default(true);
        	
            /* VARCHAR(30). */
            $tabla -> string("apellido", 30);
        	
            /* TEXT. */
            $tabla -> text("comentario");

            $tabla -> mediumText();
        	
            /* Tipo de columna (LONGTEXT). */
            $tabla -> longText("descripcion");
        	
            /* Tipo de valor (JSON). */
            $tabla -> json("Opciones");
        	
            /*  Tipo de columna equivalente a TIME con precisión (dígitos totales). */
            $tabla -> time("tiempo", 0);

            /* Tipo de columna (DATE). */
            $tabla -> date("fecha");

            /* Tipo de columna (TIME). */
            $tabla -> time("hora");

            /* Tipo de columna (DATETIME). */
            $tabla -> datetime("fecha_y_hora");

            // Finales.

            # Inserta la columna (campo) despues de la columna (description).
            $table -> string("campo") -> after("description");

            # (first), coloca la columna al «principio» en la tabla.
            $table -> text("campo") -> first();

            # (charset), especifica un conjunto de caracteres para la columna.
            $table -> text("campo") -> charset("utf8");

            # (default), especifica un valor «predeterminado» para la columna.
            $table -> char("campo", 30) -> default("Ninguno");

            # Permite que el valor (NULL) por defecto sea insertado en la columna.
            $table -> string("campo", 50) -> nullable($valor = true);

            # Establece las columnas tipo INTEGER como UNSIGNED.
            $table -> integer("edad", 10) -> unsigned();

            # Campo para almacenar un array o un objeto JSON, crea una columna de tipo (LONGTEXT).
            $table -> json('attributes');
        });
    }

    public function down()
    {
        Schema::dropIfExists('Usuarios');
    }
}