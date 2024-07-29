
<!-- La forma de impresion en HTML y React no son muy diferentes, por ejemplo. -->

<!-- En HTML. -->

```html
	<input type="button" value="Nombre">
```

<!-- En JSX. -->

```jsx
	// Valor a imprimir.
	let value = "Nombre";

	let input = (
		// Aqui se omiten las "comillas" y se imprime directamente el valor entre llaves..
		<input type="text" value={value}>
	);

```