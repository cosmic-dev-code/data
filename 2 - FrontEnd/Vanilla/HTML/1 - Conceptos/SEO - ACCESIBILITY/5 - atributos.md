### =================================== ###
###### ===--- aria-labelledby ---=== ######
### =================================== ###

Similar a aria-label, pero en lugar de proporcionar una etiqueta directamente, referencia el 
[](id) de otro elemento que contiene el texto a usar como etiqueta.

# Etiquetas que lo soportan.

Elementos de formularios: 
	<input>, <textarea>, <select>, <button>, <fieldset>
Elementos de navegación e interacción: 
	<a>, <button>, <details>, <summary>, <nav>
Elementos de estructura de documento: 
	<article>, <section>, <aside>, <header>, <footer>, <main>, <div>
Elementos de contenido multimedia: 
	<img>, <audio>, <video>

# Ejemplos de uso.

```html
	<label id="label-username">Nombre de usuario</label>

	<input type="text" id="username" aria-labelledby="label-username">
```

Dos titulos en uno.

```html
	<h2 id="title1">Sección 1</h2>
	<p id="description1">Esta es la descripción de la sección 1.</p>

	<section aria-labelledby="title1 description1">
	  <p>Contenido de la sección 1...</p>
	</section>
```

```html
	<div aria-labelledby="dialogTitle" aria-describedby="dialogDescription">
		<h1 id="dialogTitle">Título del diálogo</h1>
		<p id="dialogDescription">Descripción del diálogo.</p>
		<button onclick="closeDialog()">Cerrar</button>
	</div>
```

### =============================== ###
###### ===--- aria-hidden ---=== ######
### =============================== ###

Oculta elementos HTML a los lectores de pantalla.

```html
	<div aria-hidden="true">
		<p>Este contenido es solo para propósitos visuales y no será anunciado por lectores de pantalla.</p>
	</div>
```

### ============================== ###
###### ===--- aria-label ---=== ######
### ============================== ###

Etiqueta descriptiva, colocas un texto para describir la funcion de la seccion o elemento.

# Etiquetas interactivas.

<a>, <button>, <input>, <textarea>, <label>, <select>, <option>

# Etiquetas de estructura.

<nav>, <aside>, <header>, <footer>, <section>, <article>, <div>, <span>

# Elementos multimedia.

<img>, <svg>, <audio>, <video>, <progress>, <meter>

Ejmplo de uso

```html
	<button aria-label="Abrir configuración">
		<svg> ... </svg>
	</button>
```

### ======================== ###
###### ===--- role ---=== ######
### ======================== ###

Darle signidicado a las etiquetas por medio de [](role), informacion para los lectores de pantalla.

# Roles de Estructura y Navegación:

- [](banner): <header>
- [](navigation): <nav>
- [](main): <main>
- [](complementary): <aside>
- [](contentinfo): <footer>
- [](region): <section>, <div>

# Roles de Interacción y Componentes de UI:

- [](button): <button>, <div>, <a>
- [](link): <a>, <area>
- [](checkbox): <input type="checkbox">, <div>
- [](radio): <input type="radio">, <div>
- [](textbox): <input type="text">, <textarea>
- [](combobox): <select>, <input type="text">, <div>
- [](listbox): <select>, <ul>
- [](menu): <ul>, <nav>
- [](menuitem): <li>, <button>
- [](slider): <input type="range">, <div>

# Roles de Información y Estado:

- [](alert): <div>
- [](tooltip): <div>
- [](status): <div>
- [](progressbar): <progress>, <div>

# Roles de Estructuración y Organización:

- [](grid): <table>, <div>
- [](row): <tr>, <div>
- [](gridcell): <td>, <div>
- [](tablist): <div>, <ul>
- [](tab): <button>, <div>
- [](tabpanel): <div>

### ======================= ###
###### ===--- rel ---=== ######
### ======================= ###

Se utiliza para especificar la relación entre el documento actual y el recurso vinculado.

# Etiquetas que lo soportan.

<a>, <link>, <area>

# Etiqueta <a>

- [](nofollow): Evita que los motores de búsqueda sigan el enlace y transfieran valor SEO al sitio vinculado.
- [](noopener): Mejora la seguridad al evitar que la página vinculada tenga acceso al objeto window del documento original.
- [](noreferrer): Impide que se envíe la información de referencia al sitio vinculado.
- [](external): Se usa para marcar enlaces a recursos externos.
- [](alternate): Se usa para enlaces alternativos a versiones diferentes del contenido, como versiones en otros idiomas.

# Etiqueta <link>

- [](stylesheet"): Indica que el recurso vinculado es una hoja de estilos CSS.
- [](icon"): Especifica un ícono que se mostrará en la pestaña del navegador.
- [](canonical"): Indica la URL canónica de la página actual, ayudando a evitar problemas de contenido duplicado.
- [](preload"): Permite cargar recursos de manera anticipada para mejorar el rendimiento.
- [](preconnect"): Establece conexiones anticipadas a un origen para reducir el tiempo de carga.
- [](dns-prefetch"): Resuelve el nombre de dominio de un recurso anticipadamente para mejorar el tiempo de carga.

# Etiqueta <area>

- [](nofollow): Se usa para enlaces en mapas de imagen para indicar a los motores de búsqueda que no sigan el enlace.

### ============================= ###
###### ===--- Atributos ---=== ######
### ============================= ###

# El atributo TITLE.

[](Title) es un atributo global, se utiliza para dar informacion cuando el usuario 
coloca el cursor encima.

```html
	<a href="https://www.example.com" title="Ir a la página de inicio">Inicio</a>
```

# El atributo TABINDEX.

Controla el orden de tabulación de los elementos, permitiendo que los usuarios 
naveguen a través del teclado.

```html
	<button tabindex="1">Primero</button>
	<button tabindex="2">Segundo</button>
	<button tabindex="3">Tercero</button>
```

# El atributo LANG.

Define el lenguaje de un elemento.

```html
	<p lang="es">Este texto está en español.</p>
	<p lang="en">This text is in English.</p>
```

# El atributo ALT.

Describe el contenido de la imagen para usuarios que no pueden verla.

<img src="logo.png" alt="Logotipo de la empresa">