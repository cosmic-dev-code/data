<?php

######### --- --- --- Archivo (database/factories/CursoFactory.php) --- --- --- #########

namespace Database\Factories;
use App\Models\Curso;
use Illuminate\Database\Eloquent\Factories\Factory;

class CursoFactory extends Factory
{
    protected $model = Curso::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            # Crea un número entero entre 18 y 65.
            "numero" => $this -> faker -> numberBetween(18, 65), 
            # Crea un nombre por defecto.
            "nombre" => $this -> faker -> name(),
            # Crea un correo electronico unico para cada registro.
            "mail" => $this -> faker -> unique() -> safeEmail(), 
            # Genera una oracion un poco larga.
            "oracion" => $this -> faker -> sentence(),
            # Genera un texto un poco largo.
            "texto" => $this -> faker -> text(),
            # Genera un numero de telefono.
            "numero_de_telefono" => $this -> faker -> cellphone(),
            # Genera un numero aleatorio flotante.
            "edad" => $this -> faker -> randomElement(array(19, 20, 21, 22, 23,24)),
            # Alterna los datos en cada registro.
            "precio" => $this -> faker -> randomFloat(1, 2, 100), 
            /* El metodo (date) crea una fecha al azar y recibe por parametro: 
                --- "d", dia.
                --- "m", mes.
                --- "Y", year.*/
            "descripcion" => $this -> faker -> paragraph(),
            /* El metodo (time) crea una hora al azar y recibe por parametro: 
                --- "s", segundos.
                --- "i", minutos.
                --- "H", horas.*/
            "fecha" => $this -> faker -> date("d_m_Y"), 
            # Crea un parrafo de texto largo.
            "fecha" => $this -> faker -> time("H_i_s"), 
            # Crea un estado ficticio en donde vive el usuario.
            "estado" => $this -> faker -> state(),
            /*  --- De la propiedad (faker) mandamos a llmar su metodo (image) el cual 
                recibe los siguientes parametros: 
                    --- La ruta donde la imagen se va a guardar, en este caso la carpeta 
                    (public), luego la carpeta (storage) y despues la carpeta (posts), 
                    una carpeta que nosotros mismos creamos.
                    --- Define el ancho de la imagen.
                    --- Define el alto de la imagen.
                    --- Equipos, pero (faker) ya no trabaja con equipos, asi que es null.
                    --- Define en (true) la ruta completa como nombre de la imagen. */
            "id_nacional" => $this -> faker -> nationalId(),
            # Genera una imagen de (640 x 480) pixeles.
            "imagen" => $this -> faker -> image('public/images', 640, 480, null, true)
        ];
    }
}