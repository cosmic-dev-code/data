### ============================= ###
###### ===--- Semantica ---=== ######
### ============================= ###

[](HTML_Semántico) es el uso de las etiquetas HTML para reforzar el significado de la información.
El [](HTML_Semántico) es procesado por los navegadores web

Las CSS son usadas para sugerir la presentación de la página a usuarios humanos.

### =============================== ###
###### ===--- Encabezados ---=== ######
### =============================== ###

Solo se permite un encabezado [](h1) en toda la pagina.

```html
	<h1>Un unico titulo en cada pagina del sitio web</h1>
```

Los demas titulos se perten repetir, _pero deben ir en orden_.

```html
	<!-- Un unico texto. -->

	<h1>Titulo principal</h1>

	<!-- Titulos en orden. -->

	<h2>Sub titulo</h2>
		<h3>Titulo nivel 3</h3>

	<h2>Sub titulo</h2>
		<h3>Titulo nivel 3</h3>

	<h2>Sub titulo</h2>
		<h3>Titulo nivel 3</h3>
		<h3>Titulo nivel 3</h3>
			<h4>Titulo nivel 4</h4>
				<h5>Titulo nivel 5</h5>
				<h5>Titulo nivel 5</h5>
					<h6>Titulo nivel 6</h6>
				<h5>Titulo nivel 5</h5>
```

### ================================================== ###
###### ===--- Una pagina con buena semantica ---=== ######
### ================================================== ###

Estructurar HTML Semantico ayuda muchisimo al [](SEO) y la [](Accesibilidad).

# Encabezado de la pagina.

```html
	<head>
		<!-- Metadatos -->
		<title>Titulo de la pagina</title>
	</head>
```

# Cabecera.

```html
	<!-- Cabecera -->
	<header>
		<picture>
			<img src="logo.png" alt="Logo de la pagina web">
		</picture>
		<!-- Navegacion -->
		<nav>
			<!-- Lista -->
			<ul>
				<!-- Enlace -->
				<li>
					<a href="inicio.html">Inicio</a>
				</li>
				<li>
					<a href="categorias.html">Categorias</a>
				</li>
				<li>
					<a href="productos.html">Precios</a>
				</li>
			</ul>
		</nav>
	</header>
```

# Cuerpo.

```html
	<body>
		<h1><!-- Titulo principal --></h1>

		<!-- Contenido principal -->
		<main>
			<!-- Secciones -->
			<section>
				
				<h2>Sub titulo</h2>

				<!-- Articulos -->
				<article>
					<div>
						<h3>Titulo nivel 3</h3>
					</div>
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
					<div>
						<h3><!-- Tercer titulo --></h3>
						<div>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
							<p><!-- Parrafo --></p>
						</div>
					</div>
				</article>
				
				<article>
					<h3>Titulo nivel 3</h3>
				</article>

				<article> ... </article>
				<article> ... </article>
			</section>
			<section> ... </section>
			<section> ... </section>
			<section> ... </section>
		</main>

	</body>
```

# Barra lateral de contenido.

```html
	<!-- Barra lateral de contenido -->
	<aside>
		<!--Navegacion -->
		<nav>
			<!-- Otra lista -->
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
```

# Pie de pagina.

```html
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
```