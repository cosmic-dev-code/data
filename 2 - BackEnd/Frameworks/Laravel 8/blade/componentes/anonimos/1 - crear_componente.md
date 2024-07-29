### ================================================= ###
###### ===--- Crear un (componente anonimo) ---=== ######
### ================================================= ###

<!-- Debemos crear dentro de la carpeta (views) una carpeta llamada (components). -->

```bat
	cd resorces/views

	: Esta carpeta es la mas importante y debe llamarse (components), para que Laravel la reconozca.
	mkdir components & cd components

	: Creamos un archivo (PHP) con la extension (.blade), este sera nuestro componente.
	type nul > mi-componente.blade.php
```

###### --- --- --- --- --- --- {proyecto}/resources/views/components/mi-componente.blade.php --- --- --- --- --- --- ######

```html
	<!-- Aqui va todo el codigo de nuestro componente. -->
```

###### --- --- --- --- --- --- {proyecto}/resources/views/welcome.blade.php --- --- --- --- --- --- ######

```html
	<!-- En un archivo (.blade) lo mandamos a llamar. -->
	<x-mi-componente></x-mi-componente>
```