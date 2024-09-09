### ============================== ###
###### ===--- nodemailer ---=== ######
### ============================== ###

Es una libreria de NodeJS que permite enviar correos electronicos por medio del 
servidor SMTP de Gmail

1. Necesitas una cuenta de Gmail para enviar correos.
2. Habilitar autenticacion en dos pasos en tu cuenta.
3. Generar claves de aplicacion.
4. Permitir el acceso a aplicaciones de terceros poco seguras.

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

<!-- Instalamos via (npm). -->

```bat
	npm install nodemailer
```

<!-- Ahora procedemos a importar la libreria. -->

```js
	const nodemailer = require("nodemailer");
```