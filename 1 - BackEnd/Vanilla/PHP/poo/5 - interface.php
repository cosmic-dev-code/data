<?php
/*
    Nota: las interfaces pueden contener propiedades y métodos, pero no campos.
*/

/* ##########==================================########## */
/* ######===--- Crear e implementar interfaz ---===###### */
/* ##########==================================########## */

/* Una interfaz es una clase que debera desarrollarse en otra parte, aqui solo 
ponemos los prototipos, pero una (interface) es como un contrato, debe 
hacerse, por lo que es necesario desarrollarla. */
interface Usuario{
	public function mostrar_datos();
}

/* Aqui desarrollamos la (interface). La interface es desarrollada en la clase 
(User) por medio de la palabra reservada (implements). */
class User implements Usuario{
	private $nombre;
	protected $edad;
	public $ciudad;
	
	public function __construct($nombre = "", $edad = 0, $ciudad = ""){
		$this -> nombre = $nombre;
		$this -> edad = $edad;
		$this -> ciudad = $ciudad;
	}

	public function mostrar_datos(){
		return ('
			<table cellspacing="3" cellpadding="10" border="1">
				<tr>
					<th>Nombre</th>
					<th>Edad</th>
					<th>Ciudad</th>
				</tr>
				<tr>
					<td>'.$this -> nombre.'</td>
					<td>'.$this -> edad.'</td>
					<td>'.$this -> ciudad.'</td>
				</tr>
			</table>
		');
	}
}

/* Instanciamos un objeto de la clase (User) la cual desarrolla la interfaz. */
$user = new User("Brandon", 20, "Tijuana");

echo("{$user -> mostrar_datos()}");

/* ##########=======================================########## */
/* ######===--- Las interfaces no permiten cuerpo ---===###### */
/* ##########=======================================########## */

/* Las interfaces no permiten desarrollar los metodos en su cuerpo, tampoco permiten contener variables 
dentro de la clase. */
interface Usuario{
	function __construct();

	function mostrar_datos();
	function get_name();
}

# Todo debe desarrollarse en otra clase la cual se implemente de la (interfaz).
class User implements Usuario{
	# Propiedades publicas.
	var $nombre;
	var $edad;

	public function __construct(string $nombre = "", float $edad = 0){
		$this -> nombre = $nombre;
		$this -> edad = $edad;
	}
    
	function mostrar_datos(){
		return "<div>{$this -> nombre}, edad: {$this -> edad}</div>";
	}

	public function get_name(){
		return ($this -> nombre);
	}
}

$user = new User("Brandon", 21);
echo "<div>{$user -> mostrar_datos()}</div><br>";
echo "El nombre es: {$user -> get_name()}.";