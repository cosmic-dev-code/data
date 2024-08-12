<!-- En HTML -->

```html
	<!-- Los eventos normalmente se manejan con on{evento}. -->

	<script type="text/javascript">
		function handle(){
			// No recibe evento.
		}

		function handleEvent(event){
			// Recibe evento.
		}
	</script>

	<!-- Ejecuta la funcion. -->
	<input type="text" oninput="handle()">

	<!-- Recibe solo la referencia y lo ejecuta. -->
	<input type="button" value="Haz click" onclick="handleEvent">
```

<!-- En JSX -->

```jsx
	// Los eventos se manejan de la misma manera, pero la sintaxis cambia un poco.
	// NOTA: Se omiten cosas como "las comillas" y las propiedades de evento reciben camilcase, (onEvento). y 

	function handle(){
		// No recibe evento.
	}

	function handleEvent(event){
		// Recibe evento.
	}

	const html = (
		<div>
			{/* Ejecuta la funcion por medio de otra anonima. */}
			<input type="text" onInput={() => {
				handle();
			}}>

			{/* Recibe solo la referencia y lo ejecuta. */}
			<input type="button" value="Haz click" onClick={handleClick}>
		</div>
	);
```