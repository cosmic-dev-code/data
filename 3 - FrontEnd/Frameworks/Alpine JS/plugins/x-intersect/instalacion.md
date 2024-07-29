### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###


```html
	<!-- Debemos colocar primero el CND del (plugin). -->
	<script defer src="https://unpkg.com/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>
	 
	<!-- Luego colocamos el CDN de (Alphine). -->
	<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

```bat
	: Instalamos via (npm).
	npm install @alpinejs/intersect
```

```javascript
	import Alpine from 'alpinejs';

	// Importamos el plugin.
	import intersect from '@alpinejs/intersect';
	 
	// Agregamos el plugin a (Alphine).
	Alpine.plugin(intersect);
```