<?php

	# Crea un numero aleatorio muy grande.
	rand();

	/**
	 * Crea un numero aleatorio entre el 1 y el 100 
	 * dependiendo de los parametros que se le den. 
	 **/
	rand(0, 100);

	# Exponenciamos un numero, por ejemplo (5 ^ 2) = 25.
	pow(5, 2);

	# Redondea un numero mas cercano.
	$flotante = 5.25;
	round($flotante);

	/**
	 * El segundo parametro hace que la funcion no redonde nada 
	 * sino que el segundo parametro indica cuantos decimales mostrara.
	 */
	$flotante = 5.231837481;
	round($flotante, 3); // Da 5.231

	# Devuelve el valor absoluto de un numero.
	abs(-4.2); // Da 4.2 (double/float).
	abs(5); // Da 5 (integer).
	abs(5.5); // Da 5 (integer).
	abs(-5);   // Da 5 (integer).

	# Devuelve el coseno de un numero.
	cos(5);

	# Devuelve el seno de un numero.
	sin(5);

	# Devuelve la tangente de un numero.
	tan(5);
	
	# Devuelve el valor de 'pi'.
	pi();

	ceil(10.3); # Redondea hacia arriba, en este caso da 11.

	floor(10.9); # Redondea hacia abajo, en este caso da 10.

	# Decimal a binario.
	$numero_a_convertir = 6;
	decbin($numero_a_convertir); // Da 110.

	# De binario a decimal.
	bindec(110); // Da 6.

	# Decimal a hexadecimal.
	dechex($numero_a_convertir); // Da 6.

	# Hexadecimal a decimal.
	hexdec(6); // Da 6.

	# Decimal a octal.
	decoct($numero_a_convertir); // Da 6.

	# De octal a decimal.
	octdec(6); // Da 6.

	# Calcula la exponencial de 'e'.
	exp($numero_a_convertir); // Da 403.42879349274.

	log10(10); # Logaritmo en base 10.

	log(10); # Logartimo natural.

	max(1,3,6,10,7,8); # Encuentra el valor mas alto.

	min(1,3,6,10,7,8); # Encuentra el valor mas chico.

	sqrt(10); // Raiz cuadrada.

	# Formatea un numero a una cantidad de decimales especificos.
	number_format(10.53282, 2); // 10.53
?>

<?php
	# Casting implicito.

	$numero = "5";
	/**
	 * Con esto la variable se convierte de acuerdo a lo 
	 * que se le sume.
	 */
	$numero += 5;

?>

<?php
	# Casting explicito.

	$numero = "5";
	/**
	 * Ahora hemos converitodo la variable en un dato de tipo entero 
	 * nosotros mismos sin que php lo decidiera. 
	 */
	$resultado = (int)$numero;
?>