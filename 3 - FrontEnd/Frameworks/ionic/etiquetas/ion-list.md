### ========================== ###
###### ===--- Listas ---=== ######
### ========================== ###

<!-- La etiqueta (ion-list) organiza todo el contenido en una lista. -->

<!-- Coloca en los (ion-item) una linea horizontal subrayando el contenido. -->

```html
	<!-- Contenedor. -->
	<ion-list>
		<!-- Elemento. -->
		<ion-item>
			<ion-label>Pokémon Yellow</ion-label>
		</ion-item>
		<ion-item>
			<ion-label>Mega Man X</ion-label>
		</ion-item>
		<ion-item>
			<ion-label>The Legend of Zelda</ion-label>
		</ion-item>
	</ion-list>
```

<!-- La lista recibe el atributo (inset) el cual carga un margen a la lista. -->

```html
	<ion-list [inset]="true">
		<!-- ... -->
	</ion-list>
```

<!-- Como lo habiamos dicho, los (ion-item) colocan una linea en el elemento subrayandolo. -->

```html
	<!-- La propiedad (lines) recibe los siguientes valores: 
		--- (full): Todo el elemento subrayado sin margenes.
		--- (inset): Un margen izquierdo al principio de la linea.
		--- (none): Sin subrayado. -->
	<ion-list lines="inset"></ion-list>
```