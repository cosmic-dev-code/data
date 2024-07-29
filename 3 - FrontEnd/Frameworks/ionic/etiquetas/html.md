### ===================================== ###
###### ===--- Etiquetas nativas ---=== ######
### ===================================== ###

<!-- Ionic permite utilizar etiquetas nativas del navegador y combinarlas con las etiquetas de Ionic. -->

```html
	<ion-header>
		<ion-toolbar>
			<ion-title>Bienvenido</ion-title>
		</ion-toolbar>
	</ion-header>

	<ion-content [padding]="true">
		<!-- No hay limite, todas las etiquetas nativas funcionan perfectamente. -->

		<h1>Ingrese sus datos</h1>

		<form action="#">
			<div>
				<!-- ... -->
			</div>
			<div>
				<button type="submit">Enviar</button>
			</div>
		</form>
	</ion-content>
```