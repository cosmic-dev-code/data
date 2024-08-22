### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###

```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			
			<!-- Enlazamos el (script) para utilizar (PayPal), debemos tomar en cuenta lo siguiente en el CDN: 
					--- (client-id): El 'id' de nuestra cuenta (bussiness) de aplicacion.
					--- (currency): Especificamos el tipo de moneda que vamos a utilizar. -->
			<script src="https://www.paypal.com/sdk/js?client-id=AWkJ4F94nvdDU-ORgu5A9l_V6JX6AaQa0rLxGlG-BR9tBYLfyUuxQ49hNO4AtrEWMl0crW_83odEw-gV&currency=MXN" type="text/javascript"></script>

			<title>PayPal</title>
		</head>
		<body>
			<!-- Ahora podemos utilizar (PayPal). -->
		</body>
	</html>
```