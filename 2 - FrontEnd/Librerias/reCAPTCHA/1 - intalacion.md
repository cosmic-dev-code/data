### ================================ ###
###### ===--- Crear claves ---=== ######
### ================================ ###

Primero debemos crear una cuenta en: 
*	--- https://www.google.com/recaptcha/admin/create

Esto nos dara dos claves: 
*	--- __(Clave de sitio)__: [](6LdwJ1EiAAAAAMaYzgmNqwFpEqwgMRUb-KH21j03)
*	--- __(Clave secreta)__: [](6LdwJ1EiAAAAABJmy609M8IKs3B2iZxwh_W6_gJO)

### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

<!-- Debemos importar el siguiente script. -->

```html
	<!-- Importar el script. -->
	<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>

	<!-- Listo para utilizar. -->
	<script type="text/javascript">
		
		// Esta funcion es requerida, debe tener el mismo nombre.
		var onloadCallback = function(){
			// Indica que el recaptcha esta listo para utilizarse.
		};

	</script>
```