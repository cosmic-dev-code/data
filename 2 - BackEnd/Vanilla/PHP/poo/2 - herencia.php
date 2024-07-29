<?php

/* ##########================########## */
/* ######===--- Clase base ---===###### */
/* ##########================########## */

/* Todo empieza por una clase normal. */

class User{
	# Propiedades protejidas.
	protected string $nombre;
    protected int $edad;
    protected $correo;
    
    # Adquirir valores.
	public function __construct(string $nombre = "", int $edad = 0, $correo = ""){
    	$this -> nombre = $nombre;
        $this -> edad = $edad;
        $this -> correo = $correo;
    }

    # Mostrar datos.
    public function mostrar_datos():bool{
    	echo("
    		<div>
    			<div>Nombre: {$this -> nombre}</div>
    			<div>Edad: {$this -> edad}</div>
    			<div>Correo: {$this -> correo}</div>
    		</div>
    	");

    	return false;
    }
}

$user = new User("Brandon", 21, "brandonanthonyolivaresamador@gmail.com");

/* ##########==============================########## */
/* ######===--- Clase que hereda de otra ---===###### */
/* ##########==============================########## */

/* Primera clase. */
class Auto{
	protected string $pais = "Ninguno";
	protected $estado = "Ninguno";
	public string $color;
	public $costo = 0.000;
	protected float $motor;

	public function __construct($pais = "Ninguno", $estado = "", $color = "Negro", $costo, float $motor){
		$this -> pais = $pais;
		$this -> estado = $estado;
		$this -> color = $color;
		$this -> costo = $costo;
		$this -> motor = $motor;
	}

	public function mostrar_datos():void{
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
}

/* Esta segunda clase hereda todas las propiedades asi como los 
metodos (incluyendo el metodo constructor), e incluso esta 
tiene otras dos propiedades mas y un metodo mas.

(Dado que las propiedades de la primera clase estan declaradas 
como (protected) y (public, esta clase tiene acceso a ellas). */
class Toyota extends Auto{
	protected readonly string $marca = "Toyota";
	protected readonly string $fecha_salida = "201 / Mayo / 23";

	public function mostrar_datos_especificos():void{
		print "<div>
			<h3>Fechas y marca</h3>
			<div>
				<b>Marca: </b><span>{$this -> marca}</span>
				<b>Fecha de salida: </b><span>{$this -> fecha_salida}</span>
			</div>
		</div>";
	}
}

/* Instanciamos dos objetos de ambas clases, (la primera) y (la segunda) que 
hereda de la primera. */
$auto = new Auto("Mexico", "Tijuana", "Rojo", 300000, 3);
$auto_1 = new Toyota("Estados Unidos", "Texas", "Azul", 500000, 3);

// Utilizamos el metodo de la primera clase.
$auto -> mostrar_datos();

// Utilizamos los metodos de la segunda clase.
$auto_1 -> mostrar_datos();
$auto_1 -> mostrar_datos_especificos();

/* ##########===========================########## */
/* ######===--- El método constructor ---===###### */
/* ##########===========================########## */

# Primera clase.
class User{

    public function __construct(protected $nombre = "", protected int $edad = 0, protected string $correo = ""){
    	// ...
    }

    public function mostrar_datos():bool|null{
    	echo("
    		<div>
    			<div>Nombre: {$this -> nombre}</div>
    			<div>Edad: {$this -> edad}</div>
    			<div>Correo: {$this -> correo}</div>
    		</div>
    	");

    	return false;
    }
}

/* La clase se extiende de la primera clase y toma todos sus 
metodos y propiedades. */
class Admin extends User{
	protected $numero; // Propiedad perteneciente a la clase.

	/* Heredamos el metodo constructor. */

	# Sobreescribimos el metodo de la clase padre.
    public function mostrar_datos():bool{
    	echo("
    		<div>
    			<div>Nombre: {$this -> nombre}</div>
    			<div>Edad: {$this -> edad}</div>
    			<div>Correo: {$this -> correo}</div>
    			<div>Numero de admin: {$this -> numero}</div>
    		</div>
    	");

    	return false;
    }
}

// Usuario instanciado de la primera clase.
$usuario = new User("Brandon", 21, "brandon@gmail.com");
$usuario -> mostrar_datos();

/* ##########=========================########## */
/* ######===--- Constructor (padre) ---===###### */
/* ##########=========================########## */

class Admin extends User
{
	protected $numero;

	public function __construct($nombre = "", $edad = 0, $correo = "", $numero = 0){
		# Le damos los valores al primer metodo constructor.
		parent::__construct($nombre, $edad, $correo);
		$this -> numero = $numero;
	}

	# Sobreescribimos el metodo de la clase padre.
    public function mostrar_datos():bool{
    	echo("
    		<div>
    			<div>Nombre: {$this -> nombre}</div>
    			<div>Edad: {$this -> edad}</div>
    			<div>Correo: {$this -> correo}</div>
    			<div>Numero de admin: {$this -> numero}</div>
    		</div>
    	");

    	return false;
    }
}

// Usuario instanciado de la primera clase.
$usuario = new User("Brandon", 21, "brandon@gmail.com");
$usuario -> mostrar_datos();

// Administrador instanciado de la clase extendida.
$admin = new Admin("Anthony", 20, "anthony@gmail.com", 888);
$admin -> mostrar_datos();