<?php

/* ##########=============########## */
/* ######===--- Métodos ---===###### */
/* ##########=============########## */

# El nombre de la clase es: (Usuario).
class Usuario
{
	# Metodo publico.
	public function saludar(){
		return "Hola.";
	}
};

// Instanciamos un objeto perteneciente a la clase (Usuario).
$usuario = new Usuario();
$usuario = new Usuario;

# Llamar un metodo.
$usuario -> saludar(); // "Hola."

// ------------------------------------------------ //
// ------ Metodos que llaman a otros metodos ------ //
// ------------------------------------------------ //

class Usuario
{

	public function saludar():string{
		/* Con ($this ->) mandamos a llamar un metodo opropiedad 
		perteneciente a la clase. */
		return $this -> saludo();
	}

	// Metodo que retorna una cadena de texto.
	public function saludo():string{
		return "Hola mundo!";
	}
}

$usuario = new Usuario;

echo $usuario -> saludar(); // Imprimimos el resultado.

/* ##########=================########## */
/* ######===--- Propiedades ---===###### */
/* ##########=================########## */

class Usuario{
	// Propiedades publicas pertenecientes a la clase.
	var $nombre = "Brandon";
	var $edad = 21;

	/* ($this) y (->) para mandar a llamar metodos y propiedades perteneciente 
	de la clase. */
	function get_info():int{
		echo("Nombre: ".$this -> nombre." y edad: ".$this -> edad);

		return 0;
	}
}

# Instanciamos un objeto y mandamos a llamar su metodo.
$usuario = new Usuario();
$usuario -> get_info();

// ------------------------------- //
// ------ Tipado (opcional) ------ //
// ------------------------------- //

class Usuario
{
	// (?), indica que puede ser un (string) o (null).
	public ?string $name;

	// (?), indica que se recibe una propiedad de tipo (string o null).
	// NOTA: Debemos inicializar la propiedad, al menos en (null).
	public function __construct(private ?string $name = null){
		// ...
	}

	// (?), indica que se puede retornar un dato de tipo (string o null).
	public function get_name():?string{
		return $this -> name;
	}
}

$usuario = new Usuario;

// ------------------------- //
// ------ Union types ------ //
// ------------------------- //

class Usuario
{
	// Podemos indicar un tipado dinamico, quiza una propiedad pueda ser una u otra cosa.
	public string|int $propiedad = 50;

	// Tambien aplica para los metodos, pueden devolver una u otra cosa.
	public function retornar():string|null|array
	{
		return null;
	}
}

/* ##########========================########## */
/* ######===--- Método constructor ---===###### */
/* ##########========================########## */

class Usuario
{
	// Propiedades sin valor.
	private string $nombre;
	private int $age;

	// El metodo recibe los valores para sus propiedades internas.
    public function __construct(string $nombre = "Brandon", int $age = 22){
    	// Puede hacerse un proceso aqui.

    	// Y asignar valor a sus propiedades internas.
    	$this -> nombre = $nombre;
    	$this -> age = $age;
    }
}

// El objeto ($usuario) tiene esas unicas propiedades.
const $usuario = new Usuario("Brandon", 22);

// ---------------------------------------------- //
// ------ (Property constructor promotion) ------ //
// ---------------------------------------------- //

class Usuario
{
	/**
	 * El constructor puede abreviarse de la siguiente manera.
	 */

	// private string $nombre = "Brandon";
	// private int $age = 22;

    public function __construct(
    	private string $nombre = "Brandon", 
    	private int $age = 22
    ){
    	// $this -> nombre = $nombre;
    	// $this -> age = $age;
    }
}

// Se puede instanciar como siempre.
const $usuario = new Usuario("Brandon", 22);

/* ##########=======================########## */
/* ######===--- Método destructor ---===###### */
/* ##########=======================########## */

class Usuario{
	var $nombre; var $edad;

	function __construct($nombre = "Brandon", $edad = 21){
		$this -> nombre = $nombre;
		$this -> edad = $edad;
	}

    /* El metodo (destructor) se ejecuta cuando termina el programa.
    Se utiliza para liberar los datos. */
	function __destruct(){
		$this -> nombre = "";
		$this -> edad = "";
	}

	public function get_info():string{
		return "Nombre: {$this -> nombre} y la edad: {$this -> edad}.";
	}

}

$usuario = new Usuario("Brandon Anthony", 21);
$resultado = $usuario -> get_info();

/* ##########=============================########## */
/* ######===--- Modificadores de acceso ---===###### */
/* ##########=============================########## */

class Usuario
{
	// Propiedades y metodos (publicos).

	public $descripcion;
	var $descripcion_1;

	public function funcionPublica():void{
		/* Se puede acceder a ella desde cualquier clase hija, y 
		cualquier objeto instanciado desde la misma clase. */
	}

	// Propiedades y metodos (privados).

	$variable = 50;
	private string $correo_electronico;

	private function funcionPrivada():void{
		/* Unicamente se accede a esta funcion desde la clase donde es creada, 
		las clases hijas no tienen acceso a ella. */
	}

