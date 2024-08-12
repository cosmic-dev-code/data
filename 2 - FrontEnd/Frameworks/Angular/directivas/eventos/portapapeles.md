
```html
	<section>
		<!-- Se ejecuta cuando copiamos algo del elemento. -->
		<input type="text" value="Copiar" (copy)="metodo()">
		<!-- Se ejecuta cuando pegamos algo dentro elemento. -->
		<input type="text" value="Pegar" (paste)="metodo()">
		<!-- Se ejecuta cuando cortamos algo del elemento. -->
		<input type="text" value="Cortar" (cut)="metodo()">
	</section>
```