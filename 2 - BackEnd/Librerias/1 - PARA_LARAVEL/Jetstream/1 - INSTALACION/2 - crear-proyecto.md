### ============================================================= ###
###### ===--- Crear un proyecto Laravel con (Jetstream) ---=== ######
### ============================================================= ###

Para instalarlo podemos crear un nuevo proyecto con [](jetstream).

```bat
	laravel new (nombre-del-proyecto) --jet 
```

<!-- La terminal nos preguntara que Framework de JavaScript queremos instalar para Jeetstream. -->

```bat
	[0] livewire
	[1] Inertia
```

<!-- Laravel preguntara: ¿Qué marco de prueba prefieres?
	--- Se refiere al marco de pruebas para instalar, (no son plantillas ni funciones prefabricadas), 
		es un ambiente controlado de pruebas de codigo.

Generalmente (pest) es mas completo, con errores mas informativos y codigo elegante, por lo que puede 
ser superior a (phpunit). -->

```bat
	[0] pest
	[1] phpunit
```

<!-- Luego la terminal nos preguntara si queremos trabajar el proyecto por equipos, 
por lo que debemos seleccionar una opcion. -->

```bat
	: Will your application use teams? (yes/no):
	> no
```

<!-- Ahora Laravel va a preguntar: ¿Le gustaría instalar soporte para modo oscuro?
	--- Se refiere al "modo oscuro en la aplicacion".

(yes/no) -->
```bat
	> yes
```

<!-- Despues de crear un nuevo proyecto con jetstream debemos migrar la base de datos, porque Jetstream tiene 
sus propias migraciones, ya que es una plantilla prefabricada. -->

```bat
	php artisan migrate
```