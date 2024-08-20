### ======================= ###
###### ===--- ORM ---=== ######
### ======================= ###

Un ORM (Object-Relational Mapping) en PHP es una herramienta de programación que se utiliza para mapear objetos de una base de datos relacional a objetos en un lenguaje de programación orientado a objetos.

Permite a los desarrolladores de PHP interactuar con una base de datos relacional utilizando objetos y métodos familiares en lugar de escribir SQL directamente.

Algunos ejemplos populares de ORMs en [](PHP) son [](Doctrine), [](Eloquent), y [](Propel).

### =========================== ###
###### ===--- Ejemplo ---=== ######
### =========================== ###

<!-- Suponemos que tenemos una tabla llamada (Usuarios en la base de datos). -->

```sql
	CREATE TABLE `usuarios`(
		`id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
		`nombres` VARCHAR(255) NOT NULL, 
		`apellidos` VARCHAR(255) NOT NULL, 
		`active` BOOL NOT NULL, 
		`descripcion` DEFAULT ''
	);
```

<!-- Para poder leer sin hacer consultas. -->

```php
	// Cada metodo se conectara a la base de datos por medio de las APIs de PHP.
	class ModelORM{
		# El registro tiene su propia tabla para manejar los datos.
		public string $table;

		/**
		 * Metodos para obtener datos de MySQL, reciben la (tabla) de donde obtendran los datos.
		 */

		static public function get(int $id, string $table):object{
			// Logica para: SELECT y WHERE.
		}

		static public function all(string $table):array{
			// Logica para: SELECT *.
		}

		/**
		 * Metodos para manejar el registro en la base de datos.
		 */

		public function save(object $register):boolean{
			// Logica para: INSERT.
		}

		public function update(int $id, object $register):boolean{
			// Logica para: UPDATE y WHERE.
		}

		public function delete(int $id):boolean{
			// Logica para: DELETE y WHERE.
		}

		public function truncate():boolean{
			// Logica para: TRUNCATE.
		}
	}

	// Implementar metodos de conexion.
	class User extends ModelORM{
		// Propiedades del registro.
		public string $nombres;
		public string $apellidos;
		public boolean $active;
		public string $descripcion;

		public function __construct(string $nombres, string $apellidos, string $active, string $descripcion = ""){
			$this->nombres = $nombres;
			$this->apellidos = $apellidos;
			$this->active = $active;
			$this->descripcion = $descripcion;

			// Se indica la tabla que va a manipular.
			$this -> table = "usuarios";
		}

		// ...
	}

	// Se crea el registro.
	$usuario = new Usuario("Brandon", "Olivares", true);

	// Inserta el registro.
	$usuario -> save();

	// Indicando la tabla podemos traer todos los registros.
	$usuarios = (array) Usuario::all("usuarios");

	foreach ($usuarios as $usuario) {
		if($usuario -> nombres === "Brandon") $usuario->delete();
	}
```