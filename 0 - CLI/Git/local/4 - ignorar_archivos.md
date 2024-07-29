### ============================================== ###
###### ===--- Crear archivo (.gitignore) ---=== ######
### ============================================== ###

Primero debemos crear el archivo [](.gitignore), este archivo nos va a permitir ignorar algunos arhivos a la hora de agregarlos al [](stage).

###### --- --- --- --- --- --- proyecto/.gitignore --- --- --- --- --- --- ######

Este archivo puede contener los archivos y las rutas que no queremos que tome en cuenta.

```bat
	: Estas (carpetas) no se incluyen en los commits.
	env
	node_modules

	: Tampoco cualquier directorio que contenga (.cache).
	.cache/

	: Tampoco cualquier archivo que contenga (.o)
	*.o

	: Tambien se pueden ignorar (archivos especificos).
	/data/files/file.txt
```

###### --- --- --- --- --- --- CLI --- --- --- --- --- --- ######

<!-- Por otro lado, en GIT se veran reflejados estos ajustes. -->

```sh
	# No mostrara los cambios de los archivos y carpetas ignorados: 
	git status

	# Agregos y hacemos un (commit) de nuestro archivo (.gitignore).
	git commit -an
```