### ========================================= ###
###### ===--- Instalacion por (CDN) ---=== ######
### ========================================= ###


```html
	<!-- Debemos colocar primero el CND del (plugin). -->
	<script defer src="https://unpkg.com/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>
	 
	<!-- Luego colocamos el CDN de (Alphine). -->
	<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### ========================================= ###
###### ===--- Instalacion por (npm) ---=== ######
### ========================================= ###

```bat
	: Instalamos via (npm).
	npm install @alpinejs/mask
```

```javascript
	import Alpine from 'alpinejs';

	// Importamos el plugin.
	import mask from '@alpinejs/mask';
	 
	// Agregamos el plugin a (Alphine).
	Alpine.plugin(mask);
```