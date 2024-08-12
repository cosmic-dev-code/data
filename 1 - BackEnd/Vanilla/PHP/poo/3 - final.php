<?php

/* ##########===========================================########## */
/* ######===--- Metodos que no se pueden sobrescribir ---===###### */
/* ##########===========================================########## */

class User{
	protected $nombre;

	public function __construct($nombre = ""){
		$this -> nombre = $nombre;
	}

	/* La palabra reservada (final) sirve para indicar que un metodo 
	no podra ser sobreescrito por una clase (extendida). */
	final public function mostrar_datos():void{
		echo("<div>{$this -> nombre}</div>");
	}
}

class Admin extends User{
	protected $edad;

	public function __construct($nombre = "", $edad = 0){
		parent::__construct($nombre);
		$this -> edad = $edad;
	}

	/* Debemos crear otro metodo con un nombre distinto. */
	public function mostrar_datos_1():void{
		echo("<div>{$this -> nombre}, edad: {$this -> edad}</div>");
	}
}

$usuario = new User("Brandon");
$usuario -> mostrar_datos();

$admin = new Admin("Anthony", 20);
$admin -> mostrar_datos();

/* ##########==================================########## */
/* ######===--- Clases que no pueden heredar ---===###### */
/* ##########==================================########## */

/* La palabra final para una clase permite que ninguna clase pueda 
heredar de esta. */
final class Perros{
	private string $nombre;
	private string $raza;
	private string $color;

	public function __construct($nombre = "Ninguno", $raza = "Ninguna", $color = "cafe"){
		$this -> nombre = $nombre;
		$this -> raza = $raza;
		$this -> color = $color;
	}

	public function mostrar_datos():void{
		printf("
			<div style='margin: 30px 0;'>
				<div>Nombre: {$this -> nombre}</div>
				<div>Raza: {$this -> raza}</div>
				<div>Color: {$this -> color}</div>
			</div>
		");
	}
}

// ERROR.
class Aves extends Perros{
	/* Esto no se puede hacer y dara (error). */
}

$perro = new Perros();
$perro -> mostrar_datos();