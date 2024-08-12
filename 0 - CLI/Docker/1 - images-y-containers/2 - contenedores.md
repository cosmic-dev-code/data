### ================================ ###
###### ===--- Contenedores ---=== ######
### ================================ ###

# ------------------- #
# ------ Crear ------ #
# ------------------- #

Crear (contenedor) a partir de una imagen

```bat
	: Creando contenedor, donde (node) es la imagen a utilizar.
	docker container create node
	docker create node

	: Podemos utilizar el (id) corto de la imagen, (que se muestra en la tabla de imagenes).
	docker create fe9e0b56b023

	: Tambien podemos asigarle un (nombre) al contenedor para referirnos a el.
		: Nombre.
		: Imagen a utilizar.
	docker create --name mi-contenedor node

	: Si no le damos un (name), entonces docker le asignara uno por defecto.
```

Devuelve el (id) del contenedor.

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

```bat
	: Muestra todos los contenedores (corriendo).
	docker ps

	: Ver todos los contenedores, (incluso los que no estan corriendo).
	docker ps -a
```

- Muestra una Tabla: 
	- [](id): El id de los contenedores que tenemos, 
		- (Es mas corto y funciona como que el id grande).
	- [](image): La imagen, (plantilla) del contenedor.
	- [](commant): Comando que utiliza el contenedor para poder ejecutarse.
	- [](created): Cuando fue creado el contenedor.
	- [](status): Estado del contenedor, (corriendo o no)
	- [](posts): Puerto que utiliza para que otros clientes se conecten a el, (si se encuentra corriendo).
	- [](names): Nombre del contenedor.

# -------------------------------- #
# ------ Detener y Eliminar ------ #
# -------------------------------- #

```bat
	: Hacemos referencia a su (id) o (id corto) para (detenerlo).
	docker stop 3b4a5ced128890fc4b326578f83840a49935aeba5ede3490f740be0103961c9d
	docker stop 3b4a5ced1288
	docker stop 
```

# Eliminar contenedor.

Primero asegurate de haberlo (detenido).

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