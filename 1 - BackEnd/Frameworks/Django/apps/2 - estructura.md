### ============================== ###
###### ===--- Estructura ---=== ######
### ============================== ###

###### --- --- --- --- --- --- {proyecto}/myapp/__init__.py --- --- --- --- --- --- ######

<!-- Permite que la carpeta sea tratada como un modulo que puede importarse. -->

###### --- --- --- --- --- --- {proyecto}/myapp/views.py --- --- --- --- --- --- ######

<!-- Retorna las respuestas al navegador. -->

```py
	from django.shortcuts import render
```

###### --- --- --- --- --- --- {proyecto}/myapp/admin.py --- --- --- --- --- --- ######

<!-- Tiene un panel grafico integrado para manipular la app incluyendo sus registros. -->

```py
	from django.contrib import admin
```

###### --- --- --- --- --- --- {proyecto}/myapp/apps.py --- --- --- --- --- --- ######

<!-- Configuraciones de la aplicacion. -->

```py
	from django.apps import AppConfig

	class MyappConfig(AppConfig):
		default_auto_field = "django.db.modelsBigAutoField"
		name = "myapp"
```

###### --- --- --- --- --- --- {proyecto}/myapp/models.py --- --- --- --- --- --- ######

<!-- Aqui va el ORM con el cual podremos declarar las estrucutas de nuestra base de datos. -->

<!-- En base a estos modelos Django creara las migraciones para crear las tablas.
	--- En la carpeta (migrations) de esta app. -->

```py
	from django.db import models
```

###### --- --- --- --- --- --- {proyecto}/myapp/test.py --- --- --- --- --- --- ######

<!-- Permite hacer (testing) en esta App, para probar la aplicacion. -->