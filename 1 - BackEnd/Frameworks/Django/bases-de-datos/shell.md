### ==================================== ###
###### ===--- Entrar a (shell) ---=== ######
### ==================================== ###

<!-- Primero, debemos ejecutar el comando que nos permitira manipular los registros en forma de objeto por 
consola haciendo uso del ORM, el comando que debemos ejecutar en consola es el siguiente:  -->

```bat
	python manage.py shell
```

### ==================================== ###
###### ===--- Salir de (shell) ---=== ######
### ==================================== ###

<!-- Para salir de (shell) solo debemos ejecutar el siguiente comando:  -->

```bat
	exit
```

### ================================== ###
###### ===--- Uso de (shell) ---=== ######
### ================================== ###

<!-- Podemos ejecutar codigo Python y traer los modelos. -->

```py
	from myapp.models import User, Task

	# Podemos crear y guardar un registro.
	user = User(name="Brandon", age=22)
	user.save()

	# Podemos traer registros.
	Task.objects.all()
	Task.objects.get(id=1)

	# Podemos acceder a la tabla por medio de un registro.
	user.user_set.all()
	user.user_set.get(id=1)
```