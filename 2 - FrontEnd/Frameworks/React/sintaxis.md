### ==================================== ###
###### ===--- Codigo HTML y JS ---=== ######
### ==================================== ###

<!-- NOTA: En React, todas las etiquetas deben encontrarse dentro de una etiqueta padre. -->

```jsx
	const reactDOM = (
		<ul>
			<li>Uno</li>
			<li>Dos</li>
			<li>Tres</li>
		</ul>
	);
```

# --------------------------------------- #
# ------ Concatenar ambas sintaxis ------ #
# --------------------------------------- #

<!-- Podriamos concatenar codigo JS. -->

```jsx
	var numero = 50;

	// Concatenamos codigo JS en el HTML.
	const contenido = (
		<div>
			<h1>El numero es: { numero * 50 }</h1>
		</div>
	);
```

# ------------------------------- #
# ------ Mapeo de arreglos ------ #
# ------------------------------- #

<!-- Podemos concatenar codigo HTML en un mapeo de datos. -->

```jsx
	// Datos.
	const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

	// Las llaves no son necesarias.
	const listaTareas = tareas.map((tarea) => 
	    <li>{tarea}</li>
	);

	// Colocamos las etiquetas (li) en una etiqueta padre.
	const ulTag = (
	    <ul>
	        {listaTareas}
	    </ul>
	);
```

# ----------------------- #
# ------ Funciones ------ #
# ----------------------- #

<!-- Sabemos que las variables pueden almacenar codigo DOM, sin embargo, las funciones 
tambien pueden retornarlo. -->

```jsx
	function retornarDOM(content){
		// La funcion retorna un codigo DOM.
		return (
			<div>
				{/* Concatena el DOM recibido dentro del codigo DOM que retorna. */}
				{content}
				<div className="cuerpo">
					<p>Lorem ipsum dolor sit, amet consectetur.</p>
				</div>
			</div>
		);
	}

	// Implementar.

	let data = (
		<div>
			<h1>Hola mundo</h1>
			{/* Se puede mandar a llamar dentro del HTML. */}
			<retornarDOM/>
		</div>
	);

	const resultado = retornarDOM(data);
```