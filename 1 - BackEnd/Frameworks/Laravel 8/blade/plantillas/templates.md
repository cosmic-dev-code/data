### ==================================== ###
###### ===--- Pagina principal ---=== ######
### ==================================== ###

###### --- --- --- --- --- --- {proyecto}/resources/views/wlcome.php --- --- --- --- --- --- ######

<!-- Diagamos que tenemos una pagina web normal. -->

```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>Pagina de cursos</title>
	</head>
	<body>
		<header>
			<!-- Contenido del header. -->
		</header>
		<main>
			<div>
				<h1>Bienvenido a la pagina de cursos</h1>
			</div>
			<section>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</section>
		</main>
		<footer>
			<!-- Contenido del footer. -->
		</footer>
	</body>
	</html>
```

<!-- Cada pagina tendra que tener el mismo (header) y (footer), (lo mas comun), podeemos reutilizar el contenido 
haciendo uso de las directivas de (Blade). -->

### =================================== ###
###### ===--- Crear plantilla ---=== ######
### =================================== ###

<!-- Creamos dentro de (resources/views) una carpeta con el nombre (plantillas), (puede ser cualquier nombre); 
Detro de esa carpeta creamos un archivo llamado layout.blade.php).

La extension (.blade.php) es importate. -->

###### --- --- --- --- --- --- {proyecto}/resources/views/plantillas/layout.blade.php --- --- --- --- --- --- ######

<!-- La directiva (@yield) permite definir un area en especifico donde se incrustara codigo HTML, esto permite reutilizar 
esta plantilla para cualquier pagina. -->

```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title>@yield('titulo_pagina')</title>
	</head>
	<body>
		<header>
			<!-- Contenido del header. -->
		</header>
		<main>
			<div>
				<h1>@yield('titulo')</h1>
			</div>
			<div>
				@yield('contenido')
			</div>
		</main>
		<footer>
			<!-- Contenido del footer. -->
		</footer>
	</body>
	</html>
```

<!-- -------------------------------- -->
<!-- ------ Utilizar plantilla ------ -->
<!-- -------------------------------- -->

###### --- --- --- --- --- --- {proyecto}/resources/views/wlcome.php --- --- --- --- --- --- ######

```html
	<!-- (@extends) se posiciona en la carpeta (view) y le indicamos cual es la platilla a utilizar. -->
	@extends('plantillas.layout')

	<!-- Llenamos las secciones de la plantilla definidas con la directiva (@yield) -->

	@section('titulo_pagina')
		{{ __("Publicacion " . $publicacion -> titulo) }}
	@endsection

	@section('titulo')
		Este es mi titulo de pagina
	@endsection

	@section('contenido')
		<div>
			<div>
				<h2><?= $publicacion -> descripcion ?></h2>
			</div>
			<p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Tempora, saepe esse ut eaque assumenda est dolore ea qui repudiandae ratione aliquam recusandae quaerat, cumque libero dolorum reiciendis laboriosam eligendi rerum.
			Sapiente sit unde, at a. Officia, corporis explicabo pariatur repudiandae accusantium alias ipsa laborum earum nam nisi delectus voluptas tenetur, deserunt officiis odit quod enim cumque consequuntur, commodi minima, dolor.</p>
		</div>
	@endsection
```

<!-- De esta manera podemos reutilizar codigo en todas nuestras demas paginas. -->