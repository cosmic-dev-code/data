### =========================== ###
###### ===--- Mapping ---=== ######
### =========================== ###

Cuando creamos un [](contenedor) y lo corremos, este se encuentra dentro de un (puerto).
Pero no tenemos acceso a el desde nuestra computadora, ya que se encuentra 
en nuestra maquina virtual.

Para eso hacemos un [](Binding) entre un puerto de nuestro ordenador y uno del contenedor.

# ------------------------------ #
# ------ Conectar puertos ------ #
# ------------------------------ #

- Especificamos
<!--
	--- (docker-create): Indica el comando para crear un contenedor.
	--- (-p): Indica que publicaremos en puertos, [publish].
		--- El puerto [3000] de nuestra computadora.
		--- El puerto [3000] del contenedor.
	--- (name): Nombre del contenedor.
	--- (node): Nombre de la imagen a utilizar.
		--- En este caso una imagen con la dependencia de node instalada.
-->

```bat
	: Puerto PC (3000) : Puerto contenedor (3000).
	docker create -p3000:3000 --name mi-contedor node

	: Puerto PC (3000) : Puerto contenedor (Docker escoje).
	docker create -p3000 --name mi-contedor node
```

# NOTA: No se recomienda dejar a docker elejir para evitar la duplicacion de puertos.

# ------------------------------- #
# ------ Correr contenedor ------ #
# ------------------------------- #

```bat
	: Ahora procedemos a correrlo.
	docker start mi-contedor

	: Podemos ver en la tabla los puertos que conectan la computadora y el contenedor.
	docker ps
```

### ================================ ###
###### ===--- Acortaciones ---=== ######
### ================================ ###

- Al ejecutar crea varias cosas.
<!--
	--- Verifica si tiene la imagen, en este caso (mongo), sino, entonces la instala.
	--- Crea un contenedor.
	--- Corre ese contenedor.
	--- Esta a la escucha de los logs que suceden. (follow).
-->

```bat
	: docker pull mongo.
	: docker create mongo.
	: docker start 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
	: docker logs --follow 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
	docker run mongo

	: Ejecuta todo lo anterior sin el (logs).
	docker run -d mongo
```

Podemos hacer combinaciones de todo lo anterior visto.

```bat
	docker run --name mi-contedor -p3000:3000 -d mongo
```