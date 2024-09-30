### ================================ ###
###### ===--- Contenedores ---=== ######
### ================================ ###

# ------------------- #
# ------ Crear ------ #
# ------------------- #

<!-- Crear (contenedor) a partir de una imagen -->

```bat
	: Creando contenedor, donde (node) es la imagen a utilizar.
	docker container create node
	docker create node

	: Podemos utilizar el (id) corto de la imagen, (que se muestra en la tabla de imagenes).
	docker create fe9e0b56b023

	: Podemos asigarle un (nombre) al contenedor para referirnos a el.
	:	--- (--name): 
	:		--- Nombre para el contenedor (mi-contenedor).
	:	--- Imagen a utilizar, (node).
	: 		--- Si NO le damos un (name), docker le asigna uno por defecto.
	docker create --name mi-contenedor node

	: Opcionalmente podemos indicar los puertos para comunicarnos.
	:	--- (-p): 
	:		--- Puerto PC (3000).
	:		--- Puerto contenedor (3000).
	docker create --name mi-contenedor -p3000:3000 node
```

<!-- Devuelve el (id) del contenedor. -->

```bat
	: Una vez creado devuelve el (id) que hace referencia al (contenedor).
	3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
```

# ------------------------------- #
# ------ Correr contenedor ------ #
# ------------------------------- #

```bat
	: Colocamos [docker start] y seguido el (id) del contenedor.
	docker start 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d

	: Podemos correr el contenedor refiriendonos a su (name).
	docker start mi-contenedor
```

# ------------------------------ #
# ------ Ver contenedores ------ #
# ------------------------------ #

- Muestra una Tabla: 
<!--
	--- (id): El id de los contenedores que tenemos, (Es mas corto y funciona como que el id grande).
	--- (image): La imagen, (plantilla) del contenedor.
	--- (commant): Comando que utiliza el contenedor para poder ejecutarse.
	--- (created): Cuando fue creado el contenedor.
	--- (status): Estado del contenedor, (corriendo o no)
	--- (posts): Puerto que utiliza para que otros clientes se conecten a el, (si se encuentra corriendo).
	--- (names): Nombre del contenedor.
-->

```bat
	: Muestra todos los contenedores (corriendo).
	docker ps

	: Ver todos los contenedores, (incluso los que no estan corriendo).
	docker ps -a
```

- # Podemos ver los disparos en consola que ocurren dentro del contenedor.
<!--
	--- Warnings.
	--- Errores.
	--- Mensajes.
-->

```bat
	: Muestra todo lo que esta pasando con un contenedor.
	docker logs mi-contedor

	: Hace lo mismo pero se encuentra a la escucha. Puedes salir con (CTRL + C).
	docker logs --follow mi-contedor
	docker logs --f mi-contedor
```

# ------------------------------- #
# ------ Ejecutar comandos ------ #
# ------------------------------- #

# NOTA: Recuerda que los contenedores vienen con sistema operativo Linux.

```bat

	: Permite ejecutar un comando dentro de un contenedor.
	:	--- (mi-contenedor): Es el contenedor a utilizar.
	:	--- (ls): Comando a ejecutar dentro del contenedor.
	docker exec -it mi-contenedor ls
```

Entrar a un contenedor.

```bat
	: Entramos al CLI del contenedor.
	:	--- (-i): Accede al contenedor de forma (interactiva).
	:	--- (-t): A su terminal.
	docker exec -it site-hospital-db /bin/bash

	: Podemos ejecutar comandos dentro del contenedor.
	bash$ ls -a

	: Salimos del contenedor.
	bash$ exit
```

# -------------------------------- #
# ------ Detener y Eliminar ------ #
# -------------------------------- #

```bat
	: Hacemos referencia a su (id) o (id corto) para (detenerlo).
	docker stop 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
	docker stop 3b4a5ced1288
	docker stop 
```

# NOTA: Primero asegurate de haber (detenido) el contenedor anted de [](Eliminarlo).

```bat
	: Usar (id) que nos da al momento de crearlo.
	docker rm 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
	: Usar (id) que nos da en la tabla de contenedores.
	docker rm 3b4a5ced1288
	: Usar (name) que le dimos o se le asigno por defecto.
	docker rm mi-contenedor

	: Fuerza la eliminacion (deteniendo) y (eliminando).
	docker rm -f mi-contenedor
```