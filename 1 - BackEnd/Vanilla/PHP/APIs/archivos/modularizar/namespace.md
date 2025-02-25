
### ===================================================== ###
###### ===--- La palabra reservada (namespaces) ---=== ######
### ===================================================== ###

<!-- Un (namespace) le da un nombre al documento PHP. -->

###### --- --- --- --- --- --- {proyecto}/functions.php --- --- --- --- --- --- ######

[](functions.php) - Es el nombre del archivo.

```php
	/**
	 * Este es el espacio de nombre que vamos a utilizar.
	 */
	namespace funciones;

	// El resto son funciones que podremos utilizar en el espacio de nombres.

	function mostrar_numeros(float $numero = 0.000):string
	{
		echo "
			<table cellspacing='3' cellpadding='10' border='1'>
				<tr>
					<th>Numeros</th>
			  	</tr>";
		for($i = 0; $i < $numero; $i++){
			echo "
				<tr>
					<td>{$i}</td>
				</tr>
			";
		}
		echo "
			</table>
		";
	}

	class Math_Functions
	{
		public static function pow(float $numero = 0.000):string
		{
			return "
				<div>
					".pow($numero, 2)."
				</div>
			";
		}

		public static function cube(float $numero = 0.000):string
		{
			return "
				<div>
					".pow($numero, 3)."
				</div>
			";
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/index.php --- --- --- --- --- --- ######

```php
	# Incluimos el archivo de funciones.
	include 'php/functions.php';

	// Utilizando el (namespace) dentro del archivo [functions.php].
	funciones\mostrar_numeros(33.9);
	funciones\Math_Functions::pow(5);
	funciones\Math_Functions::cube(3);
```

### ============================================== ###
###### ===--- La palabra reservada (use) ---=== ######
### ============================================== ###

```php
	# Incluimos el archivo de funciones.
	require_once 'php/functions.php';

	// Importamos el espacio de nombres (funciones) para usar sus elementos directamente.
	use funciones\mostrar_numeros;
	use funciones\Math_Functions;

	mostrar_numeros(10);
	Math_Functions::cube(3);
```

### ============================== ###
###### ===--- Alias (as) ---=== ######
### ============================== ###

###### --- --- --- --- --- --- {proyecto}/functions.php --- --- --- --- --- --- ######

```php
	// Nombre del espacio.
	namespace code\funciones\matematicas;

	// Resto del codigo a exportar ...	
```

###### --- --- --- --- --- --- {proyecto}/index.php --- --- --- --- --- --- ######

```php
	# Incluimos el archivo de funciones.
	include_once 'php/functions.php';

	// Renombramos el espacio de nombres (matematicas) por medio de su "alias" (math).
	use code\funciones\matematicas as math;

	math\mostrar_numeros(10);
	math\Math_Functions::pow(10);
	math\Math_Functions::cube(3);
```