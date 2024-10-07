### ======================================== ###
###### ===--- Ejecutar migraciones ---=== ######
### ======================================== ###

<!-- Ahora ejecutamos el servidor, (o lo refrescamos). -->

```bat
	python manage.py runserver
```

<!-- Para ejecutar las migraciones. -->

```bat
	
	: Todas las migraciones del proyecto.
	python manage.py makemigrations

	: Migraciones de una aplicacion especifica, (myapp).
	python manage.py makemigrations myapp
```

###### --- --- --- --- --- --- {proyecto}/mysite/migrations/0001_initial.py --- --- --- --- --- --- ######

<!-- Podemos ver la migracion que se a creado y ejecutado. -->

# NOTA: Aqui no se mueve nada, sino en el modelo.

```py
	from django.db import migrations, models

	class Migration(migrations.Migration):
		initial = True

		dependencies = [
		]

		operations = [
			migrations.CreateModel(
				# Nombre de la tabla, (el nombre de nuestro modelo).
				name = "Project", 
				# Estructura de la tabla, (definida en nuestro modelo).
				fields = [
					("id", models.BigAutoField(auto_created=True, primary=True)), 
					("name", models.CharField(max_length=200))
				]
			)
		]
```