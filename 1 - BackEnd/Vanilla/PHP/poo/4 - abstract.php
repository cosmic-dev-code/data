<?php
/*
    NOTA: 
        --- (Clase abstracta): es una clase restringida que no se puede usar para crear objetos 
        (para acceder a ella, se debe heredar de otra clase).
        
        --- (Método abstracto): solo se puede usar en una clase abstracta y no tiene cuerpo. 
        El cuerpo lo proporciona la clase derivada (heredada de).
*/

/* ##########=====================================########## */
/* ######===--- Desarrollar una clase abstracta ---===###### */
/* ##########=====================================########## */

/* La palabra reservada (abstract) permite crear el prototipo de una clase 
o metodo y desarrollarlo en otra parte. */
abstract class User{

	/* Los metodos abstractos aqui tienen su prototipo. */
	abstract public function saludar();

	/* Podemos cmbinar las palabras reservadas, (pero la palabra reservada 
	(function) siempre va al ultimo). */
	public abstract function set_name();

	// Metodo normal.
	public function show_message(string message){
		echo "Mensaje: " . message;
	}
}

// La clase (Usuario) desarrolla la clase abstracta (User).
class Usuario extends User{
	var $nombre;

	public function __construct(string $nombre = ""){
		$this -> nombre = $nombre;
	}

	/* Los metodos abstractos aqui son desarrollados. */
	public function saludar():string{
		return "{$this -> nombre} esta saludando";
	}

	public function set_name(string $new_name = ""):?int{
		$this -> nombre = $new_name;

		return 0;
	}
}

$user = new Usuario("Brandon");

$user -> show_message("Hola");
echo "{$user -> saludar()}";

/* ##########================================================########## */
/* ######===--- Metodo (constructor) en la clase abstracta ---===###### */
/* ##########================================================########## */

abstract class User{
	/**
	 * Creamos las propiedades.
	 */
	// protected $nombre;
    // protected $edad;
    // protected $ciudad;
    
    /**
     * Metodo constructor.
     */
    public function __construct(protected $nombre = "", protected $edad = 0, protected $ciudad = ""){
    	// $this -> nombre = $nombre;
        // $this -> edad = $edad;
        // $this -> ciudad = $ciudad;
    }

    /**
     * Prototipos.
     */
	abstract public function saludar();
	public abstract function set_name():int;
}

/* Dado que la clase (Usuario) es una clase 'extendida' no es necesario colocar el 
metodo constructor a menos que querramos agregar nuevos valores. */
class Usuario extends User{
	public function saludar(){
		return "{$this -> nombre} de {$this -> edad} años esta saludando desde {$this -> ciudad}.";
	}

	public function set_name(string $new_name = ""):int{
		$this -> nombre = $new_name;

		return 0;
	}
}

$user = new Usuario("Brandon", 21, "Tijuana");
echo "{$user -> saludar()}";
// Salida: Brandon de 21 años esta saludando desde Tijuana.

/* ##########===================================================########## */
/* ######===--- Metodo (constructor) en la clase desarrollada ---===###### */
/* ##########===================================================########## */

/* Dentro de esta clase tenemos propiedades y metodos abstractos. */
abstract class Auto{
	protected $pais = "Ninguno";
	protected $estado = "Ninguno";
	public $color;
	public $costo = 0.000;
	protected readonly int $motor;

	abstract public function mostrar_datos();
	public abstract function mostrar_datos_especificos();
}

/* Extendemos la clase y desarrollamos todos los metodos (abstractos), incluyendo 
el metodo (constructor). */
class Toyota extends Auto{
	protected string $marca;
	protected string $fecha_salida;

	public function __construct($pais = "Ninguno", $estado = "", $color = "Negro", $costo, $motor, $marca, $fecha){
		$this -> pais = $pais;
		$this -> estado = $estado;
		$this -> color = $color;
		$this -> costo = $costo;
		$this -> motor = $motor;

		$this -> marca = $marca;
		$this -> fecha_salida = $fecha;
	}

	public function mostrar_datos(){
		echo("
			<div>
				<h3>Auto</h3>
				<div>
					<b>Pais: </b><span>{$this -> pais}</span>
					<b>Estado: </b><span>{$this -> estado}</span>
					<b>Color: </b><span>{$this -> color}</span>
					<b>Costo: </b><span>{$this -> costo}</span>
					<b>Motor: </b><span>{$this -> motor}</span>
				</div>
			</div>
		");
	}

	public function mostrar_datos_especificos(){
		print "<div>
			<h3>Fechas y marca</h3>
			<div>
				<b>Marca: </b><span>{$this -> marca}</span>
				<b>Fecha de salida: </b><span>{$this -> fecha_salida}</span>
			</div>
		</div>";
	}
}

$auto_1 = new Toyota("Estados Unidos", "Texas", "Azul", 500000, 3, "Toyota", "17/Sep/2003");

$auto_1 -> mostrar_datos();
$auto_1 -> mostrar_datos_especificos();

/* ##########==========================================########## */
/* ######===--- Metodo (constructor) en ambas clases ---===###### */
/* ##########==========================================########## */

abstract class Usuario{
	# Propiedades publicas.
	var $nombre;
	var $edad;

	# Metodo publico.
	function __construct(string $nombre = "", float $edad = 0){
		$this -> nombre = $nombre;
		$this -> edad = $edad;
	}

	# Metodo desarrollado en esta clase.
	function mostrar_datos(){
		return "<div>{$this -> nombre}, edad: {$this -> edad}</div>";
	}

	# Prototipo.
	abstract function get_name();
}

class User extends Usuario{
	public function __construct(string $nombre = "", float $edad = 0){
		parent::__construct($nombre, $edad);
	}

	public function get_name(){
		return ($this -> nombre);
	}
}

$user = new User("Brandon", 21);
echo "<div>{$user -> mostrar_datos()}</div><br>";
echo "El nombre es: {$user -> get_name()}.";

/* Salida: 

	Brandon, edad: 21

	El nombre es: Brandon.
*/