	// Propiedades y metodos (protejidos).
	
	protected string $nombre;
	protected $edad;

	protected function funcionProtejida():void{
		# Se accede a esta funcion solo dentro de la misma clase o las clases hijas.
	}
}

/* ##########==========================================########## */
/* ######===--- Objetos con objetos como propiedades ---===###### */
/* ##########==========================================########## */

// Una clase con una propiedad.
class User
{
	// Podemos indicar como tipado la clase a recibir.
	public function __construct(public Admin $admin){}
}

// Otra clase que solo tiene un metodo.
class Admin
{
	// @return string|null
	public function greet():?string{
		return "Hola admin";
	}
}

// Pasamos el objeto Admin al constructor de User
$user = new User(new Admin);

/**
 * Imprimimos el metodo que retorna un string perteneciente a la 
 * (propiedad/objeto 'admin') perteneciente al objeto 'user'.
 */
echo $user -> admin -> greet();

/* ##########=============================########## */
/* ######===--- Métodos getter y setter ---===###### */
/* ##########=============================########## */

class Usuario{

	function __construct(private $nombre = "Brandon", private int $edad = 21){}

	// Metodo para extrar el valor de una propiedad.
	public function get_name():string{
		return $this -> nombre;
	}

	// Metodo para modificar el valor de una propiedad.
	public function set_name($nuevo_nombre):void{
		$this -> nombre = $nuevo_nombre;
	}
}

$usuario = new Usuario("Anthony", 20);

# Modificamos la propiedad 'nombre' del objeto instanciado.
$usuario -> set_name("Brandon");

# Obtenemos la propiedad 'nombre' del objeto instanciado.
$nombre = $usuario -> get_name();

// ------------------------------------ //
// ------ Propiedades (readonly) ------ //
// ------------------------------------ //

/* Las propiedades (readonly) hacen que una propiedad pueda inicializarse una vez 
y que estas no puedan modificarse.

Sindo asi los metodos (getter) y (setter) son inecesarios, por lo que podemos 
volver (publicas) las propiedades asegurando su integridad. */

class Usuario{

	// Indica que las propiedades solo son de lectura.
	public readonly string $nombre;

	function __construct(string $nombre = "Brandon", public readonly string $edad = 21){
		// Se inicializan una vez.
		$this -> nombre = $nombre;
	}
}

$usuario = new Usuario("Anthony", 20);

// Solo pueden leerse.
$usuario -> nombre;
$usuario -> edad;

// ------------------------------ //
// ------ Clase (readonly) ------ //
// ------------------------------ //

// Las propiedades se vuelven solo de lectura.
readonly class Usuario
{
	function __construct(public $nombre = "Brandon", public $edad = 21){}
}

$usuario = new Usuario("Anthony", 20);

// Solo pueden leerse.
$usuario -> nombre;
$usuario -> edad;

/* ##########=======================########## */
/* ######===--- Métodos estáticos ---===###### */
/* ##########=======================########## */

/* Los metodos estaticos tienen la caracteristica de 
que se puede acceder a ellos sin la necesidad de 
instanciar un objeto. */
class Usuario{
	private string $nombre;
	private int $edad;

	function __construct(string $nombre = "Brandon", int $edad = 21){
		$this -> nombre = $nombre;
		$this -> edad = $edad;
	}

	public function get_info():bool|null{
		echo "Nombre: ".$this -> nombre." y edad: ".$this ->edad;
		return false;
	}

	/* Los metodos estaticas se declaran con la palabra 
	reservada (static), detras de la palabra reservada 
	(function). */
	static public function saludar():bool{
		echo "Hola!";

		return false;
	}
}

/* Para acceder a los metodos publicos se instancia un objeto 
y despues se manda a llamar al metodo. */
$usuario = new Usuario();
$usuario -> get_info();

/* Para acceder a los metodos staticos se pone el nombre de la 
clase, luego dos puntos '::' y enseguida mandamos a llamar 
el metodo. */
Usuario::saludar();

// -------------------------------------------------- //
// ------ Metodos estaticos que llaman a otros ------ //
// -------------------------------------------------- //

class Usuario{
	private string $nombre;

	static public int $propiedad_publica = 55;

	public const propiedad_constante = 80;

	function __construct(string $nombre = "Brandon")
	{
		$this -> nombre = $nombre;
	}

	/* Para mandar a llamar a un metodo estatico dentro de la misma clase, se utiliza la 
	palabra reservada (self), a continuacion de dos puntos '::' y mandamos a 
	llamar la funcion. En este caso utilizamos dos metodos estaticos, 
	uno el cual llama al otro. */

	static private function texto(){
		return "Hola mundo!";
	}

	public static function saludar():?null|void{
		/* De esta manera mandamos a llamar un metodo estatico 
		sentro de la misma clase. */
		echo self::texto();
	}

}

/* Mandamos a llamar el metodo estatico el cual manda a 
llamar a otro. */
Usuario::saludar();

// Propiedad publica estatica.
Usuario::$propiedad_publica;
Usuario::propiedad_constante;