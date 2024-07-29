### ================================== ###
###### ===--- Crear carpetas ---=== ######
### ================================== ###

Primero debemos crear dentro de nuestro proyecto dos capetas: 
*	--- [](proyecto/sass)
*	--- [](proyecto/css)

<!-- Ahora ejecutamos el siguiente comando:  -->

```bat
	: --- (sass) es la carpeta que tenemos en nuestro proyecto donde se encontraran todos 
	: nuestros archivos (Sass).

	: --- (css), es el archivo de salida (Css) de nuestros archivos (Sass).

	: Este comando estara a la escucha de cualquier cambio de los archivos (Sass) y 
	: compilara hacia la carpeta (css).
	sass --watch sass:css

	: Tambien puede compilar desde rutas distintas.
	sass --watch ../sass/sass:../public/css
	sass --w sass:../public/css
	sass resources/sass:../src/public/css -w
```

### ========================== ###
###### ===--- Salida ---=== ######
### ========================== ###

###### --- --- --- --- --- --- {proyecto}/sass/styles.scss --- --- --- --- --- --- ######

<!-- Este es un archivo (Sass). -->

```sass
	section{
		padding: 28px;
		width: 100%;
		height: 3rem;
		h1{
			font-size: 3.6rem;
			margin: 1rem;
			color: red;
		}
	}
```

###### --- --- --- --- --- --- {proyecto}/css/styles.css --- --- --- --- --- --- ######

<!-- Esta es la salida que dan los archivos (Sass) de la carpeta (sass). -->

```css
	section{
		padding: 28px;
		width: 100%;
		height: 3rem;
	}
	section h1{
		font-size: 3.6rem;
		margin: 1rem;
		color: red;
	}
```