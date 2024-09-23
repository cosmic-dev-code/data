<?php

/* ##########================########## */
/* ######===--- Rest param ---===###### */
/* ##########================########## */

// El operador 'spread' indica que todos los parametros que se van a recibir en la funcion, se recibiran como un arreglo.
function calculadora(string $simbolo = "+", ...$arrNumeros){
	(int)$suma = 0;

	foreach($arrNumeros as $indice => $numero){
		if($simbolo === "+"){
			$suma += $numero;
		}else if($simbolo === "-"){
			$suma -= $numero;
		}else if($simbolo === "/"){
			$suma /= $numero;
		}else if($simbolo === "*"){
			$suma *= $numero;
		}else{
			$suma += $numero;
		}
	}

	return $suma;
}

// Todos los parametros desde el segundo donde se encuentra el (spread), se almacena en el arreglo.
echo calculadora("+", 5,5,5); // 15
echo calculadora("-", 10, 10, 5); // -5
echo calculadora("*", 5,5,2); // 50
echo calculadora("/", 10,2,2); // 2.5

///////// ------------------------------------------------------------------------------------- /////////

class Calculadora{

	# Multiples metodos que retornan un valor.
	static public function suma(...$numero):int{
		$resultado = 0;
		for($i = 0; $i < count($numero); $i++){
			$resultado += $numero[$i];
		}
		return $resultado;
	}

	static public function resta(...$numero):int{
		$resultado = 0;
		for($i = 0; $i < count($numero); $i++){
			$resultado -= $numero[$i];
		}
		return $resultado;
	}

	static public function multiplicacion(...$numero):int{
		$resultado = 0;
		for($i = 0; $i < count($numero); $i++){
			$resultado *= $numero[$i];
		}
		return $resultado;
	}

	static public function division(...$numero):int{
		$resultado = 0;
		for($i = 0; $i < count($numero); $i++){
			$resultado /= $numero[$i];
		}
		return $resultado;
	}
}

# Instanciamos el objeto de la clase 'Calculadora'.

$sumar = new Calculadora();

# Imprimimos los valores en pantalla.

echo "La suma es: ".$sumar -> suma(5,5,5)."<br>";

echo "La resta es: ".$sumar -> resta(5,5,5)."<br>";

echo "La multiplicacion es: ".$sumar -> multiplicacion(5,5,5)."<br>";

echo "La division es: ".$sumar -> division(5,5,5);