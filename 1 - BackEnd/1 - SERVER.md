### ============================ ###
###### ===--- Peticion ---=== ######
### ============================ ###

# --------------------- #
# ------ Cliente ------ #
# --------------------- #

Peticiones del Cliente al Back.

```
	Cliente -> -> -> -> -> -> -> -> -> -> -> -> Back-End
```

- # Cliente Envia:

	1. [URL]
		<!-- Lugar a donde se envia la peticion. -->

	2. [Headers]
		<!-- Ajustes de la peticion. -->

	3. [Method, (GET, POST, PUT/PATH, DELETE, OPTIONS)]
		<!-- Los metodos para enviar los datos, (definen tambien el contexto). -->

	4. [Body]
		<!-- Los datos que envia. -->

# ---------------------- #
# ------ Servidor ------ #
# ---------------------- #

Peticiones del Back al Client.

```
	Cliente <- <- <- <- <- <- <- <- <- <- <- <- Back-End
```

- # Back-End Envia: 
	
	1. [Status Code]
		<!-- El codigo del estado de la respuesta. -->

	2. [Headers]
		<!-- Ajustes de la respuesta. -->

	3. [Body]
		<!-- Los datos que envia. -->

### ============================= ###
###### ===--- Cabeceras ---=== ######
### ============================= ###

<!-- Podemos ver las cabeceras de las peticiones. -->

> Herramientas de Desarrollador / F2
	> Network / Red
		<!-- Entre los filtros -->
		> All
			<!-- Aqui se muestran todas las peticiones a archivos, sitios, etc. -->
			<!-- Selecciona alguna -->

# Respuesta (Cabeceras).

```bat
	Access-Control-Allow-Credentials: true

	Access-Control-Allow-Origin: https://www.youtube.com

	: Tipo de contenido de respuesta de los datos.
	Content-Type: application/vnd.yt-ump

	: Deja la conexion abierta.
	Connection: keep-alive

	: Cuanto tiempo tiene que estar abierta la conexion, (funcional para optimizar recursos).
	Keep-Alive: timeout=5

	: Tamaño en bytes del recurso solicitado.
	Content-Length: 2324

	: En que fecha se ha hecho
	Date: Wed, 11 Sep 2024 03:14:08 GMT

	Expires: Wed, 11 Sep 2024 03:14:08 GMT
```

# Peticion (Cabeceras).

```bat
	: El dispositivo da informacion de si al servidor.
	: El servidor sabe que tipo de dispositivo es y enviarle una respuesta optimizada.
	User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36

	: Lenguaje del navegador, (Español España), (Español general)
	Accept-Language: es-419,es;q=0.9

	: Tipo de contenido de envio de los datos.
	Content-Type: application/x-www-form-urlencoded;charset=UTF-8

	: Tamaño en bytes del recurso solicitado.
	: (Le hace saber al nevegador cuanto tiene que mandar).
	Content-Length: 2324

	Origin: https://www.youtube.com
```