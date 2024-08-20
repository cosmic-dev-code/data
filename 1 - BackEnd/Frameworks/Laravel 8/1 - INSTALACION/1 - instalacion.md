### ============================================= ###
###### ===--- Instalacion de (composer) ---=== ######
### ============================================= ###

<!-- Primero debemos instalar (composer) en nuestra maquina. -->

```bat
	: Necesitamos la última versión del lenguaje PHP: 7, ya que es un requisito del propio Laravel 5.5
	php --version

	: El gestor de dependencias de PHP, composer, es otro de los requisitos para comenzar.
	composer --version
```

### ====================================== ###
###### ===--- Instalacion global ---=== ######
### ====================================== ###

```bat
	: Instalamos (laravel) de manera global para poder utilizar los comandos de (laravel).
	composer global require laravel/installer

	: Vemos la version instalada de Laravel de manera global.
	laravel --version
```