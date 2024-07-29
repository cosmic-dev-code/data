### ============================= ###
###### ===--- Semantica ---=== ######
### ============================= ###

[HTML Semántico] es el uso de las etiquetas HTML para reforzar la semántica, o el significado, de la información en 
las páginas web más que simplemente redefinir su forma de presentación (apariencia). El [HTML semántico] es 
procesado por los navegadores web regulares así como por muchos otros agentes de usuarios. 

Las CSS son usadas para sugerir la presentación de la página a usuarios humanos.

### ================================================== ###
###### ===--- Una pagina con buena semantica ---=== ######
### ================================================== ###

```html
	<!DOCTYPE HTML>
	<html lang="es">
		<head>
			<!-- Metadatos -->
			<title>Titulo de la pagina</title>
		</head>
		<body>
			<!-- (Semantica de HTML) Se deben utilizar las etiquetas para lo que se hicieron. -->
			 
			<!-- Cabecera -->
			<header>
				<div>
					<img src="logo.png" alt="Logo de la pagina web">
				</div>
				<nav><!-- Navegacion -->
					<ul>
						<li><a href="inicio.html">Inicio</a></li>
						<li><a href="categorias.html">Categorias</a></li>
						<li><a href="productos.html">Precios</a></li>
					</ul>
				</nav>
			</header>

			<h1><!-- Titulo principal --></h1>

			<!-- Contenido principal -->
			<main>
				<!-- Secciones -->
				<section>
					<!-- Articulos -->
					<article>
						<header>
							<h3><!-- Cabecera del articulo --></h3>
						</header>
						<div>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
							<figure>
								<picture>
									<img src="image.png" alt="Imagen" title="Mi imagen">
								</picture>
								<figcaption>
									<p><!-- El texto de mi imagen --></p>
								</figcaption>
							</figure>
						</div>
						<footer>
							<h3><!-- Pie del articulo --></h3>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
						</footer>
					</article>
					<article></article>
					<article></article>
					<article></article>
				</section>
				<section></section>
				<section></section>
				<section></section>
			</main>

			<!-- Barra lateral de contenido -->
			<aside>
				<!--Navegacion -->
				<nav>
					<ol>
						<li><a href="#">Item #0</a></li>
						<li><a href="#">Item #1</a></li>
						<li><a href="#">Item #2</a></li>
						<li><a href="#">Item #3</a></li>
						<li><a href="#">Item #4</a></li>
						<li><a href="#">Item #5</a></li>
						<li><a href="#">Item #6</a></li>
					</ol>
				</nav>
			</aside>

			<!-- Pie de pagina -->
			<footer>
				<div>
					<address>
						<!-- La informacion de contacto -->
					</address>
					<!-- Con esto le indicamos al navegador una fecha. -->
					<time datetime="01/20/2021">Noticia publicada el dia 01/20/2021</time>
				</div>
				<div>
					<small><!-- Derechos legales --></small>
				</div>
			</footer>

		</body>
	</html>
```