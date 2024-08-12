### ============================= ###
###### ===--- Metadatos ---=== ######
### ============================= ###

Los metdadatos mas relevantes para el [](SEO).

```html
	<!-- Indica que estamos utilizando la ultima version de HTML, (la mas reciente HTML5). -->
	<!DOCTYPE HTML>

	<!-- Indicamos al navegador que nuestra pagina está en español. -->
	<html lang="es">
		<head>

			<!-------------------->
			<!-- MAS RELEVANTES -->
			<!-------------------->

			<!-- (charset), acepta todos los simbolos y tildes. -->
			<meta charset="utf-8">

			<!-- Esta es una descripcion que aparece en el buscador al momento de buscar la pagina en Google. -->
			<meta name="description" content="descripcion del sitio">

	  		<!-- Los robots de los buscadores tendran acceso a tu pagina para encontrarla mas rapido. -->
			<meta name="robots" content="index,follow">

			<!-- Ayuda al modo responsive haciendo algunos ajustes y adaptandolo mejor a otros dispositivos. -->
			<meta name="viewport" content="width=device-width, initial-scale=1.0">

			<!-- Para cuando el sitio we es buscado por el motor y la misma pagina se duplica: 
				--- https://www.miSitio.com
				--- http://www.miSitio.com
				--- https://miSitio.com
				--- https://miSitio.com/index.php
				--- https://miSitio.com/index.php?user=Brandon -->
			<link rel="canonical" href="https://www.miSitio.com">

	        <!-- Muestra una pagina u otra de acuerdo al idioma de la audiencia. -->
			<link rel="alternate" hreflang="en" href="https://www.example.com/"/>
			<link rel="alternate" hreflang="es" href="https://www.example.es/"/>

			<!---------------------->
			<!-- MENOS RELEVANTES -->
			<!---------------------->

			<!-- Palabras clave para los buscadores. (Ya no se utiliza). -->
	  		<meta name="keywords" content="Palabra 0, Palabra 1, Palabra 2">

			<!-- Link del icono -->
			<link rel="icon" href="../images/icon.png" type="image/png">
			<link rel="icon" href="../images/icon.ico" type="image/icon">

			<!-------------------->
			<!-- SIN RELEVANCIA -->
			<!-------------------->

			<!-- Nombre de la aplicacion. -->
			<meta name="application-name" content="Venta Olivares">

			<!-- Especifica el tipo de contenido y el (charset), (para HTML version 4). -->
			<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

			<!-- Especifica a quien le pertenece la pagina, (derechos de autor). -->
			<meta name="copyright" content="Brandon Anthony Olivares Amador"/>

			<!-- Contiene al autor del sitio. -->
			<meta name="author" content="Brandon Anthony Olivares Amador">

			<!-- Ultima vez en que el sitio fue revisado. -->
			<meta name="revised" content="dd/mm/yyyy">
			<meta name="revised" content="08/01/2023"/>

			<!-- Fecha de lanzamiento del sitio pagina. -->
			<meta name="date" content="dd/mm/yyyy">
			<meta name="date" content="03/04/2023">

			<!-- Indica la tecnologia que se utilizo, (un CMS o Framework). -->
			<meta name="generator" content="laravel v5.5">

			<!-- Indica que cada (5) segundos la pagina se refrescara. -->
	        <meta http-equiv="refresh" content="5"/>
	        <!-- Indica que en (2) segundos la pagina redireccionara a (http://lineadecodigo.com). -->
	        <meta http-equiv="refresh" content="2; http://lineadecodigo.com"/>

	        <!-- Crea una (cookie) con sus valores. -->
	        <meta http-equiv="cookie" content="clave=valor; expires=Saturday, 25-Mar-16 23:59:59 GMT;"/>

			<!-- El icono se queda guardado en cache. -->
			<link rel="shortcut icon" type="image/x-icon" href="Icono.ico">

			<!---------------------->
			<!-- TITULO DE PAGINA -->
			<!---------------------->

			<!-- Titulo de la pagina -->
			<title>Titulo de la pagina</title>

		</head>

		<body> ... </body>
	</html>
```