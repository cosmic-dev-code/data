### ============================ ###
###### ===--- Imagenes ---=== ######
### ============================ ###

# -------------------------- #
# ------ Ver imagenes ------ #
# -------------------------- #

- # Muestra una tabla de imagenes
<!--
	(repository): Nombre del repositorio de la imagen.
	(tag): Etiqueta de la imagen (por ejemplo, latest, 14, 8.0).
	(image_id): Identificador único de la imagen.
	(created): Fecha y hora en que se creó la imagen.
	(size): Tamaño de la imagen.
-->

```bat
	: Muestra las imagenes instaladas.
	docker images
```

# ------------------------------- #
# ------ Instalar imagenes ------ #
# ------------------------------- #

```bat
	: Nombre de la dependencia que vendra con la imagen.
	docker pull {nombre de la imagen}
```

<!-- Instalamos por (ejemplo), una imagen que contenga (node) como dependecia. -->

```bat
	: Instala la ultima version de Node, (latest / LTS).
	docker pull node

	: Instala una version especifica de Node.
	docker pull node:14
```

# ------------------------------- #
# ------ Eliminar imagenes ------ #
# ------------------------------- #

```bat
	: Elimina la imagen en este caso de (node) con la version Latest.
	docker image rm node

	: Elimina una imagen en especifico.
	docker image rm node:14
```