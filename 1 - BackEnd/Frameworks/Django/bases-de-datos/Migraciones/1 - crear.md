### =============================== ###
###### ===--- Migraciones ---=== ######
### =============================== ###

<!-- Son modelos que se convierten en migraciones para convertirse en tablas. -->

###### --- --- --- --- --- --- {proyecto}/myapp/models.py --- --- --- --- --- --- ######

<!-- Creamos un Modelo y en base a el (django) creara una migracion. -->

```py
	from django.db import models

	# Creamos un modelo llamado (Project), sera la tabla en la base de datos.
	class Project(models.Model):
		# Estructura de la tabla.
		name = models.CharField(max_length=200)

```

###### --- --- --- --- --- --- {proyecto}/mysite/settings.py --- --- --- --- --- --- ######

<!-- En el archivo de configuracion global. -->

```py
	INSTALLED_APPS = [
		# Colocamos nuestra (App) para que sea reconocida.
		"myapp", 
		# Etc.
	]
```