### ================================== ###
###### ===--- Mas de una App ---=== ######
### ================================== ###

<!-- Ahora suponiendo que tenemos dos (APPs). -->

```bat
	: Se encuntran en la misma red, (mired).
	docker create --network mired --name mi-app -p3001:3000 node
	docker create --network mired --name mi-app-1 -p3002:3000 node
```

###### --- --- --- --- --- --- {contenedor} mi-app --- --- --- --- --- --- ######

```js
	/* En la zona del (host) donde normalmente va (localhost).
		--- (mi-app): Nombre del contenedor.
		--- (3000): Su puerto interno. */
	fetch('http://mi-app:3000/api/endpoint')
		.then(response => {
			if (!response.ok) {
				// Error en la red de docker.
			}
			return response.json();
		})
		.then(data => {
			// ...
		})
		.catch(error => {
			// ...
		});
```

###### --- --- --- --- --- --- {ordenador} --- --- --- --- --- --- ######

```js
	/* Aqui si nos comunicamos a los puertos expuestos.
			--- (localhost:3001) === (mi-app)
			--- (localhost:3002) === (mi-app-1) */

	// Contenedor (mi-app).
	fetch('http://localhost:3001/api/endpoint')
		.then(response => {
			if (!response.ok) {
				// Error en la red de docker.
			}
			return response.json();
		});

	// Contenedor (mi-app-1).
	fetch('http://localhost:3002/api/endpoint')
		.then(response => {
			if (!response.ok) {
				// Error en la red de docker.
			}
			return response.json();
		});
```