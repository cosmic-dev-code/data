### ================================== ###
###### ===--- Crear proyecto ---=== ######
### ================================== ###

<!-- Podemos crear un proyecto. -->

```bat
	: (mysite) es el nombre de la carpeta contenedora del proyecto.
	django-admin startproject mysite

	: Coloca los archivos del proyecto en esta carpeta.
	django-admin startproject mysite .
```

# NOTA: Utiliza nombres representativos no utilices nombres como (test), (django), etc.

<!-- Iniciar proyecto. -->

```bat
	: (manage.py), es el archivo para arrancar el servidor.
	: (runserver), arranca el servidor.
	: 		--- http://127.0.0.1:8000/
	python manage.py runserver

	: Inicia el proyecto en un puerto especifico.
	python manage.py runserver 3000
```