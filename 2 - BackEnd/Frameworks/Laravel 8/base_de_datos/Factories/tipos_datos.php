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
            "nombre" => $this -> faker -> name(),
            # Crea un nombre por defecto.
            "mail" => $this -> faker -> unique() -> safeEmail(),
            # Crea un correo electronico unico para cada registro.
            "oracion" => $this -> faker -> sentence(),
            # Genera una oracion un poco larga.
            "texto" => $this -> faker -> text(),
            # Genera un texto un poco largo.
            "numero_de_telefono" => $this -> faker -> cellphone(),
            # Genera un numero de telefono.
            "edad" => $this -> faker -> randomElement(array(19, 20, 21, 22, 23,24)),
            # Genera un numero aleatorio flotante.
            "precio" => $this -> faker -> randomFloat(1, 2, 100), 
            # Alterna los datos en cada registro.
            "descripcion" => $this -> faker -> paragraph(),
            /* El metodo (date) crea una fecha al azar y recibe por parametro: 
                --- "d", dia.
                --- "m", mes.
                --- "Y", year.*/
            "fecha" => $this -> faker -> date("d_m_Y"), 
            /* El metodo (time) crea una hora al azar y recibe por parametro: 
                --- "s", segundos.
                --- "i", minutos.
                --- "H", horas.*/
            "fecha" => $this -> faker -> time("H_i_s"), 
            # Crea un parrafo de texto largo.
            "estado" => $this -> faker -> state(),
            # Crea un estado ficticio en donde vive el usuario.
            "id_nacional" => $this -> faker -> nationalId(),
            /*  --- De la propiedad (faker) mandamos a llmar su metodo (image) el cual 
                recibe los siguientes parametros: 
                    --- La ruta donde la imagen se va a guardar, en este caso la carpeta 
                    (public), luego la carpeta (storage) y despues la carpeta (posts), 
                    una carpeta que nosotros mismos creamos.
                    --- Define el ancho de la imagen.
                    --- Define el alto de la imagen.
                    --- Equipos, pero (faker) ya no trabaja con equipos, asi que es null.
                    --- Define en (true) la ruta completa como nombre de la imagen. */
            "imagen" => $this -> faker -> image('public/images', 640, 480, null, true)
            # Genera una imagen de (640 x 480) pixeles.
        ];
    }
}